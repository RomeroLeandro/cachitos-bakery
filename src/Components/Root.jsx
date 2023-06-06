import './Root.css'
import Aside from "./Aside";
import Body from "./Body";

function Root(){
    return(
        <div className="Root">
            <Aside/>
            <Body></Body>
        </div>
    )
}
export default Root