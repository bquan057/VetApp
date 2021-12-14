package com.vetapp.application.treatment;

import com.vetapp.application.treatmentmethod.TreatmentMethodService;
import com.vetapp.application.user.User;
import com.vetapp.application.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TreatmentService {

    @Autowired
    TreatmentRepository repository;

    @Autowired
    UserService userService;

    @Autowired
    TreatmentMethodService methodService;

    @PersistenceContext
    public EntityManager em;

    /*
        Method to get treatments by animal id and status
     */
    List<Treatment> getByStatusandAnimalid(int animalid, String status){

        // make the query
        List<Object[]> results = em.createNamedQuery("getTreatmentByAnimalIdAndStatus")
                .setParameter("animalid", animalid)
                .setParameter("status", status)
                .getResultList();

        // construct treatment list
        List<Treatment> treatments = new ArrayList<>();

        // extract from result and insert into treatment
        for(Object[] result: results){

            LocalDateTime time = (LocalDateTime) result[0];
            int technicianid = (Integer) result[1];
            int attendantid = (Integer) result[2];
            int aId = (Integer) result[3];
            String theStatus = (String) result[4];
            String treatmentMethod = (String)result[5];
            String animalName = (String)result[6];

            Treatment treatment = new Treatment();

            treatment.setTimestamp(time);
            treatment.setTechnicianid(technicianid);
            treatment.setAttendantid(attendantid);
            treatment.setAnimalid(animalid);
            treatment.setStatus(theStatus);
            treatment.setTreatmentmethod(treatmentMethod);
            treatment.setAnimalname(animalName);

            treatments.add(treatment);
        }

        return treatments;
    }

    /*
        Creates a new treatment based on the
     */
    public Treatment createTreatment(int animalid, Treatment treatment) {
        String techFName = treatment.getTechnicianFName();
        String techLName = treatment.getTechnicianLName();

        // get technians id
        User technician = userService.getByFNameAndLName(techFName, techLName);
        if(technician == null){
            return null;
        }

        // get the techs id
        int techId = technician.getUserid();

        // get methods id
        int treatmentId = methodService.getTreatmentIdByName(treatment.getTreatmentmethod());

        // generate the current date
        LocalDateTime time = LocalDateTime.now();

        // create the new treatment
        Treatment newTreatment = new Treatment();
        newTreatment.setTimestamp(time);
        newTreatment.setTechnicianid(techId);
        newTreatment.setTechnicianFName(techFName);
        newTreatment.setTechnicianLName(techLName);
        newTreatment.setAttendantid(treatment.getAttendantid());
        newTreatment.setAnimalid(animalid);
        newTreatment.setTreatmentmethod(treatment.getTreatmentmethod());
        newTreatment.setStatus("Requested");
        newTreatment.setTreatmentid(treatmentId);

        repository.save(newTreatment);
        return newTreatment;

    }
    
    public List<Treatment> getByUserid(int userid) {
    	
    	// make the query
        List<Object[]> results = em.createNamedQuery("getTreatmentByUserid")
                .setParameter("attendantid", userid)
                .getResultList();

        // construct treatment list
        List<Treatment> treatments = new ArrayList<>();

        // extract from result and insert into treatment
        for(Object[] result: results){

            int technicianid = (Integer) result[0];
            int animalid = (Integer) result[1];
            String status = (String) result[2];
            String treatmentMethod = (String)result[3];
            String animalName = (String)result[4];

            Treatment treatment = new Treatment();

            treatment.setTechnicianid(technicianid);
            treatment.setAnimalid(animalid);
            treatment.setStatus(status);
            treatment.setTreatmentmethod(treatmentMethod);
            treatment.setAnimalname(animalName);

            treatments.add(treatment);
        }

        return treatments;
    	
    }
    
    public List<Treatment> getByUseridandstatus(int userid, String status) {
    	
    	// make the query
        List<Object[]> results = em.createNamedQuery("getTreatmentByUseridandstatus")
                .setParameter("technicianid", userid)
                .setParameter("status", status)
                .getResultList();

        // construct treatment list
        List<Treatment> treatments = new ArrayList<>();

        // extract from result and insert into treatment
        for(Object[] result: results){

        	int attendantid = (Integer) result[0];
            int animalid = (Integer) result[1];
            String theStatus = (String) result[2];
            String treatmentMethod = (String)result[3];
            String animalName = (String)result[4];
            LocalDateTime timestamp = (LocalDateTime)result[5];
            int treatmentid = (Integer) result[6];

            Treatment treatment = new Treatment();

            treatment.setAttendantid(attendantid);
            treatment.setAnimalid(animalid);
            treatment.setStatus(theStatus);
            treatment.setTreatmentmethod(treatmentMethod);
            treatment.setAnimalname(animalName);
            treatment.setTimestamp(timestamp);
            treatment.setTreatmentid(treatmentid);

            treatments.add(treatment);
        }

        return treatments;
    	
    }
    
	 /*
	  Updates a treatment
	 */
	public Treatment updateTreatment(int userid, Treatment treatment) {

        List<Object[]> results = em.createNamedQuery("getTreatment")
        		.setParameter("technicianid", userid)
                .setParameter("treatmentid", treatment.getTreatmentid())
                .setParameter("animalid", treatment.getAnimalid())
                .setParameter("timestamp", treatment.getTimestamp())
                .getResultList();
        
        // construct treatment list
        List<Treatment> treatments = new ArrayList<>();

        // extract from result and insert into treatment
        for(Object[] result: results){

            int attendantid = (Integer) result[0];
            int technicianid = (Integer) result[1];
            int animalid = (Integer) result[2];
            String status = (String) result[3];
            LocalDateTime timestamp = (LocalDateTime)result[4];
            int treatmentid = (Integer) result[5];
            String treatmentMethod = (String)result[6];
            String animalName = (String)result[7];

            Treatment updatedTreatment = new Treatment();

            updatedTreatment.setAttendantid(attendantid);
            updatedTreatment.setTechnicianid(technicianid);
            updatedTreatment.setAnimalid(animalid);
            updatedTreatment.setStatus(treatment.getStatus());
            updatedTreatment.setTimestamp(timestamp);
            updatedTreatment.setTreatmentid(treatmentid);

            repository.save(updatedTreatment);
            
            updatedTreatment.setTreatmentmethod(treatmentMethod);
            updatedTreatment.setAnimalname(animalName);
            
            treatments.add(updatedTreatment);
            
        }

        return treatments.get(0);
	}
    
}
