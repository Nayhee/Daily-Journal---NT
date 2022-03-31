import { getLoggedInUser } from "./dataManager.js";

// const usersName = getLoggedInUser().name;
// console.log(usersName); //fix here

export const showMyList = (usersEntries) => {
    console.log(usersEntries);
    let myEntriesHTML = ''

    for(const Entry of usersEntries) {
        if (Entry.id % 2 === 0) {
            myEntriesHTML += `
                <section id="entry--${Entry.id}" class="journalEntry" style="background-color:#42234c; border: 3px solid #ff3640; border-radius: 2px">
                    <h3>${Entry.concept}</h3> 
                    <p><i>${Entry.date}</i></p>
                    <p>${Entry.JE} </p>
                    <div>
                        <button id="edit--${Entry.id}">Edit</button>
                        <button id="delete--${Entry.id}">Delete</button>
                    </div>
                </section>
            `
        }
        else {
            myEntriesHTML +=`
                <section id="entry--${Entry.id}" class="journalEntry" style="background-color:#ff3640; border: 3px solid #42234c; border-radius: 2px">
                <h3>${Entry.concept}</h3> 
                <p><i>${Entry.date}</i></p>
                <p>${Entry.JE} </p>
                <div>
                    <button id="edit--${Entry.id}">Edit</button>
                    <button id="delete--${Entry.id}">Delete</button>
                </div>
                </section>
            `
        }
    }
    return myEntriesHTML;
    
}