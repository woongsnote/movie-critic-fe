import React from "react";
import BestReview from "./MainTabIn/BestReview";
import NewPosts from "./MainTabIn/NewPosts";
import { useState } from "react";

const MainTabList = () => {
  const activeLink = `font-bold bg-mGray text-mYellow px-5 py-2.5 rounded-t-lg cursor-pointer text-base`;
  const normalLink = `bg-gradient-to-b from-mGray to-Gray px-5 py-2.5 rounded-t-lg cursor-pointer text-base text-mCream`;

  const [index, setIndex] = useState(0);
  const MainListTabMenu = [
    {
      title: "베스트 한줄평",
      component: <BestReview />,
    },
    {
      title: "최신 게시글",
      component: <NewPosts />,
    },
  ];

  return (
    <div className="mt-20 pb-20">
      <div className="flex">
        {MainListTabMenu.map((item, idx) => {
          return (
            <div key={idx} className="flex w-fit mx-1">
              <div
                onClick={() => {
                  setIndex(idx);
                }}
                className={index === idx ? activeLink : normalLink}
              >
                <div>{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-mGray p-5 mb-10 rounded-lg">
        {MainListTabMenu[index].component}
      </div>
    </div>
  );
};

export default MainTabList;