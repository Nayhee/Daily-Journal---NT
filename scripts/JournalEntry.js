/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (Entry) => {
    if (Entry.id % 2 === 0) {
        return `
            <section id="entry--${Entry.id}" class="journalEntryOne">
                <h3>${Entry.concept}</h3> 
                <p>${Entry.date} </p>
                <p>Mood: ${Entry.mood} </p>
                <p>${Entry.entry} </p>
            </section>`
    }
    else {
        return `
            <section id="entry--${Entry.id}" class="journalEntryTwo">
                <h3>${Entry.concept}</h3> 
                <p>${Entry.date} </p>
                <p>Mood: ${Entry.mood} </p>
                <p>${Entry.entry} </p>
            </section>`
    }
}
