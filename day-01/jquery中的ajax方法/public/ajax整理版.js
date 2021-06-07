function myAjax(options) {
    //1.结构option中的参数
    let {
        url,
        type='get',
        timeout=6000,
        dataType='json',
        data,
        success,
        error,
        beforeSend,
        completem,
    } = options
    //2.判断是否传入了url，没有就直接return
    if (!url) return
    //3.创建zhx对象
    const zhx = new XMLHttpRequest()
    //4.设置超时
    zhx.timeout = timeout
    //5.调用obj2string,将data转成一个字符串
    let qwer = obj2string(data)
    //6.判断是否是get方法，如果是get方法，将要上传的数据，添加url后面
    if (type === 'get') {
        url += '?' + qwer
        qwer = null
    }
    //7.设置请求首行
    zhx.open(type, url)
    //8.设置请求头
    if (type === 'post') {
        zhx.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }
    //9.判断beforeSend,是否传入或是显示的返回的false，如果返回的是false就不发送
    let tyui = beforeSend & beforeSend()
    if (tyui === false) return
    //10.发送请求
    zhx.send(qwer)
    //11.处理响应
    zhx.onreadystatechange = function () {
        if (zhx.readyState === 4) {
            //12.表示请求完成
            completem && completem()
            if (zhx.status === 200) {
                //13.表示请求成功
                let value
                if (dataType === 'text') {
                    value = zhx.responseText
                } else if (dataType === 'json') {
                    value = JSON.parse(zhx.responseText)
                }
                success && success(value)
            } else {
                //14.表示失败
                error && error()
            }
        }
    }
}
function obj2string(data) {
    if (!data) return
    let arr = []
    for (let key in data) {
        arr.push(key + '=' + data[key])
    }
    return arr.join('&')
}