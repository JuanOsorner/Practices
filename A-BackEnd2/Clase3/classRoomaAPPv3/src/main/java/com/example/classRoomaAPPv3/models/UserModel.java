package com.example.classRoomaAPPv3.models;

import java.time.LocalDate;

public class UserModel {

    private Long id;
    private String fullname;
    private String email;
    private String phone;
    private String address;
    private String typeId; //ENUM (type document, state)
    private String idNumber;
    private String nickName;
    private String password;
    private LocalDate registrDate;
    public UserModel(){
    }
    public UserModel(Long id, String fullname, String email, String phone, String address, String typeId, String idNumber, String nickName, String password, LocalDate registrDate) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.typeId = typeId;
        this.idNumber = idNumber;
        this.nickName = nickName;
        this.password = password;
        this.registrDate = registrDate;
    }
    //Como tenemos atributos privados debemos hacer encampusalmiento
    //GETTERSANDSETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getRegistrDate() {
        return registrDate;
    }

    public void setRegistrDate(LocalDate registrDate) {
        this.registrDate = registrDate;
    }
}
