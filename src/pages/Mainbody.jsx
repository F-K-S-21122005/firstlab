import { Route, Routes } from "react-router-dom"
import {Comics} from '../pages/Comicspage';
import {Characters} from '../pages/Characterspage';
import {Series} from '../pages/Seriespage';
import {Homepage} from '../pages/Homepage';

function App(){

    return(
        <>  
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/comics" element={<Comics/>}/>
            <Route path="/series" element={<Series/>}/>
        </Routes>
        </>

    )
     
}

export default App