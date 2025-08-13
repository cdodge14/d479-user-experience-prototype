import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataStore from '../data/DataStore';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NavigationButtons from '../components/NavigationButtons';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import PlanYourVisit from '../components/PlanYourVisit';
import ActivitySelector from '../components/selectors/ActivitySelector';

function App() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    const navButtons = [
        { label: 'Places to Stay', href: '/accommodations' },
        { label: 'Restaurant Reservations', href: '/dining' },
        { label: 'Transportation', href: '/transportation' },
    ];

    return (
        <Layout>
            <Hero />
            <NavigationButtons buttons={navButtons} />
            <ActivitySelector
                activities={DataStore().activities}
                onNext={() => { navigate("/activities") }}
            />
            <PlanYourVisit />
        </Layout>
    );
}

export default App;
