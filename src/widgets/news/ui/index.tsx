import { NewsCard } from "entities/news";
import { newsStore } from "entities/news/model";
import { observer } from "mobx-react-lite";
import { useCallback, useRef, useState } from "react";
import arrow from "shared/assets/icons/arrow.svg";
import { toRussianDate } from "shared/model/convert-date";
import { BottomButton } from "shared/ui/bottom-button";
import { Loading } from "shared/ui/loading";

export const News = observer(() => {
  const [showNews, setShowNews] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = useCallback(() => {
    const element = scrollRef.current;
    if (element) {
      const elementTop = element.parentElement!.getBoundingClientRect().top;
      const scrollTop = document.documentElement.scrollTop;
      const offset = 64;

      window.scrollTo({
        top: scrollTop + elementTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div className="md:hidden h-40" />
      <div className="relative lg:w-[43svw]">
        <BottomButton
          className="max-md:hidden absolute bottom-4 left-4"
          scrollRef={scrollRef}
        />
        <div className="max-md:hidden">
          <h1>Новости</h1>
          <div className="h-4" />
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setShowNews(!showNews);
            if (!showNews) {
              handleScrollToSection();
            }
          }}
        >
          <div className="flex items-center justify-between">
            <h1>Новости</h1>
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
          ref={scrollRef}
          className={`${
            showNews ? "h-[70svh]" : "h-0"
          } transition-all duration-500 flex flex-col gap-6 md:h-[70svh] overflow-y-scroll md:border-2 md:border-white max-sm:divide-y max-sm:divide-dashed sm:max-md:pt-6`}
        >
          {newsStore.loading ? (
            <Loading className="self-center size-[96px]" />
          ) : (
            newsStore.news.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                newsId={newsItem.id}
                title={newsItem.title}
                shortContent={newsItem.short_body}
                img={newsItem.title_picture}
                date={toRussianDate(newsItem.date)}
              />
            ))
          )}
          <button className="sm:bg-white min-h-[40px] h-[40px] w-full max-sm:text-white">
            Больше новостей
          </button>
        </div>
      </div>
    </>
  );
});
