import store from "./redux/store";
import { Provider } from "react-redux";

import { connect } from "./utils/networking";
import { useEffect } from "react";

import Menu from "./components/Menu/Menu";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import GameView from "./components/GameView/GameView";

function App() {
  useEffect(() => {
    connect();
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
