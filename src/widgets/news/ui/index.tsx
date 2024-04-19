import { NewsCard } from "entities/news";
import { newsStore } from "entities/news/model";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";

export const News = observer(() => {
  const [showNews, setShowNews] = useState(false);

  return (
    <div className="lg:w-[43svw]">
      <div className="max-md:hidden">
        <p className="text-[40px] italic font-light">Новости</p>
        <div className="h-4" />
      </div>
      <button
        className="md:hidden"
        onClick={() => {
          setShowNews(!showNews);
        }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[40px] italic font-light text-left">Новости</p>
          <img
            className={`${
              showNews ? "rotate-180" : ""
            } translate-y-2 transition-all duration-500`}
            src={arrow}
          />
        </div>
        <div className="h-4" />
        <div className="h-[1px] w-[100svw] -mx-[6svw] bg-[#F5F5F5]" />
      </button>
      <div
        className={`${
          showNews ? "h-[70svh]" : "h-0"
        } transition-all duration-500 flex flex-col gap-6 md:h-[70svh] overflow-y-scroll no-scrollbar`}
      >
        <div className="md:hidden h-4" />
        {newsStore.news.map((newsItem, index) => (
          <NewsCard
            key={index}
            title={newsItem.title}
            shortContent={newsItem.shortContent}
          />
        ))}
      </div>
    </div>
  );
});
