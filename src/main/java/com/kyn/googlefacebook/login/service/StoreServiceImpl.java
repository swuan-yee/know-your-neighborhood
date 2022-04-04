package com.kyn.googlefacebook.login.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.googlefacebook.login.dao.Store;
import com.kyn.googlefacebook.login.repository.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService{

	@Autowired
	private StoreRepository StoreRepo;
	
	@Override
	public List<Store> viewStore() {
		return StoreRepo.findAll();
	}

}
