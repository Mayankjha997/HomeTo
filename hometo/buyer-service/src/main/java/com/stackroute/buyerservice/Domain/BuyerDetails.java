package com.stackroute.buyerservice.Domain;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class BuyerDetails {
    @Id
    private String buyeremail;
    private String password;
    private String firstName;
    private String lastName;
    private Integer phoneNo;
    private List<BuyerAddress> adrlist;
    private Integer budget;

    public String getBuyeremail() {
        return buyeremail;
    }

    public void setBuyeremail(String buyeremail) {
        this.buyeremail = buyeremail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(Integer phoneNo) {
        this.phoneNo = phoneNo;
    }

    public List<BuyerAddress> getAdrlist() {
        return adrlist;
    }

    public void setAdrlist(List<BuyerAddress> adrlist) {
        this.adrlist = adrlist;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public BuyerDetails(String buyeremail, String password, String firstName, String lastName, Integer phoneNo, List<BuyerAddress> adrlist, Integer budget) {
        this.buyeremail = buyeremail;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNo = phoneNo;
        this.adrlist = adrlist;
        this.budget = budget;
    }

    public BuyerDetails() {
    }

    @Override
    public String toString() {
        return "BuyerDetails{" +
                "buyeremail='" + buyeremail + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNo=" + phoneNo +
                ", adrlist=" + adrlist +
                ", budget=" + budget +
                '}';
    }
}

