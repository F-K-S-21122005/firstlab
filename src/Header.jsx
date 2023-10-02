
import './Header.css';

function Header(){
  const imagePath = '/Logomarvelred.png';
  const altText = 'marvel_logo';

  return (
    <>
    <div class = "top_row">
      <img class = "marvel_logo_header" src = {imagePath} alt = {altText}></img>
      <div class="links_menu">
        <a class = "link" href='https://cyber.sports.ru/tribuna/blogs/buyhighselllow/3058632.html?ysclid=lmuwui8kgt585794969'>Charaters</a>
        <a class = "link" href='https://drawnstories.ru/?ysclid=lmuwtwhn3g683337304'>Comics</a>
        <a class = "link" href='https://marvel.fandom.com/ru/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2_Marvel'>Series</a>
      </div>
    </div>
    </>
  )
}

export default Header


