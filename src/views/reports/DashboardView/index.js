import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, makeStyles, Box } from '@material-ui/core';
import Page from 'src/components/Page';
import Choices from './QuestionChoices';
import Panel from './QuestionPanel';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import ResponseList from './responses/responseList';
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const [state, setState] = useState({ message: '', name: '' })
  const [response, setResponse] = useState([])
  const [question, setQuestion] = useState()
  const [choices, setChoices] = useState();
  
  useEffect(() => {

    // captures server response to user answer 
    socket.on('message', ({ name, message }) => {
      setResponse([...response, { name, message }])
    })

    // captures question from server
    socket.on('question', ({resp, userChoices}) => {
      setQuestion(resp)
      setChoices(userChoices)
    })
  }, [choices, response])

  // const renderChoices = () => {
  //   let temp = []
  //   if(choices !== undefined){
  //     choices.forEach(choice => {
  //         temp.push(choice)
  //     })
  //   }
  // }
    const onChoiceClick = (choice) => {
      console.log(choice)
      let { name, message } = state
      message = choice
      socket.emit('message', { name, message })
    }
   
    // return temp.map((choice,index) => {
      
    //   return <p key={index} data-id='0' onClick={()=>onChoiceClick(index)}><button>{choice}</button></p>
    // })

  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
      <Grid item lg={12} md={12} xl={9} xs={12}>
      <Box mb={3}>
            <Panel question={question}/>
      </Box>
          </Grid> 
      <Grid item lg={12} md={12} xl={9} xs={12}>
        {/* {renderChoices()} */}
            <Choices choices={choices} click={onChoiceClick}/>
          </Grid> 
      </Container>
    </Page>
  );
};

export default Dashboard;
