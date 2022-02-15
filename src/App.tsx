import "./styles.css";
import { Button } from "./component/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={() => alert("hello")}>Hello</Button>
    </div>
  );
}
