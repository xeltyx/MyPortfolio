import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eriko Ferdian — IT Programmer" },
      {
        name: "description",
        content:
          "Eriko Ferdian is a passionate programmer with 2+ years of web development experience and 6 months of UI/UX design and mobile development experience.",
      },
      { property: "og:title", content: "Eriko Ferdian — IT Programmer" },
      {
        property: "og:description",
        content:
          "Passionate programmer with 2+ years of experience in web development and 6 months of experience in UI/UX design and mobile development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
