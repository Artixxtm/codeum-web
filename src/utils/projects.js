import { FaUnity, FaSteam } from "react-icons/fa6";

const projects = [
  {
    title: "Samurai's Odyssey",
    image: "/projects/samurais.jpg",
    description:
      "Japan, 17th century. A samurai is not merely a warrior; it is a path of blazing honor, duty, and death. You are a samurai who has faced all of this. Go forth to meet your destiny.",
    link: "https://store.steampowered.com/app/3624120/Samurais_Odyssey/",
    category: "Steam",
    categoryIcon: <FaSteam />,
    id: "1",
  },
  {
    title: "AdManager Pro",
    image: "/projects/ad-manager.jpg",
    description:
      "Transform your Unity project with seamless ad integration! This asset includes support for banner ads, interstitial ads, reward ads, and native ads.",
    category: "Unity Asset",
    categoryIcon: <FaUnity />,
    link: "https://assetstore.unity.com/packages/tools/integration/admanager-pro-easy-setup-292715",
    id: "2",
  },
];

export default projects;
