import { useEffect, useState } from "react"
import weightData from "../data/weightData"
import "bulma-graphs"

const CreateCommentModal = ({id}) => {

    const modalClose = () => {
        document.getElementById('NewComment').classList.remove('is-active');
    }

    const onSave = () => {
        document.getElementById('NewComment').classList.remove('is-active');

    }

    return(
        <div className="modal" id="NewComment">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-card has-background-white py-5 px-6" >
                <div className="columns is-multiline is-v-centered">
                    <div className="column is-one-fifth">
                        <label  className="label has-text-weight-bold has-text-primary-dark "> Created By: </label>
                        <label  className="label has-text-weight-bold has-text-primary-dark my-2 "> Date: </label>
                    </div>
                    <div className="column is-two-fifths">
                        <input class="input is-small is-primary is-rounded" type="text"/>
                        <input class="input is-small is-primary is-rounded my-2" type="text"/>
                    </div>
                    <div className="column is-two-fifths"></div>
                    <div className="column">
                        <label  className="label has-text-weight-bold has-text-primary-dark  ">Comment: </label>
                        <textarea class="textarea is-primary" placeholder="Comment"></textarea>
                    </div>
                    <div className="column is-full has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={onSave}>Save</button>
                    </div>
               </div>
            </div>
        </div>
    )

}

export default CreateCommentModal;