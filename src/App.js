import React, { Component } from "react";
import countries from "./countries";

export default function App() {
  const [name, setName] = React.useState("");
  const [sighting, setSighting] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleSubmit = event => {
    console.log(`
      Name: ${name}
      Sighting: ${sighting}
      Description: ${description}
      Country: ${country}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sighting Report</h1>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Type of sighting:
        <select name="sighting" onChange={e => setSighting(e.target.value)} required>
          <option value="select">Select an Option</option>
          <option value="ufo">UFO</option>
          <option value="creature">Creature</option>
          <option value="meteor">Meteor</option>
        </select>
      </label>

      <label>
        Description:
        <input
          name="text"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required
        >
          <option key="" />
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}
