import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log("created!");
    return () => console.log("detroyed!");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once!");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("search for ", keyword);
    }
  }, [keyword]);

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  return (
    <div>
      <h1 className={styles.title}>Welcom bak!</h1>
      <h1>{counter}</h1>
      <input
        onChange={onChange}
        type="text"
        placeholder="Seach here..."
        value={keyword}
      />
      <button onClick={onClick}>Click me!!! </button>
      <hr />
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
