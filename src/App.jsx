import {
  browserName,
  deviceType,
  fullBrowserVersion,
  osName,
  osVersion,
} from "react-device-detect";
import "./App.css";

function App() {
  const browser = browserName;
  return (
    <div className="main">
      <h1>What Browser Is It?</h1>
      <ul>
        <li>
          Your Browser is: <span>{browser}</span>
        </li>
        <li>
          Running Version: <span>{fullBrowserVersion}</span>
        </li>
        <li>
          On a <span>{deviceType}</span>
        </li>
        <li>
          Operating sytem: <span>{osName}</span>
        </li>
        <li>
          Running Version: <span>{osVersion}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
