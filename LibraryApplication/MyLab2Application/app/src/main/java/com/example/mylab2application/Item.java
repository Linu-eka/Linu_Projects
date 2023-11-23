package com.example.mylab2application;

public class Item {
    private String item_id;
    private String item_title;
    private String item_auth;
    private String item_isbn;
    private String item_desc;
    private String item_price;

    public Item(String item_id, String item_title, String item_auth, String item_isbn, String item_desc, String item_price) {
        this.item_id = item_id;
        this.item_title = item_title;
        this.item_auth = item_auth;
        this.item_isbn = item_isbn;
        this.item_desc = item_desc;
        this.item_price = item_price;
    }

    public String getItem_id() {
        return item_id;
    }

    public String getItem_title() {
        return item_title;
    }

    public String getItem_auth() {
        return item_auth;
    }

    public String getItem_isbn() {
        return item_isbn;
    }

    public String getItem_desc() {
        return item_desc;
    }

    public String getItem_price() {
        return item_price;
    }
}
