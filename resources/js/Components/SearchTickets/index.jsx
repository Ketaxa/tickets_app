import { useState } from "react";
import { Form, router } from "@inertiajs/react";

import styles from "./SearchTickets.module.css";
export default function SearchTickets({ sort, tab, baseUrl }) {
    const [searchValue, setSearchValue] = useState("");
    const menuItems = [
        { label: "Все", value: "answered" },
        { label: "По дате (раньше)", value: "date_desc" },
        { label: "По дате (позже)", value: "date" },
        { label: "Архив", value: "archive" },
    ];
    const handleSort = (value) => {
        if (value === "archive") {
            router.get(baseUrl, {
                tab: "archive",
                sort: value,
            });
        } else {
            router.get(baseUrl, {
                tab: "active",
                sort: value,
            });
        }
    };
    return (
        <div className={styles.container}>
            <Form method="GET" action={baseUrl}>
                <input
                    type="text"
                    id="search"
                    placeholder="Поиск по ID или email"
                    className={styles.input}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    name="search"
                    required
                />
                <input type="hidden" name="sort" value={sort} />
                <input type="hidden" name="tab" value={tab} />
                <button
                    className={`${styles.button} ${styles.buttonGray}`}
                    type="submit"
                >
                    Найти
                </button>
            </Form>
            <div className={styles.button_bar}>
                {menuItems.map((item) => {
                    return (
                        <button
                            key={item.value}
                            onClick={() => handleSort(item.value)}
                            className={`${styles.bar_btn} ${
                                sort === item.value
                                    ? styles.buttonActive
                                    : styles.buttonUnactive
                            }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
