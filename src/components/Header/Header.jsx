import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    searchValue: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  static defaultProps = {
    searchValue: ''
  };

  static normalizeSearchValue(value) {
    return value.slice(1);
  }

  constructor(props) {
    super(props);

    const searchValue = Header.normalizeSearchValue(props.searchValue);
    this.state = { searchValue };
  }

  componentWillReceiveProps(nextProps) {
    const searchValue = Header.normalizeSearchValue(nextProps.searchValue);
    this.setState({ searchValue });
  }

  getFixedSearchValue() {
    const { searchValue } = this.state;

    return searchValue
      .split('/')
      .filter(it => it)
      .join('/');
  }

  getTargetUrl() {
    return `/${this.getFixedSearchValue()}`;
  }

  handleOnChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.handleOnSearch(e);
    }
  };

  handleOnSearch = () => {
    const { onSearch } = this.props;
    const url = this.getTargetUrl();
    onSearch(url);
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="header">
        <h1 className="text-center text-light">GitHub Client</h1>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="input-group">
              <input
                type="text"
                value={searchValue}
                onChange={this.handleOnChange}
                onKeyUp={this.handleKeyUp}
                className="form-control"
                placeholder="User/Repository name"
                aria-label="user-repository"
              />
              <span className="input-group-btn">
                <button className="btn btn-secondary" onClick={this.handleOnSearch}>
                  Go
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
