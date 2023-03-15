import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { contents } from './constants';
import { useStyle } from './SidebarContent.style';

function SidebarContent() {
    const classes = useStyle()
  return (
    <Box>
      <Typography variant='paragraph' className={classes.topHeader}>Amstrong Enterprise</Typography>
      {contents.map((section, index) => (
                <Box className={classes.root} key={index}>
                    {section.map((item, index) => (
                        item.type === "link" ? (
                            <Typography variant='paragraph' key={index} className={classes.child}>
                                {item.icon}
                                {item.text}
                            </Typography>
                        ) : (
                            <Typography variant='paragraph' className={classes.header} key={index}>{item.text}</Typography>
                        )
                    ))}
                </Box>
            ))}
    </Box>
  );
}

export default SidebarContent;

