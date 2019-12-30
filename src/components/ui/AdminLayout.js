import React, { useState, useEffect } from "react";
import Header from "./Header";
// import MainWrapper from './MainWrapper';
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";

// const isMobile = window.innerWidth <= 480;

const Style = styled.main`
  margin-top: 0.5em;
  @media all and (min-width: 0px) and (max-width: 480px) {
  }
`;

export default function AdminLayout(props) {
  let auth = JSON.parse(window.localStorage.getItem("auth"));

  const [hold] = useState(0);
  const [notificationsData, setNotificationsData] = useState({});
  const [productsData, setProductsData] = useState([])
  const [customersData, setCustomersData] = useState([])
  const [vendorsData, setVendorsData] = useState([])



  useEffect(() => {
    fetch(`http://3.92.201.85:8999/notification/for/${auth.id}`)
      .then(response => response.json())
      .then(result => {
        setNotificationsData(result);
      })
      .catch(err => {
        console.log(err);
      });

    fetch(`http://3.92.201.85:8999/products`)
      .then(response => response.json())
      .then(result => {
        setProductsData(result)
      })
      .catch(err => {
        console.log(err);
      });


    fetch(`http://3.92.201.85:8999/customers`)
      .then(response => response.json())
      .then(result => {
        setCustomersData(result)
      })
      .catch(err => {
        console.log(err);
      });

    fetch(`http://3.92.201.85:8999/vendors`)
      .then(response => response.json())
      .then(result => {
        setVendorsData(result)
      })
      .catch(err => {
        console.log(err);
      });

  }, [hold]);


  function getProducts(searchTerm) {
    let products;
    if (searchTerm && searchTerm !== undefined) {
      products = productsData.filter(product => {
        let name = product.name || product.product_name;
        if(name !== undefined) {
          return name.toLowerCase().includes(searchTerm.toLowerCase())
        }
        return false;
      }
      );
      return products;
    }
    return [];
  }

  function getCustomers(searchTerm) {
    let customers;
    if (searchTerm && searchTerm !== undefined) {
      customers = customersData.filter(customer => {
        let name = customer.first_name + customer.last_name;
        if(name) {
          return name.toLowerCase().includes(searchTerm.toLowerCase())
        }
        return false;
      });
      return customers;
    }
    return [];
  }

  function getVendors(searchTerm) {
    let vendors;
    if (searchTerm && searchTerm !== undefined) {
      vendors = vendorsData.filter(vendor => {
        let name = vendor.first_name + vendor.last_name + vendor.company_name + vendor.vendor_name;
        if(name) {
          return name.toLowerCase().includes(searchTerm.toLowerCase())
        }
        return false;
      });
      return vendors;
    }
    return [];
  }

  return (
    <>
      <Header
        {...props}
        getProducts={e => getProducts(e)}
        getCustomers={e => getCustomers(e)}
        getVendors={e => getVendors(e)}
        auth={auth}
        notificationsData={notificationsData}
      />

      <Style>
        <Sidebar {...props} auth={auth} />

        <ContentWrapper {...props} auth={auth} />
      </Style>
    </>
  );
}
