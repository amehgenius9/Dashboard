import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './BarChartSectionSection.style'
import Chart from '../../assets/pie chart.png'

const BarChartSection = ({header, amount, more}) => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant='body1' className={classes.child1}>
          {header}
        </Typography>
        <Typography variant='body1' className={classes.child2}>
          {amount}
        </Typography>
        <Typography variant='body1' className={classes.child3}>
          {more}
        </Typography>
      </Box>
      <Box>
        <img src={Chart} alt="chart" className={classes.chart} />
      </Box>
    </Box>
  )
}

export default BarChartSection
