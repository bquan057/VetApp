package com.vetapp.application.ongoingcare;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="Ongoing_care")
@NamedQuery(name = "getAllCare",
query = "SELECT O.animalid, O.care, O.duedate, A.animalname " +
        "FROM OnGoingCare O, Animal A " +
        "WHERE O.animalid = A.animalid AND O.duedate < :date" )
public class OnGoingCare {

    @Id
    @Getter @Setter
    private int animalid;

    @Getter @Setter
    private String animalname;

    @Getter @Setter
    private String care;

    @Getter @Setter
    private LocalDate duedate;
}
