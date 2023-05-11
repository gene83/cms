package com.cms.server.repos;

import com.cms.server.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepo extends JpaRepository<Item, Integer> {}
