import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import User from './User';

class Users extends PureComponent {
  render() {
    const { data, onUpdate, onDelete } = this.props;

    return (
      <Table color="teal" selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firstname</Table.HeaderCell>
            <Table.HeaderCell>Surname</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            data.map(({ id, firstname, surname }) => (
              <User
                key={id}
                id={id}
                firstname={firstname}
                surname={surname}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))
          }
        </Table.Body>
      </Table>
    );
  }
}

Users.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Users;
