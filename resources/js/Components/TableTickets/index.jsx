import styles from "./TableTickets.module.css";
export default function TableTickets({ tickets }) {
    console.log("Тикеты из БД:", tickets); // Посмотрите в консоли браузера
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Клиент</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
}
