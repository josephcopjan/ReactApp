package com.in28minutes.springboot;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPSClient;

import java.io.*;
import java.net.SocketException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class FtpsTest {

    private FTPSClient ftps;
    private int returnCode;

    public void sendFileViaFtps() {
        ftps =  createConnection();
        ftps.setCharset(Charset.forName("IBM-1047"));
        ftps.setControlEncoding("IBM-1047");
        try {
            ftps.setFileType(FTPClient.STREAM_TRANSFER_MODE);
        } catch (IOException e) {
            e.printStackTrace();
        }

        //returnCode = ftps.getReplyCode();

        System.out.println("returnCode 1 " + returnCode);

        try {
           // boolean returnVal = ftps.makeDirectory("testFolder");
          //  System.out.println("returnVal " + returnVal);

            File firstLocalFile = new File("c://Users/jozefcopjan/Downloads/temp/TEST.NIPAPR");
          //  System.out.println("firstLocalFile " + firstLocalFile.exists());
            String firstRemoteFile = "NEWPRIM.NIPMAY";
            InputStream inputStream = new FileInputStream(firstLocalFile);

         //   System.out.println("Start uploading first file");
           // OutputStreamstoreFileStream(String remote)
         //   ftps.setControlEncoding("IBM-1047");
       //     ftps.setCharset(StandardCharsets.UTF_8);
            boolean done = ftps.storeFile(firstRemoteFile, inputStream);


          /*  System.out.println("ftps.getPassivePort() " + ftps.getPassivePort());
            returnCode = ftps.getReplyCode();
            System.out.println("returnCode 2 " + returnCode);


            System.out.println("ftps.listNames() " + ftps.listNames());

            ftps.mkd("testFolder");
            returnCode = ftps.getReplyCode();
            System.out.println("returnCode 3 " + returnCode);

/*
            File secondLocalFile = new File("c://Users/jozefcopjan/Downloads/PRIM.NIPJan");
            String secondRemoteFile = "PRIM.NIPJan";
            InputStream inputStream = new FileInputStream(secondLocalFile);

            System.out.println("Start uploading second file");
            OutputStream outputStream = ftps.storeFileStream(secondRemoteFile);
            byte[] bytesIn = new byte[4096];
            int read = 0;

            while ((read = inputStream.read(bytesIn)) != -1) {
                outputStream.write(bytesIn, 0, read);
            }
            inputStream.close();
            outputStream.close();

            boolean completed = ftps.completePendingCommand();
            if (completed) {
                System.out.println("The second file is uploaded successfully.");
            }*/

            if(!checkDirectoryExists("testFolder")){
                ftps.makeDirectory("testFolder");
            }
            closeConnection(ftps);
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    public FTPSClient createConnection(){
        ftps = new FTPSClient();
        String host = "meggt.vipa.uk.ibm.com";
        int port = 21;
        String folderName = "dir";
        String username = "IN16876";
        String password = "CEDSEMEA@202103";
        try {
            ftps.connect(host, port);
       //     ftps.enterLocalPassiveMode();

            ftps.login(username, password);
            return ftps;
        } catch (SocketException ex) {
            System.out.println("test 1");
            return null;
            //  Logger.getLogger(FTPSendMessage.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            System.out.println("test 2");
            return null;
            //Logger.getLogger(FTPSendMessage.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void closeConnection(FTPSClient ftps) throws IOException {
        ftps.logout();
        ftps.disconnect();
    }

    boolean checkDirectoryExists(String dirPath) {
        try {
            ftps.changeWorkingDirectory(dirPath);
            System.out.println(ftps.printWorkingDirectory());
            returnCode = ftps.getReplyCode();
            System.out.println("returnCode " + returnCode);
            if (returnCode == 550) {
                return false;
            }
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return false;
    }


}
