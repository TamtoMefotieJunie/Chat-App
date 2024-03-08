import "../css/Chat.css";
import NavBar from "./NavBar";
import SideBar from "./SideBAr";
import Input from "./Input";
import MessageReceived from "./MessageRecieved";
import MessageSent from "./MessageSent";
import { useEffect, useState } from "react";
import { contactArray } from "../script/ContactArray";
import { pushMessage } from "../script/message";
import { Send } from "@mui/icons-material";

function ContainerRight(){
    // const [messages,setMessages] = useState("messages");
    const [message,setMessage] = useState("");
    const [array,setArray] = useState([]);
    
    const addMessage = () => {
        if (message.length === 0 ){
            return;
        }
         setArray(current => [...current, {
                     sender_id:2,
                     reciever_id:3,
                     content:message,
                     time:new Date().getHours() + ":" + new Date().getMinutes()
         }])
         setMessage("")
    }

    const send = (e) => {
        if (e.key == 'Enter')
        addMessage();

    }

    useEffect(() => {
        setArray(contactArray[2].conversation)
    }, [contactArray])

    return(
       
    <>  
    <div className="content">
            <NavBar/>
            <div className="message-container" id="messages">
                
                <div className="date">today</div>
                <div className="message">
                    {
                        array.map(conversation => {
                           if (conversation.sender_id == 2)
                            return (
                                <MessageSent content={conversation.content} time={conversation.time}/>
                            )
                            else
                            return (
                                <MessageReceived content={conversation.content} time={conversation.time}/>
                            )
                        })
                    }
                   
                </div>
                
                
            </div>
            <div className="input-bar">
                <div className="left-input-bar">
                    <span><i className="fa fa-smile-o"></i></span>
                    <Input 
                    type="text"
                    name="message-input"
                    className="msg" 
                    value={message}
                    onChange={(e) => {setMessage(e.target.value), (e) => send(e)}} 
                    id="msg-input"
                    placeholder="message"
                    onKeyPress={(e) => send(e)}
                   
                    /> 
                </div>
                <div className="right-input-bar" id="send-icon">
                    <Send/>
                </div>
            </div>
     </div>
        
    </>
   )

}
export default ContainerRight;