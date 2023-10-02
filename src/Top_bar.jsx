import './Top_bar.css';

function Top_bar(){

    let num_char = 1562;
 
    return (
    <>
    <div>
        <div class = "top_bar">
            <p class = "Text">Characters({num_char})</p>
            <div>
                <input class = "search_panel" placeholder= "Search for Characters by Name" font-color = "black"></input>
                <button class = "button" >Search</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default Top_bar


