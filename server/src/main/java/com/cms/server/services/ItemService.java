package com.cms.server.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.server.entities.Item;
import com.cms.server.repos.ItemRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ItemService {
    
    @Autowired
    private ItemRepo itemRepo;

    public Item handleReadItem(int itemId) {
        Optional<Item> item = this.itemRepo.findById(itemId);
        if (item.isPresent()) {
            return item.get();
        } else {
            throw new RuntimeException();
        }
    }
}
