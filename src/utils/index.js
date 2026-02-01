import { getYear } from "date-fns";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";

export const MENU_ITEMS = [
  { label: "Home", target: 0, delay: 100 },
  { label: "Projects", target: "#projects", delay: 200 },
  { label: "About", target: "#about", delay: 300 },
  { label: "Contact", target: "#contact", delay: 400 },
];

export const NAV_LINKS = [
  { label: "Home", target: 0 },
  { label: "Projects", target: "#projects" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

export const SOCIALS = [
  { href: "https://www.instagram.com/codeumgames/", Icon: AiFillInstagram },
  { href: "https://bsky.app/profile/codeumgames.bsky.social", Icon: FaBluesky },
  { href: "https://www.youtube.com/@CODEUM_GAMES", Icon: FaYoutube },
  { href: "https://x.com/CODEUMGAMES", Icon: FaXTwitter },
];

export const slideIn = (open) =>
  open ? "left-0 opacity-100" : "left-[-20px] opacity-0";

export const currentYear = getYear(new Date());
