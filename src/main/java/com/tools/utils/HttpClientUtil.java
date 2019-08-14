package com.tools.utils;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpClientParams;
import org.apache.commons.httpclient.params.HttpConnectionParams;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.commons.httpclient.protocol.Protocol;
import org.apache.commons.httpclient.protocol.ProtocolSocketFactory;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.net.SocketFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.IOException;
import java.net.*;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.Map;

/**
 * 处理http和https协议请求
 * 
 * 根据请求url判断协议类型
 * 
 * 
 */
public class HttpClientUtil {

	private static Logger logger = LoggerFactory.getLogger(HttpClientUtil.class);
	private static final int HTTP_DEFAULT_TIMEOUT  = 15000;               //超时时间默认为15秒  
	private static final int HTTP_SOCKET_TIMEOUT  =  30000;               //连接状态下没有收到数据的话强制断时间为30秒  
	private static final int MAX_TOTAL_CONNECTIONS = 500;                 //最大连接数
	private static final int CONN_MANAGER_TIMEOUT = 500;                  //该值就是连接不够用的时候等待超时时间，一定要设置，而且不能太大
	
	private static MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();
	//接口调用频繁，结果出现了很多ConnectTimeoutException 配置优化，共用HttpClient，减少开销
	static {              
	    //每主机最大连接数和总共最大连接数，通过hosfConfiguration设置host来区分每个主机  
	    //client.getHttpConnectionManager().getParams().setDefaultMaxConnectionsPerHost(8);
		httpConnectionManager.getParams().setMaxTotalConnections(MAX_TOTAL_CONNECTIONS);      
		httpConnectionManager.getParams().setConnectionTimeout(HTTP_DEFAULT_TIMEOUT);//连接超时时间
		httpConnectionManager.getParams().setSoTimeout(HTTP_SOCKET_TIMEOUT);         //连接状态下没有收到数据的话强制断时间
		httpConnectionManager.getParams().setLongParameter(HttpClientParams.CONNECTION_MANAGER_TIMEOUT, CONN_MANAGER_TIMEOUT);
		//是否计算节省带宽
		httpConnectionManager.getParams().setTcpNoDelay(true);		 
	    //延迟关闭时间
		httpConnectionManager.getParams().setLinger(0);
	    //失败的情况下会默认进行3次尝试,成功之后不会再尝试    ------关闭
		httpConnectionManager.getParams().setParameter(HttpMethodParams.RETRY_HANDLER, new DefaultHttpMethodRetryHandler(0,false));		
	}
    	
	
	/**
	 * 构建 httpsclient 请求
	 * @return
	 */
	private static HttpClient getHttpClient(){
		HttpClient httpClient =  new HttpClient(httpConnectionManager);		
		httpClient.getParams().setParameter(HttpMethodParams.HTTP_CONTENT_CHARSET,"UTF-8");
       return httpClient;		
	}
	
