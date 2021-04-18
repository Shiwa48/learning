package com.example.demo.controller;

import java.util.List;

import com.example.demo.domain.Item;
import com.example.demo.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/items-json")
public class ItemJsonController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> index() {
        List<Item> items = itemService.findAll();
        return items;
    }

    @GetMapping("{id}")
    public Item show(@PathVariable("id") Long id) {
        Item item = itemService.findOne(id);
        return item;
    }
    
}
