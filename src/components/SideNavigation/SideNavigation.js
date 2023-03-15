import React from 'react'
import { useStyle } from '../SideNavigation/SideNavigation.style'
import SidebarFixed from '../SidebarFixed'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SidebarContent from '../SidebarContent/SidebarContent';
import { Box } from '@material-ui/core';

const SideNavigation = () => {
    const classes = useStyle()
  return (
    <Box className={classes.root}>
        <SidebarFixed />
        <SidebarContent />
        <ChevronLeftIcon className={classes.icon} />
    </Box>
  )
}

export default SideNavigation
