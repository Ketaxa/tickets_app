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
                <div className={styles.mainTitle}>
                    <b>Создать тикет</b>
                </div>
                <Form
                    method="POST"
                    action="/agent/create"
                    onSuccess={() => closeModalTicket()}
                >
                    <label htmlFor="user" className={styles.userLabel}>
                        ID/Email клиента
                    </label>
                    <input
                        type="text"
                        name="user_id_or_email"
                        id="user"
                        className={styles.input}
                        required
                    />
                    <label htmlFor="shortLabel" className={styles.userLabel}>
                        Краткое описание
                    </label>
                    <input
                        type="text"
                        id="shortLabel"
                        name="short_desc"
                        className={styles.input}
                        required
                    />
                    <label htmlFor="longLabel" className={styles.userLabel}>
                        Подробное описание
                    </label>
                    <textarea
                        name="full_desc"
                        id="longLabel"
                        className={styles.input}
                        required
                    />
                    <div className={styles.wrapper}>
                        <label className={styles.uploadBtn}>
                            <Clips />
                            <p>Выбрать файл</p>
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
