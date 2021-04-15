import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const LazyLoadImgComponent = ({
                                  image,
                                  className,
                                  alt,
                                  height = null,
                                  src,
                                  width = null,
                                  style = null
                              }) => {
    console.log(image, alt, height, src, width, className)
    return <LazyLoadImage
        className={className}
        alt={alt}
        effect='opacity'
        height={'100%'}
        src={src}
        style={style}
        width={width}/>
}

export default LazyLoadImgComponent;
