// import styles from "./SupportLayout.module.css";
import AgentNav from "../../Components/AgentNav";
import DialogueField from "../../Components/DialogueField";
import CreateTicket from "../../Components/CreateTicket";
import ModalSubscription from "../../Components/ModalSubscription";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function DialogueLayout({ children, baseUrl, role }) {
    const { ticket, initialMessages, flash } = usePage().props;
    const [removeFlash, setRemoveFlash] = useState(
        flash || {
            subscription_result_text: null,
            subscription_result_type: null,
        },
    );
    console.log(usePage().props);
    console.log(removeFlash);
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
        setRemoveFlash({
            subscription_result_text: null,
            subscription_result_type: null,
        });
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
                role={role}
            />
            {modalTicket && (
                <CreateTicket closeModalTicket={closeModalTicket} />
            )}
            {modalSubscription && (
                <ModalSubscription
                    closeModalTicket={closeModalTicket}
                    removeFlash={removeFlash}
                />
            )}
            {children}
        </div>
    );
}
