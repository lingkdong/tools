// openOffice service cmd
soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard
// check if the tcp open
netstat -nao|findstr -c":8100"
//nginx
http://nginx.org/en/download.html

nginx cmd命令
start nginx //启动nginx
nginx -s stop // 停止nginx
nginx -s reload // 重新加载配置文件
nginx -s quit // 退出nginx
nginx -t	//检查配置文件是否正确
nginx -v //查看nginx版本号
// add img location
 location ~ \.(gif|jpg|jpeg|png|bmp|swf)$ {
                root         E:\usr\local\webapps\prefox\file\upload\basic;
        }
// find
rpm -qa | grep -i openoffice
netstat -lnp | grep 8100
// linux install jdk1.8
1.wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.rpm
2. rpm -ivh  jdk-8u161-linux-x64.rpm
3./etc/profile
JAVA_HOME=/usr/java/jdk1.8.0_161/
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME
export PATH
export CLASSPATH
4. source /etc/profile


//mysql install
# wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
# rpm -ivh mysql-community-release-el7-5.noarch.rpm
# yum install mysql-community-server
//reset pass
mysql -u root
set password for 'root'@'localhost' =password('@76!123');
// open remote access
grant all privileges on *.* to root@'%'identified by '@76!123';

//install openoffice
1.wget https://jaist.dl.sourceforge.net/project/openofficeorg.mirror/4.1.5/binaries/zh-CN/Apache_OpenOffice_4.1.5_Linux_x86-64_install-rpm_zh-CN.tar.gz
2.
// 解决 openoffice启动问题
http://ziry.me/view/103

//nginx 远程访问报错
    No route to host

解决方案：重启防火墙

// open port
firewall-cmd --zone=public --add-port=22/tcp --permanent
firewall-cmd --list-ports
systemctl restart firewalld.service;//设置后需重启防火墙

//ascII 码在线验证
//简历模板
//在线API

//markdown

# Markdown Editor


## 标题2
###### 标题6
*斜体*
**加粗**

* 列表 1
* 列表 2
   * 列表 2.1

1. 列表 1
2. 列表 2


 链接：[GitHub](http://github.com)

 引用(两个空格以后 点击换行 可以实现换行)：
>在Java中，最基本的互斥同步手段就是synchronized关键字  ，
>synchronized关键字经过编译
>之后，会在同步块的前后分别形成
>monitorenter和monitorexit这两个字节码指令

反斜杠转义 \* \# \[


```代码块
function test() {
console.log("look ma`, no spaces");
}
```
表格：

|数据库| 版本|
------------ | -------------
mysql     |1.0
sql server  | 2.0

