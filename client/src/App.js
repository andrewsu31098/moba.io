import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

import { connect } from "./utils/networking";
import { useEffect } from "react";

import Menu from "./components/Menu/Menu";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import GameView from "./components/GameView/GameView";

import handleInput from "./controllers/handleInput";

function App() {
  useEffect(() => {
    connect();
    handleInput();
  }, []);
  return (
    <Provider store={store}>
      <div>
        <Menu />
        <GameView />
        <Leaderboard />
      </div>
    </Provider>
  );
}

export default App;
