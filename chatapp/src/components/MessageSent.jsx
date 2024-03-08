import "../css/Chat.css";
import NavBar from "./NavBar";


function MessageSent({content,time,iconRight}){
    return(
    <>  
   <div className="message-sent1">
      {content}   &ensp; <span className="time">{time} &ensp; <i className="face3 fa fa-check"></i></span>
    </div>
    </>
   )

}
export default MessageSent;