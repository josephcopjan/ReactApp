package com.in28minutes.springboot.auth;

import com.in28minutes.springboot.configuration.CORSFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.session.SessionManagementFilter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Bean
    CORSFilter corsFilter() {
        CORSFilter filter = new CORSFilter();
        return filter;
    }

    @Override
    protected void configure(HttpSecurity httpSecurity)
            throws Exception {
        httpSecurity.authorizeRequests()
                .antMatchers("/h2-console/**")
                .permitAll()
                .antMatchers("/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin();

        httpSecurity.csrf()
                .ignoringAntMatchers("/h2-console/**");
        httpSecurity.headers()
                .frameOptions()
                .sameOrigin();

        httpSecurity.addFilterBefore(corsFilter(), SessionManagementFilter.class).authorizeRequests().anyRequest().permitAll();
        httpSecurity.csrf().disable();
    }
}
