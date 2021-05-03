package com.in28minutes.springboot;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.net.Socket;
import java.net.SocketException;
import java.util.Locale;

import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSessionContext;
import javax.net.ssl.SSLSocket;

import org.apache.commons.net.ftp.FTPSClient;

public class SSLSessionReuseFTPSClient extends FTPSClient {

    private FTPSClient ftps;
    private int returnCode;

    public void sendFileViaFtps() {
        ftps =  createConnection();
        returnCode = ftps.getReplyCode();
        System.out.println("returnCode 1 " + returnCode);

        try {
            boolean returnVal = ftps.makeDirectory("testFolder");
            System.out.println("returnVal " + returnVal);

            File firstLocalFile = new File("c://Users/jozefcopjan/Downloads/temp/TEST.NIPAPR");
            System.out.println("firstLocalFile " + firstLocalFile.exists());
            String firstRemoteFile = "PRIM.NIPMAY";
            InputStream inputStream = new FileInputStream(firstLocalFile);

            System.out.println("Start uploading first file");
            // OutputStreamstoreFileStream(String remote)
            ftps.setControlEncoding("IBM-1047");

            boolean done = ftps.storeFile(firstRemoteFile, inputStream);


            System.out.println("ftps.getPassivePort() " + ftps.getPassivePort());
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
            ftps.enterLocalPassiveMode();

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

    @Override
    protected void _prepareDataSocket_(final Socket socket) throws IOException {
        if (socket instanceof SSLSocket) {
            // Control socket is SSL
            final SSLSession session = ((SSLSocket) _socket_).getSession();
            if (session.isValid()) {
                final SSLSessionContext context = session.getSessionContext();
                try {
                    final Field sessionHostPortCache = context.getClass().getDeclaredField("sessionHostPortCache");
                    sessionHostPortCache.setAccessible(true);
                    final Object cache = sessionHostPortCache.get(context);
                    final Method method = cache.getClass().getDeclaredMethod("put", Object.class, Object.class);
                    method.setAccessible(true);
                    method.invoke(cache, String
                            .format("%s:%s", socket.getInetAddress().getHostName(), String.valueOf(socket.getPort()))
                            .toLowerCase(Locale.ROOT), session);
                    method.invoke(cache, String
                            .format("%s:%s", socket.getInetAddress().getHostAddress(), String.valueOf(socket.getPort()))
                            .toLowerCase(Locale.ROOT), session);
                } catch (NoSuchFieldException e) {
                    throw new IOException(e);
                } catch (Exception e) {
                    throw new IOException(e);
                }
            } else {
                throw new IOException("Invalid SSL Session");
            }
        }
    }
}