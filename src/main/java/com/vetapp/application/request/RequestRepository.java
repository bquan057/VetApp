package com.vetapp.application.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {

    // definitiion to get rquest by teacherid
    List<Request> findByTeachingid(int teachingid);

    // defintion for method to get by status
//    @Query(value = "SELECT * FROM REQUEST WHERE status= ? ", nativeQuery = true)
    List<Request> findByBookingstatus(String bookingstatus);

}
