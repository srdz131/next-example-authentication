import React from "react";
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a>About Page</a>
            </Link>
            <Link href="/profile">
                <a>Profile Page</a>
            </Link>
            <p>Hello Next.js</p>
        </div>
    );
}