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


// linux install jdk1.8
1.wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.rpm
2. rpm -ivh  jdk-8u161-linux-x64.rpm
3.vim /etc/profile.d/java.sh
    #!/bin/bash
    JAVA_HOME=/usr/java/jdk1.8.0_161/
    PATH=$JAVA_HOME/bin:$PATH
    export PATH JAVA_HOME
    export CLASSPATH=.
4.chmod +x   /etc/profile.d/java.sh

//mysql install
# wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
# rpm -ivh mysql-community-release-el7-5.noarch.rpm
# yum install mysql-community-server
//reset pass
mysql -u root
set password for 'root'@'localhost' =password('@76!123');
// open remote access
grant all privileges on *.* to root@'%'identified by '@76!123';
