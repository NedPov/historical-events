import { DatesProvider } from "@/processes/context-dates/DatesChangeProvider";
import { Pages } from "./Pages";

export function LayoutPages() {

    return (
        <DatesProvider>
            <Pages />
        </DatesProvider>
    )



}
