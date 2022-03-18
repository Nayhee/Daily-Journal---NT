import { EntryList } from "./JournalEntryList.js";
import { getEntries, createEntry } from "./dataManager.js";
import { Form } from "./form.js";

// posts the form to the page. 
const showForm = () => {
    const formElement = document.querySelector(".formContainer");
    formElement.innerHTML = Form();
}

const showEntryList = () => {
    const entryElement = document.querySelector(".entryLog");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    })
}

const journalElement = document.querySelector(".journal_main")

journalElement.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.id === "newPost__submit") {
        const date = document.querySelector("input[name='postDate']").value 
        const mood = document.querySelector("select[name='mood']").value 
        const concept = document.querySelector("input[name='concept']").value
        const JE = document.querySelector("textarea[name='entryText']").value 

        const entryObj = {
            date: date,
            mood: mood,
            concept: concept,
            JE: JE
        }
        createEntry(entryObj)
        .then(showForm);
    }
})

//logs the ID of the entry that was clicked. 
journalElement.addEventListener("click", event => {
    if(event.target.id.startsWith("entry")) {
        //code here 
        console.log("You have clicked journal entry #",event.target.id.split("--")[1]);
    }
});

journalElement.addEventListener("click", event => {
    if(event.target.id.startsWith("edit")) {
        //code here for edit button.
    }
});

journalElement.addEventListener("click", event => {
    if(event.target.id.startsWith("delete")) {
        //code here for delete button
    }
});


//dotted border
journalElement.addEventListener("click", event => {
    const sectionList = document.querySelectorAll(".journalEntry");
    if(event.target.id.startsWith("entry")) {
        sectionList.forEach(entry => entry.classList.remove("borderedContainer"))
        if(event.target.classList.contains("journalEntry")) {
            event.target.classList.add("borderedContainer")
        }
    }
});


const startJournal = () => {
    showEntryList();
    showForm();
}
startJournal();