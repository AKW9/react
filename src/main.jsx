import './index.css';
import App from './App';
import React from "react";
import * as ReactDOM from "react-dom/client";

// function Hello(props/name, age, ...) {
//   console.log(props);
  // const name = props.name;
  // const age = props.age;
  // const {name, age} = props;
//   return <h1> I am {name}, {age} years old</h1>;
// }

// function Hello({name, age}) {
  // console.log(props);
  // const name = props.name;
  // const age = props.age;
  // const {name, age} = props;
  // return <h1> I am {name}, {age} years old</h1>;
//   return(
//     <>
//       <div className="container">
//         <h1>I am {name}, {age} year old</h1>
//       </div>
//     </>
//   );
// }

const rootElement = document.querySelector("#react-root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
