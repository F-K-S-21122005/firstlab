import './Card.css';
import { Link, animateScroll as scroll } from "react-scroll";



function Card(){
    

    const imagePath ='/spiderman.png';
    const imgText ="Character Image";
    let name = "Spiderman";
    let description = "This is SPIDERMAN";
 
    return (
    <>
    <div>
        <div className = "card-contanier">
            <img className = 'character-img' src = {imagePath} altText= {imgText}></img>
            <p className = "name-character">{name}</p>
            <p className = "description-character">{description}</p>
            
        </div>


    </div>

    </>
  )
}

export default Card


