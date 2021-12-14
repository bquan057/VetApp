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
        newTreatment.setStatus("requested");
        newTreatment.setTreatmentid(treatmentId);

        repository.save(newTreatment);
        return newTreatment;
    }
}
