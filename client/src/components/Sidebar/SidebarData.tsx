import React from "react";
import { FaGripfire } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
// import { FiYoutube } from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Trending",
    path: "/trending",
    icon: <FaGripfire />,
  },
  {
    title: "Subscription",
    path: "/subscription",
    // icon: <FiYoutube />,
  },
  {
    title: "Premium",
    path: "/subscription",
    // icon: <FiYoutube />,
  },
  {
    title: "Favorites",
    path: "/subscription",
    // icon: <FiYoutube />,
  },
];
