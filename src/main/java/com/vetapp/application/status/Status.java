package com.vetapp.application.status;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="Status")
@NamedQuery(name = "getRecentStatusUpdate",
query = "SELECT S.timestamp, S.location, S.description, D.diseasename FROM Status S, Disease D " +
		"WHERE S.diseaseid = D.diseaseid AND S.animalid =: animalid " +
		"ORDER BY S.timestamp  desc")
public class Status {


	@Id @Getter @Setter
	LocalDateTime timestamp;
	@Getter @Setter int userid;
	@Getter @Setter int animalid;
	@Column(name = "Location")
	@Getter @Setter String location;
	@Getter @Setter String description;
	@Getter @Setter int diseaseid;
	@Getter @Setter String diseasename;
	
}
