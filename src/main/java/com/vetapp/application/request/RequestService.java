package com.vetapp.application.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    RequestRepository repository;

    /*
        Method to update request status based on request id
     */
    public Request updateRequestStatus(Request request){

        int requestId = request.getRequestid();
        String requestStatus = request.getBookingstatus();

        // get the request
        Request requestToUpdate = repository.findById(requestId).get();

        // update request status
        requestToUpdate.setBookingstatus(requestStatus);

        // store in db
        repository.save(requestToUpdate);

        return requestToUpdate;
    }

    /*
        Adds a new request to the DB and sets the status to new
     */
    public Request addRequest(Request request){
        request.setBookingstatus("New");
        Request newRequest = repository.save(request);
        return newRequest;
    }


    public List<Request> findByBookingstatus(String bookingstatus){
        List<Request> requests = repository.findByBookingstatus(bookingstatus);
        return requests;
    }
    
    public List<Request> findByTeachingid(int teachingid) {
    	List<Request> requests = repository.findByTeachingid(teachingid);
    	return requests;
    }

}
