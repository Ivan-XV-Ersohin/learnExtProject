package com.app.prod.models.books;

import com.app.prod.models.authors.AuthorsEntity;
import com.app.prod.models.genres.GenresEntity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "books")
public class BooksEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    @SequenceGenerator(name = "seq", sequenceName = "my_sequence")
    @Column(name = "id")
    private long id;

    @Column(name = "book_name")
    private String name;

    @Column(name = "isbn")
    private long isbn;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "books_genre",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<GenresEntity> genres;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "authors_books",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private Set<AuthorsEntity> authors;

    public Set<GenresEntity> getGenres() {
        return genres;
    }

    public void setGenres(Set<GenresEntity> genres) {
        this.genres = genres;
    }

    public Set<AuthorsEntity> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<AuthorsEntity> authors) {
        this.authors = authors;
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

    public long getIsbn() {
        return isbn;
    }

    public void setIsbn(long isbn) {
        this.isbn = isbn;
    }

    @Override
    public String toString() {
        return "BooksEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
