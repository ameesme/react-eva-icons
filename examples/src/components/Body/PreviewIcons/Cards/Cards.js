import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from "./Card/Card";

const Wrapper = styled.div`
  display: -webkit-flex;
	display: flex;

	-webkit-justify-content: space-between;
	justify-content: space-between;

	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	
  -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
`;

const Cards = ({
  config,
  icons,
}) => {

  return (
    <Wrapper>
      {icons.map((icon, index) => (
          <Card 
            config={config} 
            name={icon.name}  
            key={index}  
          />
        ))}
    </Wrapper>
  );
};

Cards.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  config: PropTypes.object,
};

Cards.defaultProps = {
  icons: [],
  config: {},
};

export default Cards;