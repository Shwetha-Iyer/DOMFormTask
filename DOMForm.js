function createTag(element,elementClass="",elementID="",elementName="",elementValue=""){
    var tag = document.createElement(element);
    tag.setAttribute("class",elementClass);
    tag.setAttribute("id",elementID);
    tag.setAttribute("name",elementName);
    tag.setAttribute("value",elementValue);
    return tag;
}

var h1 = createTag("h1");
h1.setAttribute("style","text-align:center;");
h1.innerHTML = "<br> Form <br>";
document.body.append(h1);

var div1 = createTag("div");
var form = createTag("form","","myform");
form.setAttribute("style","margin-left: auto; margin-right: auto; border: 1px solid grey; width:75%; margin-top:50px;");

//First Name 
var formr1 = createTag("div","form-row align-items-center");
formr1.setAttribute("style","margin-top:20px;margin-left:20px;");
var formr1c1 = createTag("div","col");
var formgroup1 = createTag("div","form-group form-inline");
var label1 = createTag("label");
label1.setAttribute("for","fname");
label1.innerHTML = "First Name:* &nbsp;&nbsp";
var input1 = createTag("input","form-control","fname","fname");
input1.setAttribute("type","text");
formgroup1.append(label1,input1);
formr1c1.append(formgroup1);


//Last Name
var formr1c2 = createTag("div","col");
var formgroup2 = createTag("div","form-group form-inline");
var label2 = createTag("label");
label2.setAttribute("for","lname");
label2.innerHTML = "Last Name:* &nbsp;&nbsp;";
var input2 = createTag("input","form-control","lname","lname");
input2.setAttribute("type","text");
formgroup2.append(label2,input2);
formr1c2.append(formgroup2);
formr1.append(formr1c1,formr1c2);

//Gender
var formgroup3 = createTag("div","form-group");
formgroup3.setAttribute("style","margin-left:20px;")
formgroup3.innerHTML = "<br> Gender:* &nbsp;&nbsp;";
var radio1 = createTag("div","form-check form-check-inline");
var input3 = createTag("input","form-check-input","male","gender","male");
input3.setAttribute("type","radio");
var label3 = createTag("label","form-check-label");
label3.setAttribute("for","gender");
label3.innerHTML = "Male &nbsp;&nbsp;&nbsp;&nbsp;";

var radio2 = createTag("div","form-check form-check-inline");
var input4 = createTag("input","form-check-input","female","gender","female");
input4.setAttribute("type","radio");
var label4 = createTag("label","form-check-label");
label4.setAttribute("for","gender");
label4.innerHTML = "Female";

radio1.append(input3,label3);
radio2.append(input4,label4);
formgroup3.append(radio1,radio2);

//Food choice
var formgroup4 = createTag("div","form-group");
formgroup4.setAttribute("style","margin-left:20px;")
formgroup4.innerHTML = " Select your choice of food:* &nbsp;&nbsp;";
var check1 = createTag("div","form-check");
var input5 = createTag("input","form-check-input","pizza","food","pizza");
input5.setAttribute("type","checkbox");
var label5 = createTag("label","form-check-label");
label5.setAttribute("for","food");
label5.innerHTML = "&nbsp;Pizza ";

var check2 = createTag("div","form-check");
var input6 = createTag("input","form-check-input","curry","food","curry");
input6.setAttribute("type","checkbox");
var label6 = createTag("label","form-check-label");
label6.setAttribute("for","food");
label6.innerHTML = "&nbsp;Curry ";

var check3 = createTag("div","form-check");
var input7 = createTag("input","form-check-input","kimchi","food","kimchi");
input7.setAttribute("type","checkbox");
var label7 = createTag("label","form-check-label");
label7.setAttribute("for","food");
label7.innerHTML = "&nbsp;Kimchi ";

var check4 = createTag("div","form-check");
var input8 = createTag("input","form-check-input","pasta","food","pasta");
input8.setAttribute("type","checkbox");
var label8 = createTag("label","form-check-label");
label8.setAttribute("for","food");
label8.innerHTML = "&nbsp;Pasta ";

var check5 = createTag("div","form-check");
var input9 = createTag("input","form-check-input","momo","food","momo");
input9.setAttribute("type","checkbox");
var label9 = createTag("label","form-check-label");
label9.setAttribute("for","food");
label9.innerHTML = "&nbsp;Momo ";

check1.append(input5,label5);
check2.append(input6,label6);
check3.append(input7,label7);
check4.append(input8,label8);
check5.append(input9,label9);
formgroup4.append(check1,check2,check3,check4,check5);

//Address
var formgroup5 = createTag("div","form-group form-inline");
var label10 = createTag("label");
label10.setAttribute("for","address");
label10.setAttribute("style","margin-left:20px");
label10.innerHTML = "Address:* &nbsp;&nbsp;&nbsp;"
var input10 = createTag("input","form-control","address","address");
input10.setAttribute("type","text");
input10.setAttribute("style","width:700px;");
formgroup5.append(label10,input10);

//City, State and Country

