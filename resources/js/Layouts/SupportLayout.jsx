import styles from "./SupportLayout.module.css";
import AgentNav from "../Components/AgentNav";
import SearchTickets from "../Components/SearchTickets";
import TableTickets from "../Components/TableTickets";
import CreateTicket from "../Components/CreateTicket";
import ModalSubscription from "../Components/ModalSubscription";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SupportLayout({ children }) {
    const { props } = usePage();
    const { tickets } = props;
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
            <SearchTickets />
            <TableTickets tickets={tickets} />
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
