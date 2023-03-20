import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { amounts } from './constants';
import {items} from './constants.js'
import { useStyle } from './ExpensesBreakdown.style'
import { dots } from './constants';

const ExpensesBreakdown = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <Box>
            {amounts.map(amount => (
                <Typography variant='body1' className={classes.child1}>
                    {amount.amount}
                </Typography>
            ))}
        </Box>
        <Box>
            {dots.map(dot => (
                <Typography variant='body1' className={classes.child3}>
                    {dot.dot}
                </Typography>
            ))}
        </Box>
        <Box>
            {items.map(item => (
                <Typography variant='body1' className={classes.child2}>
                    {item.title}
                </Typography>
            ))}
        </Box>
    </Box>
  )
}

export default ExpensesBreakdown