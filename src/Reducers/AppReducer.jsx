import produce from "immer";

export function AppReducer() {
	return produce((draft, action) => {
		switch (action.type) {
			case "update":
                draft[0].collection = "Esto funciona!!";
				break;
			default:
                throw new Error(`${action.type} is not a valid action`);
		}
	});
}
