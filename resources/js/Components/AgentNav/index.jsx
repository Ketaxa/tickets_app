import styles from "./AgentNav.module.css";
import Plus from "../../../../public/images/icons/Plus";
import Tick from "../../../../public/images/icons/Tick";
import Exit from "../../../../public/images/icons/Exit";
import { Link } from "@inertiajs/react";
export default function AgentNav({ openModalTicket, openModalSubscription }) {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.mainTitle}>Панель поддержки</h1>
                <div className={styles.btnBar}>
                    <button
                        className={`${styles.button} ${styles.buttonBlue}`}
                        onClick={openModalTicket}
                    >
                        <Plus />
                        <p>Создать тикет</p>
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonGreen}`}
                        onClick={openModalSubscription}
                    >
                        <Tick />
                        <p>Проверить подписку</p>
                    </button>
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
