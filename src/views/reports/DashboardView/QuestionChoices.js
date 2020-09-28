import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles,
  Grid,
  Fab
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {}
});

const Choices = ({ click, choices, className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const renderChoices = () => {
    let temp = [];

    if (choices !== undefined) {
      choices.forEach(choice => {
        temp.push(choice);
      });
    }
    return temp.map((choice, index) => {
      return (
        <Grid key={index} item lg={12} sm={12} xl={12} xs={12}>
          <Button  onClick={() => click(index)} color="primary" variant="contained" size="large">
            {choice}
          </Button>
          
        </Grid>
      );
    });
  };

  return (
    <form className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {renderChoices()}
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Choices.propTypes = {
  choices: PropTypes.array,
  className: PropTypes.string
};

export default Choices;
