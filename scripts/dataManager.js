let entryCollection = [];

//we dont want to alter the original state of data, so this makes a copy and returns it. 
export const useEntryCollection = () => {
    return [...entryCollection];
}

//fetch call to json server to get all entries. returns parsed array of entries. 
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_sort=id&_order=desc")
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

