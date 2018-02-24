// openOffice service cmd
soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard
// check if the tcp open
netstat -nao|findstr -c":8100"