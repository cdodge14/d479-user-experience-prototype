import { useState } from 'react';
import Layout from '../components/Layout';

function ContactPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        question: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email !== form.confirmEmail) {
            alert("Emails do not match.");
            return;
        }
        // Handle form submission logic here (e.g., console.log or localStorage)
        alert("Thanks for contacting us! We'll respond shortly.");
    };

    return (
        <Layout>
            <section id="contact-us" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-2">Contact Us</h2>

                <form
                    className="w-full max-w-md bg-stone-200 p-6 rounded-lg shadow mx-auto"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="firstName" className="font-bold block mb-1">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-4 border rounded"
                    />

                    <label htmlFor="lastName" className="font-bold block mb-1">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-4 border rounded"
                    />

                    <label htmlFor="email" className="font-bold block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-4 border rounded"
                    />

                    <label htmlFor="confirmEmail" className="font-bold block mb-1">Confirm Email:</label>
                    <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        value={form.confirmEmail}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-4 border rounded"
                    />

                    <label htmlFor="question" className="font-bold block mb-1">Your Question:</label>
                    <textarea
                        id="question"
                        name="question"
                        rows="4"
                        value={form.question}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mb-4 border rounded resize-y"
                    />

                    <button
                        type="submit"
                        className="px-4 py-2 bg-emerald-700 text-white font-semibold rounded hover:bg-emerald-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </Layout>
    );
}

export default ContactPage;
