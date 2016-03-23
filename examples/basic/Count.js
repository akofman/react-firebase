import React, { PropTypes } from 'react';
import { connect } from 'react-firebase';
import { partial } from 'lodash';

const Count = ({ count, setCount }) => (
  <div>
    <p>Count: {count || 0}</p>

    <button onClick={partial(setCount, count - 1)}>Decrement</button>
    <button onClick={partial(setCount, count + 1)}>Increment</button>
  </div>
);

Count.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func.isRequired,
};

const mapPropsToSubscriptions = () => ({ count: 'count' });
const mapRefToProps = firebase => ({
  setCount: count => firebase.child('count').set(count),
});

export default connect(mapPropsToSubscriptions, mapRefToProps)(Count);