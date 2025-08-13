import { useState } from 'react'
import Layout from '../components/Layout'
import FAQItem from '../components/items/FAQItem';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "What kind of power outlets does Taniti use?",
      answer: "Taniti uses 120-volt outlets, which are the same as those in the United States. Most travelers from North America will not need an adapter.",
    },
    {
      question: "Can I purchase alcohol at any time?",
      answer: "Alcohol sales and service are not permitted between midnight and 9:00 a.m. Please plan accordingly when dining or shopping late.",
    },
    {
      question: "What is the legal drinking age?",
      answer: "The legal drinking age in Taniti is 18. Enforcement of this law is generally relaxed, especially in tourist areas.",
    },
    {
      question: "Is English widely spoken?",
      answer: "Many younger residents speak fluent English, particularly in urban and tourist-friendly areas. In rural regions, especially among older individuals, English may be limited.",
    },
    {
      question: "What medical facilities are available?",
      answer: "Taniti has one main hospital and several clinics. The hospital staff includes multilingual professionals to assist international visitors.",
    },
    {
      question: "Is Taniti a safe travel destination?",
      answer: "Violent crime is extremely rare. However, like many tourist destinations, minor crimes such as pickpocketing have become more common. We recommend staying aware of your surroundings in crowded areas.",
    },
    {
      question: "Are there any holiday-related closures?",
      answer: "Yes. Taniti celebrates a number of national holidays throughout the year. On these days, many attractions and restaurants may close. It's a good idea to check local calendars before finalizing your plans.",
    },
    {
      question: "What currency is used on Taniti?",
      answer: "The U.S. dollar is the official currency. Many businesses also accept euros and yen. Credit cards are widely accepted, and several banks offer currency exchange services.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={toggle}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default FAQ;
