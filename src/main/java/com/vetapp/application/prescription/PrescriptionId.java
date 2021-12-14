package com.vetapp.application.prescription;

import java.io.Serializable;
import java.util.Objects;

public class PrescriptionId implements Serializable {

    private int userid;
    private int animalid;
    private String prescriptionname;

    public PrescriptionId(){}

    public PrescriptionId(int uid, int aid, String pName){
        userid = uid;
        animalid = aid;
        prescriptionname = pName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PrescriptionId that = (PrescriptionId) o;
        return userid == that.userid && animalid == that.animalid && Objects.equals(prescriptionname, that.prescriptionname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userid, animalid, prescriptionname);
    }
}
