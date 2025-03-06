import React from 'react';
import Title from './Title';
import Content from './Content';

const MessageSection: React.FC = () => {
  const titleText = "Descubre el futuro del dinero: Aprende sobre criptomonedas y únete a la revolución financiera";

  const contentParagraphs = [
    "¿Sabías que menos del 10% de la población mundial entiende realmente cómo funcionan las criptomonedas? A pesar de que cada vez más personas usan Bitcoin, Ethereum y otras criptomonedas, la mayoría aún desconoce la tecnología detrás de ellas y su potencial para transformar el mundo.",
    "**¿Qué son las criptomonedas?** Las criptomonedas son dinero digital descentralizado. A diferencia del dinero tradicional, no están controladas por bancos ni gobiernos. En su lugar, funcionan mediante una tecnología llamada blockchain, que es como un libro de contabilidad público y seguro donde se registran todas las transacciones.",
    "**¿Por qué son importantes?** 1. **Libertad financiera**: Puedes enviar y recibir dinero sin intermediarios, en cualquier parte del mundo y en cuestión de minutos. 2. **Seguridad**: La tecnología blockchain hace que las transacciones sean casi imposibles de hackear o falsificar. 3. **Inclusión**: Millones de personas sin acceso a bancos pueden participar en la economía global usando solo un teléfono móvil. 4. **Innovación**: Las criptomonedas están impulsando nuevas formas de hacer negocios, desde contratos inteligentes hasta aplicaciones descentralizadas.",
    "**¿Por qué aprender sobre criptomonedas?** Entender cómo funcionan las criptomonedas no solo te permite usar esta tecnología de manera segura, sino que también te abre las puertas a nuevas oportunidades: - **Inversiones**: Aprende a identificar proyectos serios y evita estafas. - **Tecnología**: Descubre cómo blockchain está revolucionando industrias como la salud, el arte y las finanzas. - **Futuro**: Prepárate para un mundo donde el dinero digital será tan común como el internet hoy.",
    "**¡Tú puedes ser parte de este cambio!** No necesitas ser un experto en tecnología para entender las criptomonedas. Con un poco de curiosidad y ganas de aprender, puedes dominar los conceptos básicos y empezar a usar esta tecnología de manera segura y efectiva.",
    "**¿Listo para comenzar?** Explora nuestra web, descubre guías sencillas y únete a la comunidad de personas que están construyendo el futuro del dinero. ¡El conocimiento es tu mejor inversión!",
  ];

  return (
    <section style={{ padding: '40px 20px' }}>
      {/*<Title text={titleText} />*/}
      <Content paragraphs={contentParagraphs} />
    </section>
  );
};

export default MessageSection;