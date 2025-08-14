// src/components/CallToActionButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyleMap } from '../hooks/useStyleMap';

const CallToActionButton = ({ href, children }) => {
    const { colors } = useTheme();

    return (
        <a
            onClick={() => { useNavigate(href); }}
            className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
        >
            {children}
        </a>
    );
};

export default CallToActionButton;
