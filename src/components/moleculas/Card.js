// moleculas/Card.js
import Image from 'next/image';

const Card = ({ producto }) => {
  return (
    <div style={{ backgroundColor: producto.bgcolor, width: '200px', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <Image
        src={producto.img}
        alt={producto.title}
        width={200} 
        height={150} 
        layout="responsive" 
      />
      <h2>{producto.title}</h2>
      <p>{producto.text}</p>
    </div>
  );
};

export default Card;
