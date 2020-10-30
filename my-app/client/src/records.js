import React, { useState } from 'react';
import ReactDOM from "react-dom";




function records(props) {
    const onReturnClick = () => {
       window.location.pathname = '';
    }

    const search = () => {
      var input, filter, table, tr, td, i, txtValue, searchType;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("dataTable");
      searchType =  document.getElementById("searchType");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[searchType.value];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }

    }

    const renderData = (resp) => {
      console.log(resp);
      ReactDOM.render(
          <table id="dataTable"><th>Id</th><th>Submitter Name</th><th>Sighting Type</th><th>Description</th><th>Location</th><th>Country</th><th>Date</th>
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

    return (
        <div>
          <input type="text" id="searchInput" onKeyUp={search} placeholder="Search for.." title="Type in a term"/>
          <select id="searchType" title="Search type">
            <option value="0">Id</option>
            <option value="1">Name</option>
            <option value="2">Type</option>
            <option value="4">Location</option>
            <option value="5">Country</option>
            <option value="6">Date</option>
          </select>
          <button onClick={onReturnClick} >Return</button>
          <div id="recordsTable"></div>
        </div>);

}
export default records;
