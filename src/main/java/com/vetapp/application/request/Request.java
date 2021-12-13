package com.vetapp.application.request;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Lab_requests")
public class Request {

    @Id@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter
    @Column(name="Requestid")
    private int requestid;
    
    @Column(name="Animalid")
	@Getter @Setter int animalid;
    
    @Column(name="Teachingid")
	@Getter @Setter int teachingid;
    
    @Column(name="Bookingstatus")
	@Getter @Setter String bookingstatus;

}
