interface Props {
  title: string;
  shortContent: string;
  img?: string;
}

export const NewsCard = ({ title, shortContent, img = "" }: Props) => {
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
      <div className="flex flex-col">
        <p className="text-[60px] leading-[1.2]">{title}</p>
        <div className="h-4" />
        <p className="">{shortContent}</p>
        <div className="h-4" />
        <button className="bg-white min-h-[40px] min-w-[160px] self-end">
          Перейти
        </button>
      </div>
    </div>
  );
};
