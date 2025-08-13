import React from 'react';
import { useStyleMap } from '../hooks/useStyleMap';
import { useNavigate } from 'react-router-dom';

const BookingToCart = () => {
    const style = useStyleMap();
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Booking Reserved</h2>
            <p className="text-center mb-6">
                View your itinerary, add activities, and book your stay.
            </p>
            <div className="flex justify-center">
                <button
                    className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
                    onClick={() => { navigate("/itinerary"); }}
                >
                    Open Itinerary
                </button>
            </div>
        </div>
    );
};

export default BookingToCart;