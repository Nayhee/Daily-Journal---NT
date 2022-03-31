import { EntryList } from "./JournalEntryList.js";
import { getEntries, createEntry, useEntryCollection, deleteEntry, getSingleEntry, updateEntry, getLoggedInUser, loginUser, logoutUser, setLoggedInUser, registerUser, getLoggedInUsersEntries } from "./dataManager.js";
import { Form } from "./form.js";
import { populateFilterSection } from "./filterSection.js";
import { EntryEdit } from "./entryEdit.js";
import { NavBar } from "./NavBar.js";
import { LoginForm } from "./loginForm.js";
import { RegisterForm } from "./registerForm.js";
import { showMyEntries } from "./myEntries.js";

const journalElement = document.querySelector(".journal_main")

const showForm = () => {
    const formElement = document.querySelector(".formContainer");
    formElement.innerHTML = Form();
}
const showNavBar = () => {
    const headerElement = document.querySelector("header");
    headerElement.innerHTML = NavBar();
}
const showEntryList = () => {
    const entryElement = document.querySelector(".entryLog");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    })
}


let myEntriesButtonDivEl = document.querySelector(".myEntriesButtonDiv");
const showMyEntriesButton = () => {
    myEntriesButtonDivEl.innerHTML = `
    <button id="myEntriesButton">My Entries</button>
    <br>`
}
let allEntriesButtonDivEl = document.querySelector(".allEntriesButtonDiv")
const showAllEntriesButton = () => {
    allEntriesButtonDivEl.innerHTML = `
    <button id="allEntriesButton">All Entries</button>
    <br>`
}
journalElement.addEventListener("click", event => {
    if(event.target.id === "allEntriesButton") {
        showEntryList();
    }
})

journalElement.addEventListener("click", event => {
    const entryElement = document.querySelector(".entryLog");
    if (event.target.id === "myEntriesButton") {
        showAllEntriesButton(); //once the myEntriesButton is clicked, show the AllEntries button so they can toggle back. 
        const userId = getLoggedInUser().id;
        getLoggedInUsersEntries(userId)
        .then(usersEntries => {
            entryElement.innerHTML = showMyEntries(usersEntries);
        })
    }
})


journalElement.addEventListener("click", event => {
    if(event.target.id === "newEntry__submit") {
        // event.preventDefault();
        const date = document.querySelector("input[name='entryDate']").value 
        const mood = document.querySelector("select[name='mood']").value 
        const concept = document.querySelector("input[name='concept']").value
        const JE = document.querySelector("textarea[name='entryText']").value 
        
        const entryObj = {
            date: date,
            mood: mood,
            concept: concept,
            JE: JE,
            userId: getLoggedInUser().id    //links the Entriesto the UserID of whoever's logged in, since that's who's submitting.
        }
        createEntry(entryObj)
        .then(showEntryList);
    }
})

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
    const editElement = document.querySelector(".editSection") 
    editElement.innerHTML = EntryEdit(entryObj); 
}

journalElement.addEventListener("click", event => {
    if (event.target.id.startsWith("updateEntry")) {
        event.preventDefault();
        // const entryUserId = event.target.userId;
        const entryId = event.target.id.split("__")[1];

        const date = document.querySelector("input[name='newEntryDate']").value
        const concept = document.querySelector("input[name='entryConcept']").value
        const JE = document.querySelector("textarea[name='entryDescription']").value
        const mood = document.querySelector("input[name='newEntryMood").value

        const entryObject = {
            concept: concept,
            JE: JE,
            date: date,
            mood: mood,
            id: parseInt(entryId),
            userId: getLoggedInUser().id 
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
        event.preventDefault();
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
    entryElement.innerHTML = EntryList(filteredEntries);
}

//is there a user? if so, set them as the loggedInUser and StartJournal.
//if not, show them the Login register.
const checkForUser = () => {
    if (sessionStorage.getItem("user")){
      setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
      startJournal();
    }else {
        showLoginAndRegister();
    }
  }

//find place on the DOM and show the LoginForm and RegisterForm
const showLoginAndRegister = () => {
    showNavBar();
    const formElement = document.querySelector(".formContainer");
    formElement.innerHTML = `${LoginForm()} <hr/> ${RegisterForm()}`;
    //make sure the Entrieslist is cleared out too
    const entryElement = document.querySelector(".entryLog");
    entryElement.innerHTML = "";
}

//if they click the Login Submit button, create an object with the data they input, log the user in,
//set the user in session storage then Start The Journal
journalElement.addEventListener("click", event => {
    if(event.target.id === "login__submit") {
        event.preventDefault();

        const userObject = {
            name: document.querySelector("input[name='name']").value,
            email: document.querySelector("input[name='email']").value,

        }
        loginUser(userObject)
        .then(dbUserObj => {
            if(dbUserObj) {
                sessionStorage.setItem("user", JSON.stringify(dbUserObj));
                startJournal();
            } else {
                const formElement = document.querySelector(".formContainer")
                formElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
            }
        })
    }
})

journalElement.addEventListener("click", event => {
    if (event.target.id === "register__submit") {
        event.preventDefault();
        //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value
      }
      registerUser(userObject)
      .then(dbUserObj => {
        sessionStorage.setItem("user", JSON.stringify(dbUserObj));
        startJournal();
      })
    }
  })

let headerEl = document.querySelector("header");

//event listener for if they click the logout button. 
headerEl.addEventListener("click", event => {
    if (event.target.id === "logoutButton") {
      logoutUser();
      sessionStorage.clear();
      checkForUser(); //re-render the app
    }
    else if(event.target.id === "loginButton") {
        showLoginAndRegister();
    }
  })


//write something that blurs out the Login button if someone is logged in, 
//and blurs out the Logout button if no one is logged in.

const startJournal = () => {
    showEntryList();
    showNavBar();
    showForm();
    showMyEntriesButton();
    populateFilterSection();
}

//start by checkingForUser. 
checkForUser();
