import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const QuestionPanel = ({ question, className, ...rest }) => {
  const classes = useStyles();

  return (
    <form className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Current Question" />
        <Divider />
        <CardContent>
          <Typography color="textPrimary" gutterBottom variant="h4">
            {question}
          </Typography>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}></Box>
      </Card>
    </form>
  );
};

QuestionPanel.propTypes = {
  question: PropTypes.string,
  className: PropTypes.string
};

export default QuestionPanel;
