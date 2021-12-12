import axios from "axios";
import React,  { useEffect, useState } from "react";


const CommentCard = ({animal, newCommentModal}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {

        let id = animal.animalid
        const apiendpoint ="http://localhost:8080/animal/" + id +"/comment"
        axios.get(apiendpoint)
            .then((res) => {
                    setComments(res.data)
                }
            )
    }, []);
    
    function CommentBox({comment}){

        return(
            <div class="tile is-parent is-12">
                <article class="tile is-child box notification is-primary">
                    <p className="has-text-weight-bold">Date: {comment.timestamp} </p>
                    <p className="has-text-weight-bold"> Made by: {comment.fname} {comment.lname}</p>
                    <p className="has-text-weight-bold"> Comment: </p>
                    <div className="tile is-child notification has-background-white">
                            <p className="has-text-black has-text-weight-bold">{comment.comment}</p>
                    </div>
                </article>
            </div>
        )
    }

    return(
        <div className="columns is-centered mb-6">
            <div className="column is-three-quarters">
                <div class="columns card is-multiline is-vcentered py-1">
                    <div className="column is-one-quarter has-text-centered">
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={newCommentModal}>Create Comment</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Comments</div>
                    </div>
                    <div className="column is-one-quarter"></div>
                    <div className="column">
                        {comments.map(comment =>(<CommentBox comment = {comment}/>))}
                    </div>
                </div>
            </div>
        </div>
    
    )
};

export default CommentCard;