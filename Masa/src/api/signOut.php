<?php 
	include 'common.php';

	$name = isset($_GET['uesname'])?$_GET['uesname']:'';
	$psw = isset($_GET['psw'])?$_GET['psw']:'';

	$psw = md5($psw);
	//查询数据库中是否存在该注册的用户的用户名，没有就插入，有就返回一个no;
	
	//查用户名
	$sqls = "SELECT name FROM user WHERE name=('$name')";
	//查询
	$res = $conn-> query($sqls);
	$rows=$res->fetch_all(MYSQLI_ASSOC);


	//判断是否存在$rows，若$rows不存在，则该用户未被注册
	
	if($rows){
		//若改数据已存在，返回no
		echo 'no';
	}else{
		//若该用户未被注册，返回OK
		$sql = "insert into user(name,psw) values('$name','$psw')";
		$reg = $conn -> query($sql);
		if($reg){
			echo 'ok';
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	
	//关闭连接
	$conn->close();

	
?>