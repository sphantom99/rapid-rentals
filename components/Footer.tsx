import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <nav className="flex flex-wrap gap-20 p-8 md:justify-center">
      <div className="flex flex-col">
        <ul className="flex gap-2 flex-row items-center ">
          <li>
            <Image
              alt="image of logo"
              src="/car-logo.png"
              width={60}
              height={60}
            />
          </li>
          <li>
            <h1 className=" font-bold text-sm">CarShop</h1>
          </li>
        </ul>
        <ul className="flex flex-col">
          <span>CarShop2023</span>
          <span>All rights reserved &#169;</span>
        </ul>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="font-bold">About</li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            How it works
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Featured
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Partneship
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Business Relation
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-5">
        <li className="font-bold">Company</li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Events
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Blog
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Podcast
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer text-slate-400 hover:text-slate-700">
            Invite a friend
          </a>
        </li>
      </ul>
      <div className="flex flex-col"></div>
    </nav>
  );
}

export default Footer;
