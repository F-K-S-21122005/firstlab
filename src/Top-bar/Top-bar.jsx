import './Top-bar.css';

function TopBar(){

    let num_char = 1562;
 
    return (
    <>
    <div>
        <div className = "top_bar">
            <p className = "Text">Characters({num_char})</p>
            <div>
                <input className = "search_panel" placeholder= "Search for Characters by Name" font-color = "black"></input>
                <button className = "button" >Search</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default TopBar


