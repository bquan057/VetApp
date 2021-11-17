package domain.user;

//import lombok.Builder;
import lombok.Value;
import javax.persistence.*;


@Value
//@Builder
@Entity
public class User {

    @Id @GeneratedValue String userId;
    String userName;
    String password;
    String type;
    String firstName;
    String lastName;
    String phoneNumber;
    String number;
    String street;
    String streetType;
    String city;
    String province;
    String postalCode;
}
