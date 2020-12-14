import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(Button)(
    ({ theme }) => ({
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: '1em'
    })
)

export default StyledButton;