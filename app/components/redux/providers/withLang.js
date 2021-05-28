import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLang } from '../actions/langActions';

const withLang = (WrappedComponent) => {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

export default withLang;

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLang,
    },
    dispatch,
  );

function mapStateToProps(state) {
  const { lang } = state.langReducer;
  return { lang };
}
