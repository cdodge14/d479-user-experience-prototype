import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlanYourVisit = () => {
    const navigate = useNavigate();

    return (
        <section id="plan" className="py-12 px-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Plan Your Visit</h2>
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
        </section>
    );
};

export default PlanYourVisit;
