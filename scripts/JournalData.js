/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "02/21/2022",
        mood: "Fine",
        concept: "HTML & CSS",
        entry: "Today I learned about HTML components and how to make grid layouts with Flexbox in CSS."
    },
    {
        id: 2,
        date: "02/22/2022",
        mood: "Fine",
        concept: "Javascript Functions",
        entry: "Today I learned about functions; specifically, I learned that functions execute code when called upon, and if a function returns a value, I have to store it in a variable."
    },
    {
        id: 3,
        date: "02/23/2022",
        mood: "Happy",
        concept: "Git",
        entry: "Today I learned about how GIT is a version control system that lets us manage and keep track of source code history."
    },
    {
        id: 4,
        date: "02/24/2022",
        mood: "Happy",
        concept: "GitHub",
        entry: "Today I learned about how GitHub is a cloud-based hosting service that lets us manage GIT repositories."
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate;
}