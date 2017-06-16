/*
Navicat MySQL Data Transfer

Source Server         : Rotary
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : masa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-15 17:59:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `bimg` varchar(255) NOT NULL,
  `simg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dimg` varchar(255) NOT NULL,
  `mimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `qty` int(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/gz1_min.jpg', '[\'../img/gz1.jpg\',\'../img/gz2.jpg\',\'../img/gz3.jpg\',\'../img/gz4.jpg\',\'../img/gz5.jpg\',\'../img/gz6.jpg\']', '[\'../img/gz1_big.jpg\',\'../img/gz2_big.jpg\',\'../img/gz3_big.jpg\',\'../img/gz4_big.jpg\',\'../img/gz5_big.jpg\',\'../img/gz6_big.jpg\']', '[\'../img/gz1_min.jpg\',\'../img/gz2_min.jpg\',\'../img/gz3_min.jpg\',\'../img/gz4_min.jpg\',\'../img/gz5_min.jpg\',\'../img/gz6_min.jpg\']', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '199', '1');
INSERT INTO `goods` VALUES ('2', '../img/gz11_min.jpg', '[\'../img/gz11.jpg\',\'../img/gz12.jpg\',\'../img/gz13.jpg\',\'../img/gz14.jpg\',\'../img/gz15.jpg\',\'../img/gz16.jpg\']', '[\'../img/gz11_big.jpg\',\'../img/gz12_big.jpg\',\'../img/gz13_big.jpg\',\'../img/gz14_big.jpg\',\'../img/gz15_big.jpg\',\'../img/gz16_big.jpg\']', '[\'../img/gz11_min.jpg\',\'../img/gz12_min.jpg\',\'../img/gz13_min.jpg\',\'../img/gz14_min.jpg\',\'../img/gz15_min.jpg\',\'../img/gz16_min.jpg\']', '经典商务系列/丝光棉/深蓝/印花/短袖T恤', '189', '1');
INSERT INTO `goods` VALUES ('3', '../img/gz31_min.jpg', '[\'../img/gz31.jpg\',\'../img/gz32.jpg\',\'../img/gz33.jpg\',\'../img/gz34.jpg\',\'../img/gz35.jpg\',\'../img/gz36.jpg\']', '[\'../img/gz31_big.jpg\',\'../img/gz32_big.jpg\',\'../img/gz33_big.jpg\',\'../img/gz34_big.jpg\',\'../img/gz35_big.jpg\',\'../img/gz36_big.jpg\']', '[\'../img/gz31_min.jpg\',\'../img/gz32_min.jpg\',\'../img/gz33_min.jpg\',\'../img/gz34_min.jpg\',\'../img/gz35_min.jpg\',\'../img/gz36_min.jpg\']', 'TRIP旅行系列/柔滑冰爽/棉混纺/黑色/印花/短T', '230', '1');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL,
  `size` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 NOT NULL,
  `oldprice` varchar(10) CHARACTER SET utf8 NOT NULL,
  `addData` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`addData`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd1.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:58:03');
INSERT INTO `goodslist` VALUES ('2', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd2.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥230', '￥969', '2017-06-09 11:58:06');
INSERT INTO `goodslist` VALUES ('3', 'TRIP旅行系列/柔滑冰爽/100%棉/黑/', '../img/gd3.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥230', '￥969', '2017-06-09 12:09:20');
INSERT INTO `goodslist` VALUES ('4', 'TRIP旅行系列/柔滑冰爽/莱赛尔棉/深/', '../img/gd4.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥230', '￥969', '2017-06-09 11:58:24');
INSERT INTO `goodslist` VALUES ('5', 'TRIP旅行系列/柔滑冰爽/棉混纺/黑色/', '../img/gd5.jpg', '7', '剩余尺码：S，M，L，XL,XXL', '￥230', '￥969', '2017-06-09 11:58:27');
INSERT INTO `goodslist` VALUES ('6', 'TRIP旅行系列/柔滑冰爽/丝光棉/宝蓝/', '../img/gd6.jpg', '25', '剩余尺码：S，M，L，XL,XXL', '￥230', '￥969', '2017-06-09 11:58:29');
INSERT INTO `goodslist` VALUES ('7', 'TRIP旅行系列/柔滑冰爽/丝光棉/宝蓝/', '../img/gd7.jpg', '7', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:58:31');
INSERT INTO `goodslist` VALUES ('8', 'TRIP旅行系列/柔滑冰爽/100%棉/黑', '../img/gd8.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:59:48');
INSERT INTO `goodslist` VALUES ('9', 'TRIP旅行系列/柔滑冰爽/莱赛尔棉/深/', '../img/gd9.jpg', '5', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:59:50');
INSERT INTO `goodslist` VALUES ('10', 'TRIP旅行系列/柔滑冰爽/棉混纺/黑色/', '../img/gd10.jpg', '20', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:59:52');
INSERT INTO `goodslist` VALUES ('11', 'TRIP旅行系列/柔滑冰爽/丝光棉/宝蓝/', '../img/gd11.jpg', '10', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:59:54');
INSERT INTO `goodslist` VALUES ('12', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd12.jpg', '14', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 11:59:56');
INSERT INTO `goodslist` VALUES ('13', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd13.jpg', '14', '剩余尺码：S，M，L，XL,XXL', '￥98', '￥969', '2017-06-09 11:59:57');
INSERT INTO `goodslist` VALUES ('14', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd14.jpg', '24', '剩余尺码：S，M，L，XL,XXL', '￥98', '￥969', '2017-06-09 11:59:59');
INSERT INTO `goodslist` VALUES ('15', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd15.jpg', '24', '剩余尺码：S，M，L，XL,XXL', '￥98', '￥969', '2017-06-09 12:00:01');
INSERT INTO `goodslist` VALUES ('16', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd16.jpg', '17', '剩余尺码：S，M，L，XL,XXL', '￥98', '￥969', '2017-06-09 12:00:02');
INSERT INTO `goodslist` VALUES ('17', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd17.jpg', '172', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:11');
INSERT INTO `goodslist` VALUES ('18', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd18.jpg', '67', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:14');
INSERT INTO `goodslist` VALUES ('19', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd19.jpg', '325', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:16');
INSERT INTO `goodslist` VALUES ('20', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd20.jpg', '234', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:19');
INSERT INTO `goodslist` VALUES ('21', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd21.jpg', '435', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:20');
INSERT INTO `goodslist` VALUES ('22', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd22.jpg', '63', '剩余尺码：S，M，L，XL,XXL', '￥150', '￥969', '2017-06-09 12:00:22');
INSERT INTO `goodslist` VALUES ('23', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd23.jpg', '32', '剩余尺码：S，M，L，XL,XXL', '￥200', '￥969', '2017-06-09 12:00:31');
INSERT INTO `goodslist` VALUES ('24', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd24.jpg', '32', '剩余尺码：S，M，L，XL,XXL', '￥200', '￥969', '2017-06-09 12:00:34');
INSERT INTO `goodslist` VALUES ('25', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd25.jpg', '23', '剩余尺码：S，M，L，XL,XXL', '￥200', '￥969', '2017-06-09 12:00:36');
INSERT INTO `goodslist` VALUES ('26', '超爽运动系列/拼布/coolmax面料/黑色/', '../img/gd26.jpg', '324', '剩余尺码：S，M，L，XL,XXL', '￥200', '￥969', '2017-06-09 12:00:37');
INSERT INTO `goodslist` VALUES ('27', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd27.jpg', '32', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:39');
INSERT INTO `goodslist` VALUES ('28', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd28.jpg', '543', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:52');
INSERT INTO `goodslist` VALUES ('29', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd29.jpg', '52', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:54');
INSERT INTO `goodslist` VALUES ('30', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd30.jpg', '432', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:55');
INSERT INTO `goodslist` VALUES ('31', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd31.jpg', '524', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:57');
INSERT INTO `goodslist` VALUES ('32', 'TRIP旅行系列/柔滑冰爽/95%棉，5%', '../img/gd32.jpg', '645', '剩余尺码：S，M，L，XL,XXL', '￥120', '￥969', '2017-06-09 12:00:58');
INSERT INTO `goodslist` VALUES ('33', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd33.jpg', '234', '剩余尺码：S，M，L，XL,XXL', '￥134', '￥969', '2017-06-09 15:42:01');
INSERT INTO `goodslist` VALUES ('34', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd34.jpg', '675', '剩余尺码：S，M，L，XL,XXL', '￥45', '￥969', '2017-06-09 15:41:57');
INSERT INTO `goodslist` VALUES ('35', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd35.jpg', '32', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:04');
INSERT INTO `goodslist` VALUES ('36', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd36.jpg', '534', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:06');
INSERT INTO `goodslist` VALUES ('37', '时尚潮男系列/棉氨/黑色/印花/短袖T恤', '../img/gd37.jpg', '423', '剩余尺码：S，M，L，XL,XXL', '￥139', '￥969', '2017-06-09 12:01:07');
INSERT INTO `goodslist` VALUES ('38', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd38.jpg', '74', '剩余尺码：S，M，L，XL,XXL', '￥139', '￥969', '2017-06-09 12:01:08');
INSERT INTO `goodslist` VALUES ('39', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd39.jpg', '54', '剩余尺码：S，M，L，XL,XXL', '￥139', '￥969', '2017-06-09 12:01:09');
INSERT INTO `goodslist` VALUES ('40', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd40.jpg', '24', '剩余尺码：S，M，L，XL,XXL', '￥139', '￥969', '2017-06-09 12:01:11');
INSERT INTO `goodslist` VALUES ('41', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd41.jpg', '74', '剩余尺码：S，M，L，XL,XXL', '￥139', '￥969', '2017-06-09 12:01:12');
INSERT INTO `goodslist` VALUES ('42', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd42.jpg', '0', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:16');
INSERT INTO `goodslist` VALUES ('43', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd43.jpg', '29', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:20');
INSERT INTO `goodslist` VALUES ('44', '时尚潮男系列/棉氨/咖色/印花/短袖T恤', '../img/gd44.jpg', '178', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:28');
INSERT INTO `goodslist` VALUES ('45', '时尚潮男系列/棉氨/咖色/印花/短袖T恤', '../img/gd45.jpg', '146', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:30');
INSERT INTO `goodslist` VALUES ('46', '时尚潮男系列/棉氨/咖色/印花/短袖T恤', '../img/gd46.jpg', '234', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:31');
INSERT INTO `goodslist` VALUES ('47', '时尚潮男系列/棉氨/咖色/印花/短袖T恤', '../img/gd47.jpg', '64', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:33');
INSERT INTO `goodslist` VALUES ('48', '时尚潮男系列/棉氨/咖色/印花/短袖T恤', '../img/gd48.jpg', '144', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:34');
INSERT INTO `goodslist` VALUES ('49', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd49.jpg', '142', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:36');
INSERT INTO `goodslist` VALUES ('50', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd50.jpg', '124', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:38');
INSERT INTO `goodslist` VALUES ('51', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd51.jpg', '114', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:39');
INSERT INTO `goodslist` VALUES ('52', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd52.jpg', '141', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:41');
INSERT INTO `goodslist` VALUES ('53', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd52.jpg', '142', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:44');
INSERT INTO `goodslist` VALUES ('54', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd54.jpg', '142', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:46');
INSERT INTO `goodslist` VALUES ('55', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd55.jpg', '141', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:48');
INSERT INTO `goodslist` VALUES ('56', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd56.jpg', '134', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:50');
INSERT INTO `goodslist` VALUES ('57', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd57.jpg', '24', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:52');
INSERT INTO `goodslist` VALUES ('58', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd58.jpg', '64', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:54');
INSERT INTO `goodslist` VALUES ('59', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd59.jpg', '17', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:01:56');
INSERT INTO `goodslist` VALUES ('60', 'TRIP旅行系列/柔滑冰爽/棉混纺/白色/', '../img/gd60.jpg', '14', '剩余尺码：S，M，L，XL,XXL', '￥199', '￥969', '2017-06-09 12:02:00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=147 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('140', '849307221@qq.com', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('141', '123456@qq.com', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('143', 'ac@aa.cc', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('145', '307221@qq.com', '827ccb0eea8a706c4c34a16891f84e7b');
INSERT INTO `user` VALUES ('146', '1000@qq.com', 'e10adc3949ba59abbe56e057f20f883e');
