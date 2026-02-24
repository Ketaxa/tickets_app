import styles from "./CreateTicket.module.css";
export default function CreateTicket({ closeModalTicket }) {
    return (
        //         <div id="ticketModal" class="modal">
        //     <div class="modal-content">
        //         <h2>Создать тикет</h2>

        //         <form method="POST" action="/support/agent/create">
        //     @csrf

        //     <input type="text" name="user_id_or_email" placeholder="Email или ID клиента" class="input" required>
        //     <input type="text" name="short_desc" placeholder="Краткое описание" class="input" required>
        //     <textarea name="full_desc" placeholder="Полное описание" class="input" required></textarea>

        //     <div style="text-align:right;">
        //         <button type="button" class="button button-gray" onclick="closeTicketModal()">Отмена</button>
        //         <button type="submit" class="button button-blue">Создать</button>
        //     </div>
        // </form>

        //     </div>
        // </div>
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Создать тикет</h2>
                <form method="POST" action="/support/agent/create">
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
                </form>
            </div>
        </div>
    );
}
