import React, { PureComponent } from 'react';
import './Button.css';
import { Button } from 'react-bootstrap'

export class Form extends PureComponent {
    render() {
                return (
                    <div className="button-demo">
                        <div className="card">
                            <Button type="Submit" value="Submit">Submit</Button>
                         </div>   
                    </div>
        )
    }
}

export default Form

