// Adjusted JSX using regular img tags
"use client";
import { useEffect, useState } from "react";
import styles from "../styles/loading.module.css";

export default function Loading() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 1) % 360);
        }, 30); // Adjust the speed as needed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>BOOMRANG</h1>
            <div className={styles.cir}>
                <div
                    className={styles.circle_container}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {[...Array(10).keys()].map((index) => (
                        <img
                            key={index}
                            src={`/circle/img${index + 1}.png`} // Your image path
                            className={styles.circle_img}
                            style={{
                                transform: `rotate(${
                                    index * 36
                                }deg) translate(300px) rotate(${-(
                                    index * 36 +
                                    rotation
                                )}deg)`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
