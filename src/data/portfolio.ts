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
    summary: "An Android point-of-sale app built with Flutter.",
    description:
      "In this project, I designed the UI/UX prototype for an Android point-of-sale app, then built the app with Flutter and integrated it with REST APIs.",
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
    summary: "A Flutter loyalty app with barcode functionality.",
    description:
      "In this project, I created a loyalty-based mobile app with Flutter and added barcode functionality using a custom plugin.",
    tags: ["Flutter", "Dart"],
    image: projectLoyaltyImage,
    imageAlt: "Flutter loyalty application screen showing rewards and benefits",
    imageDimensions: { width: 350, height: 751 },
  },
  {
    title: "Milim Game Development",
    category: "Game development",
    summary: "A top-down survival horror game developed with Unreal Engine 4.",
    description:
      "In this project, I developed a top-down survival horror game in Unreal Engine 4, where players must run and hide from enemies.",
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
    summary: "An online store for gaming equipment.",
    description:
      "In this project, I built an e-commerce website for gaming equipment with C# and .NET, integrated the Doku payment gateway, and used MySQL and Oracle databases.",
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
    summary: "An Android English-learning app with courses and a personal diary.",
    description:
      "In this project, I created an Android English-learning course app with custom animation and voice-over plugins, as well as a personal diary feature.",
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
      "In this project, I contributed to the OCTO Biz platform by building responsive interfaces with React.js and TypeScript and integrating APIs in collaboration with design and backend teams. Additionally, I collaborated with the QA team to minimize bugs and ensure the application runs smoothly.",
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
    summary: "Corporate Internet Banking division — NGB (New Generation Bizchannel) project team.",
    points: [
      "Collaborated with external vendors to develop and enhance the OCTO Biz Website for corporate users using React.js, React Hook, Yup and TypeScript.",
      "Participated in daily Agile ceremonies (sprint planning, standups, retrospectives) within a cross-functional team of 20+ members.",
      "Completed backlog items every sprint with a 99% on-time rate, ensuring stable integration with backend services and APIs.",
      "Identified and resolved 30+ issues and additional requests during testing.",
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
    summary: "Cross-platform mobile apps for various clients.",
    points: [
      "Developed cross-platform mobile applications using Flutter for various clients.",
      "Delivered projects on time, handled revisions from client feedback and ensured satisfaction with the final product.",
      "Responsible for UI implementation and responsive, high-performance app experiences.",
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
    summary: "From UI/UX design to a working app.",
    points: [
      "Designed UI and UX based on client wishes.",
      "Created prototypes to map out the application flow.",
      "Built the application from the prototype using Dart, Flutter and REST API.",
    ],
  },
];

export const skills = [
  "React JS",
  "TypeScript",
  "HTML / CSS",
  "Figma",
  "REST API",
  "SQL",
  "Flutter / Dart",
  "Laravel & PHP",
  "Node.js",
  "Git",
];
