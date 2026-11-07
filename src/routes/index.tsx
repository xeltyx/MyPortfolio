import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eriko Ferdian — IT Programmer" },
      {
        name: "description",
        content:
          "Eriko Ferdian is a passionate programmer and front-end developer who builds thoughtful web and mobile experiences with React, TypeScript, and Flutter.",
      },
      { property: "og:title", content: "Eriko Ferdian — IT Programmer" },
      {
        property: "og:description",
        content:
          "Passionate programmer creating thoughtful, responsive web and mobile experiences with React, TypeScript, and Flutter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
