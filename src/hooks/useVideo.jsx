import { useState , useContext} from "react";
import { AppContext } from "../components/App";
export function useVideo(props){
    const fromContext = useContext(AppContext);

    const [titleLocal, setTitleLocal] = useState(props.title);
	const [descriptionLocal, setDescriptionLocal] = useState(props.description);

	const [showEditing, setShowEditing] = useState(true);
	const [showActions, setShowActions] = useState(false);

	const toogleActions = () => setShowActions(!showActions);
	const toogleMode = () => setShowEditing(!showEditing);

    const updateVideoData = (order , title , description) => {
        fromContext.updateVideoData(order , title , description);
        toogleMode();
    }

    return {
        titleLocal,
        setTitleLocal,
        descriptionLocal,
        setDescriptionLocal,
        showEditing,
        showActions,
        toogleActions,
        toogleMode,
        updateVideoData
    }
}