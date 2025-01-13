import telegram from "shared/assets/icons/telegram.svg";

export const Telegram = () => {
  return (
    <a href="https://t.me/abet_kvn">
      <button className="relative size-[64px] bg-white rounded-full">
        <span className="animate-ping absolute top-[12.5%] left-[12.5%] inline-flex h-[75%] w-[75%] rounded-full bg-white opacity-75" />
        <img
          className="absolute top-0 bg-white rounded-full size-[64px]"
          src={telegram}
        />
      </button>
    </a>
  );
};
