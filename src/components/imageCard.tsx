// ImageCard.tsx
import React, { useState } from 'react';
import ImageModal from './imageModal';

interface ImageCardProps {
  imageUrl: string;
  exifInfo: string[];
  title: string;
  camera: string;
  film: string;
  time: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, exifInfo, title, camera, film, time }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-span-1 md:col-span-9">
      <a className="active:brightness-75" href="/p/4lSZW7um" onClick={openModal}>
        <img alt={title} decoding="async" data-nimg="1" className="w-full" style={{ color: 'transparent' }} src={imageUrl} />
      </a>
      {isModalOpen && (
        <ImageModal
          imageUrl={imageUrl}
          exifInfo={exifInfo}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageCard;
