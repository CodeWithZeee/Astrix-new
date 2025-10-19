"use client";

import { useEffect } from "react";

export default function Card({
  heading = "Card Heading",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
  imageUrl = "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
}) {
  return (
    <main className=" bg-[#0a0a0a] flex flex-col justify-center items-center  font-sans">
      <div className="group relative w-60 h-[28rem] rounded-4xl overflow-hidden cursor-pointer text-gray-100 shadow-2xl">
        {/* Image */}
        <img
          src={imageUrl}
          alt="Card background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 transition-opacity duration-300 ease-in group-hover:opacity-80"
        />

        {/* Content */}
        <div className="relative w-full h-full">
          {/* Heading */}
          <h2 className="absolute left-8 bottom-8 m-0 font-extrabold uppercase tracking-wide text-2xl transition-all duration-300 ease-out delay-300 group-hover:bottom-56 group-hover:delay-0">
            {heading}
          </h2>

          {/* Paragraph */}
          <p className="absolute font-extrabold text-white left-8 bottom-20 max-w-[80%] opacity-0 text-sm leading-relaxed transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-100 group-hover:duration-500 group-hover:ease-in">
            {description}
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap");

        main {
          font-family: "Roboto", sans-serif;
        }

        h2 {
          font-family: "Roboto Condensed", sans-serif;
        }
      `}</style>
    </main>
  );
}
