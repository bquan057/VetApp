import axios from "axios";


const NewPrescriptionModal = (props) => {

    const animal = props.animal

    const modalClose = () => {
        document.getElementById('NewPrescription').classList.remove('is-active');
    }

    const onSave = () => {
        // get the animal id
        const id = animal.animalid
        
        // TODO GET FROM SESSION STORAGE
        const userid = 12345
        
        // get comment
        const prescription = document.getElementById("prescription").value
        // create request

        const request = {
            prescription: prescription,
            userid:userid
        }

       
        const apiendpoint ="http://localhost:8080/animal/" + id +"/comment"
        axios.post(apiendpoint, request)
            .then((res) => {
                console.log(res)
                }
            )

        // clear field
        document.getElementById("comment").value = ""
        document.getElementById('NewPrescription').classList.remove('is-active');
    }

    return(
        <div className="modal" id="NewPrescription">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-card has-background-white py-5 px-6" >
                <div className="columns is-multiline is-v-centered">
                    <div className="column">
                        <label className="label has-text-weight-bold has-text-primary-dark  ">Prescription: </label>
                        <input  id="prescription"  className="textarea is-primary" placeholder="Prescription"/>
                    </div>
                    <div className="column is-full has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={onSave}>Save</button>
                    </div>
               </div>
            </div>
        </div>
    )

}

export default NewPrescriptionModal;