// CityPopup.js
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const CityPopup = ({ setCity }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleSubmit = () => {
        setCity(selectedCity);
        setIsOpen(false);
    };

    return (
        <Popup 
            open={isOpen} 
            closeOnDocumentClick={false} 
            modal
            contentStyle={{ padding: '0' }}
        >
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg sm:w-10/12 md:w-8/12 lg:w-6/12 text-center">
                    <h2 className="text-2xl font-semibold mb-6">Select Your City</h2>
                    <select 
                        onChange={handleCityChange} 
                        value={selectedCity} 
                        className="mb-6 p-3 border rounded w-full"
                    >
                        <option value="">Select a city</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangaluru">Bangaluru</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                    <button 
                        onClick={handleSubmit} 
                        disabled={!selectedCity}
                        className={`px-6 py-3 rounded text-white font-bold ${selectedCity ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </Popup>
    );
};

export default CityPopup;
