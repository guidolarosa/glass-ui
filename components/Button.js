import { Button } from 'rebass';

export const Button = (props) => {

    return (
        <Button {...props}>
            {props.label}
        </Button>
    )
}