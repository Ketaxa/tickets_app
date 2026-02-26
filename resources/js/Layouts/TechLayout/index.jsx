import styles from "./TechLayout.module.css";
import TechNav from "../../Components/TechNav";
import SearchTickets from "../../Components/SearchTickets";
import TableTickets from "../../Components/TableTickets";
import { usePage } from "@inertiajs/react";

export default function TechLayout({ children, baseUrl }) {
    const { props } = usePage();
    const { tickets, tab, sort } = props;

    return (
        <div className={styles.container}>
            <TechNav />
            <SearchTickets tab={tab} sort={sort} baseUrl={baseUrl} />
            <TableTickets tickets={tickets} baseUrl={baseUrl} />
            {children}
        </div>
    );
}
