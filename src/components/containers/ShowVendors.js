import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import ShowVendorsUI from '../ui/vendors/ShowVendors';
class ShowVendors extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    }
  }
  triggerRefresh = () => {
    let vendorsUrl = 'http://3.92.201.85:8999/vendors';
    fetch(vendorsUrl)
      .then(response => response.json())
      .then(result => this.setState({ vendors: result }))
      .catch(e => {
          this.setState({...this.state });
          console.log(e);
      });
  }
  componentDidMount() {
    let vendorsUrl = 'http://3.92.201.85:8999/vendors';
    fetch(vendorsUrl)
      .then(response => response.json())
      .then(result => this.setState({ vendors: result }))
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
  searchedVendors = (item) =>  {
    console.log("item", item);
    item = item.toLowerCase();
    let filteredProduct = this.state.vendors.filter( currentItem =>  {
      var name = currentItem.site_url + currentItem.vendor_name + currentItem.priority;
      if(name) {
      
        return name.toLowerCase().includes(item);
      }
    });
    this.setState({
      filteredProducts: filteredProduct
    });
console.log(this.state.filteredProducts);
  }
  render() {
    return (
      <ShowVendorsUI
        {...this.state}
        {...this.props}
        filterByBrand={this.filterByBrand}
        searchedVendors={this.searchedVendors}
        triggerRefresh={() => this.triggerRefresh()}
        key={this.state.key}
      />
    )
  }
}
ShowVendors.propTypes = {
  listView: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  onChangeListView: PropTypes.func,
}
export default connect(
  state => state,
  dispatch => ({
    onChangeListView: view => dispatch(changeListView(view))
  })
)(ShowVendors)