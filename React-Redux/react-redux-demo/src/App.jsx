import { Provider } from "react-redux";
// import CakeContainer from "../src/components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IcecreamContainer from "./components/IcecreamContainer";
// import SandwichContainer from "./components/SandwichContainer";
// import ItemContainer from "./components/ItemContainer";
// import UserContainer from "./components/UserContainer";
import HooksUserContainer from "./components/HooksUserContainer";
import store from "./redux/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <SandwichContainer /> */}
        {/* <UserContainer /> */}
        <HooksUserContainer />
      </div>
    </Provider>
  )
}

export default App;
