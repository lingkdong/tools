package com.tools;

import com.tools.config.EntityConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BootApplication.class)
@Import(EntityConfig.class)
public class BootApplicationTests {

	@Test
	public void contextLoads() {
	}
   @Test
   public void Test(){
		add(2);
   }

	public int  add(int i){
		int result=0;
		switch(i){
			case 1:
				result=result+i;
			case 2:
				result=result+i*i;
			case 3:
				result=result+i*i+1;
			case 4:
				result=result+i*i+1;
			case 100:
				result=result+i*i+1;
		}
		return result;


	}

	public static void main(String[] args) {
		Thread thread = new Thread(() -> System.out.println("ping"));
		thread.run();
		System.out.println("pong");
	}
}
