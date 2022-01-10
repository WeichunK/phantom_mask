-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: phantom_mask
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
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mask`
--

LOCK TABLES `mask` WRITE;
/*!40000 ALTER TABLE `mask` DISABLE KEYS */;
INSERT INTO `mask` VALUES (1,'AniMask (blue) (10 per pack)','Better You',10,33.65),(2,'MaskT (black) (10 per pack)','Cash Saver Pharmacy',10,14.90),(3,'Free to Roam (black) (3 per pack)','Cash Saver Pharmacy',3,13.83),(4,'AniMask (green) (10 per pack)','Cash Saver Pharmacy',10,49.21),(5,'Masquerade (blue) (6 per pack)','Cash Saver Pharmacy',6,16.75),(6,'Second Smile (blue) (10 per pack)','PrecisionMed',10,39.98),(7,'Free to Roam (green) (3 per pack)','PrecisionMed',3,8.83),(8,'AniMask (black) (3 per pack)','PrecisionMed',3,12.81),(9,'Masquerade (black) (3 per pack)','PrecisionMed',3,8.17),(10,'MaskT (blue) (3 per pack)','PrecisionMed',3,7.04),(11,'Masquerade (black) (10 per pack)','MedSavvy',10,19.54),(12,'Free to Roam (blue) (10 per pack)','MedSavvy',10,30.74),(13,'Free to Roam (black) (10 per pack)','MedSavvy',10,26.54),(14,'AniMask (blue) (6 per pack)','MedSavvy',6,28.72),(15,'MaskT (black) (3 per pack)','MedSavvy',3,4.14),(16,'Second Smile (green) (3 per pack)','MedSavvy',3,6.55),(17,'Masquerade (black) (3 per pack)','Pill Pack',3,3.76),(18,'Free to Roam (blue) (3 per pack)','Pill Pack',3,7.89),(19,'MaskT (green) (10 per pack)','Pill Pack',10,32.57),(20,'AniMask (green) (10 per pack)','Pill Pack',10,22.01),(21,'Masquerade (green) (10 per pack)','Pill Pack',10,42.27),(22,'AniMask (black) (6 per pack)','Pill Pack',6,14.16),(23,'MaskT (green) (6 per pack)','Heartland Pharmacy',6,29.91),(24,'Second Smile (green) (6 per pack)','Heartland Pharmacy',6,11.89),(25,'MaskT (green) (10 per pack)','Heartland Pharmacy',10,35.06),(26,'Free to Roam (black) (3 per pack)','Heartland Pharmacy',3,5.31),(27,'AniMask (green) (10 per pack)','Longhorn Pharmacy',10,10.83),(28,'AniMask (black) (3 per pack)','Longhorn Pharmacy',3,8.94),(29,'Masquerade (blue) (6 per pack)','Longhorn Pharmacy',6,20.00),(30,'Masquerade (blue) (10 per pack)','Longhorn Pharmacy',10,21.67),(31,'Second Smile (blue) (3 per pack)','Longhorn Pharmacy',3,7.32),(32,'MaskT (black) (6 per pack)','PharmaMed',6,13.41),(33,'Masquerade (black) (3 per pack)','Neighbors',3,10.28),(34,'Free to Roam (green) (3 per pack)','Neighbors',3,14.18),(35,'MaskT (green) (10 per pack)','Neighbors',10,47.83),(36,'Free to Roam (blue) (10 per pack)','Discount Drugs',10,38.41),(37,'MaskT (blue) (6 per pack)','Discount Drugs',6,27.91),(38,'Free to Roam (black) (6 per pack)','Discount Drugs',6,28.54),(39,'Masquerade (blue) (6 per pack)','Discount Drugs',6,28.02),(40,'Second Smile (black) (3 per pack)','Medlife',3,5.06),(41,'Second Smile (blue) (3 per pack)','Medlife',3,12.51),(42,'Free to Roam (black) (3 per pack)','Medlife',3,10.81),(43,'Second Smile (black) (6 per pack)','Medlife',6,23.73),(44,'MaskT (black) (10 per pack)','Medlife',10,43.94),(45,'MaskT (black) (3 per pack)','Medlife',3,10.13),(46,'Free to Roam (blue) (3 per pack)','Pride Pharmacy',3,5.61),(47,'MaskT (black) (10 per pack)','Pride Pharmacy',10,46.51),(48,'Second Smile (black) (3 per pack)','Pride Pharmacy',3,9.59),(49,'Masquerade (blue) (3 per pack)','Pride Pharmacy',3,6.26),(50,'AniMask (blue) (10 per pack)','Pride Pharmacy',10,11.47),(51,'Second Smile (green) (6 per pack)','Atlas Drugs',6,6.82),(52,'MaskT (green) (6 per pack)','Atlas Drugs',6,25.73),(53,'MaskT (black) (6 per pack)','Atlas Drugs',6,9.70),(54,'AniMask (green) (10 per pack)','Thrifty Way Pharmacy',10,25.42),(55,'AniMask (blue) (10 per pack)','Thrifty Way Pharmacy',10,34.39),(56,'Second Smile (black) (3 per pack)','Thrifty Way Pharmacy',3,12.38),(57,'MaskT (green) (3 per pack)','Thrifty Way Pharmacy',3,11.56),(58,'AniMask (blue) (6 per pack)','Thrifty Way Pharmacy',6,19.16),(59,'AniMask (black) (10 per pack)','Thrifty Way Pharmacy',10,36.31),(60,'Free to Roam (black) (6 per pack)','Thrifty Way Pharmacy',6,20.16),(61,'AniMask (green) (3 per pack)','Thrifty Way Pharmacy',3,3.23),(62,'Masquerade (green) (3 per pack)','Thrifty Way Pharmacy',3,5.73),(63,'Masquerade (blue) (10 per pack)','Apotheco',10,38.33),(64,'MaskT (black) (6 per pack)','Drug Blend',6,12.90),(65,'AniMask (black) (3 per pack)','Drug Blend',3,10.65),(66,'MaskT (black) (3 per pack)','Drug Blend',3,4.83),(67,'Free to Roam (green) (3 per pack)','Drug Blend',3,13.93),(68,'Masquerade (black) (3 per pack)','Wellcare',3,7.33),(69,'Masquerade (green) (6 per pack)','Wellcare',6,26.60),(70,'AniMask (black) (6 per pack)','Wellcare',6,6.53),(71,'Masquerade (blue) (6 per pack)','Assured Rx',6,13.55),(72,'MaskT (black) (10 per pack)','Assured Rx',10,46.69),(73,'Free to Roam (blue) (10 per pack)','Assured Rx',10,15.79),(74,'Second Smile (green) (6 per pack)','Assured Rx',6,17.61),(75,'Free to Roam (black) (10 per pack)','Assured Rx',10,35.66),(76,'MaskT (blue) (6 per pack)','Assured Rx',6,28.27),(77,'MaskT (green) (10 per pack)','Assured Rx',10,39.40),(78,'Free to Roam (blue) (3 per pack)','Assured Rx',3,14.61),(79,'Second Smile (black) (3 per pack)','Assured Rx',3,13.52),(80,'Masquerade (green) (6 per pack)','RxToMe',6,12.70),(81,'Second Smile (green) (6 per pack)','DFW Wellness',6,14.90),(82,'AniMask (blue) (3 per pack)','DFW Wellness',3,9.24);
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
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opening_hour`
--

