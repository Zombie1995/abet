import { NewsCard } from "entities/news";
import { newsStore } from "entities/news/model";
import { observer } from "mobx-react-lite";

export const News = observer(() => {
  return (
    <div className="lg:w-[43svw]">
      <p className="text-[40px] italic font-light">Новости</p>
      <div className="h-4" />
      <div className="flex flex-col gap-6 h-[70svh] overflow-y-scroll no-scrollbar">
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
