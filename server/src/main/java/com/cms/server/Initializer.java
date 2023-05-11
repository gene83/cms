package com.cms.server;

import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.cms.server.entities.Item;
import com.cms.server.repos.ItemRepo;

@Component
public class Initializer implements CommandLineRunner {

    @Autowired
    private ItemRepo itemRepo;

    @Override
    public void run(String... strings) {
        Stream.of("Surfboard", "golf clubs", "book").forEach(name -> {
            Item item = new Item();
            item.setName(name);
            this.itemRepo.save(item);
        });

        this.itemRepo.findAll().forEach(System.out::println);
    }
}
