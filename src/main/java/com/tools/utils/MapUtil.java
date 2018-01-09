package com.tools.utils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by DT254 on 2018/1/9.
 */
public class MapUtil {
   public static Map build(){
       return new HashMap();
   }
   public static Map build(int size){
       return new HashMap(1);
   }
}
