// import styles from "./SupportLayout.module.css";
import TechNav from "../../Components/TechNav";
import DialogueField from "../../Components/DialogueField";
import { usePage } from "@inertiajs/react";

export default function TechDialogueLayout({ children, baseUrl, role }) {
    const { ticket, initialMessages } = usePage().props;

    return (
        <div>
            <TechNav />
            <DialogueField
                ticket={ticket}
                initialMessages={initialMessages}
                baseUrl={baseUrl}
                role={role}
            />
            {children}
        </div>
    );
}
