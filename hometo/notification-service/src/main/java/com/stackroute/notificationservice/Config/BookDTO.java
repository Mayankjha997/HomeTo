package com.stackroute.notificationservice.Config;

import org.json.simple.JSONObject;

public class BookDTO {
    private JSONObject jsonObject;
    public BookDTO(){

    }

    public JSONObject getJsonObject() {
        return jsonObject;
    }

    public void setJsonObject(JSONObject jsonObject) {
        this.jsonObject = jsonObject;
    }
}
