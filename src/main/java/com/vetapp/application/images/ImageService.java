package com.vetapp.application.images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@Service
public class ImageService {

    @Autowired
    ImageRepository repository;

    public List<Image> getImagesByAnimalId(int animalid){
        //gets all the images
        List<Image> images = new ArrayList<Image>();
        images.addAll(repository.findAllByAnimalidContaining(animalid));
        for(int j = 0; j<images.size(); j++){
            System.out.println("Images:"+ images.get(j));
        }
        //if the image does not equal animal id we're looking for, remove it
//        for(int i = 0; i<images.size(); i++){
//            if(images.get(i).getAnimalid() != animalid){
//                images.remove(i);
//            }
//        }
        return images;
    }

    public Image setImage(Image newImage){
        Image image = new Image();
        image.setAnimalid(newImage.getAnimalid());
        image.setFileurl(newImage.getFileurl());
        repository.save(image);
        return image;
    }
}
