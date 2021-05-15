package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;

public class Test {

    public static void main(String[] args) {
        String aaa = null;

        try{
           // aaa.equals("");
            String ccc = null;
            throw new RuntimeException("text");
        } catch (Exception e) {
            int maxLength = e.getMessage().length();
            if(e.getMessage().length()>500){
                maxLength = 500;
            }
            System.out.println(e.getMessage().substring(0,maxLength));
            System.out.println(e.getLocalizedMessage());
            System.out.println(e.getSuppressed());
            System.out.println(e.getStackTrace());
            System.out.println(e.getCause());
        }

    }
}
