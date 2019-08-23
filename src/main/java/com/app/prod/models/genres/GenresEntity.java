package com.app.prod.models.genres;

import com.app.prod.models.books.BooksEntity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "genres")
public class GenresEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "my_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "my_seq", sequenceName = "my_sequence")
    private long id;

    @Column(name = "genre_name")
    private String name;

    @ManyToMany(mappedBy = "genres")
    private Set<BooksEntity> books;

    public Set<BooksEntity> getBooks() {
        return books;
    }

    public void setBooks(Set<BooksEntity> books) {
        this.books = books;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
