package com.vetapp.application.user;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;


public class TokenManager {

    // create and sign token
    public String createToken(int userId, String userName, String password, String role){
        String token = null;

        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            token = JWT.create()
            		.withClaim("userId", userId)
                    .withClaim("userName", userName)
                    .withClaim("passWord", password)
                    .withClaim("role", role)
                    .sign(algorithm);
        } catch (JWTCreationException exception){
            //Invalid Signing configuration / Couldn't convert Claims.
        }

        return token;
    }

    // verify token
    public boolean verifyToken(String token, String role){

        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            JWTVerifier verifier = JWT.require(algorithm)
                    .withClaim("Role", role)
                    .build(); //Reusable verifier instance
            DecodedJWT jwt = verifier.verify(token);
        } catch (JWTVerificationException exception){
            return false;
        }

        return true;
    }

}
