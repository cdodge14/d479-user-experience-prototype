import BookingSection from "../sections/BookingSection";

const DiningSelector = ({ dining, onNext }) => {
    return (
        <div className="w-full max-w-2xl">
            <div className="space-y-4">
                <BookingSection title={"Dining"} bookings={dining} onClick={onNext} />
            </div>
        </div>
    );
};

export default DiningSelector;