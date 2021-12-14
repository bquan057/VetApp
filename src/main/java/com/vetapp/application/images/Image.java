package com.vetapp.application.images;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

/**
 * Class to represent an image of an animal
 */
@Entity
@Table(name = "IMAGE")
public class Image {

    @Column(name ="Imageid")
    @Setter @Getter
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageid; // member to be primary key of the table

    @Column(name = "Animalid")
    private String animalid;

    public String getAnimalid(){
        return animalid;
    }

    public void setAnimalid(String animalid){
        this.animalid = animalid;
    }

    @Column(name = "Fileurl")
    private String fileurl;

    public String getFileurl() {
        return fileurl;
    }

    public void setFileurl(String fileurl) {
        this.fileurl = fileurl;
    }

    @Column(name="Creationdate", updatable = false)
    @Getter @Setter
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date creationdate = new Date();

}

