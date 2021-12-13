package com.vetapp.application.treatment;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;


@Entity
@Table(name = "Treatment")
public class Treatment {

    @Id
    @Getter @Setter
    private LocalDateTime timestamp;

    @Getter @Setter
    private int technicianid;

    @Getter @Setter
    private int attendantid;

    @Getter@Setter
    private int animalid;

    @Getter @Setter
    private int treatmentid;

    @Getter @Setter
    private String treatmenttype;

    @Getter @Setter
    private String status;
}
