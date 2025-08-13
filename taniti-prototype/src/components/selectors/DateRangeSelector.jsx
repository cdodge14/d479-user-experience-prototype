import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeSelector = ({ onNext }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="max-w-md w-full bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Select Your Dates</h2>
            <div className="space-y-4">
                <div>
                    <label>Check-in Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={setStartDate}
                        className="w-full border p-2"
                    />
                </div>
                <div>
                    <label>Check-out Date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={setEndDate}
                        className="w-full border p-2"
                    />
                </div>
                <button
                    className="bg-emerald-600 text-white px-4 py-2 mt-2 rounded"
                    disabled={!startDate || !endDate}
                    onClick={() => onNext({ startDate, endDate })}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DateRangeSelector;