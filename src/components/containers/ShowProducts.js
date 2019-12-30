import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import ShowProductsUi from '../ui/products/ShowProducts';
class ShowProducts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
        {
          id: 1,
          name: "Macejkovic - Cronin",
        },
        {
          id: 2,
          name: "Nicolas, Quitzon and Luettgen",
        },
        {
          id: 3,
          name: "Thompson, Schneider and Renner",
        },
        {
          id: 4,
          name: "Eichmann, Hodkiewicz and Abbott",
        },
        {
          id: 5,
          name: "Olson - Halvorson",
        }
      ],
      products: []
    }
  }
  triggerRefresh = () => {
    let productUrl = 'http://3.92.201.85:8999/products';
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
  componentDidMount() {
    let productUrl = 'http://3.92.201.85:8999/products';
    fetch(productUrl)
      .then(response => response.json())
      .then(result => {
          let productData = []
          result.map(item => {
            let rand = Math.floor(Math.random() * 5);
            item.brand = this.state.brands[rand];
            item.vendor = this.state.brands[rand];
            productData.push(item);
            return true;
          })
          this.setState({products: productData})
      })
      .catch(e => {
          this.setState({...this.state });
      });
  }
  filterByBrand = (item) =>  {
    let  filteredBrand;
    if(item)
      filteredBrand = this.state.products.filter( currentItem => currentItem.brand.id === item.id);
    let tempArrBrand = [];
    this.state.brands.forEach(function(cur) {
     console.log("cur", cur);
    let tmp;
    if(item)
      tmp = {
          id: cur.id,
          name: cur.name,
          active: (cur.id === item.id)? true : false
      }
    else
      tmp = {
          id: cur.id,
          name: cur.name,
          active: false
      }
      tempArrBrand.push(tmp);
    });
    if(!item) {
      filteredBrand = this.state.products;
    }
    this.setState({
      brands: tempArrBrand,
      filteredProducts: filteredBrand
    });
  }
  searchedProducts = (item) =>  {
    if(item != '')
    {
    item = item.toLowerCase();
    var filteredProduct = this.state.products.filter( currentItem =>  {
      console.log(item)
      var name =  currentItem.product_name + currentItem.price;
      if(name) {
        return name.toLowerCase().includes(item);
      }
      return false;
    });
  }
   
  
 let tempArrBrand = [];
    this.state.brands.forEach(function(cur) {
      let tmp = {
          id: cur.id,
          name: cur.name,
          active: (cur.id === item.id)? true : false
      }
      tempArrBrand.push(tmp);
    });
    this.setState({
      brands: tempArrBrand,
      filteredProducts: filteredProduct,
    });
  }
  render() {
    return (
      <ShowProductsUi
        {...this.state}
        {...this.props}
        filterByBrand={this.filterByBrand}
        searchedProducts={this.searchedProducts}
        triggerRefresh={() => this.triggerRefresh()}
        key={this.state.key}
      />
    )
  }
}
ShowProducts.propTypes = {
  listView: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  onChangeListView: PropTypes.func,
}
export default connect(
  state => state,
  dispatch => ({
    onChangeListView: view => dispatch(changeListView(view))
  })
)(ShowProducts)