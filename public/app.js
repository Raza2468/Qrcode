var qrdata = document.getElementById("qrcode")
var data = document.getElementById("data")
function generatQR() {
if (data.value === "") {

} else {
var qrcode = new QRCode(document.getElementById("qrcode"))
var li = document.createElement('li')
var litext = document.createTextNode(data.value)
    qrdata.appendChild(li)
    li.appendChild(litext)
    qrcode.makeCode(data.value)
    data.value=""
}
}