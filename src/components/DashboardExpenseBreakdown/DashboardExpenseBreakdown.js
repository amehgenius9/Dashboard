import { Box } from '@material-ui/core'
import React from 'react'
import BarChartSection from '../BarChartSection/BarChartSection';
import ExpensesBreakdown from '../ExpensesBreakdown';
import { useStyle } from './DashboardExpenseBreakdown.style'

const DashboardExpenseBreakdown = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <BarChartSection header="expense breakdown" amount="#3,500,00.00" more="view more" />
      <ExpensesBreakdown />
    </Box>
  )
}

export default DashboardExpenseBreakdown
