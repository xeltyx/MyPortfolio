import profileAsset from "@/assets/eriko-profile.png";
import projBanking from "@/assets/project-banking.png";
import projFlutter from "@/assets/project-flutter.jpg";
import projPrototype from "@/assets/project-prototype.jpg";
import projectPosBrands from "@/assets/project-pos-brands.png";
import projectPosLogin from "@/assets/project-pos-login.png";
import projectEcommerceImage from "@/assets/project-ecommerce-screen.png";
import projectEnglishLearningImage from "@/assets/project-english-learning-screen.png";
import projectLoyaltyImage from "@/assets/project-loyalty-screen.png";
import projectMilimImage from "@/assets/project-milim-screen.png";
import projectPosImage from "@/assets/project-pos-screen.png";

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  image: string;
  github?: string;
  tags: string[];
  summary: string;
  points: string[];
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageDimensions: { width: number; height: number };
  screenshots?: ProjectScreenshot[];
  displayAspectRatio?: string;
  link?: string;
  linkLabel?: string;
  deploymentLink?: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const profileImage = profileAsset;

export const projects: Project[] = [
  {
    title: "Flutter Point Of Sale",
    category: "Mobile app",
    summary: "An Android point-of-sale app built with Flutter and REST API integration.",
    description:
      "Designed the UI/UX prototype in Figma and developed the Android point-of-sale app with Flutter, integrating REST APIs.",
    tags: ["Flutter", "Dart", "FIGMA"],
    image: projectPosImage,
    imageAlt: "BasicPOS application screen",
    imageDimensions: { width: 350, height: 652 },
    screenshots: [
      {
        src: projectPosImage,
        alt: "BasicPOS login screen",
        width: 350,
        height: 652,
      },
      {
        src: projectPosLogin,
        alt: "BasicPOS login screen on a mobile device",
        width: 305,
        height: 635,
      },
      {
        src: projectPosBrands,
        alt: "BasicPOS master brand list on a mobile device",
        width: 295,
        height: 647,
      },
    ],
    link: "https://www.figma.com/design/Yl8XTvvRbUlIBl7n866EES/Proyek_KP?node-id=265-21979&t=n1pFLE9bce2Vizun-1",
    linkLabel: "View prototype",
  },
  {
    title: "Flutter Loyalty App",
    category: "Mobile app",
    summary: "A Flutter loyalty app featuring barcode functionality.",
    description:
      "Developed a loyalty app with Flutter and implemented barcode functionality using a custom plugin.",
    tags: ["Flutter", "Dart"],
    image: projectLoyaltyImage,
    imageAlt: "Flutter loyalty application screen showing rewards and benefits",
    imageDimensions: { width: 350, height: 751 },
  },
  {
    title: "Milim Game Development",
    category: "Game development",
    summary: "A top-down survival horror game built with Unreal Engine 4.",
    description:
      "Developed a top-down survival horror game in Unreal Engine 4, with gameplay centered on evading enemies and staying hidden.",
    tags: ["Unreal Engine 4", "Blueprints"],
    image: projectMilimImage,
    imageAlt: "Gameplay screenshot from the Milim survival horror game",
    imageDimensions: { width: 640, height: 355 },
    link: "https://revloader.itch.io/milim",
    linkLabel: "Play project",
  },
  {
    title: "E-Commerce for Gaming Equipment",
    category: "Web application",
    summary: "An online gaming equipment store with integrated payment processing.",
    description:
      "Built a gaming equipment e-commerce website with C# and .NET, integrated the Doku payment gateway, and worked with MySQL and Oracle databases.",
    tags: ["C#", ".NET", "Doku API", "MySQL"],
    image: projectEcommerceImage,
    imageAlt: "Gaming equipment e-commerce website screen",
    imageDimensions: { width: 640, height: 355 },
    link: "https://github.com/xeltyx/ProyekSDP",
    linkLabel: "View on GitHub",
  },
  {
    title: "English Learning App",
    category: "Mobile app",
    summary: "An Android English-learning app with course content and a personal diary.",
    description:
      "Developed an Android English-learning app with course content, custom animation and voice-over plugins, and a personal diary feature.",
    tags: ["Flutter", "Dart", "Android"],
    image: projectEnglishLearningImage,
    imageAlt: "English learning application screen",
    imageDimensions: { width: 350, height: 620 },
  },
  {
    title: "Corporate Internet Banking (OCTO Biz)",
    category: "Corporate banking",
    summary: "A corporate internet banking platform for businesses.",
    description:
      "Contributed to the OCTO Biz corporate banking platform by building responsive interfaces with React and TypeScript and integrating REST APIs. Collaborated with design, backend, and QA teams to resolve issues and support a reliable user experience.",
    tags: ["React.js", "TypeScript", "REST API", "Yup", "React Hook"],
    image: projBanking,
    imageAlt: "OCTO Biz corporate banking sign-in page",
    imageDimensions: { width: 1552, height: 768 },
    displayAspectRatio: "16 / 9",
    deploymentLink: "https://www.octobiz.co.id/digital/web/gl/bfo/login",
  },
];

export const jobs: Job[] = [
  {
    role: "Front End Developer",
    company: "PT Bank CIMB Niaga Indonesia Tbk",
    location: "Jakarta, Tangerang Selatan",
    period: "Oct 2024 — Present",
    image: projBanking,
    tags: ["React.js", "TypeScript", "REST API", "Yup", "React Hook"],
    summary: "Corporate internet banking — New Generation Bizchannel (NGB) project team.",
    points: [
      "Partnered with external vendors to build and enhance the OCTO Biz website for corporate users using React, TypeScript, React Hooks, and Yup.",
      "Contributed to sprint planning, daily stand-ups, and retrospectives as part of a cross-functional team of 20+ members.",
      "Completed sprint backlog items with a 99% on-time rate while maintaining stable integrations with backend services and APIs.",
      "Resolved 30+ issues and additional requests identified during testing.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Freelance",
    location: "Sidoarjo",
    period: "Jun 2024 — Oct 2024",
    image: projFlutter,
    github: "https://github.com/erikoferdian/flutter-apps",
    tags: ["Flutter", "Dart", "REST API"],
    summary: "Cross-platform mobile applications developed for multiple clients.",
    points: [
      "Built cross-platform mobile applications for multiple clients using Flutter.",
      "Delivered projects on schedule, incorporated client feedback, and refined features to meet project requirements.",
      "Implemented user interfaces and developed responsive, high-performance mobile experiences.",
    ],
  },
  {
    role: "Internship — Software Developer",
    company: "CV. Mitra Andal Teknologi",
    location: "Surabaya",
    period: "Aug 2022 — Dec 2022",
    image: projPrototype,
    github: "https://github.com/erikoferdian/mitra-andal-app",
    tags: ["UI/UX", "Flutter", "Dart", "REST API"],
    summary: "Delivered a mobile app from UI/UX design through Flutter development.",
    points: [
      "Designed user interfaces and experiences based on client requirements.",
      "Created prototypes to define application flows.",
      "Developed the application in Flutter and Dart, integrating REST APIs.",
    ],
  },
];

export const skills = [
  "React.js",
  "TypeScript",
  "HTML / CSS",
  "Figma",
  "REST API",
  "SQL Database",
  "Flutter / Dart",
  "Laravel & PHP",
  "Node.js",
  "Git",
];
