import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardRevenue.style'
import PieChart from '../../assets/% pie chart.png'

const DashboardRevenue = ({revenue, amount}) => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.children}>
        <Typography variant='paragraph' className={classes.child1}>
            {revenue}
        </Typography>
        <Typography variant='paragraph' className={classes.child2}>
            {amount}
        </Typography>
      </Box>
      <Box>
        <img className={classes.pieChart} src={PieChart} alt='chart' />
      </Box>
    </Box>
  )
}

export default DashboardRevenue
