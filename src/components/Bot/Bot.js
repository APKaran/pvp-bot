import React,{useState} from 'react'
import chatBoxIcon from '../../Assets/Images/chatbox-icon.svg';
import logo from '../../Assets/Images/trusty-logo.svg';

import './Bot.css';

export default function Bot() {
    let messages = [];
    let html = '';
  const [toggle, setToggle] = useState(false);
  const [chat, setChat] = useState('');
  let handleClick = () =>{
    setToggle(!toggle);
  }

  let handleSend = () => {
      console.log(chat);
      if(chat === '') return;

      let msg = {name:"User", text:chat}
      messages.push(msg);

      fetch('http://localhost:9090/api/customer/query', {
        method: 'POST',
        body: JSON.stringify({ query: chat }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers':'*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'localhost',
          'Access-Control-Allow-Methods': 'GET, POST',
        },
      })
      .then(r => r.json())
      .then(r => {
        let msg = { name: "Bot", text: r.ans};
        messages.push(msg);
        updateChatBox();

    }).catch((error) => {
        console.error('Error:', error);
        let msg = {name:"Bot", text: "Sorry we have encounted an error! :("}
        updateChatBox();
    });
    setChat('');
    
}

  let updateChatBox = () => {
        messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Bot")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.chat + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.chat + '</div>'
            }
          });
  }
  return (
    <div className="container">
        <div className="chatbox">
            <div className={toggle ? 'chatbox__support chatbox--active': 'chatbox__support'}>
                <div className="chatbox__header">
                    <div className="chatbox__image--header">
                        <img src={logo} alt="image" height="40" width="40"/>
                    </div>
                    <div className="chatbox__content--header">
                        <h4 className="chatbox__heading--header">Chat support</h4>
                        <p className="chatbox__description--header">Hi. How can I help you?</p>
                    </div>
                </div>
                <div className="chatbox__messages">
                    <div>{html}</div>
                </div>
                <div className="chatbox__footer">
                    <input type="text"  placeholder="Write a message..." onChange={(e) => setChat(e.target.value)} value={chat}/>
                    <button className="chatbox__send--footer send__button" onClick={() => handleSend()} >Send</button>
                </div>
            </div>
            <div className={!toggle ? "chatbox__button active" : "chatbox__button"}>
                <button onClick={()=> handleClick()}><img src={chatBoxIcon} /></button>
                {!toggle && <div className='text-help'>Need help?</div>}
            </div>
        </div>
    </div>
  )
}
