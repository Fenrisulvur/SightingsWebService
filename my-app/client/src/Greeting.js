import React, { useState } from 'react';

function Greeting(props) {
    const [greeting, setGreeting] = useState("");
    let testdata =  {
      "Data" : "Traps are gay"
    }

    const sendGreetings = () => {
       testdata.Data = document.getElementById("tbox").value;
        window.fetch('/greeting/hello', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(testdata),
            })
            .then(response => response.json())
            .then(resp => setGreeting(resp))
            .catch(err => console.log(err));
    }

    return <>
        <div
            style={{ flexDirection: 'column', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input type="text" id="tbox" name="name"/>
            <div><button onClick={sendGreetings} >Send Greetings</button></div>
            {greeting && <div>{`${greeting}`}</div>}
        </div>
    </>
}
export default Greeting;
