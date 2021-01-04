package com.in28minutes.springboot.service;

import java.util.Collection;
import com.in28minutes.springboot.model.Product;

public interface ProductService {
   public abstract void createProduct(Product product);
   public abstract void updateProduct(String id, Product product);
   public abstract void deleteProduct(String id);
   public abstract Collection<Product> getProducts();
}
