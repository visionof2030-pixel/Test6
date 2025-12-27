<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>أداة إصدار التقارير والشواهد</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
html,body{font-family:'Cairo',sans-serif;background:#ffffff;direction:rtl;overflow-x:hidden;}

.wrapper{max-width:830px;margin:auto;padding:15px;}

.top-info-bar{
position:fixed;top:0;left:0;width:100%;background:#004d33;
color:#fff;padding:6px;text-align:center;font-size:13px;font-weight:bold;
z-index:30;white-space:nowrap;
}

.btn-container{
text-align:center;padding:12px;background:#f5f5f5;position:fixed;top:36px;left:0;width:100%;z-index:20;
display:flex;gap:10px;justify-content:center;flex-wrap:wrap;box-shadow:0 3px 6px rgba(0,0,0,0.25);
}
button.main-btn{
background:#066d4d;color:#fff;border:2px solid #066d4d;padding:12px 25px;font-size:14px;border-radius:8px;cursor:pointer;
flex:1;min-width:120px;max-width:200px;font-weight:bold;
}
button.outline-btn{
background:#ffffff;color:#066d4d;border:2px solid #066d4d;padding:4px 6px;font-size:12px;border-radius:6px;cursor:pointer;
font-weight:bold;white-space:nowrap;
}

.input-section{
background:#f8fdfb;padding:15px;border-radius:10px;margin-top:105px;border:1px solid #e0f0ea;
max-width:100%;
}

label{font-size:15px;font-weight:700;margin-top:15px;display:block;color:#083024;}
input,select,textarea{
width:100%;padding:12px;margin-top:6px;border:2px solid #066d4d;border-radius:8px;font-size:15px;background:#ffffff;
}
textarea{
height:95px;resize:none;font-size:15px !important;line-height:1.7;overflow:hidden;
}

.auto-buttons{display:flex;gap:6px;margin-top:6px;justify-content:flex-start;}

@media (max-width:600px){
button.main-btn{min-width:100px;font-size:13px;padding:9px;}
.info-grid,.info-grid2{grid-template-columns:repeat(2,1fr);}
.report-row{grid-template-columns:1fr;}
.image-evidence-grid{grid-template-columns:1fr;}
}

#report-content{width:100%;margin:20px auto;}

.header{
background:#083024;padding:8px;min-height:140px;position:relative;
color:#fff;text-align:center;overflow:hidden;
display:flex;align-items:center;justify-content:center;
}
.header img{width:155px;opacity:.97;}

.header-school-title{position:absolute;bottom:36px;right:8px;font-size:12px;font-weight:600;}
.header-school{position:absolute;bottom:20px;right:8px;font-size:12px;font-weight:700;}
.header-education{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:11px;font-weight:700;color:#d7f2ea;}

.header-date-box{position:absolute;top:6px;left:10px;font-size:11px;text-align:right;line-height:1.3;}

.info-grid{
display:grid;grid-template-columns:repeat(4,1fr);
gap:4px;margin-top:10px;
}
.info-grid2{
display:grid;grid-template-columns:repeat(3,1fr);
gap:4px;margin-bottom:8px;margin-top:10px;
}
.info-box{
background:#e8f2ee;border-radius:6px;height:34px;
display:flex;flex-direction:column;justify-content:center;align-items:center;
border:1px solid rgba(6,109,77,0.3);
}
.info-title{font-size:9px;font-weight:700;color:#083024;}
.info-value{font-size:10px;font-weight:700;color:#000000;}

.objective-box{
background:#f3f9f6;border:1px solid rgba(6,109,77,0.35);
padding:6px 10px;border-radius:8px;margin-bottom:10px;min-height:120px;
}
.objective-title{text-align:center;font-size:14px;font-weight:700;}
.objective-content{font-size:14px;line-height:1.7;}

.report-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;}
.report-box{
background:#ffffff;border-radius:8px;padding:6px;
border:1px solid rgba(6,109,77,0.35);min-height:130px;
}
.report-box-title{text-align:center;font-size:13px;font-weight:700;color:#083024;border-bottom:1px solid #ccd9d0;margin-bottom:4px;}
.report-box-content{font-size:14px;line-height:1.6;}

.image-evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.image-box{
min-height:140px;max-height:140px;border:1px dashed #066d4d;border-radius:8px;
display:flex;align-items:center;justify-content:center;background:#ffffff;overflow:hidden;
}
.image-box img{max-width:100%;max-height:100%;object-fit:contain;}

.signature-section{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.signature-box{text-align:center;font-size:12px;color:#083024;font-weight:700;}
.signature-line{margin-top:8px;border-top:1px solid #083024;width:80%;margin:auto;margin-bottom:4px;}

.footer{text-align:center;font-size:10px;padding:6px;margin-top:20px;background:#083024;color:#fff;}
</style>
</head>

<body>

<div class="top-info-bar">اضغط زر تعبئة 🔂 أكثر من مرة لتحصل على جمل جديدة عشوائية لتعزيز تنوّع التقرير</div>

<div class="btn-container">
<button class="main-btn" onclick="downloadPDF()">تنزيل PDF</button>
<button class="main-btn" onclick="sharePDFWhatsApp()">مشاركة واتساب</button>
<button class="main-btn" onclick="saveData()">حفظ البيانات</button>
</div>

<div class="wrapper">
<div class="input-section">

<label>إدارة التعليم</label>
<select id="education" oninput="updateReport()">
<option value="">اختر إدارة التعليم</option>
<option>الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
<option>الإدارة العامة للتعليم بمحافظة جدة</option>
</select>

<label>اسم المدرسة</label>
<input id="school" placeholder="مثال: معاذ بن جبل" oninput="updateReport()">

<label>صفة المعلّم</label>
<select id="teacherType" oninput="updateReport()">
<option value="">اختر الصفة</option>
<option selected>المعلم</option>
<option>المعلمة</option>
</select>

<label>اسم المعلّم</label>
<input id="teacher" placeholder="اسم المعلّم/ــة" oninput="updateReport()">

<label>صفة المدير</label>
<select id="principalType" oninput="updateReport()">
<option value="">اختر الصفة</option>
<option selected>المدير</option>
<option>المديرة</option>
</select>

<label>اسم المدير</label>
<input id="principal" placeholder="اسم مدير/ مديرة المدرسة" oninput="updateReport()">

<label>الصف</label>
<input id="grade" placeholder="مثال: ٥/٣" oninput="updateReport()">

<label>الفصل الدراسي</label>
<select id="term" oninput="updateReport()">
<option value="">اختر الفصل</option>
<option>الأول</option>
<option>الثاني</option>
</select>

<label>المادة</label>
<input id="subject" placeholder="مثال: لغتي – علوم – رياضيات" oninput="updateReport()">

<label>المستهدفون</label>
<input id="target" placeholder="مثال: طلاب الصف بالكامل" oninput="updateReport()">

<label>عدد الحضور</label>
<input id="count" placeholder="مثال: ٢٥ طالب" oninput="updateReport()">

<label>مكان التنفيذ</label>
<input id="place" placeholder="مثال: داخل الصف – المختبر" oninput="updateReport()">

<label>الهدف التربوي</label>
<textarea id="goal" placeholder="أدخل الهدف التربوي" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('goal')">🔂 تعبئة</button>
</div>

<label>نبذة مختصرة</label>
<textarea id="summary" placeholder="أدخل نبذة مختصرة" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('summary')">🔂 تعبئة</button>
</div>

<label>إجراءات التنفيذ</label>
<textarea id="steps" placeholder="كيف تم تنفيذ النشاط؟" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('steps')">🔂 تعبئة</button>
</div>

<label>الاستراتيجيات</label>
<textarea id="strategies" placeholder="ما هي الاستراتيجيات؟" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('strategies')">🔂 تعبئة</button>
</div>

<label>نقاط القوة</label>
<textarea id="strengths" placeholder="نقاط القوة" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('strengths')">🔂 تعبئة</button>
</div>

<label>نقاط التحسين</label>
<textarea id="improve" placeholder="نقاط تحتاج تطوير" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('improve')">🔂 تعبئة</button>
</div>

<label>التوصيات</label>
<textarea id="recomm" placeholder="توصيات مستقبلية" oninput="updateReport()"></textarea>
<div class="auto-buttons">
<button class="outline-btn" onclick="autoFill('recomm')">🔂 تعبئة</button>
</div>

<label>الصورة 1</label>
<input type="file" accept="image/*" onchange="loadImage(this,'imgBox1')">

<label>الصورة 2</label>
<input type="file" accept="image/*" onchange="loadImage(this,'imgBox2')">

</div>
</div>

<div id="report-content" class="wrapper">

<div class="header">
<img src="https://i.ibb.co/1fc5gB6v/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png">
<div class="header-school-title">اسم المدرسة</div>
<div class="header-school" id="schoolBox"></div>
<div class="header-education" id="educationBox"></div>
<div class="header-date-box">
<span id="hDate"></span><br>
<span id="gDate"></span>
</div>
</div>

<div class="info-grid">
<div class="info-box"><div class="info-title">الفصل</div><div class="info-value" id="termBox"></div></div>
<div class="info-box"><div class="info-title">الصف</div><div class="info-value" id="gradeBox"></div></div>
<div class="info-box"><div class="info-title">المادة</div><div class="info-value" id="subjectBox"></div></div>
<div class="info-box"><div class="info-title">التقرير</div><div class="info-value">تقرير نشاط إثرائي</div></div>
</div>

<div class="info-grid2">
<div class="info-box"><div class="info-title">المستهدفون</div><div class="info-value" id="targetBox"></div></div>
<div class="info-box"><div class="info-title">العدد</div><div class="info-value" id="countBox"></div></div>
<div class="info-box"><div class="info-title">المكان</div><div class="info-value" id="placeBox"></div></div>
</div>

<div class="objective-box"><div class="objective-title">الهدف التربوي</div><div class="objective-content" id="goalBox"></div></div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">النبذة</div><div class="report-box-content" id="summaryBox"></div></div>
<div class="report-box"><div class="report-box-title">إجراءات التنفيذ</div><div class="report-box-content" id="stepsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">الاستراتيجيات</div><div class="report-box-content" id="strategiesBox"></div></div>
<div class="report-box"><div class="report-box-title">نقاط القوة</div><div class="report-box-content" id="strengthsBox"></div></div>
</div>

<div class="report-row">
<div class="report-box"><div class="report-box-title">نقاط التحسين</div><div class="report-box-content" id="improveBox"></div></div>
<div class="report-box"><div class="report-box-title">التوصيات</div><div class="report-box-content" id="recommBox"></div></div>
</div>

<div class="image-evidence-grid">
<div class="image-box" id="imgBox1">صورة توثيقية ١</div>
<div class="image-box" id="imgBox2">صورة توثيقية ٢</div>
</div>

<div class="signature-section">
<div class="signature-box">
<div id="teacherTypeBox"></div>
<span id="teacherBox"></span>
<div class="signature-line"></div>
</div>
<div class="signature-box">
<div id="principalTypeBox"></div>
<span id="principalBox"></span>
<div class="signature-line"></div>
</div>
</div>

<div class="footer">وزارة التعليم – المملكة العربية السعودية</div>
</div>

<script>
const texts={
goal:[
"تنمية مهارات التفكير العليا لدى الطلاب وتشجيع التفاعل الإيجابي داخل البيئة التعليمية لتحقيق مخرجات تعلم متميزة.",
"تعزيز الدافعية الداخلية للطلاب وتنمية قدراتهم البحثية والإبداعية من خلال مواقف تعليمية حقيقية ذات معنى.",
"تنمية قيم التعاون وتنشيط دور الطالب كشريك في العملية التعليمية بما يحقق التعلم النشط والفعال والهادف.",
"تمكين الطلاب من تطبيق المهارات المكتسبة في مواقف تعليمية متنوعة تعزز استقلاليتهم وثقتهم بأنفسهم.",
"ربط التعلم بخبرات الحياة الواقعية وتعزيز دور الطالب في اتخاذ القرار والعمل التعاوني المسؤول."
],
summary:[
"تم تنفيذ النشاط بتنظيم تعليمي محكم وبأسلوب يشجع الطلاب على المشاركة الفعالة داخل الصف الدراسي.\nمما أسهم في رفع مستوى التفاعل والتعلم.",
"انطلق النشاط بتقديم محفز تعليمي جذاب لتشجيع الطلاب على الاستكشاف.\nوتفاعلوا مع محتوى الدرس بتعاون واضح.",
"شارك الطلاب في تنفيذ خطوات النشاط وفق أدوار محددة.\nوقد ساهم ذلك في رفع مستوى الفهم والاستيعاب.",
"أظهر الطلاب خلال النشاط مهارات تواصل وتعاون مميزة.\nكما برزت قدراتهم في النقاش والتشارك المعرفي.",
"شهد النشاط حضوراً مميزاً من الطلاب وتفاعلاً عالياً.\nمما جعل الأهداف التعليمية تتحقق بشكل واضح."
],
steps:[
"بدأ النشاط بعرض تمهيدي مشوق ثم تقسيم الطلاب إلى مجموعات.\nوتوزيع المهام بشكل منظم وفق خطوات مدروسة.",
"تم توجيه الطلاب لتنفيذ المهام في مجموعات.\nمع متابعة المعلم وتقديم الدعم المناسب.",
"أعقب تنفيذ النشاط نقاش توضيحي حول أبرز النتائج.\nوترسيخ المفاهيم المستهدفة.",
"اعتمد النشاط على تبادل الأدوار بين الطلاب.\nمما عزز مهارات التواصل والتشارك.",
"اختتم النشاط بتقويم سريع لتحديد مستوى الفهم.\nوضمان تحقق أهداف الدرس."
],
strategies:[
"تم استخدام التعلم التعاوني وتوظيف مهارات التفكير.\nإضافة إلى العصف الذهني وطرح الأسئلة المحفزة.",
"الدمج بين الاستقصاء والمناقشة الجماعية.\nلتشجيع الطلاب على التعبير عن أفكارهم.",
"اعتماد التعلم النشط والتوجيه الذاتي.\nمن خلال أنشطة تفاعلية متنوعة.",
"تفعيل méthode الحوار وتبادل الآراء.\nمع ربط المحتوى بخبرات الطلاب.",
"تنويع الاستراتيجيات بما يناسب الفروق الفردية.\nوتحقيق تعلم فعال للجميع."
],
strengths:[
"تفاعل ممتاز من الطلاب أثناء النشاط.\nوظهرت مهارات قيادية مميزة لدى بعضهم.",
"قدّم الطلاب حلولاً مبتكرة.\nوأظهروا استيعاباً جيداً لمحتوى الدرس.",
"روح التعاون كانت واضحة في أداء المهام.\nمما ساعد على رفع مستوى التحصيل.",
"استخدام وسائل تعليمية مشوقة.\nساهم في تعزيز الفهم والاندماج.",
"تحقق جزء كبير من الأهداف التعليمية.\nمع اهتمام ملحوظ بالضبط الصفي."
],
improve:[
"زيادة فرص المشاركة للطلاب المتعثرين.\nلتعزيز الثقة وتحسين مستوى الأداء.",
"تنويع أكبر في الأنشطة التفاعلية.\nلتحفيز الطلاب على الإنتاج والإبداع.",
"رفع مستوى التنظيم بين مجموعات العمل.\nلضمان مشاركة عادلة للجميع.",
"زيادة الوقت المخصص للتقويم المرحلي.\nلتعزيز تثبيت المفاهيم التعليمية.",
"تطوير مهارات الطلاب التقنية.\nوتوظيفها في تنفيذ الأنشطة الصفية."
],
recomm:[
"الاستمرار في تطبيق الأنشطة التفاعلية.\nلدعم مهارات التواصل والتفكير.",
"توظيف التقنية في جميع مراحل التعلم.\nلتنمية مهارات الطلاب الرقمية.",
"التنسيق مع الأسرة لتعزيز التعلم.\nومتابعة تقدم الطلاب خارج الصف.",
"تنظيم المزيد من المشاريع الجماعية.\nلتنمية روح الفريق وتحمل المسؤولية.",
"استمرار الدعم للطلاب المحتاجين.\nمع توفير أنشطة علاجية مناسبة."
]
};

let indexTracker={
goal:0,summary:0,steps:0,strategies:0,strengths:0,improve:0,recomm:0
};

function autoFill(id){
document.getElementById(id).value=texts[id][indexTracker[id]];
indexTracker[id]=(indexTracker[id]+1)%texts[id].length;
updateReport();
}

function updateReport(){
educationBox.innerText=education.value;
schoolBox.innerText=school.value;
termBox.innerText=term.value;
gradeBox.innerText=grade.value;
subjectBox.innerText=subject.value;
targetBox.innerText=target.value;
countBox.innerText=count.value;
placeBox.innerText=place.value;
teacherBox.innerText=teacher.value;
principalBox.innerText=principal.value;
teacherTypeBox.innerText=teacherType.value;
principalTypeBox.innerText=principalType.value;

goalBox.innerText=goal.value;
summaryBox.innerText=summary.value;
stepsBox.innerText=steps.value;
strategiesBox.innerText=strategies.value;
strengthsBox.innerText=strengths.value;
improveBox.innerText=improve.value;
recommBox.innerText=recomm.value;
}

function loadImage(input,target){
let reader=new FileReader();
reader.onload=()=>document.getElementById(target).innerHTML=`<img src="${reader.result}">`;
reader.readAsDataURL(input.files[0]);
}

function saveData(){
localStorage.setItem("data",JSON.stringify({
education:education.value,school:school.value,teacherType:teacherType.value,
teacher:teacher.value,principalType:principalType.value,principal:principal.value,
grade:grade.value,term:term.value,subject:subject.value,target:target.value,
count:count.value,place:place.value
}));
alert("تم حفظ البيانات بنجاح");
}

function loadSavedData(){
let d=localStorage.getItem("data");
if(!d)return;
d=JSON.parse(d);
education.value=d.education;
school.value=d.school;
teacherType.value=d.teacherType;
teacher.value=d.teacher;
principalType.value=d.principalType;
principal.value=d.principal;
grade.value=d.grade;
term.value=d.term;
subject.value=d.subject;
target.value=d.target;
count.value=d.count;
place.value=d.place;
updateReport();
}

function downloadPDF(){
document.querySelector('.btn-container').style.display='none';
html2pdf().from(document.getElementById("report-content")).save().then(()=>{
document.querySelector('.btn-container').style.display='flex';
});
}

async function makePDFBlob(){
return await html2pdf().from(document.getElementById("report-content")).outputPdf("blob");
}

async function sharePDFWhatsApp(){
let blob=await makePDFBlob();
let file=new File([blob],"report.pdf",{type:"application/pdf"});
if(navigator.canShare&&navigator.canShare({files:[file]})){
await navigator.share({files:[file],title:"تقرير",text:"جاهز"});
}else{
let url=URL.createObjectURL(blob);
window.open(`https://wa.me/?text=${encodeURIComponent(url)}`,"_blank");
}
}

async function loadDates(){
const g=new Date();
gDate.innerText=g.toLocaleDateString('ar-EG')+" م";
try{
let url=`https://api.aladhan.com/v1/gToH?date=${g.getDate()}-${g.getMonth()+1}-${g.getFullYear()}`;
let res=await fetch(url);
let j=await res.json();
let h=j.data.hijri;
hDate.innerText=`${h.weekday.ar} ${h.day} ${h.month.ar} ${h.year} هـ`;
}catch(e){hDate.innerText="تعذر";}
}

loadDates();
loadSavedData();
updateReport();
</script>

</body>
</html>