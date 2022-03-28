export const EntryEdit = (entryObj) => {
	return `
	<div class="newEntry">
	<h3>Edit This Entry</h3>
		<div>
			<input value="${entryObj.mood}"
				   name="entryMood"
				   class="newEntry__input"
				   type="text"
				   placeholder="Mood" />
		</div>
		<div>
			<input value="${entryObj.concept}"
				   name="entryConcept"
				   class="newEntry__input"
				   type="text"
				   placeholder="Concepts Learned" />
		</div>

    	<textarea name="entryDescription"
    	class="newEntry__input newEntry__description"
    	placeholder="What I Learned...">${entryObj.JE}</textarea>
		
		<input type="hidden" value="${entryObj.id}" name="entryId">
		<input type="hidden" value="${entryObj.timestamp}" name="entryTime">
		<div class="updateAndCancelButtonContainer">
		<button class="updateEntry-UpdateButton" id="updateEntry__${entryObj.id}">Update</button>
		<button class="updateEntry-UpdateButton" id="newEntry__cancel">Cancel</button>
		</div>	
	</div>
	`
}