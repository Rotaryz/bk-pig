exports.loginreg = function(app,createConnection){
var Rconnection;

	app.get('/reg', function(req,res){
		res.append("Access-Control-Allow-Origin", "*");
		Rconnection = createConnection();
		Rconnection.query('SELECT * FROM users where phone="'+req.query.phone+'"', function(error, results, fields) {
			if(results.length == 1){
				res.send('1');
			}else if(results.length == 0){
				res.send('0');
				Rconnection.query('INSERT INTO users(phone,password) values("'+req.query.phone+'","'+req.query.password+'")',(error, results, fields)=>{});
			}  
			Rconnection.end();
		});
	});
	
	app.get('/login', function(req,res){
		res.append("Access-Control-Allow-Origin", "*");
		Rconnection = createConnection();
		Rconnection.query('SELECT * FROM users where (username = "'+req.query.user+'" or phone = "'+req.query.user+'" or email = "'+req.query.user+'") and password = "'+req.query.password+'"', function(error, results, fields) {	
		res.send(results);
		Rconnection.end();
		});
	});
	
	app.get('/search', function(req,res){
		res.append("Access-Control-Allow-Origin", "*");
		Rconnection = createConnection();
		Rconnection.query('SELECT * FROM users where phone = "'+req.query.phone+'" or id = "'+req.query.phone+'"', function(error, results, fields) {	
		res.send(results);
		Rconnection.end();
		});
	});
	
	app.get('/orders', function(req,res){
		res.append("Access-Control-Allow-Origin", "*");
		Rconnection = createConnection();
		Rconnection.query('SELECT * FROM carlist where user_id = "'+req.query.id+'" and orders = "1"', function(error, results, fields) {	
		res.send(results);
		Rconnection.end();
		});
	});
	
	app.get('/delorders', function(req,res){
		res.append("Access-Control-Allow-Origin", "*");
		Rconnection = createConnection();
		Rconnection.query(`UPDATE carlist SET orders='0' WHERE id="${req.query.id}"`,function(error,results,fields) {	
		res.send(results);
		Rconnection.end();
		});
	});
}
