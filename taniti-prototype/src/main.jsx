// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx'
import ReferencesPage from './pages/ReferencesPage';
import FAQ from './pages/FAQ';
import AccommodationsPage from './pages/AccommodationsPage.jsx';
import ActivitiesPage from './pages/ActivitiesPage.jsx';
import BookingReservedPage from './pages/BookingReservedPage.jsx';
import DiningPage from './pages/DiningPage.jsx';
import TransportationPage from './pages/TransportationPage.jsx';
import ItineraryPage from './pages/ItineraryPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ContactPage from './pages/ContactUsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter basename="/d479-user-experience-prototype">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path='/accommodations' element={<AccommodationsPage />} />
                    <Route path='/activities' element={<ActivitiesPage />} />
                    <Route path="/references" element={<ReferencesPage />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/booking" element={<BookingReservedPage />} />
                    <Route path="/dining" element={<DiningPage />} />
                    <Route path="/transportation" element={<TransportationPage />} />
                    <Route path="/itinerary" element={<ItineraryPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
)
