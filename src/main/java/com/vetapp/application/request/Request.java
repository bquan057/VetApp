package com.vetapp.application.request;

import javax.persistence.*;

@Entity
@Table(name="REQUEST")
public class Request {

    @Id@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int requestid;
    private int animalid;
    private int teacherid;
    private String status;

    public int getRequestid() {
        return requestid;
    }

    public void setRequestid(int requestid) {
        this.requestid = requestid;
    }

    public int getAnimalid() {
        return animalid;
    }

    public void setAnimalid(int animalid) {
        this.animalid = animalid;
    }

    public int getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(int teacherid) {
        this.teacherid = teacherid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
