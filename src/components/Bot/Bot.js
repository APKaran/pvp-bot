import React,{useState} from 'react'
import { flushSync } from 'react-dom';
import chatBoxIcon from '../../Assets/Images/chatbox-icon.svg';
import logo from '../../Assets/Images/trusty-logo.svg';

import './Bot.css';

export default function Bot() {

  const [toggle, setToggle] = useState(false);
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  

  let handleClick = () =>{
    setToggle(!toggle);
  }

  const handleInput = (e)=> {
      e.preventDefault();
      setChat(e.target.value);
  }

  let handleSend = () => {
      console.log(chat);
      if(chat === '') return;

    //   let msg1 = [...messages, {name:"User", text:chat}];
    //   setMessages(msg1);
      callApiRequest(chat);
      setChat('');
}
  const callApiRequest = async (message) =>{
    await fetch('http://localhost:9090/api/customer/query', {
        method: 'POST',
        body: JSON.stringify({ query: message }),
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
        let msg = [{ name: "Bot", text: r[0].ans},{name:"User", text:message}];
        if(r && r.length && r[0].ans && r[0].ans !== ''){
                setMessages([...msg, ...messages]);
        }

    }).catch((error) => {
        console.error('Error:', error);
        let msg = [{name:"Bot", text: "Sorry we have encounted an error! :("},{name:"User", text:message}];
        setMessages([...msg, ...messages]);
    });
  }
  const ChatItems = messages.reverse().map(item => {
            if(item.name == 'Bot'){
                return <div class="messages__item messages__item--visitor">{item.text}</div>
            }else{
                return <div class="messages__item messages__item--operator">{item.text}</div>
            }
        });
  return (
    <div className="chatbox-container">
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
                    <div></div>
                    {ChatItems}
                </div>
                <div className="chatbox__footer">
                    <input type="text"  placeholder="Write a message..." onChange={(e) => handleInput(e)} value={chat}/>
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
