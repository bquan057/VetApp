package app.errors;

public class AnimalNotFoundException extends ApplicationException {
	
	public AnimalNotFoundException(int code, String message) {
        super(code, message);
    }

}
