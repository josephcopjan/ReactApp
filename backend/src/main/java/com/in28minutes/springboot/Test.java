package com.in28minutes.springboot;

import com.in28minutes.springboot.model.Address;
import org.springframework.boot.SpringApplication;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.temporal.ChronoUnit;

public class Test {

    private static final int REPORT_NUM_FROM_DEC_2020 = 137;
    private static final LocalDate STARTING_REPORT_DATE = LocalDate.of(2020, 12, 24);

    public static void main(String[] args) {

        LocalDate date = LocalDate.now();
        LocalDate earlier = LocalDate.now().minusMonths(1);
        System.out.println("--> " + earlier.getMonthValue());
        System.out.println("--> " + earlier.getYear());

        Long monthsBetween = ChronoUnit.MONTHS.between(
                YearMonth.from(STARTING_REPORT_DATE),
                YearMonth.from(LocalDate.now()));

        int reportNum = (REPORT_NUM_FROM_DEC_2020 + monthsBetween.intValue());


        String aaa = null;
        String bbb= null;
        Address address = new Address();
        Field[] field = address.getClass().getDeclaredFields();

        for (int j = 0; j <field.length; j ++) {
            String name = field[j].getName();

            String type = field[j].getGenericType().toString();
            System.out.println(name + " - " +type);

            Type type2 = field[j].getGenericType();

            if(type2.equals(String.class)){
                System.out.println("-----> " + type2);
            }

            // This is the type String, so other
            if (type.equals("class java.lang.String")) {// if the type is a class type, comprising a front "class", the class name followed by
                //Method m = address.getClass().getMethod("get" + name);
                //String value = (String) m.invoke(address); // call the getter method to get the property value
            }
        }
        System.out.println(address.getClass().getDeclaredFields());
        /*
        System.out.println("MY SECOND BG".toUpperCase());
        System.out.println("kir".toUpperCase());
        System.out.println("8Z".toUpperCase());
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
        }*/

    }
}
