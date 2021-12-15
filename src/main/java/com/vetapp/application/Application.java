package com.vetapp.application;

import com.vetapp.application.animals.AnimalRepository;
import com.vetapp.application.comment.CommentRepository;
import com.vetapp.application.disease.DiseaseRepository;
import com.vetapp.application.images.ImageRepository;
import com.vetapp.application.prescription.PrescriptionRepository;
import com.vetapp.application.request.RequestRepository;
import com.vetapp.application.status.StatusRepository;
//import com.vetapp.application.student_comments.StudentCommentRepository;
import com.vetapp.application.treatment.TreatmentRepository;
import com.vetapp.application.treatmentmethod.TreatmentMethodRepository;
import com.vetapp.application.user.UserRepository;
import com.vetapp.application.weight.WeightRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = {UserRepository.class, RequestRepository.class, AnimalRepository.class,
			CommentRepository.class, ImageRepository.class, PrescriptionRepository.class, StatusRepository.class,
			TreatmentRepository.class, WeightRepository.class, TreatmentMethodRepository.class, DiseaseRepository.class, StatusRepository.class})
public class Application {

	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);

	}

}
