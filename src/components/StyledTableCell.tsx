import TableCell from '@material-ui/core/TableCell';
import { styled } from '@material-ui/core/styles';

const StyledTableCell = styled(TableCell)(
        ({theme}) => ({backgroundColor: theme.palette.primary.light})
)

export default StyledTableCell;