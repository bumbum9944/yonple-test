import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "page/Home";
import Detail from "page/Detail/Detail";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact render={()=><Home />} />
        <Route path="/detail" render={()=><Detail />} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
