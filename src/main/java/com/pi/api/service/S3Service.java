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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class S3Service {

	@Autowired
	private AmazonS3 s3client;

	@Value("${endpointUrl}")
	private String endpointUrl;

	@Value("${bucketName}")
	private String bucketName;

	public File convertMultiPartToFile(MultipartFile file) throws IOException {
		File convertedFile = new File(file.getOriginalFilename());
		FileOutputStream fos = new FileOutputStream(convertedFile);
		fos.write(file.getBytes());
		fos.close();
		return convertedFile;
	}

	public String uploadFileTos3bucket(String directory, MultipartFile multipartFile) throws IOException {

		File file = convertMultiPartToFile(multipartFile);
		String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy_HH-mm-ss-ms"));
		String fileName = dateTime + "_" + multipartFile.getOriginalFilename();

		try {
			s3client.putObject(new PutObjectRequest(bucketName, directory + fileName, file)
					.withCannedAcl(CannedAccessControlList.PublicRead));

			file.delete();

			return "https://" + bucketName + "." + endpointUrl + "/" + directory + fileName;

		}catch(AmazonServiceException e) {
			return "Falha no upload :" + e.getMessage();
		}
	}
}
