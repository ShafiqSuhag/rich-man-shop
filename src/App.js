import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Footer from "./Pages/Layout/Footer/Footer";
import Header from "./Pages/Layout/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      {/* <h1 className="bg-green-400">Hello Sohag</h1> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router >
    </div >
  );
}

export default App;
