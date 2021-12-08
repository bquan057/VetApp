package com.vetapp.application.animals;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Setter;
import lombok.Getter;

@Entity
@Table(name="Animals")
public class Animal {

	public Animal() {
		this.animalid = 0;
		this.name = "";
	    this.tattoo = "";
	    this.citytattoo = "";
	    this.age = "";
	    this.birthday = "";
	    this.birthmonth = "";
	    this.birthyear = "";
	    this.breed = "";
	    this.sex = "";
	    this.coatcolour = "";
	    this.specialinstructions = "";
	    this.diet = "";
	    this.isactive = "";
	    this.rdifid = "";
	    this.hasmicrochip = "";
	    this.species = "";
	    this.status = "";
		
	}
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter int animalid;
	
	@Getter @Setter String name;
    @Getter @Setter String tattoo;
    @Getter @Setter String citytattoo;
    @Getter @Setter String age;
    @Getter @Setter String birthday;
    @Getter @Setter String birthmonth;
    @Getter @Setter String birthyear;
    @Getter @Setter String breed;
    @Getter @Setter String sex;
    @Getter @Setter String coatcolour;
    @Getter @Setter String specialinstructions;
    @Getter @Setter String diet;
    @Getter @Setter String isactive;
    @Getter @Setter String rdifid;
    @Getter @Setter String hasmicrochip;
	@Getter @Setter String species;
	@Getter @Setter String status;
    
}
