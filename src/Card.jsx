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
        <div class = "card-contanier">
            <img class = 'character-img' src = {imagePath} altText= {imgText}></img>
            <p class = "name-character">{name}</p>
            <p class = "description-character">{description}</p>
            
        </div>


    </div>

    </>
  )
}

export default Card


