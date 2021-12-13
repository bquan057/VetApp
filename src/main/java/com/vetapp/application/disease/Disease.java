package com.vetapp.application.disease;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Diseases")
public class Disease {

    @Id @Getter @Setter
    private int diseaseid;
    @Getter @Setter
    private String diseasename;
}
