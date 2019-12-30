import React from "react";
import { Route } from "react-router-dom";

import AdminDashboard from '../components/ui/AdminDashboard';
import Rfqtemplate from '../components/ui/RFQTemplate';
import DataEntryRouter from './DataEntryRouters';
import FinanceRouter from './FinanceRouters';
import SalesRouter from './SalesRouters';
import LogisticsRouter from './LogisticsRouters'

const AppRouter = (props) => {

  return (
      <React.Fragment>

        <Route path="/admin/dashboard" exact render={ () =>  <AdminDashboard {...props} /> } />
        <Route path="/admin/Rfqtemplate" exact render={ () =>  <Rfqtemplate {...props} /> } />


        <SalesRouter />

        <FinanceRouter />

        <DataEntryRouter />

        <LogisticsRouter />

      </React.Fragment>
  );
};

export default AppRouter;
