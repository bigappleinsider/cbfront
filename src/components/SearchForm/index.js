import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textField: {
    width: 200,
    margin: 10,
    flex: '1 0 auto',
  },
  buttonField: {
    flex: '0 0 auto',
    margin: 10,
  },
};

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: '',
      tag: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSearch(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.endpoint, this.state.tag);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <FormControl className={classes.formControl}>
            <TextField
              name="endpoint"
              value={this.state.endpoint}
              className={classes.textField}
              onChange={this.handleChange.bind(this)}
              label="URL"
              placeholder="Search URL, e.g: http://example.com"
            />
            <TextField
              name="tag"
              value={this.state.tag}
              className={classes.textField}
              onChange={this.handleChange.bind(this)}
              label="Tag"
              placeholder="Tag name, e.g: h1"
            />
            
            <Button
              onClick={this.handleSearch}
              className={classes.buttonField}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchForm);
