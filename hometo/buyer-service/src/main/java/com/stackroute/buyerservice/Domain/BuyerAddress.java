package com.stackroute.buyerservice.Domain;

public class BuyerAddress {
    private String Street;
    private String City;
    private String State;
    private Integer PIN;

    public String getStreet() {
        return Street;
    }

    public void setStreet(String street) {
        Street = street;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public Integer getPIN() {
        return PIN;
    }

    public void setPIN(Integer PIN) {
        this.PIN = PIN;
    }

    public BuyerAddress(String street, String city, String state, Integer PIN) {
        Street = street;
        City = city;
        State = state;
        this.PIN = PIN;
    }

    public BuyerAddress() {
    }

    @Override
    public String toString() {
        return "BuyerAddress{" +
                "Street='" + Street + '\'' +
                ", City='" + City + '\'' +
                ", State='" + State + '\'' +
                ", PIN=" + PIN +
                '}';
    }
}
