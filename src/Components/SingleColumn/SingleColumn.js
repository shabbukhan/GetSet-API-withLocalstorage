import React, { useEffect, useState } from "react";
//import { FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import "./singlecolumn.css";
import GetFromAPI from "../Products/GetItems/GetItems";

const SingleColumn = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);

  useEffect(() => {
    async function dataObj() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          setData([...data, res]);
        });
    }
    dataObj();
  }, []);


  const getFromLocalStorage = (e) => {
    e.preventDefault();
    const browserStorage = JSON.parse(localStorage.getItem("allData"));

    for (let item in browserStorage) {
      setDisplayItem((displayItem) => [...displayItem, browserStorage[item]]);
      // displayItem is previous state
    }
  };

  const setOnLocalStorage = (e) => {
        if (e.target.checked) {
          setState([
            ...state,
            {
              title: e.target.value,
              id: e.target.id,
            },
          ]);
        }

        if (!e.target.checked) {
          setState(
            state.filter(
              ({title}) => title !== e.target.value
            )
          );
        }
  };

  useEffect(() => {
    localStorage.setItem("allData", JSON.stringify(state.map((item) => item)));
  });

  //console.log("data", data);

  return (
    <div className="containerSingleCol">
      <section className="col-1">
        <ul className="listType2">
          {displayItem.length
            ? displayItem.map(({ title, id }, idx) => <li key={idx}>{title}</li>)
            : null}
        </ul>
      </section>

      <section className="col-2">
        <ul className="listType2">
          {data.length
            ? data[0].products.map(({ title, id }, idx) => (
                <GetFromAPI
                  title={title}
                  id={id}
                  setOnLocalStorage={setOnLocalStorage}
                />
              ))
            : null}
        </ul>
        <button className="btn" onClick={getFromLocalStorage}>
          Submit Post
        </button>
      </section>
    </div>
  );
};

export default SingleColumn;
