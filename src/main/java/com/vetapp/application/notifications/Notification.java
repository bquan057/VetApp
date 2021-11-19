package com.vetapp.application.notifications;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Notification")
public class Notification {

	public Notification() {
		this.notificationid = 0;
		this.animalid = "";
		this.userid = "";
		this.date = "";
		this.notification = "";
	}
	
	@Id @GeneratedValue @Getter @Setter int notificationid;
	@Getter @Setter String animalid;
	@Getter @Setter String userid;
	@Getter @Setter String date;
	@Getter @Setter String notification;
	
}
