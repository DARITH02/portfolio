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
  SiVscodium,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

/*
 * All icon names verified against the installed react-icons package.
 * ✅ SiSharp      = C#
 * ✅ SiVscodium   = VS Code (closest available)
 * ✅ FaLaptopCode = Visual Studio (fallback)
 * ✅ FaDatabase   = SQL Server (fallback)
 */
const skills = [
  {
    category: "Backend",
    accent: "blue",
    items: [
      { name: "Node.js",             icon: FaNodeJs  },
      { name: "Express",             icon: SiExpress },
      { name: "C#",                  icon: SiSharp   },
      { name: ".NET 8 / ASP.NET",   icon: SiDotnet  },
      { name: "PHP",                 icon: FaPhp     },
      { name: "Laravel",             icon: FaLaravel },
    ],
  },
  {
    category: "Frontend",
    accent: "teal",
    items: [
      { name: "HTML",           icon: FaHtml5     },
      { name: "CSS",            icon: FaCss3Alt   },
      { name: "JavaScript",     icon: FaJs        },
      { name: "TypeScript",     icon: SiTypescript},
      { name: "React",          icon: FaReact     },
      { name: "Vue.js",         icon: FaVuejs     },
      { name: "Bootstrap",      icon: FaBootstrap },
      { name: "Tailwind CSS",   icon: SiTailwindcss },
    ],
  },
  {
    category: "Database",
    accent: "emerald",
    items: [
      { name: "MySQL",      icon: SiMysql    },
      { name: "SQL Server", icon: FaDatabase },
    ],
  },
  {
    category: "Tools",
    accent: "orange",
    items: [
      { name: "Docker",         icon: FaDocker      },
      { name: "Git",            icon: FaGitAlt      },
      { name: "Visual Studio",  icon: FaLaptopCode  },
      { name: "VS Code",        icon: SiVscodium    },
    ],
  },
];

export default skills;
