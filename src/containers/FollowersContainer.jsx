import { connect } from 'react-redux';
import Popover from 'components/Popover';
import { getFollowersState } from 'redux/state/reducer';
import { fetch } from 'redux/state/followers/actions';

const mapStateToProps = (state, { login }) => ({
  id: login,
  payload: getFollowersState(state),
  content: JSON.stringify(state.followers.data) || ''
});

const mapDispatchToProps = (dispatch, { login }) => ({
  fetchData: () => dispatch(fetch(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(Popover);
