import produce from "immer";

export function AppReducer() {
	return produce((draft, action) => {
		switch (action.type) {
			case "edit-video-title":
				draft[action.value.collectionFocus].videos[action.value.order] = action.content;
				break;
			default:
				throw new Error(`${action.type} is not a valid action`);
		}
	});
}
