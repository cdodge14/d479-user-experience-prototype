const BookingInfo = ({ guestInfo }) => {
    const toLocaleString = (datestring) => {
        return new Date(datestring).toLocaleString();
    };

    return (
        <table className="w-full table-auto border border-gray-300 text-left text-sm text-gray-800">
            <tbody>
                {guestInfo.room && (
                    <tr className="border-b">
                        <td className="p-2 font-semibold bg-gray-100 w-1/3">Room</td>
                        <td className="p-2">{guestInfo.room.type}</td>
                    </tr>
                )}
                <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Guest</td>
                    <td className="p-2">{guestInfo.firstName + " " + guestInfo.lastName}</td>
                </tr>
                <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Email</td>
                    <td className="p-2">{guestInfo.email}</td>
                </tr>
                <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Party</td>
                    <td className="p-2">{guestInfo.guests}</td>
                </tr>
                <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Start Date</td>
                    <td className="p-2">{toLocaleString(guestInfo.dates.startDate)}</td>
                </tr>
                {guestInfo.dates.endDate && (
                    <tr className="border-b">
                        <td className="p-2 font-semibold bg-gray-100">End Date</td>
                        <td className="p-2">{toLocaleString(guestInfo.dates.endDate)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default BookingInfo;