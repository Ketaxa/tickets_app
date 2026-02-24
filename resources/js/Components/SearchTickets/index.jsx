import styles from "./SearchTickets.module.css";
export default function SearchTickets() {
    return (
        <div className={styles.container}>
            <input
                type="text"
                id="search"
                placeholder="Поиск по ID или email"
                className={styles.input}
                // value=""
            />
            <button
                // onClick=""
                className={`${styles.button} ${styles.buttonGray}`}
            >
                Найти
            </button>
            <div className={styles.button_bar}>
                <button
                    // className="{{ ($tab === 'active' && $sort === 'answered') ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200' }} px-6 py-3 rounded-xl font-semibold transition-all"
                    className={styles.bar_btn}
                >
                    Answered first
                </button>
                <button className={styles.bar_btn}>По дате</button>
                <button className={styles.bar_btn}>📁 Архив</button>
            </div>
        </div>
    );
}
