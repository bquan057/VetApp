package com.vetapp.application.images;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Class to represent an image of an animal
 */
@Entity
@Table(name = "IMAGE")
public class Image {
    

    @Getter
    @GeneratedValue
    @Id
    private long imageid; // member to be primary key of the table
    @Getter
    private String animalid;
    @Getter@Setter
    private String imagename;

    public Image() {
        // initialize all members
        this.imageid = 0;
        this.animalid = "";
        this.imagename = "";
    }
}

