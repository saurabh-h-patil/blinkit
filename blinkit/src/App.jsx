import { Provider } from "react-redux";
import Navigator from "./navigation/navigator";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}

export default App;
