package com.kyn.googlefacebook.login.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.googlefacebook.login.dao.Users;
import com.kyn.googlefacebook.login.exception.ResourceNotFoundException;
import com.kyn.googlefacebook.login.repository.UsersRepository;
import com.kyn.googlefacebook.login.service.UsersPrincipal;



@RestController
@RequestMapping(value="/kyn")
public class UsersController {
	@Autowired
    private UsersRepository userRepository;

	//Profile API <<Get Current User Profile>>
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public Users getUser(@CurrentUser UsersPrincipal usersPrincipal) {
    	return userRepository.findById((usersPrincipal.getUserId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Users", "userId", usersPrincipal.getUserId()));
    }
}
