import React from "react";
//import { FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import './twocolumn.css'

const TwoColumn = () => {
  
    return (
        <div className="containerTowCol">
        <section className="col-1"> 1st Column  </section>
      
        <section className="col-2"> 2nd Column </section>
      </div>
    );
  }

export default TwoColumn;