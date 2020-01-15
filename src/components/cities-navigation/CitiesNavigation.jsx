import React, { useState } from 'react';
import './CitiesNavigation.scss';
import CurrentTime from '../current-time/CurrentTime';
import Slider from '../slider/Slider';
import Cities from '../cities/Cities';

function CitiesNavigation() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div>
      <Cities activeItem={activeItem} setActiveItem={setActiveItem} />
      <Slider activeItem={activeItem} />
      <CurrentTime activeItem={activeItem} />
    </div>
  );
}

export default CitiesNavigation;
