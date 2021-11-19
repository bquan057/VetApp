package com.vetapp.application.notifications;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NotificationController {

	@Autowired
	NotificationRepository notificationRepository;
	
	@GetMapping("/api/animals/{userid}/notifications")
	public ResponseEntity<List<Notification>> getAnimalNotifications(@PathVariable String userid) {
		return new ResponseEntity<>(notificationRepository.findByUseridContaining(userid), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/api/animals/{userid}/notifications")
	public ResponseEntity<Notification> addAnimalNotification(@PathVariable String userid, @RequestBody Notification newNotification) {
		newNotification.setUserid(userid);
		Notification notification = notificationRepository.save(newNotification);
		return new ResponseEntity<>(notification, HttpStatus.ACCEPTED);
	}
	
}
