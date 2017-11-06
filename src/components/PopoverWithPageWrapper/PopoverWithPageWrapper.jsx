import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'components/Popover';
import PageWrapper from 'components/PageWrapper';

const PopoverWithPageWrapper = ({ payload, id, content, children, fetchData, left }) => {
  const { loading, error, data } = payload;
  const wrappedContent = (
    <PageWrapper id={id} loading={loading} error={error} fetchData={() => {}}>
      {content}
    </PageWrapper>
  );

  const handleOnShow = () => {
    if (!data) {
      fetchData();
    }
  };

  return (
    <Popover content={wrappedContent} onShow={handleOnShow} left={left}>
      {children}
    </Popover>
  );
};

PopoverWithPageWrapper.defaultProps = {
  left: false
};

PopoverWithPageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  left: PropTypes.bool,
  payload: {
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.shape()
  }.isRequired,
  id: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default PopoverWithPageWrapper;
