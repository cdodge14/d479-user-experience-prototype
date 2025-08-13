import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelSelector from '../selectors/HotelSelector';
import DateRangeSelector from '../selectors/DateRangeSelector';
import GuestForm from '../GuestForm';
import RoomSelector from '../selectors/RoomSelector';
import DataStore from '../../data/DataStore';

const AccommodationsSection = () => {
    const [step, setStep] = useState(0);
    const [bookingData, setBookingData] = useState({});
    const navigate = useNavigate();
    const updateBooking = (data) => setBookingData(prev => ({ ...prev, ...data }));
    const accommodations = DataStore().accommodations;

    return (
        <section id="accommodations" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
            <div>
                {
                    step === 0 && <HotelSelector
                        hotels={accommodations}
                        onNext={(hotel) => {
                            updateBooking({ hotel });
                            setStep(1);
                        }}
                    />
                }
                {
                    step === 1 && <DateRangeSelector
                        onNext={(dates) => {
                            updateBooking({ dates });
                            setStep(2);
                        }}
                    />
                }
                {
                    step === 2 && <RoomSelector
                        onNext={(room) => {
                            updateBooking({ room });
                            setStep(3);
                        }}
                    />
                }
                {
                    step === 3 && <GuestForm
                        onSubmit={(guestInfo) => {
                            const fullBooking = { ...bookingData, ...guestInfo };
                            localStorage.setItem('tanitiAccomBooking', JSON.stringify(fullBooking));
                            navigate('/booking');
                        }}
                    />
                }
            </div>
        </section>
    );
};

export default AccommodationsSection;
