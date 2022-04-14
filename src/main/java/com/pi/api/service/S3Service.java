package com.pi.api.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class S3Service {

	@Autowired
	private AmazonS3 s3client;

	@Value("${bucketName}")
	private String bucketName;

	public File convertMultiPartToFile(MultipartFile file) throws IOException {
		File convertedFile = new File(file.getOriginalFilename());
		FileOutputStream fos = new FileOutputStream(convertedFile);
		fos.write(file.getBytes());
		fos.close();
		return convertedFile;
	}

	public void uploadFileTos3bucket(String directory, String fileName, File file) {
		try {
			s3client.putObject(new PutObjectRequest(bucketName, directory + fileName, file)
					.withCannedAcl(CannedAccessControlList.PublicRead));
		}catch(AmazonServiceException e) {
			e.getMessage();
		}
	}
}
