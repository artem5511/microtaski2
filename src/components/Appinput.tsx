import React, {useState} from 'react';
import {Fullinput} from './Fullinput';
import {Input} from './Input';
import {ButtonforInput} from './ButtonforInput';

export const Appinput = () => {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )
    let [title, setTitle]=useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
const callBackButtonHandler = () => {
  addMessage(title)
    setTitle('')
}
    return (
        <div className={'App'}>
            <div>
                <Input setTitle={setTitle} title={title}/>
                {/*<ButtonforInput callBack={()=>{addMessage(title)}} name={'+++'} setTitle={setTitle} title={title}/>*/}
                <ButtonforInput callBack={callBackButtonHandler} name={'+'}/>

                {/*<Fullinput addmessage={addMessage}/>*/}
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};