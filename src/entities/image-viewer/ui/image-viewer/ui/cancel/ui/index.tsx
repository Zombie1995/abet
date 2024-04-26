import { imageViewerStore } from "entities/image-viewer/model";
import cancel from "shared/assets/icons/cancel.svg";

interface Props {
  className?: string;
}

export const Cancel = ({ className = "" }: Props) => {
  return (
    <button
      className={`${className} flex items-center justify-center size-[48px] aspect-square`}
      onClick={() => {
        imageViewerStore.setSelectedImage(-1);
      }}
    >
      <img src={cancel} />
    </button>
  );
};
