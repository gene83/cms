package com.cms.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.server.entities.Item;
import com.cms.server.services.ItemService;

@RestController
@RequestMapping("items")
public class ItemController {
    
    @Autowired
    private ItemService itemService;

    @GetMapping("{itemId:[0-9]+}")
    public ResponseEntity<Item> readItem(@PathVariable int itemId) {
        return ResponseEntity.ok(this.itemService.handleReadItem(itemId));
    }
}
