import { useState } from "react";
import styles from './Card.module.css'


const Card = ({ img }) => {

  const [transform, setTransform] = useState(() => {
    let angle = Math.random() * 90 - 45
    let xPos = Math.random() * 40 - 20
    let yPos = Math.random() * 40 - 20
    return `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
  })


  return ( 
    <>
      <img className={styles.card} style={{transform}} src={img} alt='card drawn'/>
    </>
  );
}

export default Card;