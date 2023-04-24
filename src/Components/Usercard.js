import { Fragment } from "react";
import './Usercard.css';


export default function Usercard(props) {



  return (

    <Fragment>

      <section className="card">


        <div >
          <img src={props.src} alt="not available" className="img1" />

          <p>{props.designation} </p>
          <h1>{props.name}</h1>
          <p>{props.jobDescription}</p>
          <button className="btn" onClick={props.displayName}>{props.buttonText}</button>


        </div>
      </section>
    </Fragment>
  )
}