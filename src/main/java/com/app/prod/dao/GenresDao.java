package com.app.prod.dao;

import com.app.prod.models.genres.GenresEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenresDao extends JpaRepository<GenresEntity, Long> {
}
