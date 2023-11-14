import styles from "./styles/teachers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVolumeHigh,
    faCaretLeft,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
export default function Teachers() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
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
                <div className={styles.info_container}>
                    <div className={styles.info}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sed suscipit
                            suspendisse interdum quis aenean mauris dui nisi.
                            Sed quam tincidunt odio velit laoreet nulla augue.
                            Vitae at at pellentesque ut aliquet lacus
                            scelerisque rhoncus. Vitae lacus eget mattis commodo
                            sit ac volutpat. Cras egestas sit porta nec sit
                            bibendum. Commodo feugiat nisl tincidunt nulla at
                            nam. Quam suspendisse viverra imperdiet fringilla
                            id. Blandit non in massa vitae pellentesque
                            tristique neque. Hac sit at egestas neque mattis mi.
                            Pharetra id cursus ac diam. Facilisi tellus felis
                            egestas feugiat nunc magna. Quisque eu enim sed in
                            pellentesque.
                        </p>
                        <div className={styles.btn_container}>
                            <div className={styles.btn}>
                                <h4>Regenerate</h4>
                                <div className={styles.btn_icon}>
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        width="30px"
                                    />
                                </div>
                            </div>
                            <div className={styles.btn}>
                                <h4>Regenerate</h4>
                                <div className={styles.btn_icon}>
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        width="30px"
                                    />
                                </div>
                            </div>
                            <div className={styles.btn_icon}>
                                <FontAwesomeIcon
                                    icon={faVolumeHigh}
                                    width="30px"
                                    color="black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.teacher_icon}>
                        <img src="/t1.png" className={styles.teach_img} />
                    </div>
                </div>
                <div className={styles.teacher_box}>
                    <img
                        src="/teacher/t (1).png"
                        className={styles.teachers_img_box}
                    />
                    <img
                        src="/teacher/t (2).png"
                        className={styles.teachers_img_box}
                    />
                    <img
                        src="/teacher/t (3).png"
                        className={styles.teachers_img_box}
                    />
                    <img
                        src="/teacher/t (4).png"
                        className={styles.teachers_img_box}
                    />
                </div>
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
