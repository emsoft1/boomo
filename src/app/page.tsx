import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading.client";
import MainPage from "./mainpage";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <Loading /> */}
            <MainPage />
        </main>
    );
}
