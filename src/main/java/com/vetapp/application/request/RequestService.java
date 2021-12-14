package com.vetapp.application.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vetapp.application.animals.Animal;
import com.vetapp.application.animals.AnimalService;
import com.vetapp.application.treatment.Treatment;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class RequestService {

    @Autowired
    RequestRepository repository;
    
    @Autowired
    AnimalService animalService;

    @PersistenceContext
    public EntityManager em;
    
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
		        
        requestToUpdate.setAnimalname(request.getAnimalname());
        
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
//        List<Request> requests = repository.findByBookingstatus(bookingstatus);
//        return requests;
    	List<Object[]> results = em.createNamedQuery("getRequestsByStatus")
                .setParameter("bookingstatus", bookingstatus)
                .getResultList();

        List<Request> requests = new ArrayList<>();

        for(Object[] result: results){

            String animalName = (String)result[0];
            int animalid = (Integer) result[1];
            String bookingStatus = (String) result[2];
            int requestid = (Integer) result[3];

            Request request = new Request();

            request.setAnimalname(animalName);
            request.setAnimalid(animalid);
            request.setBookingstatus(bookingStatus);
            request.setRequestid(requestid);

            requests.add(request);
        }

        return requests;
    }
    
    public List<Request> findByTeachingid(int teachingid) {
    	
        List<Object[]> results = em.createNamedQuery("getRequestsByUserid")
                .setParameter("teachingid", teachingid)
                .getResultList();

        List<Request> requests = new ArrayList<>();

        for(Object[] result: results){

            String animalName = (String)result[0];
            int animalid = (Integer) result[1];
            String bookingStatus = (String) result[2];
            int requestid = (Integer) result[3];

            Request request = new Request();

            request.setAnimalname(animalName);
            request.setAnimalid(animalid);
            request.setBookingstatus(bookingStatus);
            request.setRequestid(requestid);

            requests.add(request);
        }

        return requests;
    }

}
