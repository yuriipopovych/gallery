import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({pictures, openModal}) {
    return (
        <ul className="ImageGallery" onClick={openModal}>
            <ImageGalleryItem pictures={pictures}></ImageGalleryItem>
        </ul>

    )
}
