import { useTheme } from '../context/ThemeContext';

const NavigationButtons = ({ buttons }) => {
    const { colors } = useTheme();

    return (
        <section className="py-8 px-4 flex flex-col md:flex-row justify-center gap-4 text-center">
            {buttons.map((button, index) => (
                <a
                    key={index}
                    href={button.href}
                    className={`bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
                >
                    {button.label}
                </a>
            ))}
        </section>
    );
};

export default NavigationButtons;
