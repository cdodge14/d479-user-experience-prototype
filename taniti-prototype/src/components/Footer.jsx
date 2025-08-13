// src/components/Footer.jsx
import React from 'react';
import { useStyleMap } from '../hooks/useStyleMap';

const Footer = () => {
  const styles = useStyleMap();

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-2 text-center text-sm text-gray-500">
        &copy; 2025 Visit Taniti |{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy
        </a>
        {' '}|{' '}
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact
        </a>
        {' '}|{' '}
        <a href="/about" className="text-blue-600 hover:underline">
          About
        </a>
        {' '}|{' '}
        <a href="/references" className="text-blue-600 hover:underline">
          References
        </a>
      </div>
    </footer>
  );
};

export default Footer;
