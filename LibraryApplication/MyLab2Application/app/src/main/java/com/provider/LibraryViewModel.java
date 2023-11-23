package com.provider;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import java.util.List;

public class LibraryViewModel extends AndroidViewModel {

    private LibraryRepo libraryRepo;
    LiveData<List<Book>> myLibrary;
    public LibraryViewModel(@NonNull Application application){
        super(application);

        libraryRepo = new LibraryRepo(application);
        myLibrary = libraryRepo.getMyBooks();
    }

    public LiveData<List<Book>> getMyLibrary() {
        return myLibrary;
    }

    public void insertBookVM(Book book){
        libraryRepo.addBookRepo(book);
    }

    public void deleteAllBooksVM(){
        libraryRepo.deleteAllRepo();

    }
}
