import styles from "./CreateTicket.module.css";
import { Form } from "@inertiajs/react";

export default function CreateTicket({ closeModalTicket }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Создать тикет</h2>
                <Form
                    method="POST"
                    action="/agent/create"
                    onSuccess={() => closeModalTicket()}
                >
                    <input
                        type="text"
                        name="user_id_or_email"
                        placeholder="Email или ID клиента"
                        className={styles.input}
                        required
                    />
                    <input
                        type="text"
                        name="short_desc"
                        placeholder="Краткое описание"
                        className={styles.input}
                        required
                    />
                    <textarea
                        name="full_desc"
                        placeholder="Полное описание"
                        className={styles.input}
                        required
                    />
                    <label className={styles.customFileUpload}>
                        Выбор файла
                        <input type="file" name="file" />
                    </label>

                    <div className={styles.btn_bar}>
                        <button
                            type="button"
                            className={`${styles.button} ${styles.buttonGray}`}
                            onClick={closeModalTicket}
                        >
                            Отмена
                        </button>
                        <button
                            type="submit"
                            className={`${styles.button} ${styles.buttonBlue}`}
                        >
                            Создать
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
