import { imageViewerStore } from "entities/image-viewer/model";
import React from "react";
import arrow from "shared/assets/icons/arrow.svg";

interface Props {
  className?: string;
  left?: boolean;
}

export const ChangeImageButton = React.memo(
  ({ className = "", left = false }: Props) => {
    return (
      <button
        className={`${className} flex items-center justify-center outline outline-2 outline-white rounded-full size-[48px] aspect-square`}
        onClick={() => {
          if (left) {
            imageViewerStore.decrementImageIndex();
          } else {
            imageViewerStore.incrementImageIndex();
          }
        }}
      >
        <img
          className={`${
            left
              ? "rotate-90 -translate-x-[1px]"
              : "-rotate-90 translate-x-[1px]"
          } `}
          src={arrow}
        />
      </button>
    );
  }
);
