import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import { AuthContext } from "./Contexts/AuthContext";
import useFirebase from "./hooks/useFirebase";
import Checkout from "./Pages/Checkout/Checkout";
import Home from './Pages/Home/Home';
import Footer from "./Pages/Layout/Footer/Footer";
import Header from "./Pages/Layout/Header/Header";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";


function App() {
  const firebaseAuth = useFirebase()
  return (
    <div>
      {/* <h1 className="bg-green-400">Hello Sohag</h1> */}
      <AuthContext.Provider value={firebaseAuth}>
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
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthContext.Provider>
    </div >
  );
}

export default App;
