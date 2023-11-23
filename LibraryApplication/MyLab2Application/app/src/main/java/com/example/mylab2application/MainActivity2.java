package com.example.mylab2application;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;

import android.os.Bundle;
import android.widget.Toast;

import com.provider.LibraryViewModel;

public class MainActivity2 extends AppCompatActivity {

    RecyclerFragment recyclerFragment;

    private LibraryViewModel libraryViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        recyclerFragment = new RecyclerFragment();
        getSupportFragmentManager().beginTransaction().add(R.id.frame_layout2,recyclerFragment).commit();

        libraryViewModel = new ViewModelProvider(this).get(LibraryViewModel.class);
        final boolean[] first = {true};
        libraryViewModel.getMyLibrary().observe(this,(library)->{

            //On first instance of method being run add all existing elements to recycler view
            if(first[0]){
                for(int i =0;i<library.size();i++){
                    Item item=new Item(library.get(i).getId(),library.get(i).getTitle(),library.get(i).getAuthor(),library.get(i).getIsbn(),library.get(i).getDesc(),library.get(i).getPrice());
                    recyclerFragment.addItemToRecycler(item);

                }

                first[0] = false;
            }

            Toast.makeText(getApplicationContext(), "#Books="+library.size(), Toast.LENGTH_SHORT).show();
        });
    }
}