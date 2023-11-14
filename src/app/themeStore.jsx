import styles from "./styles/themestore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVolumeHigh,
    faCaretLeft,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function ThemeStore() {
    return (
        <main className={styles.main}>
            <h3 className={styles.title}>Wähle eure Art des Storytellings</h3>

            <div className={styles.items_container}>
                <div className={styles.items}>
                    <div className={styles.btn}>
                        <h3>Ich-Form</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus morbi
                        tincidunt nullam risus quam proin. Viverra dignissim
                        venenatis mattis{" "}
                    </p>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faVolumeHigh} width="30px" />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.btn}>
                        <h3>Ich-Form</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus morbi
                        tincidunt nullam risus quam proin. Viverra dignissim
                        venenatis mattis{" "}
                    </p>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faVolumeHigh} width="30px" />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.btn}>
                        <h3>Ich-Form</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus morbi
                        tincidunt nullam risus quam proin. Viverra dignissim
                        venenatis mattis{" "}
                    </p>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faVolumeHigh} width="30px" />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.btn}>
                        <h3>Ich-Form</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus morbi
                        tincidunt nullam risus quam proin. Viverra dignissim
                        venenatis mattis{" "}
                    </p>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faVolumeHigh} width="30px" />
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.btn}>
                        <h3>Ich-Form</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lectus morbi
                        tincidunt nullam risus quam proin. Viverra dignissim
                        venenatis mattis{" "}
                    </p>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faVolumeHigh} width="30px" />
                    </div>
                </div>
            </div>
            <div className={styles.avatar}>
                <img src="/sample01.png" className={styles.avatar_img} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="131"
                    height="131"
                    viewBox="0 0 131 131"
                    fill="none"
                >
                    <circle
                        cx="65.3886"
                        cy="65.3886"
                        r="65.3886"
                        transform="matrix(-1 0 0 1 130.777 0)"
                        fill="url(#paint0_radial_193_518)"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_193_518"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(65.3886 65.3886) rotate(90) scale(65.3886)"
                        >
                            <stop stop-color="#414784" />
                            <stop
                                offset="1"
                                stop-color="#17149D"
                                stop-opacity="0"
                            />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className={styles.back_icon}>
                <FontAwesomeIcon icon={faCaretLeft} width="30px" />
            </div>
            <div className={styles.home_icon}>
                <FontAwesomeIcon icon={faHouse} width="40px" />
            </div>
        </main>
    );
}
