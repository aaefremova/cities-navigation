import React, { useState, useEffect } from 'react';
import './CurrentTime.scss';

function CurrentTime({ activeItem }) {
  const [currentItemTime, setCurrentItemTime] = useState('');

  useEffect(() => {
    if (activeItem) {
      setCurrentItemTime(new Date().toLocaleString('en-US', { timeZone: activeItem.timeZone }));
    }
  }, [activeItem]);

  return activeItem ?
    (<div className="time-container">
      Current time in {activeItem.label}: {currentItemTime}
    </div>) : null;
}

export default CurrentTime;
