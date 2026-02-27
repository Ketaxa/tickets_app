import styles from "./DialogueField.module.css";
import { router, Form } from "@inertiajs/react";

export default function DialogueField({ ticket, initialMessages, baseUrl }) {
    if (!ticket) {
        return <p>Тикет не найден</p>;
    }
    console.log(initialMessages);
    return (
        <div className={styles.ticketCard}>
            <div className={styles.ticketHeader}>
                <div>
                    <strong>#ID - {ticket.id}</strong> —
                    {ticket.user_id_or_email}
                    <span className={styles.badge}>Ожидает ответа</span>
                </div>
                <div>
                    <button
                        className={`${styles.button} ${styles.buttonGray}`}
                        onClick={() => {
                            router.post(
                                ticket.status === "closed"
                                    ? `${baseUrl}/reopen`
                                    : `${baseUrl}/close`,
                                { ticket_id: ticket.id },
                            );
                        }}
                    >
                        {ticket.status === "closed" ? "Открыть" : "Закрыть"}
                    </button>
                    <button
                        className={`${styles.button} ${styles.buttonBlue}`}
                        onClick={() => {
                            router.get(baseUrl);
                        }}
                    >
                        Назад
                    </button>
                </div>
            </div>

            <div
                className={styles.ticketBody}
                style={{ maxHeight: "400px", overflowY: "auto" }}
            >
                {initialMessages.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.chatBubble} ${item.role === "support" ? styles.chatSupport : styles.chatTech}`}
                    >
                        <div>{item.text}</div>
                        {item.file && (
                            <a
                                href={`${item.file}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.file}
                            </a>
                        )}
                        <div className={styles.chatTimestamp}>
                            {item.timestamp}
                            {item.role}
                        </div>
                    </div>
                ))}
                <div></div>
            </div>

            <Form
                className={styles.form}
                method="POST"
                action={`${baseUrl}/message`}
                encType="multipart/form-data"
                resetOnSuccess
            >
                <textarea
                    rows={2}
                    placeholder="Напишите сообщение..."
                    className={styles.input}
                    name="message"
                />
                <input type="hidden" name="ticket_id" value={ticket.id}></input>
                <input type="file" name="chat_file" />
                <button
                    type="submit"
                    className={`${styles.button} ${styles.buttonBlue}`}
                >
                    ➤
                </button>
            </Form>
        </div>
    );
}
