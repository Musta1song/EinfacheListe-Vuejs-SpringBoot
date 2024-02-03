package com.example.shoppinglist;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.sql.Date;
import java.time.LocalDate;


@Entity
@Table(name = "VueShoppinglist")
public class Shoppinglist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "product")
    private String product;

    @Column(name = "weekday")
    private String weekday;

    public Shoppinglist(String product,String weekday) {
        super();
        this.product = product;
        this.weekday = weekday;
    }

    public long getId() {
        return id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }
   
    public Shoppinglist(){}


}
