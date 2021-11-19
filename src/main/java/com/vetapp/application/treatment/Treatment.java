package com.vetapp.application.treatment;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

// Model for treatments
@Entity
@Table(name = "TREATMENT")
public class Treatment {

    @Getter
    @Id
    @GeneratedValue
    private long treatmentid;
    @Getter
    private String animalid;
    @Getter@Setter
    private String treatmenttype;

    public Treatment() {
        this.treatmentid = 0;
        this.animalid = "";
        this.treatmenttype = "";
    }
}
