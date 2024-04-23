interface Props {
  newsId: number;
  title: string;
  shortContent: string;
  img?: string;
  date?: string;
}

export const NewsCard = ({
  newsId,
  title,
  shortContent,
  img = "",
  date = "",
}: Props) => {
  return (
    <div className="sm:flex md:outline md:outline-2 md:outline-white max-md:border-2 max-md:border-white p-8">
      {img && (
        <>
          <img
            className="sm:h-full sm:w-[30%] h-72 w-full object-cover"
            src={img}
          />
          <div className="sm:min-w-6 max-sm:min-h-2" />
        </>
      )}
      <div className="flex flex-col w-full">
        <h2>{title}</h2>
        <div className="h-4" />
        <p className="">{shortContent}</p>
        <div className="h-4" />
        <div className="grow" />
        <div className="flex max-sm:flex-col-reverse items-center">
          <p>{date}</p>
          <div className="grow min-h-2" />
          <a className="max-sm:w-full" href={`/news/${newsId}`}>
            <button className="bg-white min-h-[40px] sm:min-w-[160px] max-sm:w-full">
              Перейти
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
