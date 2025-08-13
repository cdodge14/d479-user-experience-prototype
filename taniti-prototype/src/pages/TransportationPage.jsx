import { useState } from 'react';
import Layout from '../components/Layout';

function TransportationPage() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <section id="transportation" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-2">Transportation</h2>
                <h3 className="text-lg font-semibold mt-2">Getting to the Island</h3>
                <p>
                    Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.
                </p>
                <h3 className="text-lg font-semibold mt-2">Traveling while on the Island</h3>
                <p>
                    Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.
                </p>
            </section>
        </Layout>
    );
}

export default TransportationPage;
