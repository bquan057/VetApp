package com.vetapp.application.ongoingcare;

import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OnGoingCareService {

    @PersistenceContext
    public EntityManager em;

    /*
        Get all care within a week from today
     */
    public List<OnGoingCare> getAllCare() {

        // date a week from today
        LocalDate weekFromNow = LocalDate.now().plusDays(7);

        // make the query
        List<Object[]> results = em.createNamedQuery("getAllCare")
                .setParameter("date", weekFromNow).getResultList();

        // create
        List<OnGoingCare> careList = new ArrayList<>();

        for(Object[] result : results){

            // extract from result
            int animalId = (Integer) result[0];
            String careText = (String) result[1];
            LocalDate date = (LocalDate) result[2];
            String animalName = (String) result[3];

            // create OnGoingCare object
            OnGoingCare care = new OnGoingCare();
            care.setAnimalid(animalId);
            care.setCare(careText);
            care.setDuedate(date);
            care.setAnimalname(animalName);

            // add to list
            careList.add(care);
        }

        return careList;
    }
}
