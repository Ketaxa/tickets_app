// import styles from "./SupportLayout.module.css";
import AgentNav from "../../Components/AgentNav";
import DialogueField from "../../Components/DialogueField";
import CreateTicket from "../../Components/CreateTicket";
import ModalSubscription from "../../Components/ModalSubscription";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function DialogueLayout({ children, baseUrl }) {
    const { ticket, initialMessages } = usePage().props;

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
        <div>
            <AgentNav
                openModalTicket={openModalTicket}
                openModalSubscription={openModalSubscription}
                baseUrl={baseUrl}
            />
            <DialogueField
                ticket={ticket}
                initialMessages={initialMessages}
                baseUrl={baseUrl}
            />
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
