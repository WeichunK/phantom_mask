-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: phantom_mask_test_db
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `mask`
--

DROP TABLE IF EXISTS `mask`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mask` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `mask_name` varchar(50) NOT NULL,
  `pharmacy_name` varchar(50) NOT NULL,
  `piece` int unsigned DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mask_ibfk_1` (`pharmacy_name`),
  KEY `idx` (`price`),
  FULLTEXT KEY `mask_name` (`mask_name`,`pharmacy_name`),
  CONSTRAINT `mask_ibfk_1` FOREIGN KEY (`pharmacy_name`) REFERENCES `pharmacy` (`pharmacy_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask`
--

LOCK TABLES `mask` WRITE;
/*!40000 ALTER TABLE `mask` DISABLE KEYS */;
/*!40000 ALTER TABLE `mask` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opening_hour`
--

DROP TABLE IF EXISTS `opening_hour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opening_hour` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pharmacy_name` varchar(50) NOT NULL,
  `day` varchar(3) NOT NULL,
  `open` time NOT NULL,
  `close` time NOT NULL,
  PRIMARY KEY (`id`),
  KEY `opening_hour_ibfk_1` (`pharmacy_name`),
  KEY `idx_day` (`day`),
  KEY `idx_open` (`open`),
  KEY `idx_close` (`close`),
  CONSTRAINT `opening_hour_ibfk_1` FOREIGN KEY (`pharmacy_name`) REFERENCES `pharmacy` (`pharmacy_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opening_hour`
--

LOCK TABLES `opening_hour` WRITE;
/*!40000 ALTER TABLE `opening_hour` DISABLE KEYS */;
/*!40000 ALTER TABLE `opening_hour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacy`
--

DROP TABLE IF EXISTS `pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy` (
  `pharmacy_name` varchar(50) NOT NULL,
  `cash_balance` decimal(10,2) NOT NULL,
  PRIMARY KEY (`pharmacy_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
/*!40000 ALTER TABLE `pharmacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `pharmacy_name` varchar(50) NOT NULL,
  `mask_name` varchar(50) NOT NULL,
  `piece` int unsigned DEFAULT NULL,
  `transaction_amount` decimal(6,2) NOT NULL,
  `transaction_date` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `transaction_ibfk_1` (`user_name`),
  KEY `transaction_ibfk_2` (`pharmacy_name`),
  KEY `idx` (`transaction_date`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`user_name`) REFERENCES `user` (`user_name`),
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`pharmacy_name`) REFERENCES `pharmacy` (`pharmacy_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_name` varchar(50) NOT NULL,
  `cash_balance` decimal(10,2) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-10 16:32:36
