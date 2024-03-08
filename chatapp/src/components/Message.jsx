import "../css/Chat.css";
import { useState } from "react";
import contactArray  from "../script/ContactArray";



function pushMessage(contactArray,messageContent,currentUserChatID = 3)
{
    
        contactArray.map(Contact =>
        {
         return(
            <>
            if(Contact.id == currentUserChatID){
            Contact.conversation.push(  
                {
                     sender_id:2,
                     reciever_id:currentUserChatID,
                     content:message,
                     time:new Date().getHours() + ":" + new Date().getMinutes()
            
                }
            )
         }
        
         )
        }
    )
    
    </>
    )
    
        
}