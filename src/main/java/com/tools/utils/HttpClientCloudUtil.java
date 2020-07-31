package com.tools.utils;

import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.RequestEntity;
import org.apache.commons.httpclient.methods.StringRequestEntity;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpClientCloudUtil {
	HttpClientCloudUtil(){}
	private static final Logger LOGGER = LoggerFactory.getLogger(HttpClientCloudUtil.class);
	private static final int TIMEOUT = 5000;
	private static final int MAXTOTALCONNECTIONS = 400;
	private static final int CONNECTIONMANAGERTIMEOUT = 20000;
	private static MultiThreadedHttpConnectionManager httpConnectionManager = new MultiThreadedHttpConnectionManager();
	private static HttpClient client = new HttpClient(httpConnectionManager);
	// 接口调用频繁，结果出现了很多ConnectTimeoutException 配置优化，共用HttpClient，减少开销
	static {

		// 每主机最大连接数和总共最大连接数，通过hosfConfiguration设置host来区分每个主机
		httpConnectionManager.getParams().setMaxTotalConnections(
				MAXTOTALCONNECTIONS);

		httpConnectionManager.getParams().setConnectionTimeout(TIMEOUT);

		httpConnectionManager.getParams().setSoTimeout(TIMEOUT);
		client.getParams()
				.setConnectionManagerTimeout(CONNECTIONMANAGERTIMEOUT);
		// 是否计算节省带宽
		client.getHttpConnectionManager().getParams().setTcpNoDelay(true);
		// 延迟关闭时间
		client.getHttpConnectionManager().getParams().setLinger(0);

		// 失败的情况下会默认进行3次尝试,成功之后不会再尝试 ------关闭
		client.getHttpConnectionManager()
				.getParams()
				.setParameter(HttpMethodParams.RETRY_HANDLER,
						new DefaultHttpMethodRetryHandler(0, false));

	}

	/**
	 * 发送HTTP post请求 如果服务器需要通过 HTTPS 连接，那只需要将下面 URL 中的 http 换成 https
	 * 
	 * @param url
	 *            header信息
	 * @param data
	 *            参数
	 *            cookie信息
	 * @return
	 * @throws Exception
	 */
	public static String sendPost(String url, String data)  {
		String result = null;
		PostMethod method = new PostMethod(url);
		try {
			if (data != null) {
				RequestEntity requestEntity = new StringRequestEntity(data, "application/json", "utf-8");
				method.setRequestEntity(requestEntity);

				method.addRequestHeader("Content-type","application/json; charset=utf-8");
				method.addRequestHeader("Accept", "application/json");
			}
			// 使用POST方法
			client.executeMethod(method);
			// 打印返回的信息
			if (method.getStatusLine().getStatusCode() == 200) {
				result = method.getResponseBodyAsString();
			} else {
				LOGGER.info("url={},报错---result={}",url,result);
			}
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
			throw new RuntimeException(e.getMessage());
		} finally {
			// 释放连接
			method.releaseConnection();
			// 即使调用了 releaseConnection 方法，也不能保证完全释放连接，在 GC
			// 完成之前，连接状态会停滞在CLOSE_WAIT，然而大量的 CLOSE_WAIT
			// 大量消耗应用服务器所在的句柄数，导致假死状态发生。
			client.getHttpConnectionManager().closeIdleConnections(0);
		}

		return result;
	}
}
