import { IProject } from "../types/project";
export const PROJECT_LIST: IProject[] = [
  {
    id: 1,
    name: "VibeRight",
    summary:
      "A website that helps teenagers improve their eating habits through interactive features such as a virtual pet, smart grocery helper, nutrition calculator, and meal planner.",
    skills: ["React.js", "Node.js", "AWS", "Figma", "UI/UX Design", "Agile"],
    background: "/project/viberight/viberight.png",
    video:
      "https://viberight-demo.s3.ap-southeast-2.amazonaws.com/viberight.mp4",
    about:
      "A website that helps teenagers make informed dietary decisions with features like Tamagotchu, a gamified virtual pet that evolves through healthy meal photo uploads, a tailored Meal Planner, and a Smart Grocery Helper that evaluates the nutritional value of selected foods.",
    website: "http://vibe-right.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    id: 2,
    name: "Xkeleton",
    summary:
      "A X-ray imaging service enables patients to book appointments and provide feedback, while allowing practitioners to upload X-ray images, view patient information, and send diagnostic reports.",
    skills: ["C#", "ASP.NET MVC", "MS SQL", "Web Security", "API Integration"],
    background: "/project/xkeleton/xkeleton1.png",
    images: [
      "/project/xkeleton/xkeleton1.png",
      "/project/xkeleton/xkeleton2.png",
      "/project/xkeleton/xkeleton3.png",
      "/project/xkeleton/xkeleton4.png",
    ],
    about:
      "An X-ray imaging website utilizes role-based access control to ensure appropriate permissions for managing CRUD operations and features interactive tables for data manipulation and visualization. It includes direct and bulk email with attachments, as well as interactive maps provide navigation features. Robust security measures, such as sanitization with the Ganss.Xss library and ASP.NET MVC’s ValidateAntiForgeryToken attribute, protect against SQL injections, XSS, and CSRF attacks.",
    github: "https://github.com/shihyihuang/xkelentonXrayService",
  },
  {
    id: 3,
    name: "Geospatial Analysis",
    summary:
      "The report evaluates the distribution of bus stops near my home compared to the Monash bus loop, and validate the hypothesis that university-adjacent suburbs have a higher density of public transportation options.",
    skills: ["QGIS", "Docker", "SQL", "PostgreSQL"],
    background: "/project/geo-analysis/data1.png",
    images: [
      "/project/geo-analysis/data1.png",
      "/project/geo-analysis/data2.png",
      "/project/geo-analysis/data3.png",
      "/project/geo-analysis/data4.png",
      "/project/geo-analysis/data5.png",
    ],
    about:
      "The report analyzes PTV/GTFS and Australian Boundary datasets to explore whether closer bus stops exist, examine the accessibility of destinations via these routes, and validate the hypothesis that university-adjacent suburbs have greater public transport density.",
    github: "https://github.com/shihyihuang/MelbourneBusStops",
  },
  {
    id: 4,
    name: "CloudSnap",
    summary:
      "A serverless, cloud-based system that automatically detects and tags objects in uploaded images, enabling users to store while query images by these tags and receive matching image URLs.",
    skills: ["React.js", "AWS", "RESTful API", "HTML", "CSS"],
    background: "/project/cloudsnap/cloudsnap1.png",
    images: [
      "/project/cloudsnap/cloudsnap1.png",
      "/project/cloudsnap/cloudsnap2.png",
      "/project/cloudsnap/cloudsnap3.png",
      "/project/cloudsnap/cloudsnap4.png",
      "/project/cloudsnap/cloudsnap5.png",
      "/project/cloudsnap/cloudsnap6.png",
      "/project/cloudsnap/cloudsnap7.png",
      "/project/cloudsnap/cloudsnap8.png",
      "/project/cloudsnap/cloudsnap9.png",
    ],
    about:
      "As part of a four-person team, I designed and implemented the user interface, coordinated the integration of various API endpoints to ensure seamless communication between frontend and backend components deployed on AWS Lambda, and configured S3 for static website hosting while implementing CloudFront to optimize content delivery.",
    website:
      "https://drive.google.com/file/d/1SJ05TaU4G_ef6gbb2l80uOqvg8FEuST9/view?usp=sharing",
  },
  {
    id: 5,
    name: "PET Planning",
    summary:
      "An Android app that enables users to schedule pet events, share content on Facebook, and synchronize local user data, including pet profiles and event information.",
    skills: [
      "Java",
      "Android Studio",
      "Firebase",
      "Git",
      "Object-Oriented Programming(OOP)",
      "Single Responsibility Principle(SRP)",
    ],
    background: "/project/android-app/android.jpg",
    images: [
      "/project/android-app/android1.png",
      "/project/android-app/android2.png",
      "/project/android-app/android3.png",
      "/project/android-app/android4.png",
      "/project/android-app/android5.png",
      "/project/android-app/android6.png",
      "/project/android-app/android7.png",
      "/project/android-app/android8.png",
      "/project/android-app/android9.png",
      "/project/android-app/android10.png",
      "/project/android-app/android11.png",
    ],
    about:
      "As part of a four-person team, I implemented and coordinated key features including user registration using Firebase authentication, developed a schedule page with Room database to provide an overview of upcoming events, and implemented a navigation drawer accessible from the bottom menu.",
  },
  {
    id: 6,
    name: "Cloudiod",
    summary:
      "A Kubernetes-orchestrated, Docker-based web service for real-time object detection, built on a multi-threaded Flask REST API and evaluated under various request loads and pod configurations.",
    skills: ["Python", "Docker", "Kubernetes", "Oracle Cloud Infrastructure"],
    background: "/project/cloudiod/cloudiod1.png",
    images: [
      "/project/cloudiod/cloudiod1.png",
      "/project/cloudiod/cloudiod2.png",
      "/project/cloudiod/cloudiod3.png",
      "/project/cloudiod/cloudiod4.png",
      "/project/cloudiod/cloudiod5.png",
    ],
    about:
      "Ａ containerized web service that leverages YOLO and OpenCV to detect objects in user-uploaded images, hosted on Kubernetes for scalable deployment. Implemented as a multi-threaded Flask REST API, the system accepts base64-encoded images via HTTP POST, returning a list of recognized objects. Experimental results highlight the trade-offs between the number of threads and pods is important to maximize performance without overloading the system.",
    github: "https://github.com/shihyihuang/cloudiod",
  },
];
