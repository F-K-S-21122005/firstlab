import './Footer.css';

function Footer(){

    const imagePath = '/Logomarvelred.png';
    const altText = "My image";
    const data = new Date();
    let year = data.getFullYear();
    console.log(year);
    return(
      <>
      <footer class="footer">
        <img class = "marvel_logo_footer" src = {imagePath} alt = {altText}></img>
        <p class = "footer-text">Data provide by Marvel {year} MARVEL</p>
  
      </footer>
      </>
    )
  }
  
  export default Footer