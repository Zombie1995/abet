import { newsItemStore } from "entities/news/model";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { utcToRussianDate } from "shared/model/convertDate";
import { Loading } from "shared/ui/loading";

const NewsItem = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    newsItemStore.getNewsItem(id!);
  }, [id]);

  return (
    <>
      <div className="h-10" />
      <div className="flex gap-[2svw] max-md:flex-col">
        <div className="grid grid-cols-4 gap-2 md:w-[43svw]">
          {newsItemStore.newsItem?.pictures.map((el, index) => (
            <img
              key={index}
              className={`${
                index === 0
                  ? "col-span-4 md:h-[60svh] h-[30svh] object-contain"
                  : "max-md:hidden h-[15svh] object-cover"
              } w-full`}
              src={el.url}
            />
          ))}
        </div>
        <div className="flex flex-col md:w-[43svw]">
          <div className="h-10" />
          {newsItemStore.loading ? (
            <Loading className="size-[70px] self-center" />
          ) : (
            <>
              <h2>{newsItemStore.newsItem?.title}</h2>
              <div className="h-2" />
              <p className="text-[20px] font-light">
                {newsItemStore.newsItem?.body}
              </p>
              <div className="h-4" />
              <p>
                {utcToRussianDate(
                  newsItemStore.newsItem ? newsItemStore.newsItem.date : ""
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
});

export default NewsItem;