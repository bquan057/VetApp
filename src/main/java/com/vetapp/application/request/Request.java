package com.vetapp.application.request;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Lab_requests")

@NamedQuery(name = "getRequestsByUserid",
query = "SELECT A.animalname, LR.animalid, LR.bookingstatus, LR.requestid " +
        "FROM Animal A, Request LR " +
        "WHERE A.animalid = LR.animalid " +
        "AND LR.teachingid = :teachingid")

@NamedQuery(name = "getRequestsByStatus",
query = "SELECT A.animalname, LR.animalid, LR.bookingstatus, LR.requestid " +
        "FROM Animal A, Request LR " +
        "WHERE A.animalid = LR.animalid " +
        "AND LR.bookingstatus = :bookingstatus")


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
    
    @Getter @Setter String animalname; 

}
