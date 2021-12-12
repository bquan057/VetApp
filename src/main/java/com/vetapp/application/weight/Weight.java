package com.vetapp.application.weight;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Weight")
public class Weight {

	@Getter @Setter int animalid;
	@Id
	@Getter @Setter String date;
	@Getter @Setter double weight;
	
}
