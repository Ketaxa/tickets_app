import styles from "./SupportLayout.module.css";
import AgentNav from "../../Components/AgentNav";
import SearchTickets from "../../Components/SearchTickets";
import TableTickets from "../../Components/TableTickets";
import CreateTicket from "../../Components/CreateTicket";
import ModalSubscription from "../../Components/ModalSubscription";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SupportLayout({ children, baseUrl }) {
    const { props } = usePage();
    const { tickets, tab, sort } = props;
    const [modalTicket, setModalTicket] = useState(false);
    const [modalSubscription, setModalSubscription] = useState(false);
    const openModalTicket = () => {
        setModalTicket(true);
    };
    const openModalSubscription = () => {
        setModalSubscription(true);
    };
    const closeModalTicket = () => {
        setModalTicket(false);
        setModalSubscription(false);
    };

    return (
        <div className={styles.container}>
            <AgentNav
                openModalTicket={openModalTicket}
                openModalSubscription={openModalSubscription}
            />
            <SearchTickets tab={tab} sort={sort} baseUrl={baseUrl} />
            <TableTickets tickets={tickets} baseUrl={baseUrl} />
            {modalTicket && (
                <CreateTicket closeModalTicket={closeModalTicket} />
            )}
            {modalSubscription && (
                <ModalSubscription closeModalTicket={closeModalTicket} />
            )}
            {children}
        </div>
    );
}
