package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import com.example.demo.domain.Item;
import com.example.demo.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;


@CrossOrigin
@RestController
@RequestMapping("/items-json")
public class ItemJsonController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> index() {
        List<Item> items = itemService.findAll();
        // try{
        //     Thread.sleep(1000); //1000ミリ秒Sleepする
        // }catch(InterruptedException e){}
        return items;
    }

    @GetMapping("{id}")
    public Item show(@PathVariable("id") Long id) {
        Item item = itemService.findOne(id);
        return item;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid Item item) {
        itemService.save(item);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Valid Item item) {
        itemService.update(item);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {        
        itemService.delete(id);
    }
}
