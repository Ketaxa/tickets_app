import styles from "./CreateTicket.module.css";
import { useState } from "react";
import { Form } from "@inertiajs/react";
import Clips from "../../../../public/images/icons/Clips";

export default function CreateTicket({ closeModalTicket }) {
    const [fileName, setFileName] = useState("Файл не выбран");
    const handleChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
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
                    <div className={styles.wrapper}>
                        <label className={styles.uploadBtn}>
                            Выбрать файл
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                            />
                        </label>
                        <span className={styles.fileName}>{fileName}</span>
                    </div>

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
