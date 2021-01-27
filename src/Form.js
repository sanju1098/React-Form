import React, { PureComponent } from 'react';
import Button from './Button';

export class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    issue: ''
                };

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler=(event)=> {
    this.setState({
        firstName:event.target.value
    })
  }

  lasthandler=(event)=> {
    this.setState({
        lastName:event.target.value
    })
  }

  emailhandler=(event)=> {
    this.setState({
        email:event.target.value
    })
  }

  phonehandler=(event)=> {
    this.setState({
        phone:event.target.value
    })
  }

  addresshandler=(event)=> {
    this.setState({
        address:event.target.value
    })
  }
  issuehandler=(event)=> {
    this.setState({
        issue:event.target.value
    })
  }


  handleSubmit(event) {
    alert('The details are:-\n Name:' + this.state.firstName + " " + this.state.lastName
            + "  \n Email:"+ this.state.email + "\nPhone Number:" + this.state.phone); 
    alert('The address of ' + this.state.firstName + " is " + this.state.address
            + "\n Problem faced with: "+ this.state.issue);  
            
    
    
    
    event.preventDefault();
  }

  render() {
        return (
        <div class="container">
            <div class="card-body">
                <h1>Ticket Raising Form</h1>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <div class="input-group">
                                <label class="label">
                                    First name<span>*</span>
                                    <input class="input-style" type="text" value={this.state.firstName} onChange={this.firsthandler} required />
                                </label>
                                <label class="label">
                                    Last name<span>*</span>
                                    <input class="input-style" type="text" value={this.state.lastName} onChange={this.lasthandler} required />
                                </label>
                            </div>
                        
                            <div class="input-group">
                                <label class="label">
                                    Email<span>*</span>
                                    <input class="input-style" type="email" value={this.state.email} onChange={this.emailhandler} required />
                                </label>
                                <label class="label">
                                    Phone Number<span>*</span>
                                    <input class="input-style" type="text" value={this.state.phone} onChange={this.phonehandler} required />
                                </label>
                            </div>
                            
                            <div class="input-group">
                                <label class="label">
                                    Address<span>*</span><br></br>
                                        <textarea class="input-area" value={this.state.address} onChange={this.addresshandler} required ></textarea>
                                </label>
                            </div>
                            
                            <div class="input-group">
                                <label class="label">Issue Type<span>*</span>
                                <select name="issue" value={this.state.issue} onChange={this.issuehandler} required >
								    <option selected value="">Choose a option</option>                                    
                                    <option value="Wifi">Wifi Issue</option>
                                    <option value="Connectivity">Connectivity Issue</option>
                                    <option value="Lan">Lan Issue</option>                                    
									<option value="Router">Router Issue</option>
									<option value="Modem">Modem Issue</option>
                                </select>
                                </label>
                            </div>
                            
                            <div class="input-group">
                                <label class="label">Summary..<br></br>
                                <textarea class="input-area2"></textarea>
                                </label>
                            </div>
                            <Button />
                            
                        </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Form
