<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تقرير PDF</title>
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
height:32px;
display:flex;
align-items:center;
justify-content:center;
font-size:11px;
line-height:1.1;
padding:2px 4px;
box-sizing:border-box;
}

/* ===== المادة | الدرس في نفس المربع ===== */
.subject-lesson{
display:grid;
grid-template-columns:1fr auto 1fr;
align-items:center;
width:100%;
font-size:11px;
}
.subject-lesson span{
display:flex;
justify-content:center;
}
.subject-lesson .divider{
font-size:10px;
padding:0 6px;
color:#066d4d;
}

/* ===== توحيد ارتفاع المربعات الكبيرة ===== */
.objective-box,
.report-box,
.image-box{
height:145px;
box-sizing:border-box;
}

/* ===== الهدف التربوي ===== */
.objective-box{
border:1px solid #066d4d;
border-radius:8px;
padding:10px;
margin:10px 12px;
font-size:12px;
}

/* ===== Content boxes ===== */
.report-row{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
margin:10px 12px;
}
.report-box{
border:1px solid #066d4d;
border-radius:8px;
padding:6px;
font-size:12px;
}

/* ===== الأدوات والوسائل التعليمية ===== */
.tools-box{
border:1px solid #066d4d;
border-radius:5px;
margin:6px 12px;
padding:2px 4px;
font-size:8px;
line-height:1.2;
}
.tools-title{
font-weight:700;
font-size:8px;
text-align:center;
margin:0 0 2px 0;
}
.tools-list{
display:flex;
flex-wrap:wrap;
gap:4px 8px;
}
.tool-item{
display:flex;
align-items:center;
gap:2px;
white-space:nowrap;
}
.tool-item input{
width:8px;
height:8px;
margin:0;
}

/* ===== Images ===== */
.image-evidence-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
margin:10px 12px;
}
.image-box{
border:1px dashed #066d4d;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
background:#fff;
}
.image-box img{
max-width:100%;
max-height:100%;
object-fit:contain;
display:block;
}

/* ===== Signatures ===== */
.signature-section{
display:grid;
grid-template-columns:1fr 1fr;
gap:30px;
margin:18px 12px;
text-align:center;
font-weight:700;
font-size:12px;
}
.signature-line{
border-top:1px solid #000;
margin-top:6px;
}

/* ===== Footer ===== */
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

<div class="info-box">
<div class="subject-lesson">
<span>المادة</span>
<span class="divider">|</span>
<span>الدرس</span>
</div>
</div>

<div class="info-box">نوع التقرير</div>
</div>

<div class="info-grid2">
<div class="info-box">المستهدفون</div>
<div class="info-box">العدد</div>
<div class="info-box">مكان التنفيذ</div>
</div>

<div class="objective-box">
<strong>الهدف التربوي</strong>
<p>.......................................................................................................................</p>
</div>

<div class="report-row">
<div class="report-box"><strong>النبذة</strong></div>
<div class="report-box"><strong>إجراءات التنفيذ</strong></div>
</div>

<div class="report-row">
<div class="report-box"><strong>الاستراتيجيات</strong></div>
<div class="report-box"><strong>نقاط القوة</strong></div>
</div>

<div class="report-row">
<div class="report-box"><strong>نقاط التحسين</strong></div>
<div class="report-box"><strong>التوصيات</strong></div>
</div>

<div class="tools-box">
<div class="tools-title">الأدوات والوسائل التعليمية</div>
<div class="tools-list">
<label class="tool-item"><input type="checkbox"> سبورة تقليدية</label>
<label class="tool-item"><input type="checkbox"> سبورة ذكية</label>
<label class="tool-item"><input type="checkbox"> جهاز عرض</label>
<label class="tool-item"><input type="checkbox"> جهاز الحاسب</label>
<label class="tool-item"><input type="checkbox"> بطاقات تعليمية</label>
<label class="tool-item"><input type="checkbox"> صور توضيحية</label>
<label class="tool-item"><input type="checkbox"> أوراق عمل</label>
<label class="tool-item"><input type="checkbox"> أدوات رياضية</label>
<label class="tool-item"><input type="checkbox"> كتاب</label>
<label class="tool-item"><input type="checkbox"> عرض تقديمي</label>
</div>
</div>

<div class="image-evidence-grid">
<div class="image-box"><img src="" alt=""></div>
<div class="image-box"><img src="" alt=""></div>
</div>

<div class="signature-section">
<div>
المعلم
<div class="signature-line"></div>
</div>
<div>
قائد المدرسة
<div class="signature-line"></div>
</div>
</div>

<div class="footer">
وزارة التعليم – المملكة العربية السعودية
</div>

</div>

</body>
</html>