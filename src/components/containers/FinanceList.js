import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import SalesListingUi from '../ui/FinanceListing';

class SalesListing extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isViewModal: false
    }
  }

  toggleViewModal = () => {
    this.setState({isViewModal: !this.state.isViewModal })
  }

  componentDidMount() {
    
    let ordersUrl = 'http://3.92.201.85:8999/products';

    fetch(ordersUrl)
      .then(response => response.json())
      .then(result => {
          this.setState({products: result})
      })
      .catch(e => {
          console.log(e);
          this.setState({...this.state });
      });

  }

  filterByBrand = (item) =>  {

    let filteredBrand = this.state.products.filter( currentItem => currentItem.brand.id === item.id);

    let tempArrBrand = [];
    this.state.brands.forEach(function(cur) {

      let tmp = {
          id: cur.id,
          name: cur.name,
          active: (cur.id === item.id)? true : false
      }
      tempArrBrand.push(tmp);
    })

    this.setState({
      brands: tempArrBrand
    })

    this.setState({
      filteredProducts: filteredBrand
    })

  }

  render() {

    return (
      <SalesListingUi
        {...this.state}
        {...this.props}
        filterByBrand={this.filterByBrand}
      />
    )
    
  }
}

// SalesListing.propTypes = {
//   listView: PropTypes.string.isRequired,
//   errors: PropTypes.array.isRequired,
//   onChangeListView: PropTypes.func,
// }

export default connect(
  state => state,
  dispatch => ({
    onChangeListView: view => dispatch(changeListView(view))
  })
)(SalesListing)
