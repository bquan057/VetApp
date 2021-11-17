package domain.user;

//import app.errors.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;

import java.util.List;

/*
    Method definitions for interactions with the User Data
 */
public interface UserRepository extends JpaRepository<User, Long> {

}
