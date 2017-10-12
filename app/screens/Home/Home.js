import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Users from '../../components/Users';
import { getAll, updateUser, addUser, deleteUser } from '../../actions/users';

export class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  addNewRow = () => {
    this.props.addUser();
  }

  render() {
    const { users, updateUser: actionUpdate, deleteUser: actionDelete } = this.props;

    return (
      <div>
        <h2 className="app__header">CRUD Example</h2>
        <div className="app__list">
          <Users
            data={users}
            onUpdate={actionUpdate}
            onDelete={actionDelete}
          />
        </div>
        <div className="app__controls">
          <Button color="green" fluid onClick={this.addNewRow}>Add New</Button>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  getAll: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = {
  users: [],
};

function mapStateToProperties(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(getAll()),
    updateUser: user => dispatch(updateUser(user)),
    addUser: () => dispatch(addUser()),
    deleteUser: id => dispatch(deleteUser(id)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(HomeContainer);
