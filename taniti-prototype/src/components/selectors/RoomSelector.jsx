const RoomSelector = ({ onNext }) => {
    const rooms = [
        { type: "Standard Room", price: 100 },
        { type: "Deluxe Room", price: 150 },
        { type: "Suite", price: 200 }
    ];

    return (
        <div className="max-w-md w-full bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Choose Your Room</h2>
            <ul className="space-y-3">
                {rooms.map((room) => (
                    <li
                        key={room.type}
                        onClick={() => onNext(room)}
                        className="p-3 border rounded hover:bg-emerald-50 cursor-pointer"
                    >
                        <div className="font-medium">{room.type}</div>
                        <div className="text-sm text-gray-600">${room.price}/night</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomSelector;