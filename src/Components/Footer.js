import React from "react";
import {
  DiscordSVG,
  FacebookSVG,
  GithubSVG,
  TwitterSVG,
} from "../Constants/Svg";

const Footer = () => {
  return (
    <footer>
      <div className="w-full p-5 bg-violet-100/50 text-black dark:bg-black dark:text-white">
        <div className="flex justify-center gap-x-8">
          <GithubSVG />
          <FacebookSVG />
          <TwitterSVG />
          <DiscordSVG />
        </div>
        <p className="font-montserrat my-2 text-center text">
          Made with <span className="text-rose-600">❤</span> from Rushikesh Wani
        </p>
      </div>
    </footer>
  );
};

export default Footer;
