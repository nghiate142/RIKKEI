import "./styleChats.css";

export var chatsPage = /*html*/ `
    <div class="nav-top">
    <p>Chat XxX</p>
    </div>
    <div class="content">
    <div class="left">
        <div class="new-convers"><button class="add-friend-btn">+ New Conversation</button></div>
        <div class="con-list"></div>
    </div>
    <div class="center">
        <div class="first-convers">First Conversation</div>
        <div class="chat-zone"></div>
        <div class="chat-type"><input class="input-chat" type="text"
                placeholder="Type a message..."><button class="send-btn">Send</button></div>
    </div>
    <div id="mesage-container" class="message-container" >
        <div class="message-item my-message">
            <div class="message-content">
            </div>
        </div>
        <div class="message-item other-message">
            <div class="sender"></div>
            <div class="message-content">
            </div>
        </div>
    </div>
    <div class="right"></div>
</div>
`;