LOCK TABLES `opening_hour` WRITE;
/*!40000 ALTER TABLE `opening_hour` DISABLE KEYS */;
INSERT INTO `opening_hour` VALUES (1,'Better You','Mon','12:56:00','21:58:00'),(2,'Better You','Wed','12:56:00','21:58:00'),(3,'Better You','Tue','13:06:00','22:42:00'),(4,'Better You','Fri','17:09:00','20:20:00'),(5,'Better You','Sat','17:09:00','20:20:00'),(6,'Better You','Sun','07:10:00','09:33:00'),(7,'Cash Saver Pharmacy','Mon','11:00:00','14:48:00'),(8,'Cash Saver Pharmacy','Tue','00:05:00','07:20:00'),(9,'Cash Saver Pharmacy','Fri','00:05:00','07:20:00'),(10,'Cash Saver Pharmacy','Sat','09:01:00','12:43:00'),(11,'Cash Saver Pharmacy','Sun','09:01:00','12:43:00'),(12,'PrecisionMed','Tue','14:10:00','16:25:00'),(13,'PrecisionMed','Wed','16:57:00','21:46:00'),(14,'PrecisionMed','Thu','16:30:00','19:40:00'),(15,'PrecisionMed','Fri','02:55:00','16:49:00'),(16,'PrecisionMed','Sun','10:59:00','23:59:59'),(17,'PrecisionMed','Mon','00:00:00','05:33:00'),(18,'MedSavvy','Tue','10:08:00','23:13:00'),(19,'MedSavvy','Wed','12:38:00','21:48:00'),(20,'MedSavvy','Thu','12:14:00','22:48:00'),(21,'MedSavvy','Fri','15:01:00','21:24:00'),(22,'MedSavvy','Sat','15:01:00','21:24:00'),(23,'MedSavvy','Sun','00:03:00','07:58:00'),(24,'Pill Pack','Mon','07:14:00','17:06:00'),(25,'Pill Pack','Tue','16:47:00','19:25:00'),(26,'Pill Pack','Wed','15:30:00','19:00:00'),(27,'Pill Pack','Sat','04:35:00','06:35:00'),(28,'Pill Pack','Sun','01:39:00','16:59:00'),(29,'Heartland Pharmacy','Mon','13:18:00','17:49:00'),(30,'Heartland Pharmacy','Tue','05:06:00','17:45:00'),(31,'Heartland Pharmacy','Wed','03:25:00','11:25:00'),(32,'Heartland Pharmacy','Thu','03:25:00','11:25:00'),(33,'Heartland Pharmacy','Sat','04:10:00','08:03:00'),(34,'Heartland Pharmacy','Sun','15:07:00','18:50:00'),(35,'Longhorn Pharmacy','Mon','10:53:00','16:49:00'),(36,'Longhorn Pharmacy','Wed','10:53:00','16:49:00'),(37,'Longhorn Pharmacy','Tue','17:41:00','21:42:00'),(38,'Longhorn Pharmacy','Thu','08:25:00','23:59:59'),(39,'Longhorn Pharmacy','Fri','00:00:00','00:30:00'),(40,'Longhorn Pharmacy','Sun','15:53:00','23:59:59'),(41,'Longhorn Pharmacy','Mon','00:00:00','02:05:00'),(42,'PharmaMed','Mon','03:27:00','09:16:00'),(43,'PharmaMed','Sat','03:27:00','09:16:00'),(44,'PharmaMed','Tue','14:41:00','19:40:00'),(45,'PharmaMed','Wed','04:05:00','16:06:00'),(46,'PharmaMed','Thu','09:49:00','17:25:00'),(47,'PharmaMed','Fri','08:05:00','19:48:00'),(48,'Neighbors','Mon','10:09:00','23:59:59'),(49,'Neighbors','Tue','00:00:00','02:26:00'),(50,'Neighbors','Wed','15:26:00','17:33:00'),(51,'Neighbors','Thu','15:31:00','17:46:00'),(52,'Neighbors','Sat','13:14:00','20:24:00'),(53,'Neighbors','Sun','00:02:00','16:40:00'),(54,'Discount Drugs','Wed','05:16:00','09:37:00'),(55,'Discount Drugs','Thu','14:04:00','23:19:00'),(56,'Discount Drugs','Fri','00:27:00','04:08:00'),(57,'Discount Drugs','Sat','00:27:00','04:08:00'),(58,'Discount Drugs','Sun','03:04:00','06:25:00'),(59,'Medlife','Wed','16:49:00','20:32:00'),(60,'Medlife','Thu','15:57:00','23:59:59'),(61,'Medlife','Fri','00:00:00','09:13:00'),(62,'Medlife','Fri','13:36:00','20:51:00'),(63,'Medlife','Sat','13:36:00','20:51:00'),(64,'Medlife','Sun','02:42:00','19:44:00'),(65,'Pride Pharmacy','Mon','07:50:00','14:53:00'),(66,'Pride Pharmacy','Thu','00:53:00','07:57:00'),(67,'Pride Pharmacy','Fri','00:53:00','07:57:00'),(68,'Pride Pharmacy','Sat','12:20:00','17:45:00'),(69,'Pride Pharmacy','Sun','15:50:00','23:59:59'),(70,'Pride Pharmacy','Mon','00:00:00','10:49:00'),(71,'Atlas Drugs','Mon','16:30:00','23:07:00'),(72,'Atlas Drugs','Wed','10:16:00','16:48:00'),(73,'Atlas Drugs','Fri','16:20:00','20:39:00'),(74,'Atlas Drugs','Sat','00:17:00','12:55:00'),(75,'Atlas Drugs','Sun','05:33:00','23:59:00'),(76,'Thrifty Way Pharmacy','Mon','04:02:00','15:08:00'),(77,'Thrifty Way Pharmacy','Fri','04:02:00','15:08:00'),(78,'Thrifty Way Pharmacy','Tue','09:57:00','18:23:00'),(79,'Thrifty Way Pharmacy','Wed','12:10:00','23:59:59'),(80,'Thrifty Way Pharmacy','Thu','00:00:00','00:10:00'),(81,'Thrifty Way Pharmacy','Sat','12:21:00','21:32:00'),(82,'Apotheco','Mon','10:06:00','14:26:00'),(83,'Apotheco','Sat','10:06:00','14:26:00'),(84,'Apotheco','Tue','08:27:00','22:13:00'),(85,'Apotheco','Wed','08:06:00','16:22:00'),(86,'Apotheco','Thu','12:24:00','19:49:00'),(87,'Apotheco','Sun','15:53:00','23:59:59'),(88,'Apotheco','Mon','00:00:00','05:32:00'),(89,'Drug Blend','Mon','04:08:00','20:52:00'),(90,'Drug Blend','Tue','01:01:00','06:01:00'),(91,'Drug Blend','Wed','11:18:00','20:37:00'),(92,'Drug Blend','Sat','11:18:00','20:37:00'),(93,'Drug Blend','Thu','16:44:00','23:43:00'),(94,'Drug Blend','Sun','04:26:00','14:48:00'),(95,'Wellcare','Mon','07:59:00','14:55:00'),(96,'Wellcare','Tue','08:57:00','23:59:59'),(97,'Wellcare','Wed','00:00:00','04:59:00'),(98,'Wellcare','Fri','08:57:00','23:59:59'),(99,'Wellcare','Sat','00:00:00','04:59:00'),(100,'Wellcare','Wed','17:12:00','22:13:00'),(101,'Wellcare','Thu','01:57:00','06:48:00'),(102,'Assured Rx','Mon','02:30:00','06:43:00'),(103,'Assured Rx','Sat','02:30:00','06:43:00'),(104,'Assured Rx','Tue','08:44:00','11:28:00'),(105,'Assured Rx','Wed','08:44:00','11:28:00'),(106,'Assured Rx','Thu','02:06:00','05:27:00'),(107,'Assured Rx','Fri','05:24:00','16:59:00'),(108,'RxToMe','Mon','07:12:00','11:46:00'),(109,'RxToMe','Wed','16:24:00','20:15:00'),(110,'RxToMe','Thu','08:59:00','14:07:00'),(111,'RxToMe','Sat','10:47:00','12:50:00'),(112,'RxToMe','Sun','10:47:00','12:50:00'),(113,'DFW Wellness','Mon','00:20:00','16:06:00'),(114,'DFW Wellness','Tue','00:20:00','16:06:00'),(115,'DFW Wellness','Wed','10:02:00','13:23:00'),(116,'DFW Wellness','Sun','10:02:00','13:23:00'),(117,'DFW Wellness','Thu','10:02:00','23:59:59'),(118,'DFW Wellness','Fri','00:00:00','09:41:00'),(119,'DFW Wellness','Fri','16:08:00','21:01:00');
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
INSERT INTO `pharmacy` VALUES ('Apotheco',274.49),('Assured Rx',181.76),('Atlas Drugs',785.02),('Better You',777.61),('Cash Saver Pharmacy',596.94),('DFW Wellness',466.36),('Discount Drugs',753.18),('Drug Blend',767.14),('Heartland Pharmacy',858.91),('Longhorn Pharmacy',323.30),('Medlife',467.39),('MedSavvy',903.57),('Neighbors',151.65),('PharmaMed',238.89),('Pill Pack',905.44),('PrecisionMed',181.84),('Pride Pharmacy',896.75),('RxToMe',510.91),('Thrifty Way Pharmacy',220.73),('Wellcare',898.06);
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
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,'Eric Underwood','Neighbors','Masquerade (black) (3 per pack)',3,9.26,'2021-01-02 12:41:02'),(2,'Eric Underwood','RxToMe','Masquerade (green) (6 per pack)',6,12.01,'2021-01-04 03:29:05'),(3,'Eric Underwood','Atlas Drugs','MaskT (black) (6 per pack)',6,8.90,'2021-01-06 19:49:25'),(4,'Eric Underwood','Atlas Drugs','Second Smile (green) (6 per pack)',6,7.30,'2021-01-22 01:27:11'),(5,'Eric Underwood','PrecisionMed','MaskT (blue) (3 per pack)',3,7.01,'2021-01-25 19:41:14'),(6,'Peggy Maxwell','Apotheco','Masquerade (blue) (10 per pack)',10,38.03,'2021-01-08 05:36:55'),(7,'Peggy Maxwell','PrecisionMed','MaskT (blue) (3 per pack)',3,6.88,'2021-01-08 18:23:32'),(8,'Peggy Maxwell','PrecisionMed','AniMask (black) (3 per pack)',3,13.86,'2021-01-10 16:00:08'),(9,'Peggy Maxwell','Thrifty Way Pharmacy','AniMask (black) (10 per pack)',10,39.63,'2021-01-20 10:31:28'),(10,'Peggy Maxwell','Atlas Drugs','MaskT (green) (6 per pack)',6,27.41,'2021-01-28 03:56:40'),(11,'Peggy Maxwell','Medlife','Second Smile (black) (3 per pack)',3,4.60,'2021-01-29 23:01:12'),(12,'Sherri Lynch','Discount Drugs','Free to Roam (blue) (10 per pack)',10,38.72,'2021-01-07 14:59:35'),(13,'Sherri Lynch','Wellcare','Masquerade (green) (6 per pack)',6,26.49,'2021-01-08 22:34:26'),(14,'Sherri Lynch','DFW Wellness','AniMask (blue) (3 per pack)',3,8.71,'2021-01-17 05:13:56'),(15,'Sherri Lynch','Cash Saver Pharmacy','MaskT (black) (10 per pack)',10,14.34,'2021-01-17 19:33:09'),(16,'Mindy Perkins','RxToMe','Masquerade (green) (6 per pack)',6,12.52,'2021-01-01 21:00:08'),(17,'Mindy Perkins','RxToMe','Masquerade (green) (6 per pack)',6,11.92,'2021-01-03 03:50:47'),(18,'Mindy Perkins','Apotheco','Masquerade (blue) (10 per pack)',10,35.27,'2021-01-11 09:54:43'),(19,'Mindy Perkins','Medlife','Second Smile (black) (3 per pack)',3,5.20,'2021-01-12 13:00:59'),(20,'Mindy Perkins','Apotheco','Masquerade (blue) (10 per pack)',10,41.92,'2021-01-14 08:22:48'),(21,'Mindy Perkins','RxToMe','Masquerade (green) (6 per pack)',6,12.02,'2021-01-16 12:39:46'),(22,'Mindy Perkins','Atlas Drugs','MaskT (green) (6 per pack)',6,27.45,'2021-01-20 11:19:28'),(23,'Ruby Andrews','Discount Drugs','Free to Roam (blue) (10 per pack)',10,41.35,'2021-01-05 13:10:10'),(24,'Ruby Andrews','PrecisionMed','Free to Roam (green) (3 per pack)',3,8.39,'2021-01-18 01:44:02'),(25,'Ruby Andrews','Longhorn Pharmacy','AniMask (black) (3 per pack)',3,8.97,'2021-01-19 04:34:04'),(26,'Ruby Andrews','Better You','AniMask (blue) (10 per pack)',10,31.47,'2021-01-21 14:42:24'),(27,'Ruby Andrews','Apotheco','Masquerade (blue) (10 per pack)',10,34.65,'2021-01-24 18:46:28'),(28,'Ruby Andrews','RxToMe','Masquerade (green) (6 per pack)',6,13.67,'2021-01-25 01:01:09'),(29,'Ruby Andrews','Discount Drugs','MaskT (blue) (6 per pack)',6,29.10,'2021-01-27 23:47:49'),(30,'Ruby Andrews','Longhorn Pharmacy','AniMask (green) (10 per pack)',10,11.50,'2021-01-28 23:50:51'),(31,'Jo Barton','RxToMe','Masquerade (green) (6 per pack)',6,13.04,'2021-01-02 11:09:19'),(32,'Jo Barton','Medlife','MaskT (black) (10 per pack)',10,47.10,'2021-01-03 20:43:21'),(33,'Jo Barton','PharmaMed','MaskT (black) (6 per pack)',6,13.68,'2021-01-09 08:28:11'),(34,'Jo Barton','DFW Wellness','Second Smile (green) (6 per pack)',6,16.08,'2021-01-12 06:08:04'),(35,'Jo Barton','Medlife','MaskT (black) (10 per pack)',10,46.50,'2021-01-12 18:19:26'),(36,'Jo Barton','Atlas Drugs','MaskT (green) (6 per pack)',6,27.22,'2021-01-23 22:42:24'),(37,'Jose May','Assured Rx','Second Smile (green) (6 per pack)',6,17.30,'2021-01-13 00:26:03'),(38,'Ricky Anderson','Apotheco','Masquerade (blue) (10 per pack)',10,39.29,'2021-01-10 10:21:02'),(39,'Ricky Anderson','Better You','AniMask (blue) (10 per pack)',10,34.11,'2021-01-14 12:36:52'),(40,'Ricky Anderson','Medlife','Second Smile (black) (3 per pack)',3,4.77,'2021-01-21 21:53:35'),(41,'Ricky Anderson','Discount Drugs','Free to Roam (blue) (10 per pack)',10,41.83,'2021-01-24 11:38:39'),(42,'Ricky Anderson','Heartland Pharmacy','Second Smile (green) (6 per pack)',6,12.42,'2021-01-28 22:09:31'),(43,'Frances Collier','DFW Wellness','AniMask (blue) (3 per pack)',3,10.02,'2021-01-19 12:53:57'),(44,'Frances Collier','Pride Pharmacy','Second Smile (black) (3 per pack)',3,9.06,'2021-01-30 09:50:39'),(45,'Eula Wheeler','Drug Blend','MaskT (black) (6 per pack)',6,14.01,'2021-01-10 20:29:31'),(46,'Mae Hill','Apotheco','Masquerade (blue) (10 per pack)',10,35.73,'2021-01-08 19:09:01'),(47,'Mae Hill','Heartland Pharmacy','Second Smile (green) (6 per pack)',6,10.82,'2021-01-12 09:12:59'),(48,'Mae Hill','DFW Wellness','Second Smile (green) (6 per pack)',6,16.26,'2021-01-13 08:06:08'),(49,'Mae Hill','PrecisionMed','MaskT (blue) (3 per pack)',3,7.28,'2021-01-14 05:13:17'),(50,'Mae Hill','Cash Saver Pharmacy','AniMask (green) (10 per pack)',10,48.52,'2021-01-17 16:31:18'),(51,'Mae Hill','Cash Saver Pharmacy','Masquerade (blue) (6 per pack)',6,17.00,'2021-01-18 16:20:59'),(52,'Mae Hill','MedSavvy','Free to Roam (blue) (10 per pack)',10,27.84,'2021-01-23 16:07:03'),(53,'Mae Hill','PrecisionMed','Second Smile (blue) (10 per pack)',10,39.53,'2021-01-24 23:12:20'),(54,'Mae Hill','Medlife','MaskT (black) (3 per pack)',3,10.83,'2021-01-26 14:47:36'),(55,'Tamara Dean','MedSavvy','AniMask (blue) (6 per pack)',6,28.52,'2021-01-02 04:07:07'),(56,'Tamara Dean','Better You','AniMask (blue) (10 per pack)',10,32.36,'2021-01-04 16:08:49'),(57,'Tamara Dean','RxToMe','Masquerade (green) (6 per pack)',6,13.16,'2021-01-07 02:00:00'),(58,'Tamara Dean','Discount Drugs','Masquerade (blue) (6 per pack)',6,26.55,'2021-01-11 10:31:44'),(59,'Tamara Dean','Atlas Drugs','MaskT (black) (6 per pack)',6,9.53,'2021-01-12 10:50:36'),(60,'Tamara Dean','Pill Pack','AniMask (green) (10 per pack)',10,22.05,'2021-01-16 07:46:54'),(61,'Tamara Dean','Drug Blend','MaskT (black) (6 per pack)',6,11.63,'2021-01-21 18:13:55'),(62,'Tamara Dean','MedSavvy','AniMask (blue) (6 per pack)',6,27.67,'2021-01-23 15:38:40'),(63,'Tamara Dean','Wellcare','AniMask (black) (6 per pack)',6,6.30,'2021-01-25 08:06:27'),(64,'Lawrence Fletcher','Thrifty Way Pharmacy','AniMask (blue) (6 per pack)',6,18.96,'2021-01-01 07:57:40'),(65,'Lawrence Fletcher','Cash Saver Pharmacy','MaskT (black) (10 per pack)',10,15.79,'2021-01-07 04:20:58'),(66,'Lawrence Fletcher','Cash Saver Pharmacy','AniMask (green) (10 per pack)',10,46.64,'2021-01-07 23:34:26'),(67,'Lawrence Fletcher','MedSavvy','AniMask (blue) (6 per pack)',6,27.57,'2021-01-14 03:41:41'),(68,'Lawrence Fletcher','Cash Saver Pharmacy','AniMask (green) (10 per pack)',10,44.45,'2021-01-22 11:01:35'),(69,'Lawrence Fletcher','RxToMe','Masquerade (green) (6 per pack)',6,11.83,'2021-01-23 20:40:43'),(70,'Lawrence Fletcher','Neighbors','Masquerade (black) (3 per pack)',3,9.58,'2021-01-27 11:47:28'),(71,'Cassandra Fields','PrecisionMed','AniMask (black) (3 per pack)',3,12.49,'2021-01-03 09:36:46'),(72,'Cassandra Fields','RxToMe','Masquerade (green) (6 per pack)',6,12.11,'2021-01-20 20:10:05'),(73,'Cassandra Fields','Assured Rx','Masquerade (blue) (6 per pack)',6,13.05,'2021-01-25 18:28:08'),(74,'Cassandra Fields','Heartland Pharmacy','Free to Roam (black) (3 per pack)',3,5.30,'2021-01-26 18:29:55'),(75,'Audrey Brewer','Assured Rx','MaskT (blue) (6 per pack)',6,27.93,'2021-01-18 08:37:03'),(76,'Juan Estrada','PrecisionMed','AniMask (black) (3 per pack)',3,13.93,'2021-01-07 22:08:22'),(77,'Viola Quinn','Drug Blend','AniMask (black) (3 per pack)',3,10.49,'2021-01-05 10:53:24'),(78,'Viola Quinn','Pride Pharmacy','Free to Roam (blue) (3 per pack)',3,5.13,'2021-01-17 15:14:20'),(79,'Ada Larson','Pride Pharmacy','Free to Roam (blue) (3 per pack)',3,5.42,'2021-01-01 12:13:53'),(80,'Ada Larson','Better You','AniMask (blue) (10 per pack)',10,32.22,'2021-01-09 19:21:55'),(81,'Ada Larson','Discount Drugs','Free to Roam (black) (6 per pack)',6,26.39,'2021-01-13 10:56:13'),(82,'Ada Larson','Cash Saver Pharmacy','MaskT (black) (10 per pack)',10,14.11,'2021-01-15 07:10:28'),(83,'Ada Larson','Wellcare','Masquerade (green) (6 per pack)',6,26.08,'2021-01-17 06:48:26'),(84,'Ada Larson','Heartland Pharmacy','MaskT (green) (6 per pack)',6,32.64,'2021-01-19 08:44:30'),(85,'Ada Larson','Thrifty Way Pharmacy','AniMask (green) (10 per pack)',10,24.74,'2021-01-25 00:00:44'),(86,'Connie Vasquez','Pill Pack','AniMask (green) (10 per pack)',10,19.96,'2021-01-06 00:01:31'),(87,'Connie Vasquez','RxToMe','Masquerade (green) (6 per pack)',6,13.58,'2021-01-08 13:56:50'),(88,'Connie Vasquez','Pill Pack','Masquerade (green) (10 per pack)',10,38.09,'2021-01-09 10:04:01'),(89,'Connie Vasquez','Atlas Drugs','MaskT (black) (6 per pack)',6,10.11,'2021-01-09 23:42:34'),(90,'Connie Vasquez','DFW Wellness','AniMask (blue) (3 per pack)',3,9.45,'2021-01-22 07:51:01'),(91,'Connie Vasquez','Discount Drugs','MaskT (blue) (6 per pack)',6,28.68,'2021-01-24 17:06:21'),(92,'Connie Vasquez','Wellcare','Masquerade (green) (6 per pack)',6,27.68,'2021-01-27 08:46:47'),(93,'Connie Vasquez','Cash Saver Pharmacy','MaskT (black) (10 per pack)',10,14.36,'2021-01-27 19:01:56'),(94,'Bobbie Russell','PrecisionMed','MaskT (blue) (3 per pack)',3,7.26,'2020-12-31 22:05:32'),(95,'Bobbie Russell','Discount Drugs','Free to Roam (blue) (10 per pack)',10,35.03,'2021-01-01 14:54:04'),(96,'Bobbie Russell','Neighbors','Masquerade (black) (3 per pack)',3,10.08,'2021-01-18 00:25:29'),(97,'Bobbie Russell','Medlife','Second Smile (blue) (3 per pack)',3,11.80,'2021-01-24 21:32:22'),(98,'Bobbie Russell','DFW Wellness','AniMask (blue) (3 per pack)',3,9.60,'2021-01-27 06:02:37');
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
INSERT INTO `user` VALUES ('Ada Larson',579.98),('Audrey Brewer',509.55),('Bobbie Russell',161.91),('Cassandra Fields',933.18),('Connie Vasquez',545.50),('Eric Underwood',952.69),('Eula Wheeler',110.18),('Frances Collier',584.52),('Jo Barton',690.99),('Jose May',504.10),('Juan Estrada',530.50),('Lawrence Fletcher',149.91),('Mae Hill',291.88),('Mindy Perkins',857.48),('Peggy Maxwell',508.19),('Ricky Anderson',266.06),('Ruby Andrews',791.87),('Sherri Lynch',759.15),('Tamara Dean',488.47),('Viola Quinn',153.56);
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

-- Dump completed on 2022-01-10 16:32:04
