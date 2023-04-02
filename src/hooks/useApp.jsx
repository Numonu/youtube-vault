import { useState, useReducer, useEffect } from "react";
import { Cascade } from "../components/Cascade";
import { Grid } from "../components/Grid";
import { exampleData } from "../database/data";
import { AppReducer } from "../Reducers/AppReducer";

export function useApp() {
	const [data, dispatch] = useReducer(AppReducer(), [...exampleData]);
	const [collectionFocus, setCollectionFocus] = useState(0);

	const collections = data.map((e, i) => (
		<Cascade.Collection order={i} key={e.id} title={e.collection} />
	));
	const videos = data[collectionFocus].videos.map((e, i) => (
		<Grid.Video
			order={i}
			key={e.id}
			title={e.title}
			description={e.description}
			videoLink={e.link}
		/>
	));

	function changeCollectionFocus(order) {
		setCollectionFocus(order);
	}
	function updateVideoData(order, title, description) {
		dispatch({
			type: "update-video-data",
			value: {
				collectionFocus,
				order,
				title,
				description,
			},
		});
	}
	function addNewVideoInCollection(link) {
		dispatch({
			type: "add-new-video",
			value: {
				collectionFocus,
				link,
			},
		});
	}
	function deleteVideo(order) {
		dispatch({
			type: "delete-video",
			value: {
				collectionFocus,
				order,
			},
		});
	}
	function createCollection(name) {
		dispatch({
			type: "create-collection",
			value: {
				name
			},
		});
	}

	return {
		collections,
		videos,
		collectionFocus,
		changeCollectionFocus,
		updateVideoData,
		addNewVideoInCollection,
		deleteVideo,
		createCollection,
	};
}
