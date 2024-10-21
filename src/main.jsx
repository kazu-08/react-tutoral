import { createRoot } from "react-dom/client";
	import App from "./App";

	createRoot(document.querySelector("#content")).render(<App />);

function Header() {
    return <h1>hello</h1>;
  }
  
  function App() {
    const header = <Header />;
    return <div>{header}</div>;
  }