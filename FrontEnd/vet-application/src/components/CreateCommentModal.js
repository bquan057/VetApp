import axios from "axios";


const CreateCommentModal = (props) => {

    const animal = props.animal

    const modalClose = () => {
        document.getElementById('NewComment').classList.remove('is-active');
    }

    const onSave = () => {
        // get the animal id
        const id = animal.animalid
        
        const userid = sessionStorage.getItem('id')
        
        // get comment
        const comment = document.getElementById("comment").value
        // create request

        const request = {
            comment: comment,
            userid:userid
        }

       
        const apiendpoint ="http://localhost:8080/animal/" + id +"/comment"
        axios.post(apiendpoint, request)
            .then((res) => {
                console.log(res)
                alert("Comment Created")
                }
            )

        // clear field
        document.getElementById("comment").value = ""
        document.getElementById('NewComment').classList.remove('is-active');
    }

    return(
        <div className="modal" id="NewComment">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-card has-background-white py-5 px-6" >
                <div className="columns is-multiline is-v-centered">
                    <div className="column">
                        <label className="label has-text-weight-bold has-text-primary-dark  ">Comment: </label>
                        <textarea  id="comment"  className="textarea is-primary" placeholder="Comment"></textarea>
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