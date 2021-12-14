import axios from "axios";
import React, {useState, useEffect} from "react"

const UnblockUserModal = () => {
    const modalClose = () => {
        document.getElementById('UnblockModal').classList.remove('is-active');
    }

    const [unblock, setUnblock] = useState([]);

    useEffect(()=>{
        var apiEp = ""
        var apiEP = "http://localhost:8080/user/block";
        axios.get(apiEP).then((res) => {
            setUnblock(res.data)
        })
    }, [])

    function BlockBox ({list}){

        const [unblockUser, setUnblockUser] = useState([]);

        var apiEndpoint = ""
        // console.log(list.userid)
        apiEndpoint = "http://localhost:8080/user/block?id=" + list.userid;

        function unblocked(){
            axios.put(apiEndpoint, {
                isactive: true
            }).then((response) => {
                setUnblockUser(response.data);
                // alert("User unblocked!");
            });
        }

        return(
            <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-two-fifths">
                            <label  className = "checkbox has-text-primary-dark is-size-4 is-capitalized has-text-weight-bold mx-1"> {list.fname}</label>
                            <label className = "checkbox has-text-primary-dark is-size-4 is-capitalized  has-text-weight-bold mx-3"> {list.lname}</label>
                        </div>                        
                        <button onClick = {unblocked} className="button is-primary is-rounded is-light">Unblock User</button>               
                    </div>
                </div>
            )
     }

    
    return ( 
        <div className = 'modal' id = 'UnblockModal'>
        <div className="modal-background" />
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Edit My Account</p>
            <button
                onClick={modalClose}
                className="delete"
                aria-label="close"
            />
            </header>
            
            <section className="modal-card-body">
                {unblock.map(item =>(<BlockBox list = {item}/>))}
            </section>
            <footer className="modal-card-foot">
            {/* <button onClick = {()=> {modalClose(); updateUser()}} className="button is-success">Save changes</button> */}
            <button onClick={modalClose} className="button">
                Close
            </button>
            </footer>
        </div>
        </div> 
    );
}
 
export default UnblockUserModal;

