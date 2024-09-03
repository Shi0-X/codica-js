// src/capitalize.js
const capitalize = (text) => {
  if (text.length === 0) return text; // Manejar cadenas vacías

  // Destructuring para obtener el primer carácter y el resto de la cadena
  const [firstChar, ...restChars] = text;
  
  // Verificar si firstChar es undefined antes de llamar a toUpperCase
  if (firstChar === undefined) return text;

  return `${firstChar.toUpperCase()}${restChars.join('')}`;
};

export default capitalize;
