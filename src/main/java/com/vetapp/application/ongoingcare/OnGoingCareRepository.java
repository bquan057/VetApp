package com.vetapp.application.ongoingcare;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnGoingCareRepository extends JpaRepository<OnGoingCare, Integer> {

}
