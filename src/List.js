import React, { PropTypes } from 'react';

import './List.css';

import Item from './Item';

function List(props) {
  const { items } = props;

  // Don't display component if no items
  if (!items || !items.length) {
    return false;
  }

  return (
    <ul className="list">
      {items.map((item, i) => (<Item key={i} {...item} />))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

export default List;
