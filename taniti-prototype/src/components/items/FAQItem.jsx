import { useTheme } from "../../context/ThemeContext";

const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const { colors } = useTheme();

  return (
    <li className="border border-emerald-200 rounded shadow-sm">
      <button
        onClick={() => onToggle(index)}
        className={`w-full text-left font-medium focus:outline-none bg-${colors.primary} text-white px-6 py-3 rounded hover:bg-${colors.primaryHover}`}
      >
        {isOpen ? '-' : '+'}{' '}{question}
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-gray-700 border-t border-emerald-100 bg-white">
          {answer}
        </div>
      )}
    </li>
  );
};

export default FAQItem;