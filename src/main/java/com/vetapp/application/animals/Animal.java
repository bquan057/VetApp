package com.vetapp.application.animals;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Setter;
import lombok.Getter;

@Entity
@Table(name="Animal")
public class Animal {

	@Column(name="Animalid")
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter int animalid;
	
	@Column(name="Animalname")
	@Getter @Setter String animalname;
	
	@Column(name="Tattoo")
    @Getter @Setter String tattoo;
	
	@Column(name="Age")
    @Getter @Setter String age;
	
	@Column(name="Birthdate")
    @Getter @Setter String birthdate;

	@Column(name="Breed")
	@Getter @Setter String breed;

	@Column(name="Sex")
	@Getter @Setter String sex;

	@Column(name="Coatcolour")
	@Getter @Setter String coatcolour;

	@Column(name="Isactive")
	@Getter @Setter String isactive;
    
	@Column(name="RFID")
	@Getter @Setter int rfid;
	
	@Column(name="Species")
	@Getter @Setter String species;
	
	@Column(name="Availability")
	@Getter @Setter String availability;
    
}
