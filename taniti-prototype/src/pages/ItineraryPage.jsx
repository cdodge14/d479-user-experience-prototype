import { useNavigate } from "react-router-dom";
import BookingSummary from "../components/items/BookingSummary";
import BookingInfo from "../components/items/BookingInfo";
import Layout from "../components/Layout";
import { useTheme } from "../context/ThemeContext";

function ItineraryPage() {
    const navigate = useNavigate();
    const { colors } = useTheme();
    const storedAccommodations = localStorage.getItem("tanitiAccomBooking");
    const accommodations = storedAccommodations ? JSON.parse(storedAccommodations) : null;
    const storedActivities = localStorage.getItem("tanitiActivityBooking");
    const activities = storedActivities ? JSON.parse(storedActivities) : null;
    const storedDining = localStorage.getItem("tanitiDiningBooking");
    const dining = storedDining ? JSON.parse(storedDining) : null;

    return (
        <Layout>
            <section id="accommodations" className="max-w-3xl mx-auto px-6 py-10 text-gray-900">
                <div>
                    {
                        accommodations != null ?
                            (
                                <BookingSummary
                                    booking={accommodations.hotel}
                                    onClick={() => {
                                        localStorage.removeItem("tanitiAccomBooking");
                                        window.location.reload();
                                    }}
                                >
                                    <BookingInfo guestInfo={accommodations} />
                                </BookingSummary>
                            ) : (
                                <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
                                    <button
                                        className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
                                        onClick={() => navigate("/accommodations")}
                                    >
                                        Book Accommodations
                                    </button>
                                </section>
                            )
                    }
                    {
                        activities != null ?
                            (
                                <BookingSummary
                                    booking={activities.activity}
                                    onClick={() => {
                                        localStorage.removeItem("tanitiActivityBooking");
                                        window.location.reload();
                                    }}
                                >
                                    <BookingInfo guestInfo={activities} />
                                </BookingSummary>
                            ) : (
                                <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
                                    <button
                                        className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
                                        onClick={() => navigate("/dining")}
                                    >
                                        Book An Activity
                                    </button>
                                </section>
                            )
                    }
                    {
                        dining != null ?
                            (
                                <BookingSummary
                                    booking={dining.restaurant}
                                    onClick={() => {
                                        localStorage.removeItem("tanitiDiningBooking");
                                        window.location.reload();
                                    }}

                                >
                                    <BookingInfo guestInfo={dining} />
                                </BookingSummary>
                            ) : (
                                <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
                                    <button
                                        className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
                                        onClick={() => navigate("/dining")}
                                    >
                                        Book Dining
                                    </button>
                                </section>
                            )
                    }
                </div>
            </section>
        </Layout>
    );
}

export default ItineraryPage;