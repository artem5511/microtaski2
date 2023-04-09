import React, {useState} from 'react';
import {Fullinput} from './Fullinput';

export const Appinput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        ]
    )

    const addMessage = (title: string) => {
      let newMessage = {message: title};
          setMessage([newMessage,...message])
    }

    return (
        <div className={'App'}>
            <div>
                <Fullinput addmessage={addMessage} />
            </div>
            {message.map((el, index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};