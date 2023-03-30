import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <div>
            <Header title={'New body'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'} num={5}/>
        </div>
    )
}

export default App;
