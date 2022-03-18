
export const JournalEntry = (Entry) => {
    if (Entry.id % 2 === 0) {
        return `
            <section id="entry--${Entry.id}" class="journalEntry" style="background-color: #42234c">
                <h3>${Entry.concept}</h3> 
                <p>${Entry.date} </p>
                <p>${Entry.JE} </p>
                <div>
                    <button id="edit--${Entry.id}">Edit</button>
                    <button id="delete--${Entry.id}">Delete</button>
                </div>
            </section>`
    }
    else {
        return `
            <section id="entry--${Entry.id}" class="journalEntry" style="background-color: #ff3640">
                <h3>${Entry.concept}</h3> 
                <p>${Entry.date} </p>
                <p>${Entry.JE} </p>
                <div>
                    <button id="edit--${Entry.id}">Edit</button>
                    <button id="delete--${Entry.id}">Delete</button>
                </div>
            </section>`
    }
}
