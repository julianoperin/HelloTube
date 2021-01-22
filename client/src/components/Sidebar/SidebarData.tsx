import React from "react";
import { FaGripfire } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/ai";

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
    icon: <ImYoutube2 />,
  },
];
