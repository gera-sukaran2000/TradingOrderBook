import "./App.css";
import OrderBook from "./Components/OrderBook";

import Provider from "../data/store";
function App() {
  return (
    <>
      <Provider>
        <OrderBook />
      </Provider>
    </>
  );
}

export default App;
