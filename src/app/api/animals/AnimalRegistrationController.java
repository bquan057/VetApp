package app.api.animals;

import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sun.net.httpserver.Headers;

import app.api.Constants;
import app.api.ResponseEntity;
import app.api.StatusCode;
import data.InMemoryAnimalRepository;
import domain.animals.NewAnimal;
import domain.animals.Animal;
import domain.animals.AnimalRepository;
import domain.animals.AnimalService;

@RestController
public class AnimalRegistrationController {
	
	private static final AnimalRepository ANIMAL_REPOSITORY = new InMemoryAnimalRepository();
	private final AnimalService animalService = new AnimalService(ANIMAL_REPOSITORY);
	
	protected static Headers getHeaders(String key, String value) {
        Headers headers = new Headers();
        headers.set(key, value);
        return headers;
    }
	
	@GetMapping("/api/animals")
	public ResponseEntity<AnimalListResponse> doGet(@RequestParam String animalId, @RequestParam String animalName,
			@RequestParam String animalSpecies) {
		
		AnimalListResponse AnimalListResponse=new AnimalListResponse(animalService.getAnimals());
        
        if (!animalId.equals("")) {
        	AnimalListResponse=new AnimalListResponse(animalService.getAnimalById(animalId));
        }
        else if (!animalName.equals("")) {
        	AnimalListResponse=new AnimalListResponse(animalService.getAnimalsByName(animalName));
        }
        else if (!animalSpecies.equals("")) {
        	AnimalListResponse=new AnimalListResponse(animalService.getAnimalsBySpecies(animalSpecies));
        }
        return new ResponseEntity<>(AnimalListResponse,
                getHeaders(Constants.CONTENT_TYPE, Constants.APPLICATION_JSON), StatusCode.OK);

	}
	
	@PostMapping("/api/animals")
	private ResponseEntity<AnimalRegistrationResponse> doPost(@RequestBody Map<String,String> body) {

        NewAnimal animal = NewAnimal.builder()
        		.name(body.get("name"))
        		.status(body.get("status"))
        		.tattoo(body.get("tattoo"))
                .cityTattoo(body.get("cityTattoo"))
                .age(body.get("age"))
                .birthDay(body.get("birthDay"))
                .birthMonth(body.get("birthMonth"))
                .birthYear(body.get("birthYear"))
                .breed(body.get("breed"))
                .sex(body.get("sex"))
                .coatColour(body.get("coatColour"))
                .specialInstructions(body.get("specialInstructions"))
        		.diet(body.get("diet"))
                .isActive(body.get("isActive"))
                .rdifID(body.get("rdifID"))
                .hasMicrochip(body.get("hasMicrochip"))
        		.species(body.get("species"))
                .build();

        String animalId = animalService.create(animal);

        AnimalRegistrationResponse response = new AnimalRegistrationResponse(animalId);

        return new ResponseEntity<>(response,
                getHeaders(Constants.CONTENT_TYPE, Constants.APPLICATION_JSON), StatusCode.OK);
    }
	
	@PutMapping("/api/animals")
	private ResponseEntity<Animal> doPut(@RequestParam String animalId, @RequestBody Map<String,String> body) {
		
		Animal animalForUpdate = Animal.builder().animalId(animalId)
				.name(body.get("name"))
        		.status(body.get("status"))
        		.tattoo(body.get("tattoo"))
                .cityTattoo(body.get("cityTattoo"))
                .age(body.get("age"))
                .birthDay(body.get("birthDay"))
                .birthMonth(body.get("birthMonth"))
                .birthYear(body.get("birthYear"))
                .breed(body.get("breed"))
                .sex(body.get("sex"))
                .coatColour(body.get("coatColour"))
                .specialInstructions(body.get("specialInstructions"))
        		.diet(body.get("diet"))
                .isActive(body.get("isActive"))
                .rdifID(body.get("rdifID"))
                .hasMicrochip(body.get("hasMicrochip"))
        		.species(body.get("species"))
                .build();
		
        Animal animalAfterUpdate= animalService.updateAnimal(animalForUpdate);
        
        return new ResponseEntity<>(animalAfterUpdate,
                getHeaders(Constants.CONTENT_TYPE, Constants.APPLICATION_JSON), StatusCode.OK);
	}
	
	@DeleteMapping("/api/animals")
	private ResponseEntity<String> doDelete(@RequestParam String animalId) {

       animalService.deleteAnimal(animalId);
       
       return new ResponseEntity<>("Animal successfully deleted",
                getHeaders(Constants.CONTENT_TYPE, Constants.PLAIN_TXT), StatusCode.OK);
    }
}