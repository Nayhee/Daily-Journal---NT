//fetch call to json server to get all entries. returns parsed array of entries. 
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
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

