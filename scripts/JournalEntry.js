
export const JournalEntry = (Entry) => {
    if (Entry.id % 2 === 0) {
        return `
            <section id="entry--${Entry.id}" class="journalEntry" style="background-color:#42234c; border: 3px solid #ff3640; border-radius: 2px">
                <h3>${Entry.concept}</h3> 
                <p><i>${Entry.date}</i> </p>
                <p>${Entry.JE} </p>
                <div>
                    <button id="edit--${Entry.id}">Edit</button>
                    <button id="delete--${Entry.id}">Delete</button>
                </div>
            </section>`
    }
    else {
        return `
            <section id="entry--${Entry.id}" class="journalEntry" style="background-color:#ff3640; border: 3px solid #42234c; border-radius: 2px">
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
