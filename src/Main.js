import React, { useState, useEffect } from "react";
import { FaFolderPlus, FaBuffer, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { readData } from "./utils/utils";
import Card from "./components/Card/Card";

const Main = () => {
  const [charts, setCharts] = useState([]);
  const [chartsId, setChartsId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    read();
  }, []);

  const readFile = async () => {
    const docs = await readData("issueModule");
    let arr = [],
      id = [];
    docs.forEach((cur) => {
      arr = [...arr, cur.data()];
      id = [...id, cur.id];
    });
    return [arr, id];
  };

  const read = () => {
    readFile()
      .then((data) => {
        setIsLoading(false);
        setCharts(data[0]);
        setChartsId(data[1]);
      })
      .catch((err) => console.log(err.message));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    var filter, ul, li, a, i, txtValue;
    filter = searchTerm.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }, [searchTerm]);

  const [filteredMachine, setFilteredMachine] = useState("");
  const handleFilter = (value) => {
    setFilteredMachine(value);
  };

  useEffect(() => {
    let filter, ul, li, a, i, txtValue;
    filter = filteredMachine;
    console.log(filter);
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }, [filteredMachine]);

  return (
    <main>
      <header className="top-nav">
        <div>
          <Link to="/flow-chart" className="add-project">
            <FaFolderPlus />
            <span className="tab-text">New Project</span>
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="tab-container">
          <Link to="/" className="tab active-tab">
            <FaBuffer />
            <span className="tab-text"> Projects </span>
          </Link>
          <Link to="/new-node" className="tab">
            <FaBuffer />
            <span className="tab-text"> Nodes </span>
          </Link>
        </div>
      </header>
      <div className="project-dashboard">
        <div className="title">
          <h3> Projects </h3>
        </div>

        <ul className="main-content" id="myUL">
          {isLoading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
          {Object.keys(charts).map((id) => {
            var d = new Date(charts[id].date);
            return (
              <Card
                projectTitle={charts[id].name}
                date={d.toDateString()}
                id={charts[id].id}
                value={charts[id].values}
              />
            );
          })}
          <li className="main-content-grid">
            <Link to="/flow-chart" className="add-new-project">
              <FaPlus />
              <span className="text">Add Project</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
