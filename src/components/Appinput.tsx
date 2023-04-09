import React, {useState} from 'react';

export const Appinput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        ]
    )
    return (
        <div className={'App'}>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            {message.map((el, index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};