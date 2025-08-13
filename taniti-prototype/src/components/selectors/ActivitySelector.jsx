import BookingSection from "../sections/BookingSection";

const ActivitySelector = ({ activities, onNext }) => {
    return (
        <div className="w-full max-w-2xl">
            <div className="space-y-4">
                <BookingSection title={"Activities"} bookings={activities} onClick={onNext} />
            </div>
        </div>
    );
};

export default ActivitySelector;