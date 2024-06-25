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
          <div className="p-2 rounded-full">
            <GithubSVG />
          </div>
          <div className="p-2 rounded-full">
            <FacebookSVG />
          </div>

          <div className="p-2 rounded-full">
            <TwitterSVG />
          </div>

          <div className="p-2 rounded-full">
            <DiscordSVG />
          </div>
        </div>
        <p className="font-montserrat my-2 text-center text font-medium">
          Made with <span className="text-rose-600">❤</span> from{" "}
          <span className="text-violet-800 font-semibold dark:text-violet-600">
            Rushikesh Wani
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
