import React from 'react';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({pictures}) {
    return (
        <>
            {pictures.map(picture =>
                <li className="ImageGalleryItem" key={picture.id}>
                    <img src={picture.webformatURL} key={picture.id} name={ picture.id} alt={picture.largeImageURL} className="ImageGalleryItem-image" />
                </li>)}
        </>
    )
}
