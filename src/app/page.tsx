import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading.client";
import MainPage from "./mainpage";
import ThemeStore from "./themeStore";
import Teachers from "./teachers";
import Result from "./result";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <Loading /> */}
            {/* <MainPage /> */}
            <Result />
        </main>
    );
}
