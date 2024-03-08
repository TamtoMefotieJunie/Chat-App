import "../css/Chat.css";
import { contactArray } from "../script/ContactArray";
import SingleContact from "./SingleContact";
function Contact(){
    return(
    <>  

    <div className="chatlist" id="chatList">
        
                  
            {
                contactArray.map(Contact=>
                    {
                     return (
                     <SingleContact 
                     name = {Contact.name} 
                     unReadMessages={Contact.numberUnreadMsg} 
                     time={Contact.conversation[Contact.conversation.length - 1].time} 
                     content={Contact.conversation[Contact.conversation.length-1].content}
                     />
                     )
                    }
                )
            }
                
         
        
    </div> 
    </>
    );
} 
export default Contact;
