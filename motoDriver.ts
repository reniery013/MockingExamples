import iDriver = require('./iDriver');


export class motoDriver implements iDriver {
	
	age: number;
	licenseType: string;
	
	motoDriver(){
	}
	
	getLicenseType(){
		//code does not actually work
		//Copied this code to simulate what getting a license type would be like
		//In this case let's assume it would open db connection to get the 
		{
			var connection = new ActiveXObject("ADODB.Connection");
	
			var connectionstring = "Data Source=.;Initial Catalog=EmpDetail;Persist Security Info=True;User ID=sa;Password=****;Provider=SQLOLEDB";
			connection.Open(connectionstring);
			var rs = new ActiveXObject("ADODB.Recordset");
			rs.Open("select * from emp", connection);
			rs.MoveFirst();
			var span = document.createElement("span");
			span.style.color = "Blue";
			span.innerText = "  ID " + "  Name " + "   Salary";
			document.body.appendChild(span);
			while (!rs.eof)
			{
				var span = document.createElement("span");
				span.style.color = "green";
				span.innerText = "\n " + rs.fields(0) + " |  " + rs.fields(1) + " |  " + rs.fields(2);
				document.body.appendChild(span);
				rs.MoveNext();
			}
			rs.close();
			connection.close();
			
			var licenseType = 'result of query to database'
			
		}
		
		return licenseType;
	}
	
	CleanVehicle(){
		//code does not actually work
		//Copied same code to simulate what the implementation of clean vehicle might be 
		{
			var connection = new ActiveXObject("ADODB.Connection");
	
			var connectionstring = "Data Source=.;Initial Catalog=EmpDetail;Persist Security Info=True;User ID=sa;Password=****;Provider=SQLOLEDB";
			connection.Open(connectionstring);
			var rs = new ActiveXObject("ADODB.Recordset");
			rs.Open("select * from emp", connection);
			rs.MoveFirst();
			var span = document.createElement("span");
			span.style.color = "Blue";
			span.innerText = "  ID " + "  Name " + "   Salary";
			document.body.appendChild(span);
			while (!rs.eof)
			{
				var span = document.createElement("span");
				span.style.color = "green";
				span.innerText = "\n " + rs.fields(0) + " |  " + rs.fields(1) + " |  " + rs.fields(2);
				document.body.appendChild(span);
				rs.MoveNext();
			}
			rs.close();
			connection.close();
			
			var licenseType = 'result of query to database'
			
		}
		
	}			
	
				
} 