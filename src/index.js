import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="99283a09-d654-461e-841b-afc4cd6de4e2" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.querySelector("#root")
);
