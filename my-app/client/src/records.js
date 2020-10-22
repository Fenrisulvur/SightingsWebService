import React, { useState } from 'react';
import ReactDOM from "react-dom";


function records(props) {
    const onReturnClick = () => {
       window.location.pathname = '';
    }

    const renderData = (resp) => {
      console.log(resp);
      ReactDOM.render(
          <table><th>Id</th><th>Submitter Name</th><th>Sighting Type</th><th>Description</th><th>Location</th><th>Country</th><th>Date</th>
          {resp.data.map((e, i) =>{
            if (true == true){ //placeholder for searching
              return <tr> <td>{i}</td> <td>{e.Name}</td> <td>{e.Sighting}</td> <td>{e.Description}</td> <td>{e.Location}</td>  <td>{e.Country}</td> <td>{e.Date}</td>  </tr>
            }
          })}
        </table>, document.getElementById('recordsTable'))
    }

    fetch('/data/sighting_data')
        .then(response => response.json())
        .then(data => renderData(data));

    return (<div>
          <button onClick={onReturnClick} >Return</button>
          <div id="recordsTable"></div>
        </div>);

}
export default records;
