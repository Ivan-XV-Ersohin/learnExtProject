package com.app.prod.controller.authors;

import com.app.prod.dao.AuthorsDao;
import com.app.prod.models.authors.AuthorsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorsController {

    @Autowired
    private AuthorsDao authorsDAO;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public AuthorsEntity read(@PathVariable String id) {
        return authorsDAO.findById(Long.parseLong(id)).get();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<AuthorsEntity> readAll() {

        return authorsDAO.findAll();
    }

}
