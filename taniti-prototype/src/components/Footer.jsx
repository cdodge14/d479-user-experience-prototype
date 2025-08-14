import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyleMap } from '../hooks/useStyleMap';

const Footer = () => {
    const styles = useStyleMap();
    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <div className="container mx-auto px-4 py-2 text-center text-sm text-gray-500">
                &copy; 2025 Visit Taniti |{' '}
                <a
                    onClick={() => { navigate("/privacy"); }}
                    className="text-blue-600 hover:underline"
                >
                    Privacy
                </a>
                {' '}|{' '}
                <a
                    onClick={() => { navigate("/contact"); }}
                    className="text-blue-600 hover:underline"
                >
                    Contact
                </a>
                {' '}|{' '}
                <a
                    onClick={() => { navigate("/about"); }}
                    className="text-blue-600 hover:underline"
                >
                    About
                </a>
                {' '}|{' '}
                <a
                    onClick={() => { navigate("/references"); }}
                    className="text-blue-600 hover:underline"
                >
                    References
                </a>
            </div>
        </footer>
    );
};

export default Footer;
