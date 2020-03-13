import React from 'react';
import Link from "next/link";

const Nav = ({children}) => {
    return (
        <div>
            <Link href="/">
                <a>Home Page</a>
            </Link>
            <Link href={"/about"}>
                <a>About Page</a>
            </Link>
            <Link href={"/profile"}>
                <a>Profile Page</a>
            </Link>
            {children}
        </div>
    );
};

export default Nav;