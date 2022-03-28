export const Form = () => {
    return `
                <label for="Date">Date:</label>
                <input name="postDate" class="dateAndMoodInput" type="date" id="date"> <br>
                
                <label for="mood"> Current Mood:</label>
                <select class="dateAndMoodInput" name="mood" id="mood">
                    <option value="Happy">Happy</option>
                    <option value="Fine">Fine</option>
                    <option value="Sad">Sad</option>
                </select> <br>

                <label for="Concepts Learned">Concepts Learned:</label>
                <input class=conceptInput" name="concept" type="text" id="Concepts Learned"> <br>

                <label for="Journal Entry">Journal Entry:</label>
                <textarea name="entryText" id="Journal Entry" cols="30" rows="3"></textarea>
                <br>
                
                <button class="submitButton" id="newPost__submit">Submit Entry</button>
    `
}
