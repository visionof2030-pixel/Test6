<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تقرير PDF</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

body{
font-family:'Cairo',sans-serif;
margin:0;
background:#f5f5f5;
}

#report-content{
width:210mm;
min-height:297mm;
margin:auto;
background:#ffffff;
}

/* زر واتساب */
.send-btn{
position:fixed;
bottom:15px;
right:15px;
background:#25D366;
color:#fff;
border:none;
border-radius:50px;
padding:12px 18px;
font-size:12px;
cursor:pointer;
z-index:1000;
box-shadow:0 4px 10px rgba(0,0,0,.25);
}

/* ===== Header ===== */
.header{
background:#083024;
height:140px;
color:#fff;
position:relative;
display:flex;
align-items:center;
justify-content:center;
}
.header img{width:160px;}
.header-school-title{position:absolute;bottom:40px;right:12px;font-size:13px;}
.header-school{position:absolute;bottom:22px;right:12px;font-size:14px;font-weight:700;}
.header-education{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:12px;}
.header-date-box{position:absolute;top:10px;left:12px;font-size:11px;text-align:right;}

/* ===== Info grids ===== */
.info-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:6px;
margin:10px 12px;
}
.info-grid2{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:6px;
margin:0 12px 10px;
}
.info-box{
border:1px solid #066d4d;
border-radius:6px;
height:34px;
padding:2px 4px;
text-align:center;
font-size:11px;
display:flex;
flex-direction:column;
justify-content:center;
}
.lesson-box{
margin-top:1px;
font-size:6px;
border-top:1px dashed #066d4d;
padding-top:1px;
}

/* ===== Content ===== */
.objective-box{
border:1px solid #066d4d;
border-radius:8px;
padding:7px;
margin:11px;
font-size:11.5px;
}
.report-row{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
margin:11px;
}
.report-box{
border:1px solid #066d4d;
border-radius:8px;
padding:5px;
min-height:106px;
font-size:11.5px;
}
.tools-box{
border:1px solid #066d4d;
border-radius:5px;
margin:6px 11px;
padding:2px 4px;
font-size:8px;
}
.tools-list{
display:flex;
flex-wrap:wrap;
gap:6px;
}
.image-evidence-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
margin:12px;
}
.image-box{
border:1px dashed #066d4d;
height:120px;
display:flex;
align-items:center;
justify-content:center;
}
.signature-section{
display:grid;
grid-template-columns:1fr 1fr;
gap:28px;
margin:19px;
text-align:center;
font-size:11.5px;
}
.signature-line{
border-top:1px solid #000;
margin-top:5px;
}
.footer{
background:#083024;
color:#fff;
text-align:center;
padding:6px;
font-size:11px;
}
</style>
</head>

<body>

<button class="send-btn" onclick="sendPDFWhatsApp()">إرسال PDF عبر واتساب</button>

<div id="report-content">

<div class="header">
<img src="https://i.ibb.co/1fc5gB6v/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png">
<div class="header-school-title">اسم المدرسة</div>
<div class="header-school">سعيد بن العاص</div>
<div class="header-education">إدارة التعليم بمنطقة مكة المكرمة</div>
<div class="header-date-box">1447 هـ<br>2026 م</div>
</div>

<div class="info-grid">
<div class="info-box">الفصل</div>
<div class="info-box">الصف</div>
<div class="info-box">المادة<div class="lesson-box">الدرس</div></div>
<div class="info-box">نوع التقرير</div>
</div>

<div class="info-grid2">
<div class="info-box">المستهدفون</div>
<div class="info-box">العدد</div>
<div class="info-box">مكان التنفيذ</div>
</div>

<div class="objective-box"><strong>الهدف التربوي</strong></div>

<div class="report-row">
<div class="report-box">النبذة</div>
<div class="report-box">إجراءات التنفيذ</div>
</div>

<div class="report-row">
<div class="report-box">الاستراتيجيات</div>
<div class="report-box">نقاط القوة</div>
</div>

<div class="report-row">
<div class="report-box">نقاط التحسين</div>
<div class="report-box">التوصيات</div>
</div>

<div class="tools-box">
<div class="tools-list">
<span>☐ سبورة</span>
<span>☐ عرض</span>
<span>☐ حاسب</span>
<span>☐ أوراق</span>
</div>
</div>

<div class="image-evidence-grid">
<div class="image-box">صورة 1</div>
<div class="image-box">صورة 2</div>
</div>

<div class="signature-section">
<div>المعلم<div class="signature-line"></div></div>
<div>قائد المدرسة<div class="signature-line"></div></div>
</div>

<div class="footer">وزارة التعليم – المملكة العربية السعودية</div>

</div>

<script>
async function sendPDFWhatsApp(){
const element=document.getElementById('report-content');

const pdfBlob = await html2pdf().set({
margin:0,
html2canvas:{scale:3,useCORS:true},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
}).from(element).toPdf().output('blob');

const file = new File([pdfBlob], "report.pdf", {type:"application/pdf"});

if(navigator.canShare && navigator.canShare({files:[file]})){
await navigator.share({
files:[file],
title:"تقرير PDF",
text:"مشاركة التقرير عبر واتساب"
});
}else{
const url=URL.createObjectURL(pdfBlob);
window.open(`https://wa.me/?text=${encodeURIComponent("رابط التقرير:\n"+url)}`,"_blank");
}
}
</script>

</body>
</html>