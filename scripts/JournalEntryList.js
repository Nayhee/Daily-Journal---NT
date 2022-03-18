import { JournalEntry } from "./JournalEntry.js"

export const EntryList = (allEntries) => {
    let journalEntryHTML = "";

    for (const entry of allEntries) {
        journalEntryHTML += JournalEntry(entry);
    }
    return journalEntryHTML;
}
