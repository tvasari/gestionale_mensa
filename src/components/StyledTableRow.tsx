import TableRow from '@material-ui/core/TableRow';
import { styled } from '@material-ui/core/styles';

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export default StyledTableRow;
  