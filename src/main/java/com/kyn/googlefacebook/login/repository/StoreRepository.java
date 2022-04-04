package com.kyn.googlefacebook.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kyn.googlefacebook.login.dao.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{

}
