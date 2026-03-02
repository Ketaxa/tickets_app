import styles from "./ModalSubscription.module.css";
import { useEffect, useState } from "react";
import { Form, usePage, router } from "@inertiajs/react";
export default function ModalSubscription({ closeModalTicket }) {
    const { flash } = usePage().props;
    const [close, setClose] = useState(null);
    useEffect(() => {
        if (flash.subscription_result_text) {
            setClose({
                text: flash.subscription_result_text,
                type: flash.subscription_result_type,
            });
        }
    }, [flash]);

    const handleClose = () => {
        setClose(null);
        router.reload({ only: [] });
        closeModalTicket();
    };

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
                        {close && (
                            <div className={styles.result}>
                                {close.text}
                                {/* {flash.subscription_result_type} Это для отображения цвета */}
                            </div>
                        )}

                        <div className={styles.button_bar}>
                            <button
                                type="button"
                                className={`${styles.button} ${styles.buttonGray}`}
                                onClick={handleClose}
                            >
                                Закрыть
                            </button>
                            <button
                                type="submit"
                                className={`${styles.button} ${styles.buttonPurple}`}
                            >
                                Проверить
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
