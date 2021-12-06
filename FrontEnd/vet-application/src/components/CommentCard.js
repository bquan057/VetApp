import React from "react";
import commentData from "../data/commentData";
import { useState } from "react";


const CommentCard = ({id}) => {

    function CommentBox({comment}){

        return(
            <div class="tile is-parent is-12">
                <article class="tile is-child box notification is-primary">
                    <p className="has-text-weight-bold">Date: {comment.timeStamp} </p>
                    <p className="has-text-weight-bold"> Made by: {comment.userName} </p>
                    <div class="content">
                        <p>{comment.comment}</p>
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
                        <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Create Comment</button>
                    </div>
                    <div className="column is-half has-text-centered">
                        <div className="title has-text-primary-dark has-text-weight-bold">Comments</div>
                    </div>
                    <div className="column is-one-quarter"></div>
                    <div className="column">
                    {commentData.filter(comment => comment.animalid==id).map(filteredComment =>(<CommentBox comment = {filteredComment}/>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    
    )
};

export default CommentCard;