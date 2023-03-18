import { Box } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardWalletButtons.style'
import {btns} from './constants'

const DashboardWalletButtons = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
    {btns.map(item => (
        <button className={classes.btn}>{item.title}</button>
    ))}
      
    </Box>
  )
}

export default DashboardWalletButtons