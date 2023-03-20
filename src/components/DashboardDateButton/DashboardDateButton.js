import { Button } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardButton.style'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DashboardDateButton = () => {
    const classes = useStyle();
  return (
    <Button className={classes.root} variant='outlined' endIcon={<ExpandMoreIcon />}>
      last 30 days
    </Button>
  )
}

export default DashboardDateButton
