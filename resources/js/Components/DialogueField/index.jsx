import { useState, useRef, useEffect } from "react";
import styles from "./DialogueField.module.css";
import { router, Form } from "@inertiajs/react";

export default function DialogueField({ ticket, initialMessages, baseUrl }) {
    if (!ticket) {
        return <p>Тикет</p>;
    }
    console.log(initialMessages);
    return (
        <div className={styles.ticketCard}>
            {/* Header */}
            <div className={styles.ticketHeader}>
                <div>
                    <strong>#ID - {ticket.id}</strong> —
                    {ticket.user_id_or_email}
                    <span className={styles.badge}>
                        Ожидает ответа (Разобраться как переключать)
                    </span>
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

            {/* Chat Body */}
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
                {/* <div className={`${styles.chatBubble} ${styles.chatSupport}`}>
                    <div>{initialMessages.text}</div>
                    <div className={styles.chatTimestamp}>
                        2026-02-26 12:00 (Агент)
                    </div>
                </div>
                <div className={`${styles.chatBubble} ${styles.chatTech}`}>
                    <div>Пример сообщения от техспеца</div>
                    <div className={styles.chatTimestamp}>
                        2026-02-26 12:05 (Техспец)
                    </div>
                </div> */}
                <div></div> {/* пустой div для scroll placeholder */}
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
{
    /**        <div className="ticket-card">

            <div className="ticket-header">
                <div>
                    <strong>#{ticket.id}</strong> — {ticket.user_id_or_email}
                    <span className={`badge ${badgeClass}`}>{badgeText}</span>
                </div>
                <div>
                    <button
                        className="button button-gray"
                        onClick={toggleTicketStatus}
                    >
                        {status === "closed" ? "Открыть" : "Закрыть"}
                    </button>
                    <a className="button button-blue" href="/agent">
                        Назад
                    </a>
                </div>
            </div>


            <div
                className="ticket-body"
                style={{ maxHeight: "400px", overflowY: "auto" }}
            >
                {chatMessages.map((msg) => {
                    const isMine = msg.role === "support";
                    return (
                        <div
                            key={msg.id}
                            className={`chat-bubble ${isMine ? "chat-support" : "chat-tech"}`}
                        >
                            <div>{msg.text}</div>
                            {msg.file && (
                                <div>
                                    <a
                                        href={msg.file}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        📎 {msg.file.split("/").pop()}
                                    </a>
                                </div>
                            )}
                            <div className="chat-timestamp">
                                {msg.timestamp}{" "}
                                {isMine ? "(Агент)" : "(Техспец)"}
                            </div>
                        </div>
                    );
                })}
                <div ref={chatEndRef}></div>
            </div>


            <form
                onSubmit={sendMessage}
                style={{ display: "flex", gap: "10px", marginTop: "10px" }}
            >
                <textarea
                    rows={2}
                    placeholder="Напишите сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input"
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit" className="button button-blue">
                    ➤
                </button>
            </form>
        </div> */
}
