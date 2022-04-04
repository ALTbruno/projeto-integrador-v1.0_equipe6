package com.pi.api.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.pi.api.model.User;
import com.pi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Optional;

@Component
public class JwtUtil {

	@Value("jwtSecretKey}")
	private String secret;

	@Value("${jwtExpirationInMs}")
	private int jwtExpirationInMs;

	@Autowired
	private UserService userService;

	public String generateToken(String email) throws IllegalArgumentException, JWTCreationException {

		Optional<User> user = userService.findByEmail(email);

		Date now = new Date();
		Date tokenExpiration = new Date(now.getTime() + jwtExpirationInMs);

		return JWT.create()
				.withSubject("User Details")
				.withClaim("id", user.get().getId())
				.withClaim("firstName", user.get().getFirstName())
				.withClaim("lastName", user.get().getLastName())
				.withClaim("email", email)
				.withClaim("role", user.get().getRole().toString())
				.withIssuedAt(new Date())
				.withExpiresAt(tokenExpiration)
				.withIssuer("com.pi.api")
				.sign(Algorithm.HMAC256(secret));
	}

	public String validateTokenAndRetrieveSubject(String token)throws JWTVerificationException {
		JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secret))
				.withSubject("User Details")
				.withIssuer("com.pi.api")
				.build();
		DecodedJWT jwt = verifier.verify(token);
		return jwt.getClaim("email").asString();
	}

}
