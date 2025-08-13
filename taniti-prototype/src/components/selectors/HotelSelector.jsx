import BookingSection from "../sections/BookingSection";

const HotelSelector = ({ hotels, onNext }) => {
    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Choose Your Lodging</h2>
            <div className="space-y-4">
                <BookingSection title={"Accommodations"} bookings={hotels} onClick={onNext} />
            </div>
        </div>
    );
};

export default HotelSelector;