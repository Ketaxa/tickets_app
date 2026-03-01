import TechDialogueLayout from "../../Layouts/TechDialogueLayout";
export default function TechDialogue({ baseUrl, role }) {
    return (
        <>
            <TechDialogueLayout
                baseUrl={baseUrl}
                role={role}
            ></TechDialogueLayout>
        </>
    );
}
