import { FC, useRef, useState } from 'react'
import { Button } from '@shared/index'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'
import clsx from 'clsx'

const MAX_IMAGES = 7

export const AddPhoto: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [images, setImages] = useState<(string | null)[]>(
    Array(MAX_IMAGES).fill(null),
  )

  const handleFiles = (files: FileList) => {
    const newImages = Array.from(files)
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => URL.createObjectURL(file))

    setImages((prev) => {
      const updated = [...prev]
      let imageIndex = 0

      for (
        let i = 0;
        i < updated.length && imageIndex < newImages.length;
        i++
      ) {
        if (!updated[i]) {
          updated[i] = newImages[imageIndex++]
        }
      }
      return updated
    })
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      handleFiles(e.target.files)
    }
  }

  const handleRemovePhoto = (index: number) => {
    setImages((prevImages) => {
      const filteredImages = prevImages.filter(
        (img, i) => i !== index && img !== null,
      )
      const normalized = [...filteredImages]
      while (normalized.length < MAX_IMAGES) {
        normalized.push(null)
      }

      return normalized
    })
  }

  const handleAddPhotoClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className={clsx(
        'rounded-2xl border-0 border-dashed bg-neutral-100 w-[335px] md:w-[696px] md:p-[18px] xl:w-[1280px] xl:px-[88px] xl:py-[40px] p-6 transition-colors',
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300',
      )}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <h3 className="font-medium text-[24px] text-[color:var(--black)] md:text-[36px]">Photo</h3>
      <p className="mb-10 text-[16px] font-medium text-gray-400">
        The first photo will be on the cover of the ad. Drag to change the order
        of the photos.
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
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex h-58 w-60 items-center justify-center overflow-hidden rounded-[16px] border border-gray-400 bg-gray-400"
          >
            {src ? (
              <>
                <img
                  src={src}
                  alt={`Uploaded ${index + 1}`}
                  className="h-full w-full object-contain"
                />
                <button
                  className="absolute top-2 right-2 rounded-full bg-gray-700 p-1 text-white hover:bg-gray-900"
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
  )
}
