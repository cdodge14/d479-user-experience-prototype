import React from 'react';
import { useStyleMap } from '../hooks/useStyleMap';

const Navigation = ({ isMobile, onLinkClick }) => {
    const styles = useStyleMap();

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
                <a
                    key={link.href}
                    href={link.href}
                    onClick={isMobile && onLinkClick ? onLinkClick : undefined}
                    className={isMobile ? styles.mobileNavLink : styles.navLink}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;