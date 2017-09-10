import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: props.firstname,
      surname: props.surname,
    };
  }

  onChangeFirstname = ({ target: { value } }) => {
    this.setState({ firstname: value });
  }

  onChangeSurname = ({ target: { value } }) => {
    this.setState({ surname: value });
  }

  onUpdate = () => {
    const { firstname, surname } = this.state;
    this.props.onUpdate({ id: this.props.id, firstname, surname });
  }

  onDelete = () => {
    // const { firstname, surname } = this.state;
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  hasNotChange = () => {
    const { firstname, surname } = this.state;
    return this.props.firstname === firstname && this.props.surname === surname;
  }

  render() {
    const { firstname, surname } = this.state;

    return (
      <tr>
        <td>
          <input type="text" value={firstname} onChange={this.onChangeFirstname} />
        </td>
        <td>
          <input type="text" value={surname} onChange={this.onChangeSurname} />
        </td>
        <td>
          <button onClick={this.onUpdate} disabled={this.hasNotChange()}>Update</button>
          <button onClick={this.onDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default User;