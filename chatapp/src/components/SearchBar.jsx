import "../css/Chat.css";
import Input from "./Input";
// import { FaBars, FaSearch } from "react-icons/fa";
function SearchBar(){
    return(
    <>  
    <div className="search-bar">
                
                <div className="search">
                    {/* <span><FaBars As Menu classname=" face2"/></span> */}
                    <div className="search-right">
                        {/* <FaSearch classname="icon4 fa fa-search"/> */}
                        
                        <Input name="name" type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
        
    </>
    );
} 
export default SearchBar;

