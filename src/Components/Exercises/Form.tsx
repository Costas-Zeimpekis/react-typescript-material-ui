import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 250
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;

      return exercise
        ? exercise
        : {
            title: '',
            description: '',
            muscles: ''
          };
    }

    static getDerivedStateFromProps({ exercise }) {
      return exercise || null;
    }

    handleChange = name => ({ target: { value } }) =>
      this.setState({
        [name]: value
      });

    handleSubmit = () => {
      // TODO: validate

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...this.state
      });

      this.setState(this.getInitState());
    };

    render() {
      const { title, description, muscles } = this.state,
        { classes, exercise, muscles: categories } = this.props;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange('muscles')}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      );
    }
  }
);
