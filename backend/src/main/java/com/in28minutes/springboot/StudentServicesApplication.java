package com.in28minutes.springboot;

import com.in28minutes.springboot.model.*;
import com.in28minutes.springboot.repository.*;
import com.in28minutes.springboot.service.CountryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestMethod;

import com.in28minutes.springboot.exception.ProductNotfoundException;
import com.in28minutes.springboot.service.ProductService;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.thymeleaf.expression.Lists;

@SpringBootApplication
@RestController
public class StudentServicesApplication {

	@Autowired
	ProductService productService;

    @Autowired
    CountryService countryService;


	@Value("${spring.application.name:majaDefaultValue}")
	private String name;
	private static final Logger logger = LoggerFactory.getLogger(StudentServicesApplication.class);
	private static Map<String, Product> productRepo = new HashMap<>();
	   
	static {
      Product honey = new Product();
      honey.setId("1");
      honey.setName("Honey");
      productRepo.put(honey.getId(), honey);
      
      Product almond = new Product();
      almond.setId("2");
      almond.setName("Almond");
      productRepo.put(almond.getId(), almond);
   }
	
	public static void main(String[] args) {
		logger.info("this is a info message");
	    logger.warn("this is a warn message");
	    logger.error("this is a error message");
        System.out.println("----------> " + System.getProperty("java.class.path"));
		SpringApplication.run(StudentServicesApplication.class, args);

	}

    @Bean
    public CommandLineRunner demo(StudentRepository repository, CountryRepository countryRepository, AddressRepository addressRepository, RoleRepository roleRepository, UserRepository userRepository, SubjectRepository subjectRepository) {
        return (args) -> {
            // save a few customers

/*
            countryService.saveCountry("SK", "Slovakia");
*/


            subjectRepository.save(new Subject("Armenian",1));
            subjectRepository.save(new Subject("Slovakian",1));
            subjectRepository.save(new Subject("Slovakian",2));
            subjectRepository.save(new Subject("English",1));
            subjectRepository.save(new Subject("English",2));
            subjectRepository.save(new Subject("German",1));
            subjectRepository.save(new Subject("German",2));
            subjectRepository.save(new Subject("German",3));
           // userRepository.save(new User);
            roleRepository.save(new Role(ERole.ROLE_ADMIN, "Admin role", new Date()));
            roleRepository.save(new Role(ERole.ROLE_USER, "User role", new Date()));

            //Collection<Role> rolesIterable = roleRepository.findAll();
            List<Role> roles = StreamSupport.stream(roleRepository.findAll().spliterator(), false).collect(Collectors.toList());

            userRepository.save(new User("mod", "mod@bezkoder.com", "$2a$10$VcdzH8Q.o4KEo6df.XesdOmXdXQwT5ugNQvu1Pl0390rmfOeA1bhS", roles));
            //userRepository.save(new User(false, "Jozef", "Copjan", "jozef.copjan@sk.ibm.com", new Date(), roles));

            countryRepository.save(new Country("SK", "Slovakia"));
            countryRepository.save(new Country("CZ", "Czech republic"));
            countryRepository.save(new Country("US", "USA"));
            countryRepository.save(new Country("UK", "United Kingdom"));

            List<Country> countries = StreamSupport.stream(countryRepository.findAll().spliterator(), false).collect(Collectors.toList());

            addressRepository.save(new Address(countries.get(0), "Stara Lubovna", "Mierova", 31, "06401"));
            addressRepository.save(new Address(countries.get(1), "Koprivnice", "Jarni", 33, "43425"));
            addressRepository.save(new Address(countries.get(2), "San Jose", "Loason", 543, "43257"));
            addressRepository.save(new Address(countries.get(3), "Manchester", "Abben street", 3651, "765455"));
            addressRepository.save(new Address(countries.get(0), "Kosice", "Cottbuska", 23, "04004"));

            List<Address> addresses = StreamSupport.stream(addressRepository.findAll().spliterator(), false).collect(Collectors.toList());

            ZoneId defaultZoneId = ZoneId.systemDefault();
            Set<Subject> subjects = new HashSet<>();
            subjects.add(subjectRepository.findById(1l).get());
            subjects.add(subjectRepository.findById(2l).get());
            subjects.add(subjectRepository.findById(4l).get());

            repository.save(new Student("Jack", "Bauer", addresses.get(0), 1l, new GregorianCalendar(1987, Calendar.NOVEMBER, 11).getTime(), Date.from(LocalDate.now().minusDays(0).atStartOfDay(defaultZoneId).toInstant()),true, "M", subjects));
            repository.save(new Student("Chloe", "O'Brian", addresses.get(1),2l, new GregorianCalendar(1986, Calendar.DECEMBER, 11).getTime(), Date.from(LocalDate.now().minusDays(1).atStartOfDay(defaultZoneId).toInstant()),false, "M", null));
            repository.save(new Student("Kim", "Bauer", addresses.get(2),4l, new GregorianCalendar(1983, Calendar.APRIL, 11).getTime(), Date.from(LocalDate.now().minusDays(2).atStartOfDay(defaultZoneId).toInstant()), false, "F", subjects));
            repository.save(new Student("david", "Palmer", addresses.get(3),2l, new GregorianCalendar(1982, Calendar.NOVEMBER, 11).getTime(), Date.from(LocalDate.now().minusDays(3).atStartOfDay(defaultZoneId).toInstant()), true, "M", subjects));
            repository.save(new Student("Michelle", "Dessler", addresses.get(4),7l, new GregorianCalendar(1987, Calendar.JANUARY, 11).getTime(), Date.from(LocalDate.now().minusDays(4).atStartOfDay(defaultZoneId).toInstant()), true, "F", null));

            // fetch all customers
            logger.info("Customers found with findAll():");
            logger.info("-------------------------------");
            for (Student customer : repository.findAll()) {
                logger.info(customer.toString());
            }
            logger.info("");

            // fetch an individual customer by ID
            Student customer = repository.findById(1L);
            logger.info("Customer found with findById(1L):");
            logger.info("--------------------------------");
//            logger.info(customer.toString());
            logger.info("");

            // fetch customers by last name
            logger.info("Customer found with findByLastName('Bauer'):");
            logger.info("--------------------------------------------");
            repository.findByLastName("Bauer").forEach(bauer -> {
                logger.info(bauer.toString());
            });
            // for (Customer bauer : repository.findByLastName("Bauer")) {
            //  log.info(bauer.toString());
            // }


           // Subject subject = new Subject();



            logger.info("");
        };
    }
	
