import React from 'react';

const Greetings = ({ lang, children }) => {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings-frame">
      <p>
        {greetings[lang] || 'Unknown language'} {children}
      </p>
    </div>
  );
};

export default Greetings;
