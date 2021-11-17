package data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import app.errors.AnimalNotFoundException;
import domain.animals.Animal;
import domain.animals.AnimalRepository;
import domain.animals.NewAnimal;

public class InMemoryAnimalRepository implements AnimalRepository {

	private static final Map<String,Animal> ANIMALS_STORE = new ConcurrentHashMap();
	
	@Override
	public String create(NewAnimal newAnimal) {
		String id = UUID.randomUUID().toString();
        Animal animal = Animal.builder()
            .id(id)
            .name(newAnimal.getName())
    		.status(newAnimal.getStatus())
    		.tattoo(newAnimal.getTattoo())
            .cityTattoo(newAnimal.getCityTattoo())
            .age(newAnimal.getAge())
            .birthDay(newAnimal.getBirthDay())
            .birthMonth(newAnimal.getBirthMonth())
            .birthYear(newAnimal.getBirthYear())
            .breed(newAnimal.getBreed())
            .sex(newAnimal.getSex())
            .coatColour(newAnimal.getCoatColour())
            .specialInstructions(newAnimal.getSpecialInstructions())
            .diet(newAnimal.getDiet())
            .isActive(newAnimal.getIsActive())
            .rdifID(newAnimal.getRdifID())
            .hasMicrochip(newAnimal.getHasMicrochip())
    		.species(newAnimal.getSpecies())
            .build();
        
        ANIMALS_STORE.put(id, animal);

        return id;
	}

	@Override
	public List<Animal> getAnimals() {
		return new ArrayList<>( ANIMALS_STORE.values());
	}

	@Override
	public List<Animal> getAnimalById(String animalId) throws AnimalNotFoundException {
		ArrayList<Animal> animalList = new ArrayList<Animal>();
		animalList.add(ANIMALS_STORE.get(animalId));
		return animalList;			
	}
	
	@Override
	public List<Animal> getAnimalsByName(String animalName) throws AnimalNotFoundException {
		
		ArrayList<Animal> animalList = new ArrayList<Animal>();
		for (Animal animal: ANIMALS_STORE.values()) {
			if (animal.getName().equals(animalName)) {
				animalList.add(animal);
			}
		}
		return animalList;		
	}
	
	@Override
	public List<Animal> getAnimalsBySpecies(String animalSpecies) throws AnimalNotFoundException {
		ArrayList<Animal> animalList = new ArrayList<Animal>();
		for (Animal animal: ANIMALS_STORE.values()) {
			if (animal.getSpecies().equals(animalSpecies)) {
				animalList.add(animal);
			}
		}
		return animalList;		
	}
	
	@Override
	public void deleteAnimal(String id) throws AnimalNotFoundException {
		Animal animal= Optional.of(ANIMALS_STORE.get(id)).orElseThrow(()->  new AnimalNotFoundException(404, "Animal not found."));
        ANIMALS_STORE.remove(animal.getId(),animal);
	}

	@Override
	public Animal updateAnimal(Animal animal) throws AnimalNotFoundException {
		Optional.of(ANIMALS_STORE.get(animal.getId())).orElseThrow(()->  new AnimalNotFoundException(404, "Animal not found."));
        ANIMALS_STORE.replace(animal.getId(), animal);
        return  animal;
	}

}
