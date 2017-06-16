<?php
	include 'common.php';

	$id=isset($_GET['id'])? $_GET['id']:'';

	//查询数据库获取商品放大镜图片详情
	$sql="SELECT * FROM goods WHERE id=($id)";
	$res=$conn-> query($sql);
	$rows=$res->fetch_all(MYSQLI_ASSOC);
	// echo $rows;
	echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	$conn -> close();
?>