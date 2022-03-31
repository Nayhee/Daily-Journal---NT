export const populateFilterSection = () => {
    let filterSectionElement = document.querySelector(".filterSection");
    filterSectionElement.innerHTML = `
    Filter entries by mood: <select id="moodSelection">
                    <option hidden disabled selected value> -- select mood -- </option>
                    <option>Happy</option>
                    <option>Fine</option>
                    <option>Sad</option>
                </select>
    `
    return filterSectionElement;
}