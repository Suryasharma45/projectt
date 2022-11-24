import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import '../App.css'

function FormData(props) {
  const initialFromState = {
    id: null,
    name: "",
    date: " ",
    Number: "",
    location: "",
  };
  const [user, setUser] = useState(initialFromState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };



  return (
    <div>
      <div className="container">
        <div className=" row">
          <div className="col-6">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!user.name || !user.date || !user.Number || !user.location)
                  return;
                props.addUser(user);
                setUser(initialFromState);
              }}
            >
              <label>Name</label>
              <input
                type="text"
                onChange={handleInputChange}
                name="name"
                value={user.name}
              ></input>
              <button className="btn btn-success">submit</button>
    <div className="col" id='menu'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {" "}
                  Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <ul>
                    <li>
                      <label>date</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="date"
                        value={user.date}
                      ></input>
                    </li>

                    <li>
                      <label>number</label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="Number"
                        value={user.Number}
                      ></input>
                    </li>

                    <li>
                      <label>location</label>
                      <select
                        type="text"
                        onChange={handleInputChange}
                        name="location"
                        value={user.location}
                      > 
                      <option value=" "></option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangular">Bangular</option>
                      </select>
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormData;
