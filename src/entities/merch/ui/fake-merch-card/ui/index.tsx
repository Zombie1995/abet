interface Props {
  img: string;
  title: string;
  price: string;
  buttonName: string;
}

export const FakeMerchCard = ({ img, title, price, buttonName }: Props) => {
  return (
    <div className="min-h-[500px] h-[50svh] md:outline md:outline-2 md:outline-white max-md:border-2 max-md:border-white p-6 flex flex-col">
      <img className="h-[70%] w-full object-cover" src={img} />
      <div className="min-h-4" />
      <p>{title}</p>
      <div className="grow" />
      <div className="min-h-4" />
      <div className="flex items-center justify-between">
        <p>{price}</p>
        <button className="min-h-[30px] min-w-[100px] w-min bg-white">
          {buttonName}
        </button>
      </div>
    </div>
  );
};