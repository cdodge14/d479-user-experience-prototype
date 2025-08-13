import React from 'react';
import { useStyleMap } from '../../hooks/useStyleMap';
import PixabayCredit from '../PixabayCredit';

const BookingSummary = ({ children, booking, onClick }) => {
    const style = useStyleMap();

    return (
        <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
            <div className="bg-white rounded shadow p-4 relative">
                <button
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-lg hover:bg-red-700 z-2 font-bold"
                    aria-label="Close"
                    onClick={() => {onClick()}}
                >
                    &times;
                </button>
                <div className='relative'>
                    <img
                        src={booking.image}
                        alt={booking.alt}
                        className="w-full h-48 object-cover rounded"
                    />
                    <PixabayCredit
                        authorName={booking.credit.authorName}
                        authorUrl={booking.credit.authorUrl}
                        imageUrl={booking.credit.imageUrl}
                    />
                </div>
                <h3 className="text-lg font-semibold mt-2">{booking.title}</h3>
                {children}
            </div>
        </section>
    );
};

export default BookingSummary;