	@RequestMapping(value = "/test")
	public String hello() {
		String aaa = "aaa";
		logger.info("SKUSKA --------------");
		System.out.println(aaa + name);
			return "Hello World " + name;
	}
	
	@CrossOrigin
	@GetMapping("/cool-cars")
    public Collection<Product> coolCars() {
        return productService.getProducts();
    }
	
	@CrossOrigin
   @RequestMapping(value = "/products")
   public ResponseEntity<Object> getProduct() {
      return new ResponseEntity<>(productService.getProducts(), HttpStatus.OK);
   }
   @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
   public ResponseEntity<Object> 
      updateProduct(@PathVariable("id") String id, @RequestBody Product product) {
      
      productService.updateProduct(id, product);
      return new ResponseEntity<>("Product is updated successsfully", HttpStatus.OK);
   }
   @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
   public ResponseEntity<Object> delete(@PathVariable("id") String id) {
      productService.deleteProduct(id);
      return new ResponseEntity<>("Product is deleted successsfully", HttpStatus.OK);
   }
   @RequestMapping(value = "/products", method = RequestMethod.POST)
   public ResponseEntity<Object> createProduct(@RequestBody Product product) {
      productService.createProduct(product);
      return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
   }
   
   
   
   
   
   
   
   @RequestMapping(value = "/productsById/{id}", method = RequestMethod.GET)
   public ResponseEntity<Object> getProductById(@PathVariable("id") String id) {
	   if(!productRepo.containsKey(id))throw new ProductNotfoundException();
	   System.out.println("ID new ----------- " + id);
      return new ResponseEntity<>(productRepo.get(id).getName(), HttpStatus.OK);
   }
   
   @RequestMapping(value = "/download", method = RequestMethod.GET) 
   public ResponseEntity<Object> downloadFile() throws IOException  {
      String filename = "c://Users/IBM_ADMIN/Downloads/I-213435_406415.png";
      File file = new File(filename);
      InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
      HttpHeaders headers = new HttpHeaders();
      
      headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));
      headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
      headers.add("Pragma", "no-cache");
      headers.add("Expires", "0");
      
      ResponseEntity<Object> 
      responseEntity = ResponseEntity.ok().headers(headers).contentLength(
         file.length()).contentType(MediaType.parseMediaType("application/txt")).body(resource);
      
      return responseEntity;
   }
   
}

