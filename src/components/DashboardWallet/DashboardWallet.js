import { Box } from '@material-ui/core'
import React from 'react'
import DashboardWalletDetails from '../DashboardWalletDetails';
import DashboardWalletStatus from '../DashboardWalletStatus';
import { useStyle } from './DashboardWallet.style'

const DashboardWallet = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardWalletStatus className={classes.child1} />
      <DashboardWalletDetails className={classes.child2} description='your wallet & bank account' number='0123456789' bank='city bank' />
    </Box>
  )
}

export default DashboardWallet
