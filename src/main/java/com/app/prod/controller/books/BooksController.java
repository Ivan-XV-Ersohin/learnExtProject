package com.app.prod.controller.books;

import com.app.prod.service.books.BooksService;
import com.app.prod.models.books.BooksEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping("/books")
public class BooksController {

    @Autowired
    private BooksService booksService;

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void create(@PathVariable String id, BooksEntity booksEntity) {
        booksService.addObject(booksEntity);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void createAll(LinkedList<BooksEntity> booksEntities) {
        for (BooksEntity booksEntity : booksEntities) {
            booksService.addObject(booksEntity);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public BooksEntity read(@PathVariable String id) {
        return booksService.findById(Long.parseLong(id)).get();
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<BooksEntity> readAll() {
        return booksService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    public void update(@PathVariable String id, BooksEntity booksEntity) {
        create(id, booksEntity);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
    public void updateA(@RequestBody BooksEntity someObjects) {
        create("1", someObjects);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        booksService.deleteObject(booksService.findById(Long.parseLong(id)).get());
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deleteAll() {
        booksService.deleteAll();
    }
}
