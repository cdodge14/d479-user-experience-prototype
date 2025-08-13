import { useState } from 'react';
import Layout from '../components/Layout';
import ReferenceItem from '../components/items/ReferenceItem';

function ReferencesPage() {
    const [count, setCount] = useState(0);
    const references = [
        {
            author: "Canva",
            date: "n.d.",
            name: "Persona creation and visual design assets",
            source: null,
            url: "https://www.canva.com"
        },
        {
            author: "Figma",
            date: "n.d.",
            name: "Design wireframes and flowcharts",
            source: null,
            url: "https://www.figma.com"
        },
        {
            author: "Government of Taniti",
            date: "n.d.",
            name: "About the island",
            source: "[Internal document]",
            url: null
        },
        {
            author: "Government of Taniti",
            date: "n.d.",
            name: "Tourist survey results",
            source: "[Unpublished raw data]",
            url: null
        },
        {
            author: "Gylfason, Gylfi",
            date: "2022",
            name: "Volcano, Lava, Iceland image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7396466"
        },
        {
            author: "Kalasouski, Vitali",
            date: "n.d.",
            name: "Resort and Spa image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3172367"
        },
        {
            author: "Martinez, Josep M.",
            date: "n.d.",
            name: "Hostel image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5302486"
        },
        {
            author: "mcstudio79",
            date: "n.d.",
            name: "Grocery fruits image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=25266"
        },
        {
            author: "Melisa",
            date: "2019",
            name: "Sea, Nature, Blue sky image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4434933"
        },
        {
            author: "Microsoft",
            date: "n.d.",
            name: "Stock images used in persona profile",
            source: "Microsoft Word",
            url: "https://www.microsoft.com"
        },
        {
            author: "Ntoumas, Antonios",
            date: "2018",
            name: "Rainforest, Jungle, Stream image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3119822"
        },
        {
            author: "Parks, Jody",
            date: "2015",
            name: "Swimming, Snorkeling, Ocean image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=713534"
        },
        {
            author: "Pexels",
            date: "n.d.",
            name: "Bed and Breakfast image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1839183"
        },
        {
            author: "ReactJS",
            date: "n.d.",
            name: "React documentation",
            source: null,
            url: "https://react.dev"
        },
        {
            author: "Seres-Nagy, Katalin",
            date: "n.d.",
            name: "Grilled fish image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5883821"
        },
        {
            author: "Tailwind Labs",
            date: "2024",
            name: "Tailwind CSS documentation",
            source: null,
            url: "https://tailwindcss.com/docs"
        },
        {
            author: "Vera, Chili",
            date: "n.d.",
            name: "Hamburger image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7419428"
        },
        {
            author: "Zhu, Karrie",
            date: "n.d.",
            name: "Pan-Asian food image. Free for use.",
            source: "[Photograph]. Pixabay",
            url: "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1050813"
        }
    ];

    return (
        <Layout>
            <section id="references" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-2">References</h2>
                <ul className="space-y-4 list-none">
                    {references.map((item) => (
                        <ReferenceItem
                            author={item.author}
                            date={item.date}
                            name={item.name}
                            source={item.source}
                            url={item.url}
                        />
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export default ReferencesPage;
