import React from "react";
import { Route } from "react-router-dom";

import TrelloBoard from "../components/ui/stages/TrelloOpenForm";
import OrderView from '../components/ui/OrderView';
import FinanceListing from '../components/containers/FinanceList';

const AppRouter = (props) => {
  return (
      <React.Fragment>
        <Route path="/admin/logistics" exact component={FinanceListing} />
        <Route path="/admin/logistics/orders" exact component={FinanceListing} />
        <Route path="/admin/logistics/ordersedit" exact component={OrderView} />
        <Route path="/admin/logistics/shipment" exact>
          <div>
            <h1 align="center">Shipment</h1>
            <p align="center">Shipment design comes here</p>
          </div>
        </Route>
        <Route path="/admin/logistics/stages" exact component={TrelloBoard} />
        <Route path="/admin/logistics/request">
          <div>
            <h1 align="center">Request</h1>
            <p align="center">Request page design comes here</p>
          </div>
        </Route>

      </React.Fragment>
  );
};

export default AppRouter;
