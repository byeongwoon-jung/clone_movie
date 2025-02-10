import styles from "./App.module.css";
import { useState, useEffect } from "react";
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
    </div>
  );
}

export default App;
