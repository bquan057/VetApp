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
        String requestStatus = request.getStatus();

        // get the request
        Request requestToUpdate = repository.findById(requestId).get();

        // update request status
        requestToUpdate.setStatus(requestStatus);

        // store in db
        repository.save(requestToUpdate);

        return requestToUpdate;
    }

    /*
        Adds a new request to the DB and sets the status to new
     */
    public Request addRequest(Request request){
        request.setStatus("new");
        Request newRequest = repository.save(request);
        return newRequest;
    }


    public List<Request> getRequestbyStatus(String status){
        List<Request> requests = repository.findBystatus(status);
        return requests;
    }

}
