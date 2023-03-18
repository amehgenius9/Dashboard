import React from 'react'
import { useStyle } from '../AppBar/AppBar.style'
import img from '../../assets/search icon.svg'
import { Box } from '@material-ui/core';



const SearchIcon = () => {
    const classes = useStyle();
  return (
    <Box>
        <img className={classes.child} src={img} alt="search icon"/>
    </Box>
  )
}

export default SearchIcon
