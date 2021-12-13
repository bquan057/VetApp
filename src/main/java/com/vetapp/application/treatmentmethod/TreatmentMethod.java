package com.vetapp.application.treatmentmethod;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Treatment_methods")
public class TreatmentMethod {


    @Id
    @Getter
    @Setter
    private int treatmentid;

    @Getter@Setter
    private String treatmentmethod;
}

