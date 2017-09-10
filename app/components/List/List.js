import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <table className="list">
    <tbody>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
      {children}
    </tbody>
  </table>
);

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default List;
