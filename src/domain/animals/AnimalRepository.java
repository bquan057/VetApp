package domain.animals;

import java.util.List;

import app.errors.AnimalNotFoundException;

public interface AnimalRepository {

    String create(NewAnimal animal);
    List<Animal> getAnimals();
    List<Animal> getAnimalById(String animalId) throws AnimalNotFoundException;
    List<Animal> getAnimalsByName(String animalName);
    List<Animal> getAnimalsBySpecies(String animalSpecies);
    void deleteAnimal(String id) throws AnimalNotFoundException;
    Animal updateAnimal(Animal animal) throws AnimalNotFoundException;
    
    
}
