package com.vetapp.application.prescription;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Prescription")
public class Prescription {

    @Column(name = "PrescriptionID")
    @Getter @Id @GeneratedValue()
    private long prescriptionid;
    @Getter @Setter
    private String animalid;
    @Getter @Setter
    private String prescription;

    public Prescription(){
        prescriptionid = 0;
        animalid = "";
        prescription = "";
    }
}