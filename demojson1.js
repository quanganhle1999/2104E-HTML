function loadmore(){
    var p = [];
    $.ajax({
        url:"data/production.json",
        method:"GET",
        success:function (rs){
            p = rs;
            var row =$("#row");
            for( var i=0;i<p.length;i++){
                var ct ="   <div class=\"item\">\n" +
                    "    <img src=\""+p[i].image+"\">\n" +
                    "    <h2>"+p[i].name+"</h2>\n" +
                    "    </div>"
                row.append(ct) //them vao dau
                // row.html(row.html()+ct);
                // row.prepend(ct) them vao cuoi
            }
        }
    });
}