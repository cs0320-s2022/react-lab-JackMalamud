import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';
//@ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {
    const [sunState, setSun] = useState('');
    const [moonState, setMoon] = useState('');
    const [risingState, setRising] = useState('');

    const [horoscopeState, setHoroscope] = useState(['','','','','']);

    const requestHoroscope = () => {
        const toSend = {
            sun: sunState,
            moon: moonState,
            rising: risingState
        };
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

        return (
    <div className="Horoscope">
      <header className="Horoscope-header">
        <title>A fun horoscope</title>
      </header>
        <TextBox label={"Enter Sun Sign: "} change={setSun}/>
        <TextBox label={"Enter Moon Sign: "} change={setMoon}/>
        <TextBox label={"Enter Rising Sign: "} change={setRising}/>
        <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
        {horoscopeState.map( x => <p>{x}</p>)}
    </div>
  );
}

export default Horoscope;