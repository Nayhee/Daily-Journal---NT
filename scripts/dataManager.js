let loggedInUser = {}

export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj;
}

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const logoutUser = () => {
    loggedInUser = {};
}

export const getLoggedInUsersEntries = (userId) => {
    return fetch(`http://localhost:8088/entries?userId=${userId}`)
    .then(response => response.json())
    .then(userEntries => {
        return userEntries;
    })
}

export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
  .then(response => response.json())
  .then(parsedUser => { //data is returned as an array
    //is there a user?
    if (parsedUser.length > 0){
      setLoggedInUser(parsedUser[0]);
      return getLoggedInUser();
    }else {
      //no user
      return false;
    }
  })
}

export const registerUser = (userObj) => {
    return fetch(`http://localhost:8088/users`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
      setLoggedInUser(parsedUser);
      return getLoggedInUser();
    })
  }



export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}


let entryCollection = [];

// we dont want to alter the original state of data, so this makes a copy and returns it. 
export const useEntryCollection = () => {
    return [...entryCollection];
}

//fetch call to json server to get all entries. returns parsed array of entries. 
export const getEntries = () => {
    return fetch(`http://localhost:8088/entries?_expand=user`)
      .then(response => response.json())
      .then(parsedResponse => {
        entryCollection = parsedResponse
        return parsedResponse;
      })
  }

export const createEntry = entryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
        .then(response => response.json())
}

export const deleteEntry = (entryID) => {
    return fetch(`http://localhost:8088/entries/${entryID}`, {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

export const getSingleEntry = (entryID) => {
    return fetch(`http://localhost:8088/entries/${entryID}`)
    .then(response => response.json())
}

export const updateEntry = (entryObj) => {
    return fetch(`http://localhost:8088/entries/${entryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
        .then(response => response.json())
}