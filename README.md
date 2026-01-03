<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تقرير تربوي PDF</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

@page{
  size:A4;
  margin:10mm;
}

:root{
  --main:#062f25;      /* أغمق نصف درجة من السابق */
  --border:#2f9e8f;
}

body{
  margin:0;
  font-family:'Cairo',sans-serif;
  background:#fff;
}

/* زر واتساب */
.whatsapp-btn{
  position:fixed;
  bottom:18px;
  left:18px;
  background:#25D366;
  color:#fff;
  border:none;
  border-radius:40px;
  padding:10px 18px;
  font-size:13px;
  font-weight:700;
  cursor:pointer;
  z-index:999;
}

/* محتوى التقرير */
#report-content{
  width:100%;
  max-width:210mm;
  margin:4mm auto 0 auto;
  padding:0 6mm;
  box-sizing:border-box;
}

/* الهيدر */
.header{
  background:var(--main);
  height:150px;
  border-radius:8px;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  margin-bottom:8px;
}
.header img{width:140px;}
.header-school{position:absolute;right:12px;bottom:18px;font-size:12px;font-weight:700;}
.header-education{position:absolute;left:50%;bottom:6px;transform:translateX(-50%);font-size:10px;}
.header-date{position:absolute;left:12px;top:10px;font-size:9px;text-align:right;}

/* مربعات المعلومات */
.info-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:6px;
  margin-bottom:6px;
}
.info-grid2{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:6px;
  margin-bottom:6px;
}

