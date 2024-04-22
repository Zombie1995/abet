interface Props {
  title: string;
  shortContent: string;
  img?: string;
  date?: string;
}

export const NewsCard = ({
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
        <p className="text-[40px] leading-[1.2]">{title}</p>
        <div className="h-4" />
        <p className="">{shortContent}</p>
        <div className="h-4" />
        <div className="grow" />
        <div className="flex items-center">
          <p>{date}</p>
          <div className="grow" />
          <button className="bg-white min-h-[40px] min-w-[160px] self-end">
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};
