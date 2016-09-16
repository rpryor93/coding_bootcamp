CREATE DATABASE `topsongs2db` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `topsongs2db`.`top5000` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(45) NOT NULL,
  `song` varchar(45) NOT NULL,
  `year` varchar(10) NOT NULL,
  `raw_total` decimal(10,3) DEFAULT NULL,
  `raw_usa` decimal(10,3) DEFAULT NULL,
  `raw_uk` decimal(10,3) DEFAULT NULL,
  `raw_eur` decimal(10,3) DEFAULT NULL,
  `raw_row` decimal(10,3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;