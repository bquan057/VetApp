package com.vetapp.application.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
