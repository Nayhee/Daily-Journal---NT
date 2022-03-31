export const EntryEdit = (entryObj) => {
	return `
	<div class="newEntry">
	<h3>Edit This Entry</h3>
		<div>
			
			<input value="${entryObj.date}"
				   name="newEntryDate"
				   class="newEntry__input"
				   type="hidden"
				   placeholder="date" />
		</div>
		<div>
			
			<input value="${entryObj.mood}"
				   name="newEntryMood"
				   class="newEntry__input"
				   type="hidden"
				   placeholder="mood" />
		</div>
		<div>
			<input value="${entryObj.concept}"
				   name="entryConcept"
				   class="newEntry__input"
				   type="text"
				   placeholder="Concept" />
		</div>

    	<textarea cols="30" rows="4" name="entryDescription"
    	class="newEntry__input newEntry__description"
    	placeholder="Story behind your gif...">${entryObj.JE}</textarea>
		
		<input type="hidden" value="${entryObj.id}" name="entryId">	
		<div class="updateAndCancelEntryButtonContainer">
		<button class="updateAndCancelEntryButtons" id="updateEntry__${entryObj.id}">Update</button>
		<button class="updateAndCancelEntryButtons" id="newEntry__cancel">Cancel</button>
		</div>
	</div>
	`
}