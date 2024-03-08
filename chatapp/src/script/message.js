import "../css/Chat.css";
import { useState } from "react";


export const pushMessage = (contactArray,message,currentUserChatID = 3) =>
{
    const loop =
        contactArray.map(Contact =>
        {
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
    }
        )
    
        
}
