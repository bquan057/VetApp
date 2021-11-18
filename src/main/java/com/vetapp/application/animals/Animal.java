package com.vetapp.application.animals;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//import lombok.Builder;
import lombok.Value;

@Entity
@Value
@Table(name="Animals")
//@Builder
public class Animal {

	public Animal() {
		this.animal_id = "";
		this.animal_name = "";
	    this.animal_status = "";
//	    this.tattoo = "";
//	    this.city_tattoo = "";
//	    this.age = "";
//	    this.birth_day = "";
//	    this.birth_month = "";
//	    this.birth_year = "";
//	    this.breed = "";
//	    this.sex = "";
//	    this.coat_colour = "";
//	    this.special_instructions = "";
//	    this.diet = "";
//	    this.is_active = "";
//	    this.rdif_id = "";
//	    this.has_microchip = "";
//	    this.species = "";
		
	}
	
	@Id @GeneratedValue	String animal_id;
    String animal_name;
    String animal_status;
//    String tattoo;
//    String city_tattoo;
//    String age;
//    String birth_day;
//    String birth_month;
//    String birth_year;
//    String breed;
//    String sex;
//    String coat_colour;
//    String special_instructions;
//    String diet;
//    String is_active;
//    String rdif_id;
//    String has_microchip;
//    String species;
    
}
