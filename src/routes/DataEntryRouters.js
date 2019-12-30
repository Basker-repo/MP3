import React from "react";
import { Route } from "react-router-dom";

import ShowProducts from '../components/containers/ShowProducts';
import AddProduct from "../components/ui/products/AddProduct";
import EditProduct from "../components/ui/products/EditProduct";

import ShowVendors from "../components/containers/ShowVendors";
import AddVendor from "../components/ui/vendors/AddVendor";
import EditVendor from "../components/ui/vendors/EditVendor";

import ShowCustomers from "../components/containers/ShowCustomers";
import AddCustomer from "../components/ui/customers/AddCustomer";
import EditCustomer from "../components/ui/customers/EditCustomer";

const DataEntryRouter = (props) => {

  return (
      <React.Fragment>
        <Route path="/admin/data-entry" exact component={ ShowProducts } />
        <Route path="/admin/data-entry/all" exact component={ ShowProducts } />
        <Route path="/admin/data-entry/products" exact component={ ShowProducts } />
        <Route path="/admin/data-entry/add-product"exact component={ AddProduct }/>
        <Route path="/admin/data-entry/edit-product/:id" exact component={ EditProduct } />
        <Route path="/admin/data-entry/vendors" exact component={ ShowVendors } />
        <Route path="/admin/data-entry/add-vendor" exact component={ AddVendor } />
        <Route path="/admin/data-entry/edit-vendor/:id" exact component={ EditVendor } />
        <Route path="/admin/data-entry/customers" exact component={ ShowCustomers } />
        <Route path="/admin/data-entry/add-customer" exact component={ AddCustomer } />
        <Route path="/admin/data-entry/edit-customer/:id" exact component={ EditCustomer } />
      </React.Fragment>
  );
};

export default DataEntryRouter;
