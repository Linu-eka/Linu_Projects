package com.example.mylab2application;

import android.Manifest;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import com.google.android.material.navigation.NavigationView;
import com.provider.Book;
import com.provider.LibraryViewModel;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class MainActivity extends AppCompatActivity {
    EditText bookId;
    EditText title;
    EditText ISBN;
    EditText author;
    EditText desc;
    EditText price;

    private String ID_KEY = "ID_KEY";
    private String TITLE_KEY = "TITLE_KEY";
    private String ISBN_KEY = "ISBN_KEY";
    private String AUTHOR_KEY = "AUTHOR_KEY";
    private String DESC_KEY = "DESC_KEY";
    private String PRICE_KEY = "PRICE_KEY";

    private DrawerLayout drawerLayout;
    private NavigationView navigationView;
    private Toolbar toolbar;


    //private ArrayAdapter<String> adapter;

    /*ArrayList<Item> db;

    RecyclerView recyclerView;
    RecyclerView.LayoutManager layoutManager;
    BookRecyclerAdapter adapter;
    */
    RecyclerFragment recyclerFragment;
    private LibraryViewModel libraryViewModel;
    //Method is called during startup
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.drawer_layout);

        recyclerFragment = new RecyclerFragment();
        getSupportFragmentManager().beginTransaction().add(R.id.framelayout_id,recyclerFragment).commit();

        libraryViewModel = new ViewModelProvider(this).get(LibraryViewModel.class);

       /* db = new ArrayList<>();

        recyclerView = findViewById(R.id.recycler_id);

        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        adapter = new BookRecyclerAdapter();
        adapter.setData(db);
        recyclerView.setAdapter(adapter);*/
        //Week 5 Task 3
        //listview = findViewById(R.id.listView);
        //adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, datasource);
        //listview.setAdapter(adapter);

        //Week 5 Task 2
        drawerLayout = findViewById(R.id.drawer_layout);
        navigationView = findViewById(R.id.nav_view);
        toolbar = findViewById(R.id.toolbar);

        bookId = findViewById(R.id.editTextTextPersonName5);
        title = findViewById(R.id.editTextTextPersonName4);
        ISBN = findViewById(R.id.editTextTextPersonName);
        author = findViewById(R.id.editTextTextPersonName2);
        desc = findViewById(R.id.editTextTextPersonName3);
        price = findViewById(R.id.editTextTextPersonName6);

        navigationView.setNavigationItemSelectedListener(new BookNavHandler());

        //Request permission
        ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.SEND_SMS, Manifest.permission.RECEIVE_SMS, Manifest.permission.READ_SMS}, 0);

        //Create broadcast receiver
        MyBroadCastReceiver myBroadCastReceiver = new MyBroadCastReceiver();

        //Register broadcast handler
        registerReceiver(myBroadCastReceiver, new IntentFilter(SMSReceiver.SMS_FILTER));

        setSupportActionBar(toolbar);

        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.open_nav, R.string.close_nav);
        drawerLayout.addDrawerListener(toggle);
        toggle.syncState();

        //Add database to recycler view
        //Retrieve database
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

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.book_app_options_menu, menu);
        return true;
    }


    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        //Clear all items
        if (id == R.id.option_clear_items) {
            bookId.setText("");
            title.setText("");
            ISBN.setText("");
            author.setText("");
            desc.setText("");
            price.setText("");

        }
        //Load all items
        else if (id == R.id.option_load_items) {
            SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
            bookId.setText(prevBook.getString(ID_KEY, ""));
            title.setText(prevBook.getString(TITLE_KEY, ""));
            ISBN.setText(prevBook.getString(ISBN_KEY, ""));
            author.setText(prevBook.getString(AUTHOR_KEY, ""));
            desc.setText(prevBook.getString(DESC_KEY, ""));
            price.setText(prevBook.getString(PRICE_KEY, ""));

        }
        return true;
    }

    //Add book button functionality
    public void onAddBookClick(View view) {
        String priceStr = price.getText().toString();
        String titleStr = title.getText().toString();
        /*if (priceStr.equals("")) {
            priceStr = "0";
        }
        double priceNum = Double.parseDouble(priceStr);
        String msg = String.format("The price: (%.2f)", priceNum) + " " + titleStr;
        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show();
        */

        //RECYCLER VIEW ADD
        Item item=new Item(bookId.getText().toString(),titleStr,author.getText().toString(),ISBN.getText().toString(),desc.getText().toString(),priceStr);
        recyclerFragment.addItemToRecycler(item);

        //ADD TO DATABASE
        Book book = new Book(bookId.getText().toString(),titleStr,author.getText().toString(),ISBN.getText().toString(),desc.getText().toString(),priceStr);
        libraryViewModel.insertBookVM(book);



        //LAB 3 Task 2
        //When you click add button create a shared preference to store saves data.
        SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
        SharedPreferences.Editor editor = prevBook.edit();
        editor.putString(ID_KEY, bookId.getText().toString());
        editor.putString(TITLE_KEY, title.getText().toString());
        editor.putString(ISBN_KEY, ISBN.getText().toString());
        editor.putString(AUTHOR_KEY, author.getText().toString());
        editor.putString(DESC_KEY, desc.getText().toString());
        editor.putString(PRICE_KEY, price.getText().toString());

        editor.apply();
    }

    public void onClearFields(View view) {
        bookId.setText("");
        title.setText("");
        ISBN.setText("");
        author.setText("");
        desc.setText("");
        price.setText("");
    }

    public void onDoublePrice(View view) {
        String priceStr = price.getText().toString();
        double priceNum = Double.parseDouble(priceStr);
        priceNum = priceNum * 2;
        String msg = String.format("%.2f", priceNum);
        price.setText(msg);
    }
    /*--------------------------------------------WEEK 3------------------------------------------------------------- */


    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);


    }

    @Override
    protected void onRestoreInstanceState(@NonNull Bundle instate) {
        super.onRestoreInstanceState(instate);
        bookId.setText("");
        author.setText("");
        desc.setText("");
        price.setText("");
    }

    @Override
    protected void onStart() {
        super.onStart();
        SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
        bookId.setText(prevBook.getString(ID_KEY, ""));
        title.setText(prevBook.getString(TITLE_KEY, ""));
        ISBN.setText(prevBook.getString(ISBN_KEY, ""));
        author.setText(prevBook.getString(AUTHOR_KEY, ""));
        desc.setText(prevBook.getString(DESC_KEY, ""));
        price.setText(prevBook.getString(PRICE_KEY, ""));
    }

    @Override
    protected void onStop() {
        super.onStop();

    }

    public void onReloadClick(View view) {
        SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
        bookId.setText(prevBook.getString(ID_KEY, ""));
        title.setText(prevBook.getString(TITLE_KEY, ""));
        ISBN.setText(prevBook.getString(ISBN_KEY, ""));
        author.setText(prevBook.getString(AUTHOR_KEY, ""));
        desc.setText(prevBook.getString(DESC_KEY, ""));
        price.setText(prevBook.getString(PRICE_KEY, ""));

    }

    public void onUnknownTitleClick(View view) {
        SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
        SharedPreferences.Editor editor = prevBook.edit();
        editor.putString(TITLE_KEY, "Unknown");
        editor.apply();


    }

    class BookNavHandler implements NavigationView.OnNavigationItemSelectedListener {
        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            int id = item.getItemId();
            switch (id) {
                case R.id.nav_add_book:
                    if (title.getText().toString() != "" || price.getText().toString() != "") {
                        Item new_item=new Item(bookId.getText().toString(),title.getText().toString(),ISBN.getText().toString(),author.getText().toString(),desc.getText().toString(),price.getText().toString());
                        recyclerFragment.addItemToRecycler(new_item);

                        SharedPreferences prevBook = getSharedPreferences("prev_book.ext", MODE_PRIVATE);
                        SharedPreferences.Editor editor = prevBook.edit();
                        editor.putString(ID_KEY, bookId.getText().toString());
                        editor.putString(TITLE_KEY, title.getText().toString());
                        editor.putString(ISBN_KEY, ISBN.getText().toString());
                        editor.putString(AUTHOR_KEY, author.getText().toString());
                        editor.putString(DESC_KEY, desc.getText().toString());
                        editor.putString(PRICE_KEY, price.getText().toString());

                        editor.apply();
                        break;
                    }

                case R.id.nav_remove_last:{
                    recyclerFragment.removeLast();
                    break;
                }
                case R.id.nav_remove_all:{
                    libraryViewModel.deleteAllBooksVM();
                    recyclerFragment.removeAll();
                    break;
                }
                case R.id.nav_title_upper:{
                    String temp = title.getText().toString().toUpperCase();
                    title.setText(temp);
                    break;
                } case R.id.nav_title_switch:{
                    Intent switchActivity = new Intent(MainActivity.this, MainActivity2.class);
                    startActivity(switchActivity);
                }

            }
            drawerLayout.closeDrawers();

            return true;
        }
    }

    class MyBroadCastReceiver extends BroadcastReceiver {

        /*
         * This method 'onReceive' will get executed every time class SMSReceive sends a broadcast
         * */
        @Override
        public void onReceive(Context context, Intent intent) {
            /*
             * Retrieve the message from the intent
             * */
            String msg = intent.getStringExtra(SMSReceiver.SMS_MSG_KEY);
            /*
             * String Tokenizer is used to parse the incoming message
             * The protocol is to have the account holder name and account number separate by a semicolon
             * */
            int bookTotal = 0;
            StringTokenizer sT = new StringTokenizer(msg, "|");
            String id = sT.nextToken();
            String bookTitle = sT.nextToken();
            String bookIsbn = sT.nextToken();
            String bookAuth = sT.nextToken();
            String bookDesc = sT.nextToken();
            String bookPrice = sT.nextToken();
            String bookAdd = sT.nextToken();
            /*
             * update the UI
             * */
            bookId.setText(id);
            title.setText(bookTitle);
            ISBN.setText(bookIsbn);
            author.setText(bookAuth);
            desc.setText(bookDesc);
            //price.setText(bookPrice);
            bookTotal = Integer.parseInt(bookAdd) + Integer.parseInt(bookPrice);
            price.setText(Integer.toString(bookTotal));


        }
    }
}