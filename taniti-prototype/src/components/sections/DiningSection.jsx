import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataStore from '../../data/DataStore';
import DiningSelector from '../selectors/DiningSelector';
import DateSelector from '../selectors/DateSelector';
import GuestForm from '../GuestForm';

const DiningSection = () => {
    const [step, setStep] = useState(0);
    const [bookingData, setBookingData] = useState({});
    const navigate = useNavigate();
    const updateBooking = (data) => setBookingData(prev => ({ ...prev, ...data }));
    const dining = DataStore().dining;

    return (
        <section id="dining" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
            <div>
                {
                    step === 0 && <DiningSelector
                        dining={dining}
                        onNext={(restaurant) => {
                            updateBooking({ restaurant });
                            setStep(1);
                        }}
                    />
                }
                {
                    step === 1 && <DateSelector
                        onNext={(dates) => {
                            updateBooking({ dates });
                            setStep(2);
                        }}
                    />
                }
                {
                    step === 2 && <GuestForm
                        onSubmit={(guestInfo) => {
                            const fullBooking = { ...bookingData, ...guestInfo };
                            localStorage.setItem('tanitiDiningBooking', JSON.stringify(fullBooking));
                            navigate('/booking');
                        }}
                    />
                }
            </div>
        </section>
    );
};

export default DiningSection;
