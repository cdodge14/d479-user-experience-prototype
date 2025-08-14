import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyleMap } from '../hooks/useStyleMap';

const Navigation = ({ isMobile, onLinkClick }) => {
    const styles = useStyleMap();
    const navigate = useNavigate();

    const links = [
        { href: "/accommodations", label: "Accommodations" },
        { href: "/activities", label: "Activities" },
        { href: "/dining", label: "Dining" },
        { href: "/itinerary", label: "Plan Your Visit" },
        { href: "/faq", label: "FAQ" },
    ];

    return (
        <nav className={isMobile ? styles.mobileNav : styles.nav}>
            {links.map(link => (
                <button
                    key={link.href}
                    onClick={() => {
                        if(isMobile && onLinkClick){
                            onLinkClick()
                        }
                        navigate(link.href);
                    }}
                    className={isMobile ? styles.mobileNavLink : styles.navLink}
                >
                    {link.label}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;