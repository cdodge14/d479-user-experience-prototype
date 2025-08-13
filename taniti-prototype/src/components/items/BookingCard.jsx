import React from 'react';
import { useStyleMap } from '../../hooks/useStyleMap';
import PixabayCredit from '../PixabayCredit';

const BookingCard = ({ booking, onClick }) => {
    const style = useStyleMap();

    return (
        <div className="bg-white rounded shadow p-4">
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
            <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => onClick(booking)}
            >
                Book
            </button>
        </div>
    );
};

export default BookingCard;
