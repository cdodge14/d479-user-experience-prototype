import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataStore from '../../data/DataStore';
import ActivitySelector from '../selectors/ActivitySelector';
import DateSelector from '../selectors/DateSelector';
import GuestForm from '../GuestForm';

const ActivitiesSection = () => {
    const [step, setStep] = useState(0);
    const [bookingData, setBookingData] = useState({});
    const navigate = useNavigate();
    const updateBooking = (data) => setBookingData(prev => ({ ...prev, ...data }));
    const activities = DataStore().activities;

    return (
        <section id="activities" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
            <div>
                {
                    step === 0 && <ActivitySelector
                        activities={activities}
                        onNext={(activity) => {
                            updateBooking({ activity });
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
                            localStorage.setItem('tanitiActivityBooking', JSON.stringify(fullBooking));
                            navigate('/booking');
                        }}
                    />
                }
            </div>
        </section>
    );
};

export default ActivitiesSection;
