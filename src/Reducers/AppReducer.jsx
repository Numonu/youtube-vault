import produce from "immer";
import { v4 } from "uuid";

export function AppReducer() {
	return produce((draft, action) => {
		switch (action.type) {
			case "update-video-data":
				draft[action.value.collectionFocus].videos[action.value.order] = {
					link : draft[action.value.collectionFocus].videos[action.value.order].link,
					title : action.value.title,
					description : action.value.description
				}
				break;
			case "add-new-video":
				draft[action.value.collectionFocus].videos.push({
					link : action.value.link,
					title : "Example Title",
					description : "example description"
				})
				break;
			case "delete-video":
				draft[action.value.collectionFocus].videos.splice(action.value.order , 1);
				break;
			case "create-collection":
				draft.push({
					id : v4(),
					collection : action.value.name,
					videos : []
				});
				break;
			case "delete-collection":
				draft.splice(action.value.order , 1);
				break;
			default:
				throw new Error(`${action.type} is not a valid action`);
		}
	});
}
