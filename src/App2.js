import Button from "./Button";
import styled from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
    function byFn(){
        console.log("created :)")
    }
    function hiFn(){
        console.log("bye :(");
        return byFn;
    }
    useEffect(hiFn ,[]);
    return(
      <h1>Hello</h1>
    );
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
