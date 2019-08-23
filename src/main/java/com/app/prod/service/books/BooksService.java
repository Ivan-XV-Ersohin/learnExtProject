package com.app.prod.service.books;

import com.app.prod.dao.BooksDao;
import com.app.prod.models.books.BooksEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksDao entityDao;

    public void addObject(BooksEntity t) {
        entityDao.save(t);
    }

    public void deleteObject(BooksEntity t) {
        entityDao.delete(t);
    }

    public void deleteAll() {
        entityDao.deleteAll();
    }

    public Optional<BooksEntity> findById(long id) {
        Optional<BooksEntity> booksEntity = Optional.of(entityDao.getOne(id));
        return booksEntity;
    }

    public Iterable<BooksEntity> findAll() {
        return entityDao.findAll();
    }
}