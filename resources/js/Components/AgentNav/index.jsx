import styles from "./AgentNav.module.css";
export default function AgentNav({ openModalTicket, openModalSubscription }) {
    return (
        <>
            <div className={styles.container}>
                <h1>Панель поддержки</h1>
                <div>
                    <button
                        className={`${styles.button} ${styles.buttonBlue}`}
                        onClick={openModalTicket}
                        // onClick=""
                    >
                        ➕ Создать тикет
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonGreen}`}
                        onClick={openModalSubscription}
                    >
                        ✅ Проверить подписку
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonRed}`}
                        // onClick=""
                        href="/support"
                    >
                        Выход
                    </button>
                </div>
            </div>
        </>
    );
}
