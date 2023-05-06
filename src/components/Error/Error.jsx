import {React, useState} from 'react'
import classes from '../Success/Success.module.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Error = (props) => {

    const [show, setShow] = useState(true);

    return (
        <div id={classes.success_alert}>
            <Alert variant="danger" id={classes.success}>
                <Alert.Heading>Error</Alert.Heading>
                <p>{props.data}</p>
            </Alert>
        </div>
    )

}

export default Error;