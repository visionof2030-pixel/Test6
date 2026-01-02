<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تصدير PDF</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<style>
body{
font-family:Arial, sans-serif;
background:#f5f5f5;
margin:0;
padding:20px;
}
#pdf-content{
background:#ffffff;
padding:30px;
max-width:800px;
margin:auto;
border:1px solid #000;
}
button{
margin:20px auto;
display:block;
padding:12px 20px;
font-size:16px;
cursor:pointer;
}
</style>
</head>
<body>

<button onclick="exportPDF()">تحميل الملف PDF</button>

<div id="pdf-content">
<h2 style="text-align:center;">أداة إصدار التقارير التربوية</h2>
<p>هذا النموذج مخصص للتصدير بصيغة PDF فقط.</p>
<p>يمكنك وضع المحتوى النهائي هنا (نص – جداول – صور).</p>
</div>

<script>
function exportPDF(){
const element = document.getElementById('pdf-content');
html2pdf().set({
margin:0,
filename:'report.pdf',
html2canvas:{
scale:3,
useCORS:true
},
jsPDF:{
unit:'mm',
format:'a4',
orientation:'portrait'
}
}).from(element).save();
}
</script>

</body>
</html>