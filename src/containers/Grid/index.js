import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchSearch } from '../../actions/searchActions';

import SearchForm from '../../components/SearchForm';

class Grid extends Component {
  handleSearch(endpoint, tag) {
    const { dispatch } = this.props;
    dispatch(fetchSearch(endpoint, tag));
  }
  render() {
    const { data, isLoading } = this.props;
    const keys = Object.keys(data)
    return(
      <div>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        {isLoading && <CircularProgress size={50} />}
        <div>
          {keys.length>0 && data[keys[0]].map(item => {
            return (
              <Typography variant="title">
              {item.innerText}
              </Typography>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, isLoading } = state.searchReducer;
  return {
    data,
    isLoading,
  };
};

export default connect(mapStateToProps)(Grid);
