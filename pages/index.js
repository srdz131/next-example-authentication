import React from "react";
import Nav from '../components/Nav';
import {Home} from '../components/Home';

export default function Index(props) {
    console.log(props);
    return (
        <div>
            <Nav >
                <Home/>
            </Nav>
        </div>
    );
}