import { useState } from "react";

const GuestForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', guests: 1 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form className="max-w-md w-full bg-white p-4 rounded shadow space-y-3"
            onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
            <h2 className="text-xl font-semibold">Guest Details</h2>
            <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full p-2 border"
                required
            />
            <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full p-2 border"
                required
            />
            <input
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                className="w-full p-2 border"
                required
            />
            <input
                name="guests"
                type="number"
                min="1"
                value={form.guests}
                onChange={handleChange}
                className="w-full p-2 border"
                required
            />
            <button
                type="submit"
                className="bg-emerald-600 text-white px-4 py-2 rounded"
            >
                Book Now
            </button>
        </form>
    );
};

export default GuestForm;