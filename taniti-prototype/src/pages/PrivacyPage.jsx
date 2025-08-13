import { useState } from 'react';
import Layout from '../components/Layout';

function PrivacyPage() {
    const [count, setCount] = useState(0);

    const statement = `
        This website is a demonstration project developed for educational purposes
        as part of a course at Western Governors University. It is not a commercial website,
        and no real services are offered or fulfilled.

        All data submitted through forms on this site—such as booking information or personal details—is
        stored only on your local device using your browser's local storage. No data is transmitted,
        collected, or stored remotely by the site developers, Western Governors University, or any third-party services.

        You may clear any stored data at any time by clearing your browser's local storage.
    `;

    return (
        <Layout>
            <section id="privacy" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-2">Privacy</h2>
                <p className="whitespace-pre-line">
                    {statement}
                </p>
            </section>
        </Layout>
    );
}

export default PrivacyPage;
