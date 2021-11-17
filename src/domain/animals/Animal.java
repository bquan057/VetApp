package domain.animals;

import lombok.Builder;
import lombok.Getter;
import lombok.Value;

@Value
@Getter
@Builder
public class Animal {

	String id;
    String name;
    String status;
    String tattoo;
    String cityTattoo;
    String age;
    String birthDay;
    String birthMonth;
    String birthYear;
    String breed;
    String sex;
    String coatColour;
    String specialInstructions;
    String diet;
    String isActive;
    String rdifID;
    String hasMicrochip;
    String species;
    
}
