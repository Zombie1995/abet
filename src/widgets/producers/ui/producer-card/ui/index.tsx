interface Props {
  name: string;
  content: string;
  image: string;
}

export const ProducerCard = ({ name, content, image }: Props) => {
  return (
    <div className="flex p-8 lg:h-[40svh] lg:w-[43svw] justify-between max-md:flex-col-reverse items-center">
      <div>
        <p className="text-[60px] leading-[1.2]">{name}</p>
        <div className="h-2" />
        <p>{content}</p>
      </div>
      <img
        className="w-[20svw] max-md:w-[50svw] object-contain -translate-y-4"
        src={image}
      />
    </div>
  );
};
