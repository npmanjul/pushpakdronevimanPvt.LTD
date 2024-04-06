import React from 'react';
import './gallery.css';

const GalleryImg = (props) => {
    return (
        <>
            <figure>
                <img src={props.imgSrc}
                    alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                    title="Photo by Giacomo Lucarini for Unsplash" />
                <figcaption class="header__caption" role="presentation">
                    <h1 class="title title--primary">Heading</h1>
                    <h2 class="title title--secondary">Sub heading</h2>
                </figcaption>
            </figure>
        </>
    )
}

export default GalleryImg