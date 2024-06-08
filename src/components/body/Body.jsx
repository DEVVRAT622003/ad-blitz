// Body.js
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel ';
import Category from './Category';
import HomePageCards from './HomePageCards';
import Reviews from './Reviews';
import CityPopup from './CityPopup';

const Body = () => {
    const [city, setCity] = useState('');

    useEffect(() => {
        // Check if a city is already selected and stored in local storage
        const storedCity = localStorage.getItem('selectedCity');
        if (storedCity) {
            setCity(storedCity);
        }
    }, []);

    useEffect(() => {
        if (city) {
            localStorage.setItem('selectedCity', city);
        }
    }, [city]);

    return (
        <div className='bg-[#F1F2F4]'>
            {!city && <CityPopup setCity={setCity} />}
            <Carousel />
            <Category />
            <HomePageCards />
            <Reviews />
        </div>
    );
};

export default Body;

