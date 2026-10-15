import {
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaLaptopCode,
  FaNodeJs,
  FaVuejs,
} from "react-icons/fa";

import {
  SiDotnet,
  SiSharp,
  SiMysql,
  SiPostgresql,
  SiVscodium,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiAngular,
  SiRedis,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const skills = [
  {
    category: "Backend",
    accent: "blue",
    items: [
      { name: "C#", icon: SiSharp },
      { name: ".NET / ASP.NET Core", icon: SiDotnet },
      { name: "ASP.NET MVC", icon: SiDotnet },
      { name: "ABP Framework", icon: SiDotnet },
      { name: "Entity Framework / EF Core", icon: SiDotnet },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Frontend",
    accent: "teal",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Angular / AngularJS", icon: SiAngular },
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Database & Caching",
    accent: "emerald",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Server", icon: SiMicrosoftsqlserver },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Tools & Development",
    accent: "orange",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "Visual Studio", icon: FaLaptopCode },
      { name: "VS Code", icon: SiVscodium },
    ],
  },
];

export default skills;
