interface Props {
  name: string;
  content: string;
  image: string;
}

export const StarCard = ({ name, content, image }: Props) => {
  return (
    <div className="flex p-8 w-[43svw] justify-between">
      <div>
        <p className="text-[60px] leading-[1.2]">{name}</p>
        <div className="h-2" />
        <p>{content}</p>
      </div>
      <img className="w-[20svw] object-contain -translate-y-4" src={image} />
    </div>
  );
};
