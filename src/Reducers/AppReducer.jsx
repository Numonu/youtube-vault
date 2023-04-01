import produce from "immer";

export function AppReducer() {
	return produce((draft, action) => {
		switch (action.type) {
			case "update-video-data":
				draft[action.value.collectionFocus].videos[action.value.order].title = action.value.title;
				draft[action.value.collectionFocus].videos[action.value.order].title = action.value.description;
				break;
			default:
				throw new Error(`${action.type} is not a valid action`);
		}
	});
}
