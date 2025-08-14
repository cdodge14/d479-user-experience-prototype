import BookingSection from "../sections/BookingSection";

const ActivitySelector = ({ activities, onNext }) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center">
            <div className="space-y-4">
                <BookingSection title={"Activities"} bookings={activities} onClick={onNext} />
            </div>
        </div>
    );
};

export default ActivitySelector;