import React from 'react';
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2'; 

import useTransactions from '../useTransactions';
import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={ title === 'Income' ? classes.income : classes.expence}>
      <CardHeader title={ title } />
      <CardContent>
        <Typography variant="h5">${ total }</Typography>
        <Doughnut data={ chartData } />
      </CardContent>
    </Card>
  )
}

export default Details;