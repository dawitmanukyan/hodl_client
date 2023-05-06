import {React, useState} from 'react'
import classes from './Success.module.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Success = (props) => {

    const [show, setShow] = useState(true);

    return (
        <div id={classes.success_alert}>
            <Alert variant="success" id={classes.success}>
                <Alert.Heading>Success</Alert.Heading>
                <p>{props.data}</p>
            </Alert>
        </div>
    )

}

export default Success;