import styles from "./DialogueField.module.css";
import { router, Form } from "@inertiajs/react";
import { useState } from "react";
import Clips from "../../../../public/images/icons/Clips";
import SendRow from "../../../../public/images/icons/SendRow";

export default function DialogueField({
    ticket,
    initialMessages,
    baseUrl,
    role,
}) {
    if (!ticket) {
        return <p>Тикет не найден</p>;
    }
    const lastRole = initialMessages?.length
        ? initialMessages.at(-1).role
        : null;
    const [fileName, setFileName] = useState("Файл не выбран");
    const handleChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
    return (
        <div className={styles.ticketCard}>
            <div className={styles.ticketHeader}>
                <div>
                    <strong> #ID - {ticket.id}</strong> —
                    {ticket.user_id_or_email}
                    <span
                        className={`${styles.badge} ${
                            ticket.status === "closed"
                                ? ""
                                : lastRole === "support"
                                  ? styles.badgeNew
                                  : styles.badgeAnsw
                        }`}
                    >
                        {ticket.status}
                    </span>
                </div>
                <div className={styles.btn_bar}>
                    <button
                        className={`${styles.button} ${styles.buttonGreen}`}
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

            <div className={styles.ticketBody}>
                {initialMessages.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`${styles.chatBubble} ${
                                item.role === role
                                    ? styles.chatSupport
                                    : styles.chatTech
                            }`}
                        >
                            <div>{item.text}</div>

                            {item.file && (
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: "white" }}
                                >
                                    {item.file}
                                </a>
                            )}

                            <div className={styles.chatTimestamp}>
                                <div>{item.timestamp}</div>
                                <div>
                                    {item.role === "support"
                                        ? "Агент"
                                        : "Тех. специалист"}
                                </div>
                            </div>
                        </div>
                    );
                })}
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
                    required
                />
                <input type="hidden" name="ticket_id" value={ticket.id}></input>
                {/* <input type="file" name="chat_file" /> */}
                <div className={styles.wrapper}>
                    <label className={styles.uploadBtn}>
                        <Clips />
                        <input
                            type="file"
                            name="chat_file"
                            onChange={handleChange}
                        />
                    </label>
                    <span className={styles.fileName}>{fileName}</span>
                </div>
                <button
                    type="submit"
                    className={`${styles.button} ${styles.buttonBlue}`}
                >
                    <SendRow />
                </button>
            </Form>
        </div>
    );
}
