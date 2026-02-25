import styles from "./TableTickets.module.css";
import { format } from "date-fns";
export default function TableTickets({ tickets }) {
    const dataTicket = (item) => {
        return format(new Date(item), "dd-MM-yyyy");
    };

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
            <tbody>
                {tickets.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user_id_or_email}</td>
                        <td>{item.short_desc}</td>
                        <td>{item.status}</td>
                        <td>{dataTicket(item.created_at)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
