import React from "react";
import poster from "images/poster.png";
import { RiHeartAddLine } from "react-icons/ri";

const MovieSum = () => {
  return (
    <div>
      <section className="mt-2">
        <div className="pt-6 pb-6 bg-mGray rounded-3xl container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-40 md:w-1/3 w-30 mb-10 md:mb-0">
            <img src={poster} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex">
              <h1 className="title-font sm:text-4xl text-white text-3xl mb-4 font-medium">영화제목입니다</h1>
              <RiHeartAddLine className="flex ml-2 text-red-500" size={30} />
            </div>

            <p className="mb-8 text-white leading-relaxed">
              영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다
              영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다 영화 줄거리 입니다
            </p>

            <div className="flex lg:flex-row md:flex-col mt-16">
              <button className="bg-mWhite inline-flex py-2 px-3 rounded-full items-center hover:bg-gray-400 focus:outline-none">
                <span>드라마태그</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieSum;
