package com.vetapp.application.status;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="Status")
public class Status {


	@Id @Getter @Setter
	LocalDateTime timestamp;
	@Getter @Setter int userid;
	@Getter @Setter int animalid;
	@Getter @Setter String location;
	@Getter @Setter String description;
	@Getter @Setter int diseaseid;
	
}
