package app.api.animals;

import java.io.InputStream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sun.net.httpserver.Headers;

import app.api.Constants;
import app.api.ResponseEntity;
import app.api.StatusCode;
import app.api.animals.AnimalRegistrationRequest;
import app.api.animals.AnimalRegistrationResponse;
import data.InMemoryAnimalRepository;
import domain.animals.NewAnimal;
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
	public ResponseEntity<AnimalListResponse> doGet(@RequestParam String animalId, @RequestParam String animalName, @RequestParam String animalSpecies) {
		
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
	private ResponseEntity<AnimalRegistrationResponse> doPost(@RequestBody String registerRequest) {

//        NewAnimal animal = NewAnimal.builder()
//        		.name(registerRequest.getName())
//        		.weight(registerRequest.getWeight())
//        		.tattoo(registerRequest.getTattoo())
//                .cityTattoo(registerRequest.getCityTattoo())
//                .age(registerRequest.getAge())
//                .birthDay(registerRequest.getBirthDay())
//                .birthMonth(registerRequest.getBirthMonth())
//                .birthYear(registerRequest.getBirthYear())
//                .breed(registerRequest.getBreed())
//                .sex(registerRequest.getSex())
//                .coatColour(registerRequest.getCoatColour())
//                .specialInstructions(registerRequest.getSpecialInstructions())
//        		.diet(registerRequest.getDiet())
//                .isActive(registerRequest.getIsActive())
//                .rdifID(registerRequest.getRdifID())
//                .hasMicrochip(registerRequest.getHasMicrochip())
//        		.species(registerRequest.getSpecies())
//                .build();

        String animalId = animalService.create(animal);

        AnimalRegistrationResponse response = new AnimalRegistrationResponse(animalId);

        return new ResponseEntity<>(response,
                getHeaders(Constants.CONTENT_TYPE, Constants.APPLICATION_JSON), StatusCode.OK);
    }
}