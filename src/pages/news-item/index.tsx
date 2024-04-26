import { imageViewerStore } from "entities/image-viewer/model";
import { newsItemStore } from "entities/news/model";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toRussianDate } from "shared/model/convert-date";
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
          {newsItemStore.newsItem?.pictures.slice(0, 5).map((el, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "col-span-4 md:h-[60svh] h-[30svh]"
                  : "md:h-[15svh] h-[7.5svh]"
              } w-full`}
              onClick={() => {
                imageViewerStore.openCollection(
                  newsItemStore.newsItem!.pictures,
                  index
                );
              }}
            >
              <img
                className={`${
                  index === 0 ? "object-contain" : "object-cover"
                } h-full w-full`}
                src={el.url}
              />
            </button>
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
                {toRussianDate(
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
