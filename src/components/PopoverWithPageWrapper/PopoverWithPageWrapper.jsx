import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'components/Popover';
import PageWrapper from 'components/PageWrapper';

const PopoverWithPageWrapper = ({ payload, id, content, children, fetchData, left }) => {
  const { loading, error } = payload;
  const wrappedContent = (
    <PageWrapper loading={loading} error={error}>
      {content}
    </PageWrapper>
  );

  const handleOnShow = () => {
    if (!payload.data) {
      return fetchData();
    }
    if (id !== payload.id) {
      return fetchData();
    }
    return null;
  };

  return (
    <Popover content={wrappedContent} left={left} onShow={handleOnShow}>
      {children}
    </Popover>
  );
};

PopoverWithPageWrapper.defaultProps = {
  left: false,
  id: '',
};

PopoverWithPageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  left: PropTypes.bool,
  payload: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.shape(),
  }).isRequired,
  id: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
};

export default PopoverWithPageWrapper;
