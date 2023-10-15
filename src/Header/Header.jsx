
import './Header.css';
import{Link} from 'react-router-dom';


function Header(){
  const imagePath = '/Logomarvelred.png';
  const altText = 'marvel_logo';
  let namepages = "Characters";

  return (
    <>
    <div className = "top_row">
      <img className = "marvel_logo_header" src = {imagePath} alt = {altText}></img>
      <div className="links_menu">
        <Link className = "link" to= '/characters'>{namepages}</Link>
        <Link className = "link" to='/comics'>Comics</Link>
        <Link className = "link" to='/series'>Series</Link>
        <Link className = "link" to='/'>Home</Link>
      </div>
      
    </div> 

     
    </>
  )
}

export default Header


