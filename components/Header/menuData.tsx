import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "ABOUT US",
    path: "#about",
    newTab: false,
  },
  {
    id: 3,
    title: "OUR TEAM",
    path: "#team",
    newTab: false,
  },
  {
    id: 4,
    title: "SERVICES",
    path: "#services",
    newTab: false,
  },
  {
    id: 5,
    title: "PROJECTS",
    path: "#projects",
    newTab: true,
  },
  {
    id: 6,
    title: "TESTIMONIALS",
    path: "#testimonials",
    newTab: false,
  },

];
export default menuData;
