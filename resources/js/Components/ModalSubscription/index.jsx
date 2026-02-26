import styles from "./ModalSubscription.module.css";
import { Form, usePage } from "@inertiajs/react";
export default function ModalSubscription({ closeModalTicket }) {
    const { flash } = usePage().props;
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h2>Проверить подписку</h2>
                    <Form method="POST" action="/agent/check">
                        <label htmlFor="sub_user_id">ID пользователя</label>
                        <input
                            type="text"
                            name="sub_user_id"
                            id="user_id"
                            placeholder="Например: 12345"
                            className={styles.input}
                            required
                        ></input>
                        <div className={styles.result}>
                            {flash.subscription_result_text}
                            {/* {flash.subscription_result_type} Это для отображения цвета */}
                        </div>
                        <div className={styles.button_bar}>
                            <button
                                type="button"
                                className={styles.button}
                                onClick={closeModalTicket}
                            >
                                Закрыть
                            </button>
                            <button type="submit" className={styles.button}>
                                Проверить
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
