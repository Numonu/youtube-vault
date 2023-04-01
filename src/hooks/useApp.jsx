import { useState , useReducer } from "react";
import { exampleData } from "../database/data";
import { AppReducer } from "../Reducers/AppReducer";

export function useApp(){
    const [data, dispatch] = useReducer(AppReducer(), [...exampleData]);
	const [collectionFocus, setCollectionFocus] = useState(0);

	const collections = data.map((e, i) => (
		<Cascade.Collection order={i} key={e.collection} title={e.collection} />
	));
	const videos = data[collectionFocus].videos.map((e,i) => (
		<Grid.Video
            order={i}
            key={e.title}
			title={e.title}
			description={e.description}
			videoLink={e.link}
		/>
	));

	function changeCollectionFocus(order) {
		setCollectionFocus(order);
	}
    function updateVideoData(order , title , description){
        dispatch({
            type : "update-video-data",
            value : {
                collectionFocus,
                order,
                title,
                description
            }
        })
    }
    return{
        collections,
        videos,
        changeCollectionFocus,
        updateVideoData
    }
}