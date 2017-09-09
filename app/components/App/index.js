import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import { getAll } from '../../actions/users';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <ul>
          {
            users.map((user, i) => <li key={i}>{user.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

AppContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  getAll: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  users: [],
};

function mapStateToProperties(state) {
  return {
    users: state.users.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(getAll()),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
