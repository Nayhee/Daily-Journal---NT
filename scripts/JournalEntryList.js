import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {
    const entryLog = document.querySelector(".entryLog")
    const entries = getJournalEntries()
    let journalHTMLRep = "";

    for (const entry of entries) {
        journalHTMLRep += JournalEntryComponent(entry);
    }
    entryLog.innerHTML += `${journalHTMLRep}`;
}
