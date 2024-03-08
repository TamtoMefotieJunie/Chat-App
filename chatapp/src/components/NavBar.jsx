import "../css/Chat.css";
// import { Fasearch} from "react-icons/fa";
//  import { FaPhoneAlt} from "react-icons/fa";
//  import { FaEllipsisV,FaPaperPlane} from "react-icons/fa";
function NavBar(){
    return(
    <>  
    
    <div className="top-bar">
                <div className="left-top-bar">
                    <div className="userImage"></div>
                    <div className="userName">
                        <div id="name">David Moore</div>
                        <div className="last-seen">last seen 5mins ago</div>
                    </div>
                </div>
                <div className="right-top-bar">
                    {/* <Fasearch className="face2"/>
                    <FaPhoneAlt className="face2"/>
                     <FaEllipsisV className="face"/>  */}
                </div>
            </div>

        
    </>
    );
} 
export default NavBar;

