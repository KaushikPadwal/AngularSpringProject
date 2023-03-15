package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Repository.StudentRepository;
import com.example.entity.Student;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController 
{
   @Autowired
	private StudentRepository studentrepository;
   
   @PostMapping("/students")
   public Student addStudent(@RequestBody Student student) 
   {
	   return studentrepository.save(student);
   }
   
   @GetMapping ("/students")
   public List<Student> getStudents()
   {
	return studentrepository.findAll();
	   
   }
   
   public void deleteStudent(@PathVariable int id) 
   {
	    studentrepository.deleteById(id);
   }
//   @PutMapping("/students/{id}")
//   public Student updateStudent(@PathVariable int id, @RequestBody Student student) 
//   {
//	   return studentrepository.save(int id);
//   }
}
