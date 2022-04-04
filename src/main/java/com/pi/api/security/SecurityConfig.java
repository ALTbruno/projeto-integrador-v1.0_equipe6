package com.pi.api.security;

import com.pi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtFilter jwtFilter;

	@Autowired
	private UserService userService;


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		SessionManagementConfigurer<HttpSecurity> httpSecuritySessionManagementConfigurer = http.csrf().disable()
				.httpBasic().disable()
				.cors()
				.and()
				.authorizeHttpRequests()
				.antMatchers("/api/status", "/swagger-ui/**", "/v3/api-docs/**").permitAll()
				.antMatchers("/api/users/customers/register", "/api/users/login").permitAll()
				.antMatchers(HttpMethod.GET, "/api/categories/**").permitAll()
				.antMatchers(HttpMethod.GET, "/api/cities/**").permitAll()
				.antMatchers(HttpMethod.GET, "/api/products/**").permitAll()
				.antMatchers("/api/reservations/book").hasRole("USER")
//				.antMatchers("api/categories/add").hasRole("ROLE_ADMIN")
//				.antMatchers("/api/users/id=**").hasRole("ADMIN")
//				.anyRequest().hasAuthority("ADMIN")
				.and()
				.userDetailsService(userService)
				.exceptionHandling()
				.authenticationEntryPoint(
						(request, response, authException) ->
								response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized")
				)
				.and()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

}
