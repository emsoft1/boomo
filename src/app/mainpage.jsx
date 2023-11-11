import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/mainpage.module.css";
export default function MainPage() {
    return (
        <div>
            <h1>Wählt dein Avatar</h1>
            <div className={styles.box}>
                <textarea
                    className={styles.textarea}
                    placeholder="Eine Nachricht Senden"
                />
                <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={styles.icon}
                    size="0.2x"
                />
            </div>
        </div>
    );
}
