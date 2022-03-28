import { EntryList } from "./JournalEntryList.js";
import { getEntries, createEntry, useEntryCollection, deleteEntry, getSingleEntry, updateEntry } from "./dataManager.js";
import { Form } from "./form.js";
import { populateFilterSection } from "./filterSection.js";
import { formatDate } from "./helper.js";
import { EntryEdit } from "./entryEdit.js";


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
    if(event.target.id === "newPost__submit") {
        event.preventDefault();
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
        .then(showEntryList());
    }
})


//edit button
journalElement.addEventListener("click", event => {
    if(event.target.id.startsWith("edit")) {
        const entryID = event.target.id.split("--")[1];
        getSingleEntry(entryID)
        .then(response => {
            showEdit(response);
        }) 
    }
});

const showEdit = (entryObj) => {
    const editElement = document.querySelector(".editSection")    //NOT SURE IF THIS IS THE RIGHT CLASS!!!!
    editElement.innerHTML = EntryEdit(entryObj);   //EntryEdt prob needs to be edited. 
}

journalElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("updateEntry")) {
      const postId = event.target.id.split("__")[1];
      //collect all the details into an object
      const title = document.querySelector("input[name='entryTitle']").value
      const description = document.querySelector("textarea[name='entryDescription']").value
      const timestamp = document.querySelector("input[name='entryTime']").value
      
      const entryObject = {
        title: title,
        description: description,
        userId: getLoggedInUser().id,
        timestamp: parseInt(timestamp),
        id: parseInt(postId)
      }
      
      updateEntry(entryObject)
        .then(response => {
          showEntryList();
        })
    }
  })



//delete button
journalElement.addEventListener("click", event => {
    if(event.target.id.startsWith("delete")) {
        const entryID = event.target.id.split("--")[1];
        deleteEntry(entryID)
        .then(response => {
            showEntryList();
        })
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



journalElement.addEventListener("change", event => {
    if(event.target.id === "moodSelection") {
        const moodSelected = event.target.value;
        showFilteredEntries(moodSelected);
    }
    
})

const showFilteredEntries = (moodSelected) => {
    const entryElement = document.querySelector(".entryLog");
    const filteredEntries = useEntryCollection().filter(singleEntry => {
        if(singleEntry.mood === moodSelected) {
            return singleEntry;
        }
    })
    
    console.log(filteredEntries)
    entryElement.innerHTML = EntryList(filteredEntries);
}



const startJournal = () => {
    showEntryList();
    showForm();
    populateFilterSection();
}
startJournal();