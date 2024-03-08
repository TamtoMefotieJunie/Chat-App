import "../css/Chat.css";
function SingleContact({image,name,content,time,unReadMessages}){
    return(
    <>
        <div className="chat-list-content" id = "content" >
            <div className="userImage1"></div>
                <div className="chat-detail">
                     <p> <span className ="chatname" >{name}</span><br /> <span className="text">{content}</span> </p> 
                  
                </div>
                <div className="chat-time">
                    <div>{time}</div>
                    
                    <div className="unread-messages">{unReadMessages}</div>
                 </div>
        </div>       
    </>
    );
}
export default SingleContact;