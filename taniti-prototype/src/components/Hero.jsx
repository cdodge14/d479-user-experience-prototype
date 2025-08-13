import React from 'react';
import { useStyleMap } from '../hooks/useStyleMap';

const Hero = () => {
  const styles = useStyleMap();

  return (
    <section
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('src/assets/sea-4434933_1920.jpg')" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)"}}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Discover Taniti: Adventure Awaits
        </h1>
        <div className={styles.credit}>
          Image by <a href="https://pixabay.com/users/melest-11718064/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4434933">Melisa</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4434933">Pixabay</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
