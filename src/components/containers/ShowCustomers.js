import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import ShowCustomersUI from '../ui/customers/ShowCustomers';

class ShowCustomers extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  triggerRefresh = () => {

    let customersUrl = 'http://3.92.201.85:8999/customers';

    fetch(customersUrl)
      .then(response => response.json())
      .then(result => this.setState({ customers: result }))
      .catch(e => {
          this.setState({...this.state });
          console.log(e);
      });
  }

  componentDidMount() {

    let customersUrl = 'http://3.92.201.85:8999/customers';

    fetch(customersUrl)
      .then(response => response.json())
      .then(result => this.setState({ customers: result }))
      .catch(e => {
          this.setState({...this.state });
          console.log(e);
      });

  }

  filterByBrand = (item) =>  {

    //let filteredBrand = this.state.vendors.filter( currentItem => currentItem.brand.id === item.id);

    // let tempArrBrand = [];
    // this.state.brands.forEach(function(cur) {
    //
    //   let tmp = {
    //       id: cur.id,
    //       name: cur.name,
    //       active: (cur.id === item.id)? true : false
    //   }
    //   tempArrBrand.push(tmp);
    // })
    //
    // this.setState({
    //   brands: tempArrBrand,
    //   filteredProducts: filteredBrand
    // })

  }

  searchedCustomers = (item) =>  {

    item = item.toLowerCase();

    let filteredCustomers = this.state.customers.filter( currentItem =>  {

      let name = currentItem.first_name || currentItem.last_name || currentItem.phone_no || currentItem.priority;

      if(name)
      {
        return name.toLowerCase().includes(item);
      }
      return false;

    });

    this.setState({
      filteredProducts: filteredCustomers
    });

  }

  render() {

    return (
      <ShowCustomersUI
        {...this.state}
        {...this.props}
        searchedCustomers={this.searchedCustomers}
        filterByBrand={this.filterByBrand}
        triggerRefresh={() => this.triggerRefresh()}
        key={this.state.key}
      />
    )

  }
}

ShowCustomers.propTypes = {
  listView: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  onChangeListView: PropTypes.func,
}

export default connect(
  state => state,
  dispatch => ({
    onChangeListView: view => dispatch(changeListView(view))
  })
)(ShowCustomers)
