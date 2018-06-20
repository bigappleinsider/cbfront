import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { fetchSearch } from '../../actions/searchActions';
import SearchForm from '../../components/SearchForm';

const styles = {
  codeWrap: {
    margin: 10,
  }
};

class Grid extends Component {
  handleSearch(endpoint, tag) {
    const { dispatch } = this.props;
    dispatch(fetchSearch(endpoint, tag));
  }
  render() {
    const { data, isLoading, classes } = this.props;
    const keys = Object.keys(data)
    return(
      <div>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        {isLoading && <CircularProgress size={50} />}
        {!isLoading &&
            !keys.length && (
              <Typography variant="headline" component="h3">
                Use form above to search URL for tags
              </Typography>
            )}
        <div>
          {keys.length>0 && data[keys[0]].map((item, idx) => {
            return (
             <div className={classes.codeWrap} key={idx}> 
              <Typography variant="title">
              {item.innerText}
              </Typography>
              <code>
                {item.innerHtml}
              </code>
            </div>
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

export default withStyles(styles)(connect(mapStateToProps)(Grid));
