import React, { Component } from 'react';
import store from '../../redux/store';
import { Outlet, Link } from "react-router-dom";
import styles from './Application.module.css';

export class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applications: [],
            status: 'idle',
            application: {
                businessName: "",
                industry: "",
                email: "",
                annualSales: 10000,
                anunualPayRoll: 10000,
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

    renderApplications() {
        if (this.state.applications.length > 0) {
            return (
                <div className={styles.application}>
                    <ul>
                        {this.state.applications.map(d => (<li key={d.id}>
                            Business Name: {d.businessName}
                            <br />
                            Industry: {d.industry}
                            <br />
                            Email: {d.email}
                            <br />
                            Annual Sales: {d.annualSales}
                            <br />
                            Annual Payroll: {d.annualPayroll}
                            <br />
                            Number of Employees: {d.numOfEmployees}
                            <br />
                            Zipcode: {d.zipCode}
                            <br />
                        </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <h2>No Records Exist</h2>
            )
        }
        
    }

    render() {
        return (
            <div>
                <Link to="/appForm">Submit Application</Link>
                <Outlet />
                <h1>Applications</h1>
                {this.renderApplications()}
            </div>
        )
    }
}
