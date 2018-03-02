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