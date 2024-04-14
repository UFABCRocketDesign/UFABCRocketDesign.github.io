'use client'

import styles from './body.module.scss';

import React, {useState} from 'react';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Header from './header';
import Footer from './footer';

export default function Body({
    children,
  }: {
    children: React.ReactNode
  }){
    const [menuStatus, setMenuStatus] = useState<boolean>(false);

    return (
        <body className={`${inter.className} ${menuStatus? styles.block : ''}`}>
            <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus}/>
            {children}
            <Footer />
        </body>
    );
}