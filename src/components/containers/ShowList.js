import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeListView } from '../../actions/showListActions';
import ShowListUi from '../ui/ShowList';

class ShowList extends React.PureComponent {

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

  componentDidMount() {

    let productUrl = 'http://3.92.201.85:8999/products';

    fetch(productUrl)
      .then(response => response.json())
      .then(result => {
          let productArr = []
          result.map(item => {
            let rand = Math.floor(Math.random() * 5);
            item.brand = this.state.brands[rand];
            item.vendor = this.state.brands[rand];
            productArr.push(item);
            return true;
          })
          this.setState({products: productArr})
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
      <ShowListUi
        {...this.state}
        {...this.props}
        filterByBrand={this.filterByBrand}
      />
    )

  }
}

ShowList.propTypes = {
  listView: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  onChangeListView: PropTypes.func,
}

export default connect(
  state => state,
  dispatch => ({
    onChangeListView: view => dispatch(changeListView(view))
  })
)(ShowList)