	/**
	 * 发送HTTP post请求
	 * 如果服务器需要通过 HTTPS 连接，那只需要将下面 URL 中的 http 换成 https   
	 * @param url   
	 * @param head  header信息
	 * @param data  参数
	 * @param map   cookie信息
	 * @return
	 * @throws Exception
	 */
	public static String sendPost(String url,Map<String,String> head,Map<String,Object> data,Map<String,String> map) throws Exception{		
		logger.info(">>>>>>>>url="+url);
		PostMethod  method=new PostMethod(url);
		//添加参数
		if(null!=data &&!data.isEmpty()){
			for (String key : data.keySet()) {
				method.addParameter(key,data.get(key).toString());
			}
		}
		//添加header
		if(null != head && !head.isEmpty()){
			for (String key : head.keySet()) {
				method.addRequestHeader(key,head.get(key));
			}
		}
		String result = null;
		HttpClient httpClient = getHttpClient();
		try{
	      //使用POST方法  
			httpClient.executeMethod(method);  
	      //打印返回的信息
	      if(method.getStatusLine().getStatusCode()==200){
	    	  result = method.getResponseBodyAsString();
	      }else{
	    	  logger.info("response status:"+method.getStatusLine());
	      }
		}catch(Exception e){
			logger.error("requst URL======:" + url);
			logger.error(e.getMessage());
		} finally{
			//释放连接  
			method.releaseConnection();
			//即使调用了 releaseConnection 方法，也不能保证完全释放连接，在 GC 完成之前，连接状态会停滞在CLOSE_WAIT，然而大量的 CLOSE_WAIT 大量消耗应用服务器所在的句柄数，导致假死状态发生。
			httpClient.getHttpConnectionManager().closeIdleConnections(0);
		}
		
		return result;
	}
	
	
    
    
    /**
     * POST请求统一入口
     */
	public static String post(String url, Map<String, Object> paramMap) {
    	Long beginTime = System.currentTimeMillis();
        if (StringUtils.isEmpty(url)) {
            return null;
        }
        String result = null;
        if (startsWithIgnoreCase(url, "https")) {
            result = httpsPost(url, paramMap,"UTF-8");
        } else if (startsWithIgnoreCase(url, "http")) {
            result = httpPost(url, paramMap,"UTF-8");
        } else {
            logger.warn("http url format error!");
        }
        logger.info("===>>>调用[post]接口结束 ===>>>URL:"+url+",耗时:"+ (System.currentTimeMillis() - beginTime)+ "毫秒");  
        return result;
    }

 
    /**
     * GET请求统一入口
     */
	public static String get(String url) {
//		logger.info("===>>>调用[get]接口开始...===>>> URL:"+url);
    	Long beginTime = System.currentTimeMillis();	
        if (StringUtils.isEmpty(url)) {
            return null;
        }
        String result = null;
        if (startsWithIgnoreCase(url, "https")) {
            result = httpsGet(url,"UTF-8");
        } else if (startsWithIgnoreCase(url, "http")) {
            result = httpGet(url,"UTF-8");
        } else {
            logger.warn("http url format error!");
        }
        logger.info("===>>>调用[get]接口结束   ===>>>URL:"+url+",耗时:"+ (System.currentTimeMillis() - beginTime)+ "毫秒");  
        return result;
    }

    private static String httpPost(String url, Map<String, Object> paramMap, String encoding) {   	
        String content = null;
        if (paramMap == null) {
            paramMap = new HashMap<>();
        }
        logger.info("http param:" + paramMap.toString());
        HttpClient httpClient = getHttpClient();
        PostMethod method = new PostMethod(url);

        if (!paramMap.isEmpty()) {
            for (Map.Entry<String, ?> entry : paramMap.entrySet()) {
                method.addParameter(new NameValuePair(entry.getKey(), entry.getValue().toString()));
            }
        }
        try {
            httpClient.executeMethod(method);
            content = new String(method.getResponseBody(), encoding);
        } catch (Exception e) {
            logger.error("发起http请求失败[" + url + "]" + ",param" + paramMap.toString(), e);
        } finally {
            method.releaseConnection();
            httpClient.getHttpConnectionManager().closeIdleConnections(0);
        }
        return content;
    }

    private static String httpsPost(String url, Map<String, Object> paramMap, String encoding) {
        String content = null;
        HttpClient httpsClient = getHttpClient();
        Protocol myhttps = new Protocol("https", new MySSLProtocolSocketFactory(), 443);
        Protocol.registerProtocol("https", myhttps);
        PostMethod method = new PostMethod(url);
        if (paramMap != null && !paramMap.isEmpty()) {
            for (Map.Entry<String, Object> entry : paramMap.entrySet()) {
                if (null != entry.getValue()) {
                    method.addParameter(new NameValuePair(entry.getKey(), entry.getValue().toString()));
                }
            }
            logger.info("https param : " + paramMap.toString());
        }
        try {
            httpsClient.executeMethod(method);
            logger.info("https status :" + method.getStatusLine().getStatusCode());
            if (method.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                content = new String(method.getResponseBody(), encoding);
                logger.info("https response : [" + content + "]");
            }
        } catch (Exception e) {
            logger.error("https request failed. url : [" + url + "]" + ", param : [" + paramMap + "]", e);
        } finally {
            method.releaseConnection();
            httpsClient.getHttpConnectionManager().closeIdleConnections(0);
        }        
        return content;
    }

