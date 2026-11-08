import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eriko Ferdian" },
      {
        name: "description",
        content:
          "Eriko Ferdian is a front-end and mobile developer with 2 years of professional web development experience, UI/UX design experience, and hands-on Flutter app development.",
      },
      { property: "og:title", content: "Eriko Ferdian" },
      {
        property: "og:description",
        content:
          "Front-end and mobile developer with 2 years of professional web development experience, UI/UX design experience, and hands-on Flutter app development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
