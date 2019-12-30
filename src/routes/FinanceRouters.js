import React from "react";
import { Route } from "react-router-dom";
import TrelloBoard from "../components/ui/stages/TrelloOpenForm";

import FinanceListing from '../components/containers/FinanceList';
import TrelloEdit from "../components/ui/TrelloEdit";
import Email from "../components/ui/EmailPage";
import Templateattached from "../components/ui/PaymentVoucher";

const FinanceRouter = (props) => {

  return (
      <React.Fragment>
        <Route path="/admin/finance" exact component={FinanceListing} />
        <Route path="/admin/finance/orders" exact component={FinanceListing} />
        <Route path="/admin/finance/trackings" exact component={TrelloBoard} />
        <Route path="/admin/finance/trackingedit" exact component={TrelloEdit} />
        <Route path="/admin/finance/email" exact component={Email} />
        <Route path="/admin/finance/templateattached" exact component={Templateattached} />

      </React.Fragment>
  );
};

export default FinanceRouter;
