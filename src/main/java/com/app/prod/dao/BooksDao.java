package com.app.prod.dao;

import com.app.prod.models.books.BooksEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksDao extends JpaRepository<BooksEntity, Long> {
}
