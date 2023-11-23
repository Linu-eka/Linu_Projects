package com.provider;

import android.app.Application;


import androidx.lifecycle.LiveData;

import java.util.List;

public class LibraryRepo {
    private BookDao bookDao;
    private LiveData<List<Book>> myBooks;

    public LibraryRepo(Application app) {
        LibraryDatabase db = LibraryDatabase.getDatabase(app);
        bookDao=db.bookDao();
        myBooks = bookDao.getAllBooks();
    }

    public LiveData<List<Book>> getMyBooks() {
        return myBooks;
    }

    public void addBookRepo(Book book){
        LibraryDatabase.databaseWriteExecutor.execute(()->{
            bookDao.addBookToLibrary(book);
        });
    }

    public void deleteAllRepo(){
        LibraryDatabase.databaseWriteExecutor.execute(()->{
          bookDao.deleteAll();
        });
    }
}
