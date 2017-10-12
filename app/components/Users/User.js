import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';

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
    const { onUpdate, id } = this.props;
    onUpdate({ id, firstname, surname });
  }

  onDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  hasNotChange = () => {
    const { firstname, surname } = this.state;
    const initial = this.props;
    return (initial.firstname === firstname && initial.surname === surname) || firstname === '' || surname === '';
  }

  render() {
    const { firstname, surname } = this.state;

    return (
      <Table.Row>
        <Table.Cell>
          <input type="text" className="user__input" value={firstname} onChange={this.onChangeFirstname} />
        </Table.Cell>
        <Table.Cell>
          <input type="text" className="user__input" value={surname} onChange={this.onChangeSurname} />
        </Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Button color="olive" onClick={this.onUpdate} disabled={this.hasNotChange()}>Update</Button>
            <Button.Or />
            <Button color="orange" onClick={this.onDelete}>Delete</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
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
