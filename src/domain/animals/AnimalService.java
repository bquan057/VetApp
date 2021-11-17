package domain.animals;

import java.util.List;
import java.util.Objects;

import app.errors.AnimalNotFoundException;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AnimalService {

	private final AnimalRepository animalRepository;

    public String create(NewAnimal animal) {
        return animalRepository.create(animal);
    }
    
    public List<Animal> getAnimals() {return animalRepository.getAnimals();}
    
    public List<Animal> getAnimalById(String animalId) throws AnimalNotFoundException{return animalRepository.getAnimalById(animalId);}
    
    public List<Animal> getAnimalsByName(String animalName) throws AnimalNotFoundException{return animalRepository.getAnimalsByName(animalName);}
    
    public List<Animal> getAnimalsBySpecies(String animalSpecies) throws AnimalNotFoundException{return animalRepository.getAnimalsBySpecies(animalSpecies);}

    public void deleteAnimal(String id) throws AnimalNotFoundException{
        Objects.requireNonNull(id,"Animal id is required");
        animalRepository.deleteAnimal(id);
    }
    public Animal updateAnimal(Animal user) throws AnimalNotFoundException{
        Objects.requireNonNull(user.getId(),"Animal id is required for update");
        return  animalRepository.updateAnimal(user);

    }
}
