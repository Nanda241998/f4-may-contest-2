// TableRow.js

import React from 'react';

const TableRow = ({ coin }) => {
  const { name, id, image, symbol, current_price, total_volume } = coin;

  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>
        <img src={image} alt={name} width="30" height="30" />
      </td>
      <td>{symbol}</td>
      <td>{current_price}</td>
      <td>{total_volume}</td>
    </tr>
  );
};

export default TableRow;
