
const Card = ({ name, img }) => {

  return ( 
    <>
      <h1>{name}</h1>
      <img src={img} alt='card drawn'/>
    </>
  );
}

export default Card;