import { VscGithubInverted } from "react-icons/vsc";
import { SiReplit } from "react-icons/si";
import { FaCodepen, FaLinkedin } from "react-icons/fa";
const Card = [
  {
    id: 1,
    name: "replit",
    text: "Code and build Apps",
    icon: <SiReplit size={35} />,
    link: "https://replit.com/@johnpersie",
  },
  {
    id: 2,
    name: "Github",
    text: "Code Repositories",
    icon: <VscGithubInverted size={35} />,
    link: "https://github.com/johnpersie",
  },
  {
    id: 3,
    name: "Codepen",
    icon: <FaCodepen size={35} />,
    text: "Reuse code snippets",
    link: "https://codepen.io/your-work",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin size={35} />,
    text: "Connect with Me",
    link: "https://www.linkedin.com/in/ahachi-john-870282116/",
  },
];
export default Card;
