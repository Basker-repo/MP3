import React from 'react'
import styled from 'styled-components';
import Routes from '../../routes';


const Style = styled.div`
  display: inline-block;
  width: 82%;
  float: left;
  padding: 0 0 0 .5%;
  @media all and (min-width: 0px) and (max-width: 480px) {
    width: 100%;
  }
`;

export default function ContentWrapper(props) {
  return(
    <Style>
      <Routes {...props} />      
    </Style>
  );
}
