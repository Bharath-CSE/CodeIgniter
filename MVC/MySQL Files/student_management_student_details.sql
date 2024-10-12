-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_details` (
  `r_id` int NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `dob` date NOT NULL,
  `number` varchar(15) NOT NULL,
  `age` tinyint NOT NULL,
  `blood_group` enum('A+','A-','B+','B-','O+','O-','AB+','AB-') NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `location` varchar(50) NOT NULL,
  `status` enum('Yes','No') DEFAULT 'Yes',
  `image` varchar(150) NOT NULL,
  `department` varchar(15) NOT NULL,
  `passedout_year` year NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_details`
--

LOCK TABLES `student_details` WRITE;
/*!40000 ALTER TABLE `student_details` DISABLE KEYS */;
INSERT INTO `student_details` VALUES (2,'Bharath','J.R','2001-08-30','7893214568',23,'B+','Male','Erode','Yes','/MVC/view/Images/Photo.jpg','CSE',2023),(3,'Shanmugam','C','2001-07-12','7541236985',23,'B+','Male','Erode','Yes','/MVC/view/Images/ShanmugamImage.jpg','CSE',2023),(4,'Chandru','G','2001-09-05','8564123978',23,'A+','Male','Chennai','Yes','/MVC/view/Images/ChandruImage.jpg','CSE',2024),(5,'Mani','R','2002-11-10','8654123978',21,'O+','Male','Trichy','Yes','/MVC/view/Images/ManiImage.jpg','ECE',2024),(6,'Ajay','S','2000-07-15','6985412369',24,'A+','Male','Coimbatore','Yes','/MVC/view/Images/AjayImage.jpg','IT',2022),(7,'Siva','S','2001-10-16','8523697415',22,'B+','Male','Bangalore','Yes','/MVC/view/Images/SivaImage.jpg','MECH',2023),(8,'Ravi','M','2002-12-25','8542103695',21,'B+','Male','Erode','Yes','/MVC/view/Images/RaviImage.jpg','CSE',2024),(9,'Karthi','S','2000-03-10','8745691235',24,'O-','Male','Chennai','Yes','/MVC/view/Images/KarthiImage.jpg','EEE',2022),(10,'Hari','P','2000-08-10','9854123698',24,'A+','Male','Coimbatore','Yes','/MVC/view/Images/HariImage.jpg','IT',2022),(11,'Abdul','M','2001-07-25','9865412365',23,'B+','Male','Erode','Yes','/MVC/view/Images/AbdulImage.jpg','CIVIL',2023),(12,'Sasi','M','2001-05-10','8541236987',23,'B+','Male','Erode','Yes','/MVC/view/Images/SasiImage.jpg','CSE',2023);
/*!40000 ALTER TABLE `student_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-07 11:17:33
