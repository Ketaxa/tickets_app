import styles from "./AgentNav.module.css";
import { Link } from "@inertiajs/react";
export default function AgentNav({ openModalTicket, openModalSubscription }) {
    return (
        <>
            <div className={styles.container}>
                <h1>Панель поддержки</h1>
                <div>
                    <button
                        className={`${styles.button} ${styles.buttonBlue}`}
                        onClick={openModalTicket}
                    >
                        ➕ Создать тикет
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonGreen}`}
                        onClick={openModalSubscription}
                    >
                        ✅ Проверить подписку
                    </button>
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
