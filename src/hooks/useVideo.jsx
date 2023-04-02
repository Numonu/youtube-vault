import { useState , useContext} from "react";
import { AppContext } from "../components/App";

export function useVideo(props){
    const fromContext = useContext(AppContext);

    const [titleLocal, setTitleLocal] = useState(props.title);
	const [descriptionLocal, setDescriptionLocal] = useState(props.description);

	const [showEditing, setShowEditing] = useState(false);
	const [showActions, setShowActions] = useState(false);

	const toogleActions = () => setShowActions(!showActions);
	const toogleMode = () => setShowEditing(!showEditing);

    const updateVideoData = () => {
        fromContext.updateVideoData(props.order , titleLocal , descriptionLocal);
        toogleMode();
    }
    const deleteVideo = () => {
        fromContext.deleteVideo(props.order);
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
        updateVideoData,
        deleteVideo
    }
}