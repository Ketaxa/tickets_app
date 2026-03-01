import DialogueLayout from "../../Layouts/DialogueLayout";
export default function AgentDialogue({ baseUrl, role }) {
    return (
        <>
            <DialogueLayout baseUrl={baseUrl} role={role}></DialogueLayout>
        </>
    );
}
