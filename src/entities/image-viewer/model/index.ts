import { makeAutoObservable } from "mobx";
import { ImageType } from "shared/model/types";

class ImageViewerStore {
  images: Array<ImageType> = [];
  selectedImage: number = -1;

  constructor() {
    makeAutoObservable(this);
  }

  setImages = (images: Array<ImageType>) => {
    this.images = images;
  };

  setSelectedImage = (num: number) => {
    this.selectedImage = num;
  };

  getSelectedImage = (): ImageType => {
    return this.selectedImage >= 0 && this.selectedImage < this.images.length
      ? this.images[this.selectedImage]
      : { url: "" };
  };

  incrementImageIndex = () => {
    this.setSelectedImage(
      this.selectedImage === this.images.length - 1 ? 0 : this.selectedImage + 1
    );
  };

  decrementImageIndex = () => {
    this.setSelectedImage(
      this.selectedImage === 0 ? this.images.length - 1 : this.selectedImage - 1
    );
  };

  openCollection = (images: Array<ImageType>, selectedImage = -1) => {
    this.setImages(images);
    this.setSelectedImage(selectedImage);
  };
}

export const imageViewerStore = new ImageViewerStore();
