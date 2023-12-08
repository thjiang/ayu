// ImageModal.tsx
import React from "react";

interface ImageModalProps {
  imageUrl: string;
  exifInfo: string[];
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  exifInfo,
  onClose,
}) => {
  const handleOuterClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 如果点击的是外部的容器，则关闭弹窗
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80" onClick={handleOuterClick}>
      <div
        className="flex items-center justify-center max-w-screen-md mx-4 my-4 sm:mx-8 sm:my-8 md:mx-16 md:my-16 lg:mx-20 lg:my-20"
        onClick={handleOuterClick}
      >
        <div className="bg-white p-8 w-full h-full overflow-auto max-w-screen-md rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={imageUrl}
                alt="Selected"
              />
            </div>
            <div className="sticky top-4 self-start grid grid-cols-2 md:grid-cols-1 gap-x-0.5 sm:gap-x-1 gap-y-4 -translate-y-1 mb-4">
              <div className="flex gap-y-4 flex-col sm:flex-row md:flex-col [&amp;>*]:sm:flex-grow pr-2">
                <div>
                  <a className="font-bold uppercase" href="/p/4lSZW7um">
                    Coverage
                  </a>
                </div>
                <div className="space-y-0.5">
                  <span className="group">
                    <a
                      className="inline-flex items-center self-start uppercase hover:text-gray-900 dark:hover:text-gray-100"
                      href="/shot-on/fujifilm-x-t5"
                    >
                      FUJIFILM&nbsp;X-T5
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex gap-y-4 flex-col sm:flex-row md:flex-col [&amp;>*]:sm:flex-grow">
                <ul className="text-medium">
                  <li>
                    35mm
                    <span title="35mm equivalent" className="text-extra-dim">
                      53mm
                    </span>
                  </li>
                  {exifInfo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex gap-y-4 flex-col sm:flex-row md:flex-col">
                  <div className="grow uppercase text-medium">
                    26 Nov 2023 3:58PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
