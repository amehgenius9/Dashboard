import { Box } from '@material-ui/core'
import React from 'react'
import DashboardWalletStatus from '../DashboardWalletStatus';
import { useStyle } from './DashboardWallet.style'

const DashboardWallet = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardWalletStatus />
    </Box>
  )
}

export default DashboardWallet
