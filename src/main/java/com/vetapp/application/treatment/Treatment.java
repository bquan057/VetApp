package com.vetapp.application.treatment;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import java.time.LocalDateTime;


@Entity
@Table(name = "Treatment")
@NamedQuery(name = "getTreatmentByAnimalIdAndStatus",
        query = "SELECT TR.timestamp, TR.technicianid, TR.attendantid, TR.animalid, TR.status, TM.treatmentmethod, A.animalname " +
                "FROM Treatment TR, TreatmentMethod TM, Animal A " +
                "WHERE TR.treatmentid = TM.treatmentid AND A.animalid = TR.animalid " +
                "AND A.animalid = :animalid AND TR.status = :status")

@NamedQuery(name = "getTreatmentByUserid",
query = "SELECT TR.technicianid, TR.animalid, TR.status, TM.treatmentmethod, A.animalname " +
        "FROM Treatment TR, TreatmentMethod TM, Animal A " +
        "WHERE TR.treatmentid = TM.treatmentid AND A.animalid = TR.animalid " +
        "AND TR.attendantid = :attendantid")

@NamedQuery(name = "getTreatmentByUseridandstatus",
query = "SELECT TR.attendantid, TR.animalid, TR.status, TM.treatmentmethod, A.animalname, TR.timestamp, TR.treatmentid " +
        "FROM Treatment TR, TreatmentMethod TM, Animal A " +
        "WHERE TR.treatmentid = TM.treatmentid AND A.animalid = TR.animalid " +
        "AND TR.technicianid = :technicianid AND TR.status = :status")

@NamedQuery(name = "getTreatment",
query = "SELECT TR.attendantid, TR.technicianid, TR.animalid, TR.status, TR.timestamp, TR.treatmentid, TM.treatmentmethod, A.animalname " +
        "FROM Treatment TR, TreatmentMethod TM, Animal A " +
        "WHERE TR.treatmentid = TM.treatmentid AND A.animalid = TR.animalid " +
        "AND TR.technicianid = :technicianid AND TR.treatmentid = :treatmentid AND TR.animalid = :animalid AND TR.timestamp = :timestamp")

public class Treatment {

    @Id
    @Getter @Setter
    private LocalDateTime timestamp;

    @Getter @Setter
    private int technicianid;

    @Getter @Setter
    private String technicianFName;

    @Getter @Setter
    private String technicianLName;

    @Getter @Setter
    private int attendantid;

    @Getter@Setter
    private int animalid;

    @Getter @Setter
    private String treatmentmethod;

    @Getter @Setter
    private String status;

    @Getter @Setter
    private String animalname;

    @Getter @Setter
    private int treatmentid;
}
