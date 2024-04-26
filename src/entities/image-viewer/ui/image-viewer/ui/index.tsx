import { imageViewerStore } from "entities/image-viewer/model";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Portal from "shared/ui/portal/ui";
import { Cancel } from "./cancel";
import { ChangeImageButton } from "./change-image-button";

const ImageViewerObserver = observer(() => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        imageViewerStore.incrementImageIndex();
      } else if (event.key === "ArrowLeft") {
        imageViewerStore.decrementImageIndex();
      } else if (event.key === "Escape") {
        imageViewerStore.setSelectedImage(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`${imageViewerStore.selectedImage >= 0 ? "" : "hidden"}`}>
      <div
        className="z-[1000] fixed top-0 left-0 h-screen w-screen bg-black/60 backdrop-blur-sm"
        onClick={() => {
          imageViewerStore.setSelectedImage(-1);
        }}
      />
      <div className="z-[1000] flex justify-around max-sm:flex-col items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black outline outline-2 outline-white h-[80svh] lg:w-[50svw] md:w-[80svw] w-[95svw] py-10 px-4">
        <Cancel className="absolute top-0 left-0" />
        {imageViewerStore.images.length > 1 && (
          <ChangeImageButton className="max-sm:hidden" left />
        )}
        <img
          className="sm:h-full h-[calc(100%-80px)] sm:w-[calc(100%-128px)] w-full object-contain"
          src={imageViewerStore.getSelectedImage().url}
        />
        {imageViewerStore.images.length > 1 && (
          <ChangeImageButton className="max-sm:hidden" />
        )}
        <div className="sm:hidden flex">
          {imageViewerStore.images.length > 1 && <ChangeImageButton left />}
          <div className="w-10" />
          {imageViewerStore.images.length > 1 && <ChangeImageButton />}
        </div>
      </div>
    </div>
  );
});

export const ImageViewer = () => {
  return (
    <Portal>
      <ImageViewerObserver />
    </Portal>
  );
};
