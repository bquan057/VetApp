package com.vetapp.application.status;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Status")
public class Status {

	public Status() {
		this.statusid = 0;
		this.animalid = "";
		this.date = "";
		this.description = "";
		this.location = "";
		this.status = "";
	}
	
	@Id @GeneratedValue @Getter @Setter int statusid;
	@Getter @Setter String animalid;
	@Getter @Setter String date;
	@Getter @Setter String description;
	@Getter @Setter String location;
	@Getter @Setter String status;
	
}
