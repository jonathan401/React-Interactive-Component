import React from 'react';
import '../styles/ButtonList.css';

const ButtonList = props => {
  return <div className="rate-btns">{props.children}</div>;
};

export default ButtonList;