var formr2 = createTag("div","form-row");
formr2.setAttribute("style","margin-left:20px; margin-right:20px;");
var formr2c1 = createTag("div","col-4 form-group");
var label11 = createTag("label");
label11.setAttribute("for","city")
label11.innerHTML = "City:* ";
var input11 = createTag("input","form-control","city","city");
input11.setAttribute("type","text");

var formr2c2 = createTag("div","col-5 form-group");
var label12 = createTag("label");
label12.innerHTML = "Select:* ";
var select = createTag("select","form-control","state","state");
var option1 = createTag("option");
option1.innerText = "Select State";
option1.setAttribute("disabled","");
option1.setAttribute("selected","");
var option2 = createTag("option");
option2.innerText = "Tamil Nadu";
var option3 = createTag("option");
option3.innerText = "Kerala";
var option4 = createTag("option");
option4.innerText = "Karnataka";

select.append(option1,option2,option3,option4);
formr2c2.append(label12,select);

var formr2c3 = createTag("div","col-3 form-group");
var label13 = createTag("label");
label13.innerHTML = "Zip Code:*";
var input12 = createTag("input","form-control","zip","zip");
input12.setAttribute("type","number");

formr2c3.append(label13,input12);
formr2c1.append(label11,input11);
formr2.append(formr2c1,formr2c2,formr2c3);

//Country

var formgroup6 = createTag("div","form-group form-inline");
var label14 = createTag("label");
label14.setAttribute("for","country");
label14.setAttribute("style","margin-left:20px");
label14.innerHTML = "Country: &nbsp;&nbsp;&nbsp;"
var input13 = createTag("input","form-control","country","country","India");
input13.setAttribute("type","text");
input13.setAttribute("style","width:400px;");
input13.setAttribute("disabled","");
formgroup6.append(label14,input13);

// Submit
var button = document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","button");
button.setAttribute("style","margin-left:45%;margin-bottom:30px;");
button.setAttribute("onclick","displayval()");
button.innerHTML = "Submit";

form.append(formr1,formgroup3,formgroup4,formgroup5,formr2,formgroup6,button);
div1.append(form);
document.body.append(div1);

// Table creation

var tablediv = createTag("div");
var tableh1 = createTag("h1");
tableh1.setAttribute("style","text-align:center;");
tableh1.innerHTML = "<br> Table";
var table = createTag("table","table","table","table");
table.setAttribute("style","margin-left:auto;margin-right:auto;width:75%;border:2px solid grey;");
var thead = createTag("thead");
var theadtr = createTag("tr");
var th1 = createTag("th");
th1.setAttribute("scope","col");
th1.innerText = "FirstName";
var th2 = createTag("th");
th2.setAttribute("scope","col");
th2.innerText = "LastName";
var th3 = createTag("th");
th3.setAttribute("scope","col");
th3.innerText = "Gender";
var th4 = createTag("th");
th4.setAttribute("scope","col");
th4.innerText = "Food";
var th5 = createTag("th");
th5.setAttribute("scope","col");
th5.innerText = "Address";
var th6 = createTag("th");
th6.setAttribute("scope","col");
th6.innerText = "City";
var th7 = createTag("th");
th7.setAttribute("scope","col");
th7.innerText = "State";
var th8 = createTag("th");
th8.setAttribute("scope","col");
th8.innerText = "Zipcode";
var th9 = createTag("th");
th9.setAttribute("scope","col");
th9.innerText = "Country";
theadtr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(theadtr);
table.append(thead);
tablediv.append(tableh1,table);
var tbody = createTag("tbody");


function displayval(){
    console.log("This func is invoked");
    //getting all the values from form by the user
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gen = document.getElementsByName("gender");
    var gender="";
    for(var i =0;i<gen.length;i++){
        if(gen[i].checked)
        gender = gen[i].value;
    }
    var food = document.getElementsByName("food");
    var selectedfood=[];
    for(i=0;i<food.length;i++){
        if(food[i].checked){
            selectedfood.push(food[i].value);
        }
    }
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementsByTagName("option");
    var selectedstate="";
    for(i=0;i<state.length;i++){
        if(state[i].selected)
        selectedstate=state[i].text;
    }
    var zip = document.getElementById("zip").value;

    if(fname&&lname&&gender&&address&&city&&selectedstate&&zip&&(selectedfood.length>=2)){
        console.log("All values are validated!");
        var tr = createTag("tr");
        var td1 = createTag("td");
        td1.innerText = fname;
        var td2 = createTag("td");
        td2.innerText = lname;
        var td3 = createTag("td");
        td3.innerText = gender;
        var td4 = createTag("td");
        td4.innerText = selectedfood.join(",");
        var td5 = createTag("td");
        td5.innerText = address;
        var td6 = createTag("td");
        td6.innerText = city;
        var td7 = createTag("td");
        td7.innerText = selectedstate;
        var td8 = createTag("td");
        td8.innerText = zip;
        var td9 = createTag("td");
        td9.innerText = "India";
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
        tbody.append(tr);
        table.append(tbody);
        tablediv.append(table);
        document.body.append(tablediv);
        document.getElementById("myform").reset();
    }
    else
    alert("Please enter all values and select atleast 2 food");
}
