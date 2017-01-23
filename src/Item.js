import React, { PropTypes } from 'react';

const BASE_URL = 'https://maps.apple.com';

function Item(props) {
  const {
    center,
    country,
    formattedAddressLines,
    name,
  } = props;

  let url = `${BASE_URL}/?ll=${center.lat},${center.lng}`;

  let address;
  if (formattedAddressLines) {
    address = formattedAddressLines.map((line, i) => (<p key={i}>{line}</p>));
    url += `&address=${formattedAddressLines.join(',')}`;
  } else {
    address = (<p>{country}</p>);
  }

  return (
    <li>
      <a href={encodeURI(url)}>{name}</a>
      {address}
    </li>
  );
}

Item.propTypes = {
  center: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  formattedAddressLines: PropTypes.array,
  name: PropTypes.string.isRequired,
};

export default Item;
