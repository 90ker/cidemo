package com.example.demo.controller;

import com.example.demo.pojo.Person;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CommonController {
    @RequestMapping(value = "/a")
    public List<Person> findAll(){
        List persons = new ArrayList();
        for(int i=0;i<13;i++){
            Person person = new Person();
            person.setId(i);
            person.setName("p"+i);
            persons.add(person);
        }
        return persons;
    }
}
