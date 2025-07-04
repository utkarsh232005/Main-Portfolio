"use client";

import { DiDart, DiJavascript1, DiNodejs, DiPython, DiReact } from "react-icons/di";
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAndroid,
  SiApollographql,
  SiAzuredevops,
  SiCss3,
  SiDjango,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNginx,
  SiPm2,
  SiPostgresql,
  SiPython,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { CgCPlusPlus, CgDatabase } from "react-icons/cg";

export interface skillsInterface {
  category: string;
  skills: skillInterface[];
}
export interface skillInterface {
  name: string;
  icon: JSX.Element;
  key?: string;
}
export const skills: skillsInterface[] = [
  {
    category: "All",
    skills: [
      // Languages
      {
        name: "Javascript",
        icon: <DiJavascript1 />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      // Frontend
      {
        name: "ReactJs",
        icon: <DiReact />,
      },
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      {
        name: "Html",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      // Backend
      {
        name: "NodeJs",
        icon: <DiNodejs />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      // Database
      {
        name: "AWS/EC2",
        icon: <SiAmazonaws />,
      },
      {
        name: "Firestore",
        icon: <SiFirebase />,
      },
      // Other
      {
        name: "DSA",
        icon: <CgDatabase />,
      },
      {
        name: "Git/GitHub",
        icon: <SiGithub />,
      },
      {
        name: "Figma/Ui-Ux",
        icon: <SiFigma />,
      },
      {
        name: "AWS Cloud",
        icon: <SiAmazonaws />,
      },
      {
        name: "DevOps (CI/CD)",
        icon: <SiAzuredevops />,
      },
      {
        name: "Nginx",
        icon: <SiNginx />,
      },
      {
        name: "PM2",
        icon: <SiPm2 />,
      }
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "Javascript",
        icon: <DiJavascript1 />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      // {
      //   name: "C/C++",
      //   icon: <CgCPlusPlus />,
      // },
      // {
      //   name: "Dart",
      //   icon: <DiDart />,
      // },
      // {
      //   name: "Kotlin",
      //   icon: <SiKotlin />,
      // },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "ReactJs",
        icon: <DiReact />,
      },
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      // {
      //   name: "Flutter",
      //   icon: <SiFlutter />,
      // },
      {
        name: "Html",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      // {
      //   name: "Framer Motion",
      //   icon: <SiFramer />,
      // },
      // {
      //   name: "Apollo",
      //   icon: <SiApollographql />,
      // },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "NodeJs",
        icon: <DiNodejs />,
      },
      // {
      //   name: "Graphql",
      //   icon: <SiGraphql />,
      // },
      // {
      //   name: "ExpressJs",
      //   icon: <SiExpress />,
      // },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      // {
      //   name: "Django",
      //   icon: <SiDjango />,
      // },
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      // {
      //   name: "Spring Boot",
      //   icon: <SiSpringboot />,
      // },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "AWS/EC2",
        icon: <SiAmazonaws />,
      },
      {
        name: "Firestore",
        icon: <SiFirebase />,
      }
      // {
      //   name: "SQL",
      //   icon: <SiMysql />,
      // },
      // {
      //   name: "PostgresQL",
      //   icon: <SiPostgresql />,
      // },
      // {
      //   name: "MongoDB",
      //   icon: <SiMongodb />,
      // },
      // {
      //   name: "Neo4j",
      //   icon: <SiNeo4J />,
      // },
      // {
      //   name: "DynamoDB",
      //   icon: <SiAmazondynamodb />,
      // },
    ],
  },
  {
    category: "Other",
    skills: [
      {
        name: "DSA",
        icon: <CgDatabase />,
      },
      {
        name: "Git/GitHub",
        icon: <SiGithub />,
      },
      {
        name: "Figma/Ui-Ux",
        icon: <SiFigma />,
      },
      {
        name: "AWS Cloud",
        icon: <SiAmazonaws />,
      },
      {
        name: "DevOps (CI/CD)",
        icon: <SiAzuredevops />,
      },
      {
        name: "Nginx",
        icon: <SiNginx />,
      },
      {
        name: "PM2",
        icon: <SiPm2 />,
      }
    ],
  },
];
