import styles from "./Auth.module.css";
import { Form, usePage } from "@inertiajs/react";

export default function Auth() {
    const { errors } = usePage().props;
    return (
        <div className={styles.container}>
            <Form className={styles.formBlock} method="post" action="/support">
                <div className={styles.pic_div}>
                    <img
                        src="images/sova.png"
                        alt="Sova"
                        className={styles.sova_pic}
                    />
                </div>
                {errors.login && <div>{errors.login}</div>}
                <div className={styles.input_field}>
                    <label for="login" className={styles.label}>
                        Логин
                    </label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.input_field}>
                    <label for="password" className={styles.label}>
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.button_bar}>
                    <button
                        type="submit"
                        className={styles.sub_button_tech}
                        name="role"
                        value="tech"
                    >
                        Войти как технический специалист
                    </button>
                    <button
                        type="submit"
                        className={styles.sub_button_agent}
                        name="role"
                        value="support"
                    >
                        Войти как сотрудник поддержки
                    </button>
                </div>
            </Form>
        </div>
    );
}
