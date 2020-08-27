import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ActionButtonGroup from 'components/ActionButtonGroup';

const ListItemWrapper = ({ children, iconAction1, iconAction2 }) => {
  return(
    <ListItem>
      {children}
      <ActionButtonGroup iconAction1={iconAction1} iconAction2={iconAction2} />
    </ListItem>
  );
}

export default ListItemWrapper;