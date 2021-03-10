import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import SearchPage from '../pages/SearchPage/SearchPage';
import CustomizeImagePage from '../pages/CustomizeImagePage/CustomizeImagePage';

function Routes() {
  return (
    <Router history={useHistory}>
      <Route path="/" exact>
        <SearchPage/>
      </Route>
      <Route path="/customize-image">
        <CustomizeImagePage/>
      </Route>
    </Router>
  );
}

export default Routes;
