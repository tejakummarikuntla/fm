import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/screens/Home";
import Episodes from "./components/screens/Episodes";
import Blogs from "./components/screens/Blog";
import Signin from "./components/screens/Signin";
import Contact from "./components/sections/Contact";
import { reducer, initialState } from "./reducer/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //if token has

    dispatch({ type: "USER", payload: user });
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Route path="/blog">
        <Blogs />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
