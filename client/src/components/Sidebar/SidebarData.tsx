import React from "react";
import { FaGripfire } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

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
    path: "/subs",
    icon: <FaRegThumbsUp />,
  },
  {
    title: "Subscription",
    path: "/subs",
    icon: <FiYoutube />,
  },
];
