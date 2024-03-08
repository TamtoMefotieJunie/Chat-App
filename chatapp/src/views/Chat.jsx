import React from 'react'
import {contactArray} from '../utils/ContactsData.js'

const Chat = () => {
    return (
        <>

            <div class="main-container">
                <div class="side-bar">
                    <div class="search-bar">

                        <div class="search">
                            <span><i class=" face2 fa fa-bars"></i></span>
                            <div class="search-right">
                                <i class="icon4 fa fa-search"></i>
                                <br />
                                <input type="text" name="search" class="search-input" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div class="chatlist" id="chatList">
                        <div class="chat-list-content" id="content" onclick="click_Div()">
                            <div class="userImage1"></div>
                            <div class="chat-detail">
                                <p class="chatname" >Chatgram </p><br />
                                <span class="text">chatgram web was updated</span>
                            </div>
                            <div class="chat-time">
                                <div>19:48</div>
                                <div class="unread-messages">1</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div class="content">
                <div class="top-bar">
                    <div class="left-top-bar">
                        <div class="userImage"></div>
                        <div class="userName">
                            <div id="name">David Moore</div>
                            <div class="last-seen">last seen 5mins ago</div>
                        </div>
                    </div>
                    <div class="right-top-bar">
                        <span><i class="face2  fa fa-search"></i></span>
                        <span><i class="face2 fa fa-phone"></i></span>
                        <span><i class="face2 fa fa-ellipsis-v"></i></span>
                    </div>
                </div>

                <div class="messages" id="messages">

                    <div class="date">today</div>
                    <div class="message">
                        <div class="message-received">
                            <p>OMG <i class="fa-regular fa-face-surprise"></i> do you remember what you did last night at the
                                night work out?
                                <span class="alignment"><i class="heart fa fa-heart"></i>&ensp; 18:12 <i
                                    class="face2 fa fa-check"></i></span>
                            </p>
                        </div>
                        <div class="message-sent1">
                            no haha <br /> <span class="time">18:16 &ensp; <i class="face3 fa fa-check"></i></span>
                        </div>
                    </div>


                </div>
                <div class="input-bar">
                    <div class="left-input-bar">
                        <span><i class="fa fa-smile-o"></i></span>

                        <input type="text" name="message-input" class="msg" id="msg-input" placeholder="message" />
                    </div>
                    <div class="right-input-bar" id="send-icon">
                        <i class=" face fa fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;