import React, { useState, useEffect, useCallback } from 'react';
import './Cities.scss';
import { fetchCities } from '../../services/cities.service';

function Cities({ activeItem, setActiveItem }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCities();
      setCities(result);
    }
    fetchData();
  }, []);

  const itemClickCallback = useCallback((event, item) => {
    setActiveItem({ ...item, target: event.target });
  }, [setActiveItem]);

  const isActive = (item) => {
    return activeItem && activeItem.section === item.section;
  };

  return (
      <ul className="navigation-container">
        {cities.map(item => {
          const className = `navigation-item ${isActive(item) ? 'active' : ''}`
          return (
            <li key={item.section}
              className={className}
              onClick={(event) => itemClickCallback(event, item)}>
              {item.label}
            </li>
          )
        })}
      </ul>
  );
}

export default Cities;
