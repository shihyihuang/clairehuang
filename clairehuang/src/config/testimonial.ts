import { ITestimonial } from "../types/testimonial";
const thomasContent = [
  "Claire has been an incredibly helpful and dedicated classmate from Taiwan. She is a positive and hardworking individual who always tries her best.",
  "Her eagerness to learn and her supportive nature have made a significant impact on our class. I am confident she will be a valuable asset to any organization.",
];
const mingzeContent = [
  "Claire is an easy-going, hardworking, and enthusiastic student who consistently does her best in her studies and she is also a fantastic team player. She is always willing to help her teammates grow and achieve their best potential. It's been an honour to have worked with Claire on some projects.",
  "We have collaborated on Android apps and website development where she has demonstrated her excellent understanding and mature skills in front-end development and mobile apps. Her knowledge about cloud services such as AWS and SQL have helped us to overcome many challenges, and her strong Python skills contributed significantly to our cloud development projects.",
  "Her easygoing nature, good sense of humor, and her ability to see the bright side of things, make her a perfect teammate to work with. Meanwhile, she is an excellent communicator who knows how to cooperate with others and always able to find the most appropriate way to deal with any potential conflicts during the project.",
  "I strongly recommend Claire for any job or position which requires a trustworthy, responsible, and passionate individual. She will be an asset wherever she goes and any employer would benefit greatly from securing her services.",
];
const irisContent = [
  "Claire is an exceptionally organised, motivated, and detail-oriented team player. Collaborating with her on various projects has always been a seamless experience, thanks to her unwavering determination and clear communication. She readily adapts to different situations and consistently delivers outstanding results. Claire’s willingness to embrace challenges and her openness to feedback have shaped her into a versatile professional, capable of thriving in complex projects. Her ability to collaborate effectively, share knowledge, and cultivate a positive work environment makes her an invaluable asset to any organisation.",
];
const danielContent = [
  "I had the chance to work with Claire in an image-to-image search project. In the project, she demonstrated how innovative she is, and impressed us by always being able to put her ideas into action and implementation.",
  "Claire’s skills in running frontend projects is undoubtedly great. Being the only frontend developer in the team, she managed to bring us an amazing, user-friendly, yet stable frontend platform for our image search backend to integrate with.",
  "If you’re looking for a trustworthy frontend engineer, she’s definitely on the top of my recommendation list!",
];
const nikitaContent = [
  "I had the privilege of working with Claire on our master’s project, where she took the lead in developing VibeRight, a web application addressing body image concerns among teenagers. Claire’s leadership and technical skills were crucial to the project’s success. She expertly developed a React-based application and a robust serverless backend using Node.js on AWS Lambda, achieving an impressive 99.9% uptime. Her integration of DynamoDB and CloudFront ensured the system’s reliability and performance.",
  "What sets Claire apart is her proactive approach to feedback and continuous improvement. She actively sought and incorporated mentor feedback, significantly enhancing the final product. Her rapid adaptation to new technologies and best practices was evident as she refined and optimized our work.",
  "Claire also excelled as a mentor, sharing her expertise and guiding our team effectively. Her clear communication of complex concepts was invaluable to our success. Claire’s passion for using technology to solve real-world problems, combined with her proficiency in React.js, AWS, Java, SQL, and JavaScript, makes her a standout asset to any team. I highly recommend Claire for any role requiring technical excellence, leadership, and a commitment to ongoing learning.",
];
const wellsContent = [
  "I had the pleasure of working with Claire on our project, and she consistently impressed me with her responsibility and commitment to high-quality results. Her critical thinking skills enable her to identify root causes and find innovative solutions. Claire excels in planning and organization, ensuring our project stays on track. Additionally, her strong coding skills and dedication to self-learning allow her to adapt quickly and contribute effectively. Overall, Claire is a talented and valuable team member who I highly recommend for any future endeavors.",
];

export const TESTIMONOAL_LIST: ITestimonial[] = [
  {
    name: "Thomas Ng",
    avatar: "./testimonial/thomas.jpeg",
    position: "Full Stack Developer | Web3 Developer",
    score: 5,
    content: thomasContent,
    linkedinUrl: "https://www.linkedin.com/in/thomas-ng-ka-ho/",
  },
  {
    name: "Iris Hsu",
    avatar: "./testimonial/iris.jpeg",
    position: "Business System Analyst | IT Project Management | UXUI Designer",
    score: 5,
    content: irisContent,
    linkedinUrl: "https://www.linkedin.com/in/iris-h-510812203/",
  },
  {
    name: "Nikita Beniwal",
    avatar: "./testimonial/nikita.jpeg",
    position: "Data Analyst",
    score: 5,
    content: nikitaContent,
    linkedinUrl: "https://www.linkedin.com/in/nikita-beniwal/",
  },
  {
    name: "Mingze Li",
    avatar: "./testimonial/mingze.jpeg",
    position: "Software Engineer",
    score: 5,
    content: mingzeContent,
    linkedinUrl: "https://www.linkedin.com/in/mingze-li-aa590a161/",
  },
  {
    name: "Wells Yu",
    avatar: "./testimonial/wells.jpeg",
    position: "Software Engineer",
    score: 5,
    content: wellsContent,
    linkedinUrl: "https://www.linkedin.com/in/wells-yu/",
  },
  {
    name: "Daniel Hu",
    avatar: "./testimonial/daniel.jpeg",
    position: "Software Engineer",
    score: 5,
    content: danielContent,
    linkedinUrl: "https://www.linkedin.com/in/iamdanielhu/",
  },
];
