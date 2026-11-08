import { afterEach, describe, expect, it, vi } from "vitest";
import handler from "../../api/contact";

function createResponse() {
  const response = {
    statusCode: 0,
    headers: new Map<string, string>(),
    body: "",
    setHeader(name: string, value: string) {
      response.headers.set(name, value);
    },
    end(data?: string) {
      response.body = data ?? "";
    },
  };
  return response;
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("contact API", () => {
  it("validates the message before sending", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const response = createResponse();

    await handler({ method: "POST", body: { name: "", email: "invalid", message: "" } }, response);

    expect(response.statusCode).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends a validated message to the portfolio email", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-api-key");
    vi.stubEnv("CONTACT_FROM_EMAIL", "Portfolio <contact@example.com>");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
    const response = createResponse();

    await handler(
      {
        method: "POST",
        body: {
          name: "Alex",
          email: "alex@example.com",
          message: "I'd like to discuss a project.",
          website: "",
        },
      },
      response,
    );

    const [, options] = vi.mocked(fetch).mock.calls[0] ?? [];
    const email = JSON.parse(String(options?.body)) as {
      to: string[];
      reply_to: string;
      text: string;
    };
    expect(response.statusCode).toBe(200);
    expect(email).toMatchObject({
      to: ["eriko.ferdian15@gmail.com"],
      reply_to: "alex@example.com",
      text: expect.stringContaining("I'd like to discuss a project."),
    });
  });
});
