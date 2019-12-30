import React from "react";
import { Route } from "react-router-dom";

import Addorder from "../components/ui/Request";
import AddOrders from "../components/ui/AddOrder";
import SalesOrderListing from "../components/containers/SalesOrderListing";
import AddCustomerEdit from "../components/ui/AddCustomerEdit";

import ShowProducts from '../components/containers/ShowProducts';
import AddProduct from "../components/ui/products/AddProduct";
import EditProduct from "../components/ui/products/EditProduct";

import ShowVendors from "../components/containers/ShowVendors";
import AddVendor from "../components/ui/vendors/AddVendor";
import EditVendor from "../components/ui/vendors/EditVendor";

import ShowCustomers from "../components/containers/ShowCustomers";
import AddCustomer from "../components/ui/customers/AddCustomer";
import EditCustomer from "../components/ui/customers/EditCustomer";
import Rfqtemplate from "../components/ui/RFQTemplate";
import margincalculation from "../components/ui/MarginCalculationTemplate";


const SalesRouter = (props) => {

  return (
      <React.Fragment>
        <Route path="/admin/sales/" exact component={SalesOrderListing} />
        <Route path="/admin/sales/all" exact component={SalesOrderListing} />
        <Route path="/admin/sales/customer/orders" exact component={SalesOrderListing} />
        <Route path="/admin/sales/customer/addorder" exact component={Addorder}/>
        <Route path="/admin/sales/customer/addorders" exact component={AddOrders}/>
        <Route path="/admin/sales/customer/ordersedit" exact component={AddCustomerEdit}/>
        <Route path="/admin/sales/vendor/orders" exact component={SalesOrderListing} />
        <Route path="/admin/sales/vendor/addorder" exact component={Addorder}/>
        <Route path="/admin/sales/vendor/addorders" exact component={AddOrders}/>
        <Route path="/admin/sales/products" exact component={ ShowProducts } />
        <Route path="/admin/sales/add-product"exact component={ AddProduct }/>
        <Route path="/admin/sales/edit-product/:id" exact component={ EditProduct } />
        <Route path="/admin/sales/vendors" exact component={ ShowVendors } />
        <Route path="/admin/sales/add-vendor" exact component={ AddVendor } />
        <Route path="/admin/sales/edit-vendor/:id" exact component={ EditVendor } />
        <Route path="/admin/sales/customers" exact component={ ShowCustomers } />
        <Route path="/admin/sales/add-customer" exact component={ AddCustomer } />
        <Route path="/admin/sales/edit-customer/:id" exact component={ EditCustomer } />
        <Route path="/admin/sales/rfqtemplate" exact component={ Rfqtemplate } />
        <Route path="/admin/sales/margincalculation" exact component={ margincalculation } />

      </React.Fragment>
  );
};

export default SalesRouter;
