import { Box } from '@material-ui/core'
import React from 'react'
import { useStyle } from './RevenueGraph.style'
import Graph from '../../assets/graph.png'

const RevenueGraph = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <img src={Graph} alt="graph" className={classes.child} />
    </Box>
  )
}

export default RevenueGraph
