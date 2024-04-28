interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
}

export const MerchCard = ({
  img,
  title,
  price,
  description,
  onClick = () => {},
}: Props) => {
  return (
    <div className="min-h-[500px] h-[50svh] md:outline md:outline-2 md:outline-white sm:max-md:border-2 sm:max-md:border-white sm:p-6 flex flex-col max-sm:pt-6">
      <img className="h-[70%] w-full object-cover" src={img} />
      <div className="min-h-4" />
      <p>{title}</p>
      <div className="h-1" />
      <p className="font-light text-[14px]">{description}</p>
      <div className="grow" />
      <div className="min-h-4" />
      <div className="flex items-center justify-between">
        <p>{price} ₽</p>
        <button
          className="min-h-[40px] min-w-[120px] w-min bg-white"
          onClick={onClick}
        >
          Купить
        </button>
      </div>
    </div>
  );
};
