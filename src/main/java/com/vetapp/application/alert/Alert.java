package com.vetapp.application.alert;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="Alert")
public class Alert {

    @Column(name = "AlertID")
    @Getter @Id @GeneratedValue()
    private long alertid;
    @Getter @Setter
    private String animalid;
    @Getter @Setter
    private String alert;

    public Alert(){
        alertid = 0;
        animalid = "";
        alert = "";
    }
}