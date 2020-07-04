import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigator from "./components/Navigator/Navigator";
import Slovensko from "./components/Slovensko/Slovensko";
import Svet from "./components/Svet/Svet";
import Admin from "./components/Admin/Admin";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigator />
        <main>
          <Route path="/" exact component={Slovensko} />
          <Route path="/svet" component={Svet} />
          <Route path="/admin" component={Admin} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
