interface Props {
  title: string;
  shortContent: string;
}

export const NewsCard = ({ title, shortContent }: Props) => {
  return (
    <div className="flex flex-col border-2 border-white p-8">
      <p className="text-[60px] leading-[1.2]">{title}</p>
      <div className="h-4" />
      <p className="">{shortContent}</p>
      <div className="h-4" />
      <button className="bg-white min-h-[40px] min-w-[160px] self-end">
        Перейти
      </button>
    </div>
  );
};
