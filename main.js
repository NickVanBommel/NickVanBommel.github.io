var selectedColor = "black";
var selectedShape = "free";
var selectedTool = "draw";
var selectedItemIndex = -1;
var myPath;
var copiedPath;
var completedPaths = [];
var undonePaths = [];

//defines what color to draw in
$( "#selBlack" ).click(function() {
    selectedColor = "black";
    $("#selectedColor").css("color", "black");
});
$( "#selRed" ).click(function() {
    selectedColor = "red";
    $("#selectedColor").css("color", "red");
});
$( "#selYellow" ).click(function() {
    selectedColor = "yellow";
    $("#selectedColor").css("color", "yellow");
});
$( "#selBlue" ).click(function() {
    selectedColor = "blue";
    $("#selectedColor").css("color", "blue");
});
$( "#selGreen" ).click(function() {
    selectedColor = "green";
    $("#selectedColor").css("color", "green");
});

//defines what shape to draw
$( "#selFree" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "free";
    $("#selectedShape").addClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-pinterest-p");
    $("#btnPushPoly").hide();
});
$( "#selSquare" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "square";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-square-o");
    $("#btnPushPoly").hide();
});
$( "#selStraight" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "straight";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-times");
    $("#btnPushPoly").hide();
});
$( "#selCircle" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "circle";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-circle-thin");
    $("#btnPushPoly").hide();
});
$( "#selRectangle" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "rectangle";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-battery-0");
    $("#btnPushPoly").hide();
});
$( "#selEllipse" ).click(function() {
    if (myPath)
        myPath.remove();
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "ellipse";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-eye");
    $("#btnPushPoly").hide();
});
$( "#selPolygon" ).click(function() {
    selectedTool = "draw";
    myPath = new Path();
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
    selectedShape = "polygon";
    $("#selectedShape").removeClass("fa-pinterest-p");
    $("#selectedShape").removeClass("fa-times");
    $("#selectedShape").removeClass("fa-square-o");
    $("#selectedShape").removeClass("fa-circle-thin");
    $("#selectedShape").removeClass("fa-battery-0");
    $("#selectedShape").removeClass("fa-eye");
    $("#selectedShape").removeClass("fa-diamond");
    $("#selectedShape").addClass("fa-diamond");
    $("#btnPushPoly").show();
});

//defines whether to draw or select an object
$('#selDraw').click(function(){
    selectedTool = "draw";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-pencil");
    if (completedPaths[selectedItemIndex])
        completedPaths[selectedItemIndex].selected = false;
});
$('#selSelect').click(function(){
    selectedTool = "select";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-mouse-pointer");
});



function onMouseDown(event){
    if (selectedTool == "draw"){
        undonePaths = [];
        if (selectedShape == "polygon"){
            myPath.strokeColor = selectedColor;
            myPath.add(event.point);
        }
        else{
            myPath = new Path();
            myPath.strokeColor = selectedColor;
            if (selectedShape == "free"){
                myPath.add(event.point);
            } 
        }   
    }
    else if (selectedTool == "select"){
        completedPaths[selectedItemIndex].position = event.point;
    }
}
function onMouseDrag(event){
    if (selectedTool == "draw")
    {
        switch(selectedShape){
            case "free":{                
                myPath.add(event.point);
            }
            break;
            case "straight":{ 
                myPath.remove();               
                myPath = new Path();
                myPath.strokeColor = selectedColor;
                myPath.add(event.downPoint);
                myPath.add(event.point);
            }
            break;
            case "square":{                
                myPath.remove();
                var xDifference = event.point.y - event.downPoint.y;
                var newRect = new Rectangle(event.downPoint.x, event.downPoint.y, xDifference, xDifference);
                myPath = new Path.Rectangle(newRect);
                myPath.strokeColor = selectedColor;
            }
            break;
            case "circle":{
                myPath.remove();  
                 
                var newRadius = Math.sqrt((event.downPoint.x - event.point.x) * (event.downPoint.x - event.point.x)  +  (event.downPoint.y - event.point.y) * (event.downPoint.y - event.point.y));          
                myPath = new Path.Circle({
                    center: event.downPoint,
                    radius: newRadius
                });
                myPath.strokeColor = selectedColor;
            }
            break;
            case "rectangle":{                
                myPath.remove();
                var from = new Point(event.downPoint);
                var to = new Point(event.point);
                myPath = new Path.Rectangle(from, to);
                myPath.strokeColor = selectedColor;
            }
            break;
            case "ellipse":{

                myPath.remove();
                var from = new Point(event.downPoint);
                var to = new Point(event.point);
                var newRect = new Rectangle(from, to);
                myPath = new Path.Ellipse(newRect);
                myPath.strokeColor = selectedColor;

            }
            break;
        }
    }
    else if (selectedTool == "select"){
        completedPaths[selectedItemIndex].position = event.point;
    }
}
function onMouseUp(event){

    if (selectedTool == "draw" && !(selectedShape == "polygon")){        
        completedPaths.push(myPath);
        myPath = new Path();
    }
}


$('#btnUndo').click(function(){
    var undonePath = completedPaths.pop();
    if (undonePath){
        undonePath.visible = false;
        undonePaths.push(undonePath.clone());
    }
});

$("#btnRedo").click(function(){
    var redonePath = undonePaths.pop();
    if (redonePath){
        redonePath.visible = true;
        completedPaths.push(redonePath);
    }

});

$("#btnSelectNext").click(function(){
    
    selectedTool = "select";
    $("#selectedTool").removeClass("fa-pencil");
    $("#selectedTool").removeClass("fa-mouse-pointer");
    $("#selectedTool").addClass("fa-mouse-pointer");
    selectedItemIndex++;
    if (completedPaths[selectedItemIndex - 1]){
        completedPaths[selectedItemIndex - 1].selected = false;
    }
    if (completedPaths[selectedItemIndex]){
        completedPaths[selectedItemIndex].selected = true;
    }
    else{
        selectedItemIndex = 0;
        if (completedPaths[selectedItemIndex]){
            completedPaths[selectedItemIndex].selected = true;
        }
    }
});
$("#btnCopy").click(function(){
    if (completedPaths[selectedItemIndex]){
        copiedPath = completedPaths[selectedItemIndex].clone();
        copiedPath.selected = false;
        copiedPath.visible = false;
    }

});
$("#btnDelete").click(function(){
    if (completedPaths[selectedItemIndex]){
        completedPaths[selectedItemIndex].remove();
    }

});
$("#btnPaste").click(function(){

    if (copiedPath){
        if (completedPaths[selectedItemIndex]){
            completedPaths[selectedItemIndex].selected = false;
        }
        var pastedItem = copiedPath.clone();
        pastedItem.visible = true;
        pastedItem.position = new Point(250, 250);
        pastedItem.selected = true;
        completedPaths.push(pastedItem);
        selectedItemIndex = completedPaths.length - 1;
    }
});

$("#btnPushPoly").click(function(){
    completedPaths.push(myPath);
    myPath = new Path();
    
});