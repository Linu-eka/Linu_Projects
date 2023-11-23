package com.example.mylab2application;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class BookRecyclerAdapter extends RecyclerView.Adapter<BookRecyclerAdapter.ViewHolder> {
    ArrayList<Item> db;
    @NonNull
    @Override
    public BookRecyclerAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_layout,parent,false);
        ViewHolder viewHolder=new ViewHolder(view);
        return viewHolder;
    }

    public void setData(ArrayList<Item> db) {
        this.db= db;
    }

    @Override
    public void onBindViewHolder(@NonNull BookRecyclerAdapter.ViewHolder holder, int position) {
        holder.idEt.setText(db.get(position).getItem_id());
        holder.titleEt.setText(db.get(position).getItem_title());
        holder.priceEt.setText(db.get(position).getItem_price());
        holder.descEt.setText(db.get(position).getItem_desc());
        holder.isbnEt.setText(db.get(position).getItem_isbn());
        holder.authorEt.setText(db.get(position).getItem_auth());

    }

    @Override
    public int getItemCount() {
        return db.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView idEt;
        TextView titleEt;
        TextView authorEt;
        TextView isbnEt;
        TextView descEt;
        TextView priceEt;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            idEt = itemView.findViewById(R.id.card_id_id);
            titleEt = itemView.findViewById(R.id.card_title_id);
            authorEt = itemView.findViewById(R.id.card_author_id);
            isbnEt = itemView.findViewById(R.id.card_isbn_id);
            descEt = itemView.findViewById(R.id.card_desc_id);
            priceEt = itemView.findViewById(R.id.card_price_id);
        }
    }
}
