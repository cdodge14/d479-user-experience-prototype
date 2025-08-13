// src/components/ActivitiesSection.jsx
import React from 'react';
import BookingCard from '../items/BookingCard';

const BookingSection = ({ title, bookings, onClick }) => {
    return (
        <section id="activities" className="py-12 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {bookings.map((booking, idx) => (
                    <BookingCard
                        key={idx}
                        booking={booking}
                        onClick={onClick}
                    />
                ))}
            </div>
        </section>
    );
};

export default BookingSection;
