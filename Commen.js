function requestData(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();
    //第二部 与服务端建立连接方法有两种get 或 post ,去连接哪儿个服务器，用服务器的哪儿个接口
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
    //告诉服务器传递数据的方式是以表单的方式传递过去
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //    第三部传递参数
    xhr.send(par3);
    //    第四步 接收数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4 数据请求完成  xhr.status == 200 数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText 包含了服务端返回的数据
            var reponseData = JSON.parse(xhr.responseText);
            var obj = reponseData.data;
            callback(obj,xhr.responseText);
        }
    }
}