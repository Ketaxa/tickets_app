import styles from "./TechNav.module.css";
import { Link } from "@inertiajs/react";
export default function AgentNav() {
    return (
        <>
            <div className={styles.container}>
                <h1>Панель тех специалиста</h1>
                <div>
                    <Link
                        className={`${styles.button} ${styles.buttonRed}`}
                        href="/logout"
                    >
                        Выход
                    </Link>
                </div>
            </div>
        </>
    );
}
