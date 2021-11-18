package com.vetapp.application.animals;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Setter;
import lombok.Getter;

@Entity
@Table(name="Animals")
public class Animal {

	public Animal() {
		this.animal_id = 0;
		this.name = "";
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
	    this.species = "";
		
	}
	
	@Id @GeneratedValue	@Getter @Setter int animal_id;
	@Getter @Setter String name;
	@Getter @Setter String animal_status;
//    @Getter @Setter String tattoo;
//    @Getter @Setter String city_tattoo;
//    @Getter @Setter String age;
//    @Getter @Setter String birth_day;
//    @Getter @Setter String birth_month;
//    @Getter @Setter String birth_year;
//    @Getter @Setter String breed;
//    @Getter @Setter String sex;
//    @Getter @Setter String coat_colour;
//    @Getter @Setter String special_instructions;
//    @Getter @Setter String diet;
//    @Getter @Setter String is_active;
//    @Getter @Setter String rdif_id;
//    @Getter @Setter String has_microchip;
	@Getter @Setter String species;
    
}
