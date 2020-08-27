import React from 'react';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';

const ActionButtonGroup = ({ iconAction1, iconAction2 }) => {
  return(
    <ListItemSecondaryAction>
      <IconButton edge="end">
        { iconAction1 }
      </IconButton>
      <IconButton edge="end">
        { iconAction2 }
      </IconButton>
    </ListItemSecondaryAction>
  );
}

export default ActionButtonGroup;