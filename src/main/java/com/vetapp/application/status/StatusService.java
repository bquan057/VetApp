package com.vetapp.application.status;

import com.vetapp.application.disease.DiseaseService;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class StatusService {

    @Autowired
    StatusRepository repository;

    @Autowired
    DiseaseService dService;

    @PersistenceContext
    EntityManager entityManager;

    /*
        Returns the specified animals most recent status update
     */
    public Status getFirstStatus(int animalid) {
        // make query
        List<Object[]> statuses = entityManager.createNamedQuery("getRecentStatusUpdate")
                .setParameter("animalid", animalid).getResultList();

        // get from first row of response
        LocalDateTime time = (LocalDateTime) statuses.get(0)[0];
        String location = (String) statuses.get(0)[1];
        String description = (String) statuses.get(0)[2];
        String diseasename = (String) statuses.get(0)[3];

        // construct status from response
        Status theStatus = new Status();
        theStatus.setTimestamp(time);
        theStatus.setLocation(location);
        theStatus.setDescription(description);
        theStatus.setDiseasename(diseasename);

        return theStatus;
    }

    /*
        Method to create a new status
     */
    public Status createStatus(int animalid, Status reqStatus) {
        // create the new status
        Status newStatus = new Status();
        // generate current time stamp
        LocalDateTime current = LocalDateTime.now();

        // have to look up disease id
        int dId = dService.getDiseaseId(reqStatus.getDiseasename());

        newStatus.setTimestamp(current);
        newStatus.setAnimalid(animalid);
        newStatus.setDiseasename(reqStatus.getDiseasename());
        newStatus.setUserid(reqStatus.getUserid());
        newStatus.setDescription(reqStatus.getDescription());
        newStatus.setDiseaseid(dId);

        // persist
        repository.save(newStatus);

        return newStatus;
    }
}
