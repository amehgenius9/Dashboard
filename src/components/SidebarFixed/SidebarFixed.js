import { Box } from '@material-ui/core'
import React from 'react'
import SidebarButton from '../SidebarButtons/SidebarButton'
import {business} from './constants'
import { business2 } from './constants'
import { useStyle } from './SidebarFixed.style'


const SidebarFixed = () => {
    const classes = useStyle()

  return (
    <Box className={classes.root}>
        <Box className={classes.upperBtn}>
        {business.map(item => (
            <SidebarButton image={item?.icon} />
        ))}
        </Box>
        <Box className={classes.lowerBtn}>
        {business2.map(item => (
            <SidebarButton image={item?.icon} />
        ))}
        </Box>
      
    </Box>
  )
}

export default SidebarFixed
