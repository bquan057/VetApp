package com.vetapp.application.prescription;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@IdClass(PrescriptionId.class)
@Table(name = "Prescription")
@NamedQuery(name= "findPrescriptionbyanimalid",
        query = "SELECT u.fname, u.lname, p.prescriptionname, p.userid, p.animalid FROM Prescription p, User u WHERE p.userid = u.userid AND p.animalid = :animalid")
public class Prescription {


    @Getter @Setter @Id
    private int userid;

    @Id
    @Getter @Setter
    private int animalid;

    @Id
    @Getter @Setter 
    private String prescriptionname;


    @Getter @Setter
    private String fname;

    @Getter @Setter
    private String lname;

}