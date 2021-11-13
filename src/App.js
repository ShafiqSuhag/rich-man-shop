import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import { AuthContext } from "./Contexts/AuthContext";
import DashboardMaster from "./DashboardPages/Layout/DashboardMaster/DashboardMaster";
import useFirebase from "./hooks/useFirebase";
import Checkout from "./Pages/Checkout/Checkout";
import ExploreMoreProducts from "./Pages/ExploreMoreProducts/ExploreMoreProducts";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Page from "./Pages/Page/Page";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Signup from "./Pages/Signup/Signup";


function App() {
  const firebaseAuth = useFirebase()
  return (
    <div>
      {/* <h1 className="bg-green-400">Hello Sohag</h1> */}
      <AuthContext.Provider value={firebaseAuth}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Page/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore-more-products">
              <ExploreMoreProducts />
            </Route>
            <Route path="/product-details/:id">
              <ProductDetails></ProductDetails>
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashboardMaster />
            </PrivateRoute>
            <Route path="/signup">
              <Signup />
            </Route>
            {/* <Route path="/add-new-product">
              <AddNewProduct />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router >
      </AuthContext.Provider>
    </div >
  );
}

export default App;
