import styles from "./TechNav.module.css";
import Exit from "../../../../public/images/icons/Exit";
import { Link } from "@inertiajs/react";
export default function AgentNav() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.mainTitle}>Панель тех специалиста</h1>
                <div>
                    <Link
                        className={`${styles.button} ${styles.buttonRed}`}
                        href="/logout"
                    >
                        <Exit />
                        <p>Выход</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