.info-box{
  border:1px solid var(--border);
  border-radius:7px;
  padding:14px 4px 6px;
  position:relative;
  text-align:center;
  font-size:10px;
  min-height:34px;
  overflow:hidden;
}
.info-title{
  position:absolute;
  top:4px;
  right:50%;
  transform:translateX(50%);
  font-size:8px;
  font-weight:700;
  color:var(--main);
  white-space:nowrap;
}
.info-value{
  font-size:10px;
  font-weight:600;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

/* مادة | درس */
.subject-lesson-box{
  border:1px solid var(--border);
  border-radius:7px;
  position:relative;
  padding:14px 4px 6px;
  overflow:hidden;
}
.subject-lesson-title{
  position:absolute;
  top:4px;
  right:50%;
  transform:translateX(50%);
  font-size:8px;
  font-weight:700;
  color:var(--main);
}
.subject-lesson{
  display:grid;
  grid-template-columns:1fr 1px 1fr;
  align-items:center;
  text-align:center;
  font-size:10px;
}
.subject-divider{
  background:var(--border);
  height:60%;
  margin:auto;
}

/* الهدف التربوي */
.box-objective{
  border:1px solid var(--border);
  border-radius:8px;
  padding:8px;
  margin-bottom:6px;
  height:110px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.box-objective .box-title{
  text-align:center;
  color:var(--main);
  font-weight:700;
  font-size:11px;
  margin-bottom:4px;
}
.box-objective .box-content{
  font-size:11px;
  line-height:1.5;
  text-align:center;
  overflow:hidden;
}

/* المربعات الكبيرة */
.box{
  border:1px solid var(--border);
  border-radius:8px;
  padding:8px;
  margin-bottom:6px;
  height:150px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.box-title{
  text-align:center;
  color:var(--main);
  font-weight:700;
  font-size:11px;
  margin-bottom:4px;
}
.box-content{
  font-size:11px;
  line-height:1.5;
  text-align:center;
  overflow:hidden;
}

/* الصفوف */
.row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:6px;
}

/* الأدوات */
.tools-box{
  border:1px solid var(--border);
  border-radius:8px;
  padding:6px;
  margin-bottom:6px;
  overflow:hidden;
}
.tools-title{
  text-align:center;
  font-weight:700;
  color:var(--main);
  font-size:10px;
  margin-bottom:4px;
}
.tools-list{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:6px;
  font-size:9px;
}
.tool{
  background:#eef7f4;
  border:1px solid #cfe8df;
  border-radius:16px;
  padding:3px 8px;
  display:flex;
  align-items:center;
  gap:5px;
  white-space:nowrap;
}
.tool span{
  background:var(--border);
  color:#fff;
  border-radius:50%;
  width:12px;
  height:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:8px;
}

/* الصور */
.images{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:6px;
  margin-bottom:6px;
}
.image-box{
  border:1px dashed var(--border);
  height:125px;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.image-box img{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
}

/* التوقيعات */
.signatures{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:30px;
  text-align:center;
  font-size:10px;
  margin-bottom:6px;
}
.signature-box{
  padding-top:4px;
}
.signature-role{
  font-size:9px;
  color:var(--main);
  font-weight:600;
  margin-bottom:2px;
}
.signature-name{
  font-size:11px;
  font-weight:700;
  color:#000;
}
.sign-line{
  border-top:1px solid #000;
  margin:6px auto 0;
  width:70%;
}

/* الفوتر */
.footer-box{
  background:var(--main);
  color:#fff;
  text-align:center;
  font-size:8px;
  padding:3px 4px;
  border-radius:6px;
}
</style>
</head>

<body>

<button class="whatsapp-btn" onclick="sendPDF()">إرسال PDF عبر واتساب</button>

<div id="report-content">

<div class="header">
  <img src="https://i.ibb.co/1fc5gB6v/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png">
  <div class="header-school">سعيد بن العاص</div>
  <div class="header-education">إدارة التعليم بمنطقة مكة المكرمة</div>
  <div class="header-date">1447 هـ<br>2026 م</div>
</div>

<div class="info-grid">
  <div class="info-box"><div class="info-title">الفصل الدراسي</div><div class="info-value">الفصل الدراسي الأول</div></div>
  <div class="info-box"><div class="info-title">الصف</div><div class="info-value">٥/٣</div></div>
  <div class="info-box"><div class="info-title">العدد</div><div class="info-value">٢٥ طالب</div></div>
  <div class="info-box"><div class="info-title">نوع التقرير</div><div class="info-value">تقرير نشاط إثرائي</div></div>
</div>

<div class="info-grid2">
  <div class="info-box"><div class="info-title">المستهدفون</div><div class="info-value">جميع طلاب الصف</div></div>

  <div class="subject-lesson-box">
    <div class="subject-lesson-title">المادة | الدرس</div>
    <div class="subject-lesson">
      <div>لغتي</div>
      <div class="subject-divider"></div>
      <div>درس الضرب</div>
    </div>
  </div>

  <div class="info-box"><div class="info-title">مكان التنفيذ</div><div class="info-value">داخل الصف</div></div>
</div>

<div class="box-objective">
  <div class="box-title">الهدف التربوي</div>
  <div class="box-content">تنمية مهارات التفكير وتنشيط الإبداع وتحقيق مشاركة فعالة ودعم التعاون بين الطلاب.</div>
</div>

<div class="row">
  <div class="box"><div class="box-title">النبذة</div><div class="box-content">تم تنفيذ النشاط بطريقة تفاعلية داخل الصف.</div></div>
  <div class="box"><div class="box-title">إجراءات التنفيذ</div><div class="box-content">شرح الدرس، تقسيم الطلاب، تنفيذ النشاط.</div></div>
</div>

<div class="row">
  <div class="box"><div class="box-title">الاستراتيجيات</div><div class="box-content">التعلم التعاوني – العصف الذهني</div></div>
  <div class="box"><div class="box-title">نقاط القوة</div><div class="box-content">تفاعل الطلاب – التنظيم</div></div>
</div>

<div class="row">
  <div class="box"><div class="box-title">نقاط التحسين</div><div class="box-content">زيادة زمن النشاط</div></div>
  <div class="box"><div class="box-title">التوصيات</div><div class="box-content">الاستمرار في الأنشطة التفاعلية</div></div>
</div>

<div class="tools-box">
  <div class="tools-title">الأدوات والوسائل التعليمية</div>
  <div class="tools-list">
    <div class="tool"><span>✓</span>سبورة</div>
    <div class="tool"><span>✓</span>أوراق عمل</div>
    <div class="tool"><span>✓</span>صور</div>
    <div class="tool"><span>✓</span>جهاز عرض</div>
  </div>
</div>

<div class="images">
  <div class="image-box"></div>
  <div class="image-box"></div>
</div>

<div class="signatures">
  <div class="signature-box">
    <div class="signature-role">المعلم</div>
    <div class="signature-name">فهد الخالدي</div>
    <div class="sign-line"></div>
  </div>
  <div class="signature-box">
    <div class="signature-role">قائد المدرسة</div>
    <div class="signature-name">نايف اللحياني</div>
    <div class="sign-line"></div>
  </div>
</div>

<div class="footer-box">
  وزارة التعليم – المملكة العربية السعودية
</div>

</div>

<script>
async function sendPDF(){
  const element=document.getElementById('report-content');
  const pdf=await html2pdf().set({
    margin:0,
    html2canvas:{scale:2,useCORS:true},
    jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
  }).from(element).toPdf().output('blob');

  const file=new File([pdf],'report.pdf',{type:'application/pdf'});
  if(navigator.canShare && navigator.canShare({files:[file]})){
    navigator.share({files:[file],title:'تقرير تربوي'});
  }else{
    const url=URL.createObjectURL(pdf);
    window.open('https://wa.me/?text='+encodeURIComponent('تقرير تربوي:\n'+url),'_blank');
  }
}
</script>

</body>
</html>