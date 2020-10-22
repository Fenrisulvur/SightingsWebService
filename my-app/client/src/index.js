import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Records from './records';
import * as serviceWorker from './serviceWorker';


function Btn(props) {

    const onCreateClick = () => {
       ReactDOM.render(<div><App /></div>, document.getElementById('root'));
    }

    const onViewClick = () => {
       ReactDOM.render(<div><Records /></div>, document.getElementById('root'));
    }

    return <>
        <div>
          <button onClick={onCreateClick} >Create Sighting</button>
          <button onClick={onViewClick}>View Sightings</button>
          <p></p>
        </div>
    </>
}


ReactDOM.render(<div><Btn /></div>, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
