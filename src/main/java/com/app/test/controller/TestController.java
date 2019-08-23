package com.app.test.controller;

import com.app.test.testModel.TestModel;
import net.bytebuddy.utility.RandomString;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {

    private TestModel testModel;

    @RequestMapping(value = "/getMethod", method = RequestMethod.GET)
    public TestModel getMethod() {
        testModel = new TestModel(1, "Gim");
        return testModel;
    }

    @RequestMapping(value = "/postMethod", method = RequestMethod.POST)
    public List<TestModel> postMethod() {
        List<TestModel> testModels = new ArrayList<TestModel>();
        testModel = new TestModel(2, RandomString.make(10000));
        testModels.add(testModel);
        testModels.add(new TestModel(2, "Оставьте меня в покое"));
        return testModels;
    }
}