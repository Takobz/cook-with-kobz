//TODO: Create Overview page with Image, Topic, Song, etc.

import { Fragment, useEffect } from "react";
import ImageCard from "../Overview/ImageCard";
import Conversations from "../Overview/Conversations";
import { useParams } from "react-router-dom";

const conversations = [
    "Topic 1",
    "Topic 2",
]

const Overview = () => {
    const conversationId = useParams<{id: string}>()
    useEffect(() => {
        //get conversation by id
        console.log(conversationId.id)
    })

    return (
    <Fragment>
        <ImageCard />
        <Conversations topics={conversations}/>
    </Fragment>);
}

export default Overview;