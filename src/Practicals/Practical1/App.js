import React, { useState } from "react";
import "./Style.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    { name: "Sneha Verma" },
  { name: "Karan Kapoor" },
  { name: "Neha Gupta" },
  { name: "Rahul Sharma" },
  { name: "Pooja Mehta" },
  { name: "Sandeep Kumar" },
  ]);

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter</h1>

      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="custom-border custom-p-2 custom-mb-4"
        />

        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
