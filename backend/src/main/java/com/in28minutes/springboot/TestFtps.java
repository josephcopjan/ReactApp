package com.in28minutes.springboot;

import org.apache.commons.net.ftp.FTPSClient;
import org.springframework.boot.SpringApplication;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TestFtps {

    //sftpcmt@mebf1.vipa.uk.ibm.com
    /*
    Host               : meggt.vipa.uk.ibm.com
userid            : IN16876
password      : CEDSEMEA@202103
Port                : 992
file name       : CSDMDEV.PRIM.NIP(+1)
     */
    private FTPSClient ftp;
    private int returnCode;

    public static void main(String[] args) {
        String test = null;
     //   System.setProperty("jdk.tls.client.enableSessionTicketExtension", String.valueOf(false));
        System.setProperty("jdk.tls.useExtendedMasterSecret", "false");
        FtpsTest ftpsTest = new FtpsTest();
      //  SSLSessionReuseFTPSClient ftpsTest2 = new SSLSessionReuseFTPSClient();
       // ftpsTest2.sendFileViaFtps();
        //System.setProperty("jdk.tls.useExtendedMasterSecret", "false");
        ftpsTest.sendFileViaFtps();

    }


}
