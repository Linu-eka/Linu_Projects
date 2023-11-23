package com.provider;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "books")
public class Book {
    @PrimaryKey(autoGenerate = true)
    @NonNull
    private int primary_id;

    @ColumnInfo(name = "book_id")
    private String id;

    @ColumnInfo(name = "book_title")
    private String title;

    @ColumnInfo(name = "book_isbn")
    private String isbn;

    @ColumnInfo(name = "book_author")
    private String author;

    @ColumnInfo(name = "book_desc")
    private String desc;

    @ColumnInfo(name = "book_price")
    private String price;

    public Book(String id, String title, String isbn, String author, String desc, String price) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.desc = desc;
        this.price = price;
    }

    public void setPrimary_id(int primary_id) {
        this.primary_id = primary_id;
    }

    public int getPrimary_id() {
        return primary_id;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getAuthor() {
        return author;
    }

    public String getDesc() {
        return desc;
    }

    public String getPrice() {
        return price;
    }
}
