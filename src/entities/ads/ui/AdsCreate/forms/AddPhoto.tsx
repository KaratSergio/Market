import { FC, useRef, useState } from 'react';
import { Button } from '@shared/index';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { MdDeleteForever } from "react-icons/md";

const MAX_IMAGES = 7;

export const AddPhoto: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));


  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        let imageIndex = 0;

        for (let i = 0; i < updatedImages.length && imageIndex < newImages.length; i++) {
          if (!updatedImages[i]) {
            updatedImages[i] = newImages[imageIndex];
            imageIndex++;
          }
        }
        return updatedImages;
      });
    }
  };

  const handleRemovePhoto = (index: number) => {
    setImages((prevImages) => {
      const filteredImages = prevImages.filter((src, i) => i !== index && src !== null);
      const filledArray = [...filteredImages];
      while (filledArray.length < MAX_IMAGES) {
        filledArray.push(null);
      }
      return filledArray;
    });
  };

  return (
    <div className="rounded-[16px] bg-neutral-100 p-6 pr-[112] pl-22">
      <h3 className="mb-2 text-[36px] font-medium">Photo</h3>
      <p className="mb-10 text-[16px] font-medium text-gray-400">
        The first photo will be on the cover of the ad. Drag to change the order of the photos.
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-8">
        <Button
          type="button"
          variant="secondary"
          className="bg-inh h-58 w-60 rounded-[16px] border-0 text-[24px] font-medium text-black hover:text-gray-400"
          onClick={handleAddPhotoClick}
        >
          +Add photo
        </Button>
        <input type="file" accept="image/*" multiple ref={fileInputRef} className="hidden" onChange={handleFileChange}
/>

        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex h-58 w-60 items-center justify-center overflow-hidden rounded-[16px] border border-gray-400 bg-gray-400"
          >
            {src ? (
              <>
              <img src={src} alt={`Uploaded ${index + 1}`} className="h-full w-full object-contain" />
              <button
                  className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-1 hover:bg-gray-900"
                  onClick={() => handleRemovePhoto(index)}
                >
                  <MdDeleteForever className="h-6 w-6" />
                </button>
              </>
            ) : (
              <MdOutlinePhotoCamera className="h-10 w-[45px] text-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
