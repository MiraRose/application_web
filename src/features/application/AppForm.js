import React, { Component } from 'react';
import store from '../../redux/store';
import { postApplication } from '../../redux/actions';
import { useNavigate } from "react-router-dom";

export const withNavigation = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
  } 

class AppForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applications: [],
            status: 'idle',
            application: {
                businessName: "",
                industry: "",
                email: "",
                annualSales: 50000,
                annualPayroll: 50000,
                numOfEmployees: 0,
                zipCode: "" 
            }
        };

        store.subscribe(() => {
            this.setState({
                applications: store.getState().applications
            });
        });
    }

    

    handleOnClick() {
        store.dispatch(postApplication(this.state.application))
        this.props.navigate('/')
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let application = { ...this.state.application }
        application[name] = value
        this.setState({
            application: application
        });
      }

    render() {
        return (
            <div>
                <p>Business Name</p>
                <input onChange={(e) => this.handleInputChange(e)} name="businessName" type="text"></input>
                <p>Industry</p>
                <input onChange={(e) => this.handleInputChange(e)} name="industry" type="text"></input>
                <p>Email</p>
                <input onChange={(e) => this.handleInputChange(e)} name="email" type="text"></input>
                <p>Annual Sales</p>
                <select value={this.state.application.annualSales} onChange={(e) => this.handleInputChange(e)} name="annualSales" >
                    <option value="50000">$50k</option>
                    <option value="75000">$75k</option>
                    <option value="100000">$100k</option>
                    <option value="150000">$150k</option>
                    <option value="200000">$200k</option>
                </select>
                <p>Annual Payroll</p>
                <select value={this.state.application.annualPayroll} onChange={(e) => this.handleInputChange(e)} name="annualPayroll">
                    <option value="50000">$50k</option>
                    <option value="75000">$75k</option>
                    <option value="100000">$100k</option>
                    <option value="150000">$150k</option>
                    <option value="200000">$200k</option>
                </select>
                <p>Number of Employees</p>
                <input onChange={(e) => this.handleInputChange(e)} name="numOfEmployees" type="number"></input>
                <p>Zipcode</p>
                <input onChange={(e) => this.handleInputChange(e)} name="zipCode" type="text"></input>
                <br />
                <button onClick={() => this.handleOnClick()}>Submit Application</button>
            </div>

        )
    }
}

export default withNavigation(AppForm);