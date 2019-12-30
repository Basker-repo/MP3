import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import SalesListingUi from '../ui/SalesListing';
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
    let productUrl = 'http://3.92.201.85:8999/orders';
    fetch(productUrl)
      .then(response => response.json())
      .then(result => {
          this.setState({products: result})
          console.log("orders ", this.state.products);
      })
      .catch(e => {
          console.log(e);
          this.setState({...this.state });
      });
  }
  triggerRefresh = () => {
    let productUrl = 'http://3.92.201.85:8999/orders';
    fetch(productUrl)
      .then(response => response.json())
      .then(result => {
          let productData = []
          result.map(item => {
            productData.push(item);
            return true;
          })
          this.setState({products: productData})
      })
      .catch(e => {
          this.setState({...this.state });
      });
  }
   
  
  
  searchedProducts = (item) =>  {
   
    item = item.toLowerCase();
    console.log(item)
    var filteredProduct = this.state.products.filter( currentItem =>  {
      var name =  currentItem.tendorname + currentItem.tendorid + currentItem.validityperoid;
      if(name) {
        return name.toLowerCase().includes(item);
      }
      return false;
    });
    this.setState({
      filteredProducts: filteredProduct,
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
        openDetails={this.toggleViewModal}
        searchedProducts={this.searchedProducts}
        triggerRefresh={() => this.triggerRefresh()}
        key={this.state.key}
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