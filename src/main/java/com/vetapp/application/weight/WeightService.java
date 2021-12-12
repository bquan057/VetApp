package com.vetapp.application.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class WeightService {

    @Autowired
    WeightRepository repository;

    /*
        Returns weight history by specified animalid
     */
    public List<Weight> getWeights(int animalid) {
        List<Weight> weights = repository.findByAnimalid(animalid);
        return weights;
    }

    /*
        Creates a new weight and assigns todays date to the date
     */
    public Weight addWeight(Weight weight, int animalid) {

        // generate todays date
        LocalDate current = LocalDate.now();

        // create weight object
        Weight newWeight = new Weight();
        newWeight.setAnimalid(animalid);
        newWeight.setWeight(weight.getWeight());
        newWeight.setDate(current.toString());

        repository.save(newWeight);

        return newWeight;
    }
}
