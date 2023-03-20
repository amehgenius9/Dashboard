import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardProfitAndLossSection.style'
import ColumnChart from '../../assets/column chart.png'

const DashboardProfitAndLossSection = ({Description, amount, more}) => {
    const classes = useStyle();
  return (
    <Box className={classes.root} >
      <Box>
        <Typography variant='body1' className={classes.child1}>
          {Description}
        </Typography>
        <Typography variant='body1' className={classes.child2}>
          Net Profit for <span className={classes.subChild2}>the last month</span>
        </Typography>
        <Typography variant='body1' className={classes.child3}>
          {amount}
        </Typography>
        <Typography variant='body1' className={classes.child4}>
          {more}
        </Typography>
      </Box>
      <Box>
        <img className={classes.chart} src={ColumnChart} alt="column chart" />
      </Box>
    </Box>
  )
}

export default DashboardProfitAndLossSection
