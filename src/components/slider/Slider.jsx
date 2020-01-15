import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';

function Slider({ activeItem }) {
    const sliderLineEl = useRef(null);

    const resizeCallback = useCallback(() => {
        if (!activeItem) return;
        // adjust slider position on window resize
        const left = activeItem.target.getBoundingClientRect().left;
        sliderLineEl.current.style.left = `${left}px`;
    }, [activeItem]);

    useEffect(() => {
        window.addEventListener('resize', resizeCallback);
        return () => {
            window.removeEventListener('resize', resizeCallback);
        };
    }, [resizeCallback]);

    useEffect(() => {
    // Update slider line position on active city change
        if (activeItem && sliderLineEl.current) {
            const { width, left } = activeItem.target.getBoundingClientRect();
            sliderLineEl.current.style.width = `${width}px`;
            sliderLineEl.current.style.left = `${left}px`;
        }
    }, [activeItem, sliderLineEl]);

    return (<React.Fragment>
        <div className="slider-line-background"></div>
        <div className="slider-line" ref={sliderLineEl}></div>
    </React.Fragment>);
}

Slider.propTypes = {
    activeItem: PropTypes.object
};

export default Slider;
