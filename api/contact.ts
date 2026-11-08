type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => unknown;
  end: (data?: string) => unknown;
};

type ContactMessage = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const recipient = "eriko.ferdian15@gmail.com";
const maxMessageLength = 5000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sendJson(response: ContactResponse, status: number, body: Record<string, string>) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.end(JSON.stringify(body));
}

function parseContactMessage(value: unknown): ContactMessage | null {
  if (!isRecord(value)) return null;

  const { name, email, message, website } = value;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (website !== undefined && typeof website !== "string")
  ) {
    return null;
  }

  const contact = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    website: typeof website === "string" ? website.trim() : "",
  };
  if (
    contact.name.length === 0 ||
    contact.name.length > 100 ||
    contact.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) ||
    contact.message.length === 0 ||
    contact.message.length > maxMessageLength
  ) {
    return null;
  }

  return contact;
}

export default async function handler(request: ContactRequest, response: ContactResponse) {
  if (request.method !== "POST") {
    response.setHeader("allow", "POST");
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const contact = parseContactMessage(request.body);
  if (!contact) {
    sendJson(response, 400, { error: "Please check your name, email, and message." });
    return;
  }

  if (contact.website) {
    sendJson(response, 200, { message: "Message sent." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  const from = process.env["CONTACT_FROM_EMAIL"];
  if (!apiKey || !from) {
    console.error("Contact form requires RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    sendJson(response, 503, {
      error: "The contact form is not configured yet. Please email me directly.",
    });
    return;
  }

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: contact.email,
        subject: "New message from your portfolio",
        text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!result.ok) {
      console.error("Resend rejected a contact form message.", {
        status: result.status,
        response: await result.text(),
      });
      sendJson(response, 502, {
        error: "The message could not be sent right now. Please try again later.",
      });
      return;
    }

    sendJson(response, 200, { message: "Message sent." });
  } catch (error) {
    console.error("Could not send contact form message.", error);
    sendJson(response, 502, {
      error: "The message could not be sent right now. Please try again later.",
    });
  }
}
