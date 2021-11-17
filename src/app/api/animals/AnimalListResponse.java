package app.api.animals;

import java.util.List;

import domain.animals.Animal;
import lombok.Value;

@Value
public class AnimalListResponse {
    List<Animal> animals;
}
