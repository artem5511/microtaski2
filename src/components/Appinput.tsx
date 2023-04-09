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
        console.log(title)
        // const fullmessage = message.push(title)
        // return fullmessage
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