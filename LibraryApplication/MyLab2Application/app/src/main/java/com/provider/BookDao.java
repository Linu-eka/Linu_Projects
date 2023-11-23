package com.provider;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;

import java.util.List;

@Dao
public interface BookDao {

    @Insert
    public void addBookToLibrary(Book book);

    @Query("Delete from books where primary_id= :primary_id")
    public void deleteBook(int primary_id);

    @Query("select * from books")
    public LiveData<List<Book>> getAllBooks();


    @Query("Delete from books where book_title= 'untitled' and  book_author='unknown' and book_price= '0'")
    public void deleteAll();
}
