import Button from "./Button";
import styled from "./App.module.css";
import {useState, useEffect} from "react";

/*function App() {

    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");
    useEffect(() => {
        console.log("I run only once");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("I run when 'keyword' &'counter' changes.");
    }, [keyword, counter]);
    return (
        <div>
            <input
                onChange={onChange}
                type="text"
                placeholder="Search Hear..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}*/

// To Do List part one
/*function App(){
    const [toDo , setTodo] = useState("");
    const [toDos , setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setTodo("");
        setTodos((currentArray) => [toDo , ...currentArray]);

    }
    console.log(toDos);
    return(
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}*/
// Coin Tracker
function App(){
    const [loading , setLoading] = useState(true);
    const [coins , setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return(
      <div>
          <h1>The Coins! ({loading ? "" : coins.length})</h1>
          {loading ? <strong>Loading....</strong> : (
              <select>
                  {coins.map((coin , index) => (
                      <option key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
                  ))}
              </select>
          )}
      </div>
    );
}

export default App;
