import React from "react";



const  SearchSelectorUser = () =>{

    const role = sessionStorage.getItem('role')

    const buttonSelect = () => {

        if (role == "Admin") {
            return  <div className="columns">
            <div className="column has-text-left">
                <label class="button is-rounded">
                    <input type="radio" name="search_select" id="search_by_student"/>
                    <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Student</h1>
                </label>
            </div>
            <div className="column has-text-centered">
                <label class="button is-rounded">
                    <input type="radio" name="search_select" id="search_by_staff"/>
                    <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Staff</h1>
                </label>
            </div>
            <div className="column has-text-right">
                <label class="button is-rounded">
                    <input type="radio" name="search_select" id="search_by_management"/>
                    <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Management</h1>
                </label>
            </div>
        </div>
        }
        else if (role == "Teaching Technician") {
            return <div className="columns">
            <div className="column has-text-left">
                <label class="button is-rounded">
                    <input type="radio" name="search_select" id="search_by_student"/>
                    <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Student</h1>
                </label>
            </div>
        </div>
        }
        else {
            return
        }
    
    }



    return (
    //     <div className="columns is-centered mb-6">
    //     <div class="control column is-two-thirds">
    //         <div className="columns">
    //                 <div className="column has-text-left">
    //                     <label class="button is-rounded">
    //                         <input type="radio" name="search_select" id="search_by_student"/>
    //                         <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Student</h1>
    //                     </label>
    //                 </div>
    //                 <div className="column has-text-centered">
    //                     <label class="button is-rounded">
    //                         <input type="radio" name="search_select" id="search_by_staff"/>
    //                         <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Staff</h1>
    //                     </label>
    //                 </div>
    //                 <div className="column has-text-right">
    //                     <label class="button is-rounded">
    //                         <input type="radio" name="search_select" id="search_by_management"/>
    //                         <h1 className="has-text-weight-bold has-text-primary-dark ml-2">Management</h1>
    //                     </label>
    //                 </div> 
    //         </div>
    //     </div>
    // </div>
    <div className="columns is-centered">
        <div className="column is-two-thirds">
            {buttonSelect()}
        </div>
    </div>
    )
};

export default SearchSelectorUser;