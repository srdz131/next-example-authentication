import React from 'react';
import { withAuthSync } from '../utils/auth'
import Nav from "../components/Nav";

const Profile = () => {
    return (
        <div>
            <Nav>
                <h1>Hi this is profile page and it's private</h1>
            </Nav>
        </div>
    );
};

export default withAuthSync(Profile);