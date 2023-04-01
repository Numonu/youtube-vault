export function useVideo(props){
    const [titleLocal, setTitleLocal] = useState(props.title);
	const [descriptionLocal, setDescriptionLocal] = useState(props.description);

	const [normalMode, setNormalMode] = useState(false);
	const [showActions, setShowActions] = useState(false);

	const toogleActions = () => setShowActions(!showActions);
	const toogleMode = () => setNormalMode(!normalMode);

    return {
        titleLocal,
        setTitleLocal,
        descriptionLocal,
        setDescriptionLocal,
        toogleActions,
        toogleMode
    }
}