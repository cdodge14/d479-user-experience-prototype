import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = ({ buttons }) => {
    const { colors } = useTheme();
    const navigate = useNavigate();

    return (
        <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
                    onClick={() => {navigate(button.href)}}
                >
                    {button.label}
                </button>
            ))}
        </section>
    );
};

export default NavigationButtons;
