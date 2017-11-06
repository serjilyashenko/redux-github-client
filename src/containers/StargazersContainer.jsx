import { connect } from 'react-redux';
import PopoverWithPageWrapper from 'components/PopoverWithPageWrapper';
import { getStargazersState } from 'redux/state/reducer';
import { fetch } from 'redux/state/stargazers/actions';

const mapStateToProps = (state, { fullName }) => ({
  id: fullName,
  payload: getStargazersState(state),
  content: JSON.stringify(state.stargazers.data) || '',
  left: true
});

const mapDispatchToProps = (dispatch, { login }) => ({
  fetchData: () => dispatch(fetch(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopoverWithPageWrapper);
