import Layout from '../components/Layout';

function AboutPage() {
    return (
        <Layout>
            <section id="about" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <h2 className="text-2xl font-bold mb-6 border-b border-emerald-600 pb-2">About This Website</h2>

                <p className="mb-4">
                    This website is a demonstration project created for an academic course at <strong>Western Governors University</strong>. It serves as part of the curriculum for a class focused on <strong>User Experience (UX) Design</strong> and related techniques.
                </p>

                <p className="mb-4">
                    The goal of this prototype is to showcase thoughtful design principles, user-centered interaction patterns, and responsive layout development within a modern front-end framework (React with Tailwind CSS). From wireframing to implementation, each section of this site was developed to reflect best practices in usability, accessibility, and front-end design.
                </p>

                <p>
                    Please note that all features, forms, and content on this site are intended for demonstration purposes only and do not represent a real tourism organization or data service.
                </p>
            </section>
        </Layout>
    );
}

export default AboutPage;
