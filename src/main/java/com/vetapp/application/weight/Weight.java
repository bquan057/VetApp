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

	public Weight() {
		this.weightid = 0;
		this.animalid = "";
		this.userid = "";
		this.date = "";
		this.weight = "";
	}
	
	@Id @GeneratedValue @Getter @Setter int weightid;
	@Getter @Setter String animalid;
	@Getter @Setter String userid;
	@Getter @Setter String date;
	@Getter @Setter String weight;
	
}
