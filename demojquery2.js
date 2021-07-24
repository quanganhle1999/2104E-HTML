
var p = [
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 1"
    },
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 2"
    },
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 3"
    },
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 4"
    },
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 5"
    },
    {
        image:"fileams6/anh1.jpg",
        name:"day la anh 6"
    }

    ];
function loadmore(){
    var row=$("#row");
for( var i=0;i<p.length;i++){
var ct ="   <div class=\"item\">\n" +
    "    <img src=\""+p[i].image+"\">\n" +
    "    <h2>"+p[i].name+"</h2>\n" +
    "    </div>"
    row.append(ct) //them vao dau
    // row.html(row.html()+ct);
    // row.prepend(ct) them vao cuoi
}}