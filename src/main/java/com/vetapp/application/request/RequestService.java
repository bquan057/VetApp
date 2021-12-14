package com.vetapp.application.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vetapp.application.animals.Animal;
import com.vetapp.application.animals.AnimalService;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    RequestRepository repository;
    
    @Autowired
    AnimalService animalService;

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
        
        if (requestStatus.equals("Cancelled")) {
        	int animalid = request.getAnimalid();
        	String status = "Available";
        	Animal updatedAnimal = animalService.updateAnimalStatus(animalid, status);
        }	
        else if (requestStatus.equals("Approved_By_Technician")) {
        	int animalid = request.getAnimalid();
        	String status = "Booked";
        	Animal updatedAnimal = animalService.updateAnimalStatus(animalid, status);
        }	
        else if (requestStatus.equals("Rejected")){
        	int animalid = request.getAnimalid();
        	String status = "Available";
        	Animal updatedAnimal = animalService.updateAnimalStatus(animalid, status);
        }
		        

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
