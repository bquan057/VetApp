package com.vetapp.application.notifications;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NotificationController {

	@Autowired
	NotificationRepository notificationRepository;
	
	@GetMapping("/api/users/{userid}/notifications")
	public ResponseEntity<List<Notification>> getAnimalNotifications(@PathVariable String userid) {
		return new ResponseEntity<>(notificationRepository.findByUseridContaining(userid), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/api/users/{userid}/notifications")
	public ResponseEntity<Notification> addAnimalNotification(@PathVariable String userid, @RequestBody Notification newNotification) {
		newNotification.setUserid(userid);
		Notification notification = notificationRepository.save(newNotification);
		return new ResponseEntity<>(notification, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("api/users/notifications/{notificationid}")
    public ResponseEntity<String> deleteNotification(@PathVariable int notificationid){

		try{
            Optional<Notification> notification = notificationRepository.findById(notificationid);
            if(notification.isPresent()){
            	notificationRepository.delete(notification.get());
            }
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
    }
}
