import styles from "./TableTickets.module.css";
import { format } from "date-fns";
import { router } from "@inertiajs/react";
export default function TableTickets({ tickets, baseUrl }) {
    const dataTicket = (item) => {
        return format(new Date(item), "dd-MM-yyyy");
    };
    const sendTicket = (id) => {
        router.get(`${baseUrl}/message`, { ticket_id: id });
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
                {tickets && tickets.length > 0 ? (
                    tickets.map((item) => (
                        <tr
                            value
                            key={item.id}
                            href={`${baseUrl}/message`}
                            onClick={() => sendTicket(item.id)}
                        >
                            <td>{item.id}</td>
                            <td>{item.user_id_or_email}</td>
                            <td>{item.short_desc}</td>
                            <td>
                                {" "}
                                <span
                                    className={`${styles.badge} ${
                                        item.status === "closed"
                                            ? ""
                                            : item.status === "new"
                                              ? styles.badgeNew
                                              : styles.badgeAnsw
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </td>
                            <td>{dataTicket(item.created_at)}</td>
                        </tr>
                    ))
                ) : (
                    <tr colSpan="5">
                        <td>Список пуст</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
