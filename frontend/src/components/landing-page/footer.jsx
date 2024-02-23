import React from "react";

// Icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const icons = [
  { icon: FaFacebookF, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaInstagram, url: "#" },
];

const main = [
  { name: "About", url: "#" },
  { name: "Features", url: "#" },
  { name: "Works", url: "#" },
  { name: "Career", url: "#" },
];

const help = [
  { name: "Customer Support", url: "#" },
  { name: "Delivery Details", url: "#" },
  { name: "Terms & Conditions", url: "#" },
  { name: "Privacy Policy", url: "#" },
];

const resources = [
  { name: "Free eBooks", url: "#" },
  { name: "Development Tutorial", url: "#" },
  { name: "How to - Blog", url: "#" },
  { name: "Youtube Playlist", url: "#" },
];

export default function Footer() {
  return (
    <section className="flex flex-col justify-center items-center h-fit bg-no-repeat bg-cover w-screen bg-wavyPattern">
      <div className="w-full h-full flex max-xl:flex-col justify-center items-center gap-40 max-xl:gap-4 pt-44">
        <div className="flex flex-col gap-8">
          <h3 className="text-black max-xl:text-center text-3xl font-bold">CollaboraPro</h3>
          <ul>
            {main.map((item) => (
              <li className="flex flex-col pb-4" key={item.name}>
                <a href={item.url} className="text-black max-xl:text-center">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-black text-xl font-bold max-xl:text-center">Help</h3>
          <ul>
            {help.map((item) => (
              <li className="flex flex-col pb-4" key={item.name}>
                <a href={item.url} className="text-black max-xl:text-center">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 max-xl:hidden">
          <h3 className="text-black text-xl font-bold">Resources</h3>
          <ul>
            {resources.map((item) => (
              <li className="flex flex-col pb-4" key={item.name}>
                <a href={item.url} className="text-black">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex max-xl:flex-col justify-end items-center gap-64 max-xl:gap-4 p-4">
        <SocialIcons />
        <div>
          <p className="text-black text-center max-xl:text-xs">
            © 2021 CollaboraPro. 
                All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-4">
      {icons.map((item, index) => (
        <a href={item.url} key={index}>
          <item.icon className="text-black" />
        </a>
      ))}
    </div>
  );
}
