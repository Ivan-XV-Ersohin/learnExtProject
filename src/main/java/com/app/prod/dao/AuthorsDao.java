package com.app.prod.dao;

import com.app.prod.models.authors.AuthorsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorsDao extends JpaRepository<AuthorsEntity, Long> {
}
