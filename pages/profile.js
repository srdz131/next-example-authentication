import React from 'react';
import { withAuthSync } from '../utils/auth'

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <h1>This is profile page it should be private</h1>
        </div>

    )
};

export default withAuthSync(Profile);