    private static String httpGet(String url, String encoding) {
        HttpClient httpClient = getHttpClient();
        GetMethod method = new GetMethod(url);
        String result = null;
        try {
            httpClient.executeMethod(method);
            int status = method.getStatusCode();
            if (status == HttpStatus.SC_OK) {
                result = method.getResponseBodyAsString();
            } else {
                logger.error("Method failed: " + method.getStatusLine());
            }
        } catch (HttpException e) {
            // 发生致命的异常，可能是协议不对或者返回的内容有问题
            logger.error("Please check your provided http address! error {}",e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            // 发生网络异常
            logger.error("发生网络异常！{}",e.getMessage());
            e.printStackTrace();
        } finally {
            // 释放连接
            method.releaseConnection();
            httpClient.getHttpConnectionManager().closeIdleConnections(0);
        }
        return result;
    }

    private static String httpsGet(String url, String encoding) {
        HttpClient httpsClient = getHttpClient();//HttpConnectionManager.alwaysClose=true
        Protocol myhttps = new Protocol("https", new MySSLProtocolSocketFactory(), 443);
        Protocol.registerProtocol("https", myhttps);
        GetMethod method = new GetMethod(url);
        String content = null;
        try {
            httpsClient.executeMethod(method);
            logger.info("https status : " + method.getStatusLine().getStatusCode());
            if (method.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                content = new String(method.getResponseBody(), encoding);
                logger.info("https response : [" + content + "]");
            }
        } catch (Exception e) {
            logger.error("https request failed. url : [" + url + "]", e.getCause());
        } finally {
            method.releaseConnection();
            httpsClient.getHttpConnectionManager().closeIdleConnections(0);
        }
        return content;
    }

    
    
    private static boolean startsWithIgnoreCase(String origin, String prefix) {
        int len = prefix.length();
        if (len == 0 || origin.length() < len) {
            return false;
        }
        while (len-- > 0) {
            char a = origin.charAt(len);
            char b = prefix.charAt(len);
            if (a == b || Character.toUpperCase(a) == Character.toUpperCase(b)) {
                continue;
            }
            return false;
        }
        return true;
    }
    
    

    
}

/**
 * 
 * HTTPS 绕开证书验证
 *
 */
class MySSLProtocolSocketFactory implements ProtocolSocketFactory {

  private SSLContext sslcontext = null;

  private SSLContext createSSLContext() {
      SSLContext sslcontext=null;
      try {
          sslcontext = SSLContext.getInstance("SSL");
          sslcontext.init(null, new TrustManager[]{new TrustAnyTrustManager()}, new java.security.SecureRandom());
      } catch (NoSuchAlgorithmException e) {
          e.printStackTrace();
      } catch (KeyManagementException e) {
          e.printStackTrace();
      }
      return sslcontext;
  }

  private SSLContext getSSLContext() {
      if (this.sslcontext == null) {
          this.sslcontext = createSSLContext();
      }
      return this.sslcontext;
  }

  public Socket createSocket(Socket socket, String host, int port, boolean autoClose)
          throws IOException {
      return getSSLContext().getSocketFactory().createSocket(
              socket,
              host,
              port,
              autoClose
          );
  }

  public Socket createSocket(String host, int port) throws IOException {
      return getSSLContext().getSocketFactory().createSocket(
              host,
              port
          );
  }


  public Socket createSocket(String host, int port, InetAddress clientHost, int clientPort)
          throws IOException {
      return getSSLContext().getSocketFactory().createSocket(host, port, clientHost, clientPort);
  }

  public Socket createSocket(String host, int port, InetAddress localAddress,
          int localPort, HttpConnectionParams params) throws IOException {
      if (params == null) {
          throw new IllegalArgumentException("Parameters may not be null");
      }
      int timeout = params.getConnectionTimeout();
      SocketFactory socketfactory = getSSLContext().getSocketFactory();
      if (timeout == 0) {
          return socketfactory.createSocket(host, port, localAddress, localPort);
      } else {
          Socket socket = socketfactory.createSocket();
          SocketAddress localaddr = new InetSocketAddress(localAddress, localPort);
          SocketAddress remoteaddr = new InetSocketAddress(host, port);
          socket.bind(localaddr);
          socket.connect(remoteaddr, timeout);
          return socket;
      }
  }

  //自定义私有类
  private static class TrustAnyTrustManager implements X509TrustManager {

      public void checkClientTrusted(X509Certificate[] chain, String authType) {
      }

      public void checkServerTrusted(X509Certificate[] chain, String authType) {
      }

      public X509Certificate[] getAcceptedIssuers() {
          return new X509Certificate[]{};
      }
  }


}
