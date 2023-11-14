import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/mainpage.module.css";
export default function MainPage() {
    return (
        <div className={styles.main}>
            <h1>Wählt dein Avatar</h1>
            <div className={styles.mainchar}>
                <div className={styles.char}>
                    <img
                        src="/char/char (1).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (2).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (3).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (4).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (5).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (6).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (7).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (8).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (9).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
                <div className={styles.char}>
                    <img
                        src="/char/char (10).png"
                        alt=""
                        className={styles.charimg}
                    />
                </div>
            </div>
            <div className={styles.box}>
                <textarea
                    className={styles.textarea}
                    placeholder="Eine Nachricht Senden"
                />

                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={styles.icon}
                    size="xs"
                    width="30px"
                />
            </div>
        </div>
    );
}
