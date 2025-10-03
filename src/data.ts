import { type CardInterfaceData } from "./components/Card";
import { type ContactPairInterface } from "./components/ContactPair";

import { RiWindow2Fill, RiNodeTree } from "react-icons/ri";
import { GoTerminal } from "react-icons/go";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaRegKeyboard, FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaChartGantt } from "react-icons/fa6";

export const name = "Ayaan Khan"
export const description = "I am a 3rd year CSE student dedicated to performance-driven development, from optimizing code to designing lightweight tools for Linux."

export const projects: CardInterfaceData[] = [
  {
    title: "Haka",
    description: 'Lightweight Global Event Listener',
    children: [
      "Keyboard event tener for ux which integrates seamlessly with systemd as a daemon",
      "Provides a simple API to add custom event handlers to trigger scripts, automate workflows, etc. with just 6 es of code!",
      "Configurable via a config file"
    ],
    icon: FaRegKeyboard,
    gitLink: 'https://github.com/def3r/haka/',
    srcCode: ["C", "libevdev", "POSIX"],
  },
  {
    title: "dlsh",
    description: 'Linux Shell from Scratch',
    children: [
      "Modern shell built entirely from scratch with zero external dependencies",
      "Includes a custom line editor that manages the terminal in raw mode",
      "Memory efficient and fast autocomplete suggestions using trie and heap"
    ],
    icon: GoTerminal,
    gitLink: 'https://github.com/def3r/dlsh/',
    srcCode: ["Go"],
  },
  {
    title: "Parse.md",
    description: 'Markdown parser library for C++',
    children: [
      "Tiny (<1K lines) stack-based markdown parser library for C++",
      "Produces a traversable AST for easy rendering",
      "Renderer-agnostic, plug-in HTML, ANSI or custom output",
    ],
    icon: RiNodeTree,
    gitLink: 'https://github.com/def3r/Parse.md/',
    srcCode: ["Cpp"],
  },
  {
    title: "CVInsight",
    description: 'AI Powered Resume-Filtering Web App',
    children: [
      "Built during the campus round of the ByteRunners Hackathon organized by IIT Delhi, 2025",
      "Led a team of 3 developers to implement it in just 36 hours",
      "Built and optimized FastAPI backend, real-time updates via Web sockets and caching TF-IDF vectors using Redis",
    ],
    icon: MdOutlineDocumentScanner,
    gitLink: 'https://github.com/orgs/Foxtrot-BHU/repositories',
    srcCode: ["FastAPI", "Redis", "React", "Jotai"],
  },
  {
    title: "SchedSim",
    description: 'Simulation of OS Scheduling Algorithms',
    children: [
      "Visualizes Gantt Chart using Raylib and calculates performance metrics",
      "Supports SJF, SRTF, RR and VRR algorithms",
      "Features vim-like navigation keybinds"
    ],
    icon: FaChartGantt,
    gitLink: 'https://github.com/def3r/schedsim/',
    srcCode: ["Cpp", "Raylib"],
  },
  {
    title: "Portfolio",
    description: 'this.protfolio',
    children: [
      "Minimal state management using Zustand",
      "Reusable components and responsive design"
    ],
    icon: RiWindow2Fill,
    gitLink: 'https://github.com/def3r/proportfolio/',
    srcCode: ["React", "TailwindCSS", "Zustand"],
  },
]

export const contactInfo: ContactPairInterface[] = [
  {
    href: "mailto:contact@def3r.in",
    icon: IoIosMail,
    text: "contact@def3r.in"
  },
  {
    href: "https://www.linkedin.com/in/ayaank9/",
    icon: FaLinkedin,
    text: "Ayaan Khan"
  },
  {
    href: "https://x.com/def3r_",
    icon: FaTwitter,
    text: "@def3r_"
  },
  {
    href: "https://discord.com/users/784839718801768468",
    icon: FaDiscord,
    text: "@plankconstant"
  },
  {
    href: "https://github.com/def3r",
    icon: FaGithub,
    text: "@def3r"
  },
  {
    href: "https://leetcode.com/u/def3r",
    icon: SiLeetcode,
    text: "@def3r"
  },
]
