import React from 'react';
import './gallery.css';

const GalleryImg = (props) => {
    return (
        <>
            <figure>
                <img src={props.imgSrc}
                    alt="img" />
                <figcaption class="header__caption" role="presentation">
                    <h1 class="title title--primary">{props.headingSrc}</h1>
                    <h2 class="title title--secondary">{props.subheadingSrc}</h2>
                </figcaption>
            </figure>
        </>
    )
}

export default GalleryImg