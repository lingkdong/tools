package com.tools.service.impl;

import com.artofsolving.jodconverter.DocumentConverter;
import com.artofsolving.jodconverter.openoffice.connection.OpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.connection.SocketOpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.converter.OpenOfficeDocumentConverter;
import com.tools.service.OpenOfficeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.File;
import java.net.ConnectException;

/**
 * Created by DT254 on 2018/2/22.
 */
@Slf4j
@Service
public class OpenOfficeServiceImpl implements OpenOfficeService {
    @Override
    public boolean convert(File orig, File dest) {
        OpenOfficeConnection connection=null;
        try {
            // connect to an OpenOffice.org instance running on port 8100
           connection = new SocketOpenOfficeConnection(8100);
            connection.connect();
            // convert
            DocumentConverter converter = new OpenOfficeDocumentConverter(connection);
            converter.convert(orig, dest);
            return true;
        } catch (ConnectException e) {
            log.error("<OpenOfficeServiceImpl.convert failed, {} {} >", e, e.getStackTrace()[0].toString());
        }finally {
            // close the connection
            if(connection!=null)connection.disconnect();
        }

        return false;
    }
}
