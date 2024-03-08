import "../css/Chat.css";
import NavBar from "./NavBar";


function MessageReceived({content,time,iconRight}){
    return(
    <>  
   <div className="message-received">
        <p>OMG <i className="fa-regular fa-face-surprise"></i> {content}
            <span className="alignment"><i className="heart fa fa-heart"></i>&ensp; {time} <i
            className="face2 fa fa-check"></i></span>
        </p>
    </div>
    </>
   )

}
export default MessageReceived;