package com.kyn.googlefacebook.login.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kyn.googlefacebook.login.dao.Store;
import com.kyn.googlefacebook.login.service.StoreService;



@RestController
@RequestMapping("/kyn")
public class StoreController {
	@Autowired
	private StoreService storeService;
	
	@GetMapping("/view-stores")
    @PreAuthorize("hasRole('USER')")
	public List<Store> viewStore(){
		List<Store> stores = storeService.viewStore();
		return stores;
	}
	
}
