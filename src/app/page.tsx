"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading.client";
import MainPage from "./mainpage";
import ThemeStore from "./themeStore";
import Teachers from "./teachers";
import Result from "./result";
import { useState } from "react";

export default function Home() {
    const [page, setpage] = useState(0)

const nextpage = () => {
    setpage(page + 1)
    console.log(page)
}

    return (
        <main className={styles.main} onClick={nextpage}>
            {/* <Loading /> */}
        {page == 0 &&
            <MainPage />

        } 
        {page == 1 && 
    <ThemeStore />
        }
        {page == 2 &&
         <Teachers /> }
        {page == 3 &&

            <Result />}
        </main>
    );
}
