import styles from "./Auth.module.css";
import { useForm } from "@inertiajs/react";

export default function Auth() {
    const { data, setData, post, processing, errors } = useForm({
        login: "",
        password: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post("/login");
    };
    return (
        <div className={styles.container}>
            <form className={styles.formBlock} onSubmit={submit}>
                <div className={styles.pic_div}>
                    <img
                        src="images/sova.png"
                        alt="Sova"
                        className={styles.sova_pic}
                    />
                </div>
                <div className={styles.input_field}>
                    <label for="login" className={styles.label}>
                        Логин
                    </label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        value=""
                        className={styles.input}
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
                    />
                </div>
                <div className={styles.button_bar}>
                    <button type="submit" className={styles.sub_button_tech}>
                        Войти как технический специалист
                    </button>
                    <button type="submit" className={styles.sub_button_agent}>
                        Войти как сотрудник поддержки
                    </button>
                </div>
            </form>
        </div>
    );
}
