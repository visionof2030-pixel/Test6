<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>أداة إعداد التقارير التعليمية</title>

<style>
body {
  font-family: Tahoma, Arial, sans-serif;
  background: #eef7f5;
  margin: 0;
  padding: 20px;
  font-size: 14px;
}

.tool {
  max-width: 900px;
  margin: auto;
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,.1);
}

.tool h2 {
  text-align: center;
  color: #0a3b40;
  margin-bottom: 20px;
}

label {
  font-weight: 700;
  margin-top: 15px;
  display: block;
  color: #0a3b40;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.small-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin: 15px 0;
}

.small-grid input,
.small-grid select {
  font-size: 11px;
  padding: 5px 4px;
  height: 35px;
}

.auto-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.auto-btn {
  flex: 1;
  background: #e0f2f1;
  border: 1px solid #0a3b40;
  color: #0a3b40;
  font-size: 13px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

.clear-btn {
  background: #fdecea;
  border: 1px solid #c62828;
  color: #c62828;
}

button#printBtn {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  background: #0a3b40;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

.report {
  display: none;
}

@media print {
  body { background: white; padding: 0; }
  .tool { display: none; }
  .report { display: block; max-width: 210mm; margin: 0 auto; }
}

.header {
  background: #0a3b40;
  color: white;
  text-align: center;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 6px;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ministry-title {
  font-size: 16pt;
  font-weight: bold;
}

.ministry-subtitle {
  font-size: 10pt;
}

.school-info div {
  font-weight: bold;
}

.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}

.top-row {
  display: grid;
  gap: 3px;
}

.top-row.first {
  grid-template-columns: repeat(3, 1fr);
}

.top-row.second {
  grid-template-columns: repeat(4, 1fr);
}

.box {
  border: 1px solid #0a3b40;
  padding: 2px;
  text-align: center;
  font-size: 6.5pt;
  min-height: 26px;
  border-radius: 3px;
  background: #f8f9fa;
}

.box strong {
  display: block;
  font-size: 6.5pt;
  color: #0a3b40;
}

.goal-section {
  background: #e8f5e9;
  border-right: 3px solid #2e7d32;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
  text-align: center;
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.section {
  border: 1px solid #0a3b40;
  padding: 6px;
  border-radius: 6px;
}

.section.optional {
  border: 1px dashed #e6b800;
  background: #fff8cc;
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 0;
}

.images img {
  width: 100%;
  max-height: 144px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
</head>

<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية</h2>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="sync('edu',this.value)">
  <option value="">اختر إدارة التعليم</option>
  <option value="الإدارة العامة للتعليم بمنطقة الرياض">الإدارة العامة للتعليم بمنطقة الرياض</option>
  <option value="الإدارة العامة للتعليم بمنطقة مكة المكرمة">الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
  <option value="الإدارة العامة للتعليم بمنطقة المدينة المنورة">الإدارة العامة للتعليم بمنطقة المدينة المنورة</option>
  <option value="الإدارة العامة للتعليم بالمنطقة الشرقية">الإدارة العامة للتعليم بالمنطقة الشرقية</option>
  <option value="الإدارة العامة للتعليم بمنطقة القصيم">الإدارة العامة للتعليم بمنطقة القصيم</option>
  <option value="الإدارة العامة للتعليم بمنطقة عسير">الإدارة العامة للتعليم بمنطقة عسير</option>
  <option value="الإدارة العامة للتعليم بمنطقة تبوك">الإدارة العامة للتعليم بمنطقة تبوك</option>
  <option value="الإدارة العامة للتعليم بمنطقة حائل">الإدارة العامة للتعليم بمنطقة حائل</option>
  <option value="الإدارة العامة للتعليم بمنطقة الحدود الشمالية">الإدارة العامة للتعليم بمنطقة الحدود الشمالية</option>
  <option value="الإدارة العامة للتعليم بمنطقة جازان">الإدارة العامة للتعليم بمنطقة جازان</option>
  <option value="الإدارة العامة للتعليم بمنطقة نجران">الإدارة العامة للتعليم بمنطقة نجران</option>
  <option value="الإدارة العامة للتعليم بمنطقة الباحة">الإدارة العامة للتعليم بمنطقة الباحة</option>
  <option value="الإدارة العامة للتعليم بمنطقة الجوف">الإدارة العامة للتعليم بمنطقة الجوف</option>
  <option value="الإدارة العامة للتعليم بمحافظة الأحساء">الإدارة العامة للتعليم بمحافظة الأحساء</option>
  <option value="الإدارة العامة للتعليم بمحافظة الطائف">الإدارة العامة للتعليم بمحافظة الطائف</option>
  <option value="الإدارة العامة للتعليم بمحافظة جدة">الإدارة العامة للتعليم بمحافظة جدة</option>
</select>

<label>اسم المدرسة</label>
<input id="schoolInput" value="مدرسة النموذجية الابتدائية" oninput="sync('school',this.value)">

<div class="small-grid">
  <select onchange="sync('reportTitle',this.value)" id="reportSelect">
    <option value="">اختر نوع التقرير</option>
    <option value="تقرير نشاط إثرائي">تقرير نشاط إثرائي</option>
    <option value="تقرير خطة علاجية">تقرير خطة علاجية</option>
    <option value="تقرير تنفيذ اختبار تحسن">تقرير تنفيذ اختبار تحسن</option>
    <option value="تقرير تصنيف الطلاب">تقرير تصنيف الطلاب</option>
    <option value="تقرير تحليل النتائج">تقرير تحليل النتائج</option>
    <option value="تقرير سجل الخطط العلاجية">تقرير سجل الخطط العلاجية</option>
    <option value="تقرير رعاية الطلاب المتأخرين دراسيا">تقرير رعاية الطلاب المتأخرين دراسيا</option>
    <option value="تقرير دراسة حالة">تقرير دراسة حالة</option>
    <option value="تقرير التدريب على الاختبارات المعيارية">تقرير التدريب على الاختبارات المعيارية</option>
    <option value="تقرير توزيع المنهج">تقرير توزيع المنهج</option>
    <option value="تقرير توزيع وقت الحصة">تقرير توزيع وقت الحصة</option>
    <option value="تقرير درس تم تنفيذه">تقرير درس تم تنفيذه</option>
    <option value="تقرير تنفيذ درس تطبيقي">تقرير تنفيذ درس تطبيقي</option>
    <option value="تقرير أنشطة صفية">تقرير أنشطة صفية</option>
    <option value="تقرير تعليم تعاوني بين الطلاب">تقرير تعليم تعاوني بين الطلاب</option>
    <option value="تقرير الفصول المقلوبة">تقرير الفصول المقلوبة</option>
    <option value="تقرير توظيف الذكاء الاصطناعي">تقرير توظيف الذكاء الاصطناعي</option>
    <option value="تقرير الوسائل التعليمية المبتكرة">تقرير الوسائل التعليمية المبتكرة</option>
    <option value="تقرير تطوير البيئة الصفية">تقرير تطوير البيئة الصفية</option>
    <option value="تقرير تفعيل حصص النشاط">تقرير تفعيل حصص النشاط</option>
    <option value="تقرير حصة النشاط">تقرير حصة النشاط</option>
    <option value="تقرير المجتمعات المهنية">تقرير المجتمعات المهنية</option>
    <option value="تقرير مجتمعات التعلم">تقرير مجتمعات التعلم</option>
    <option value="تقرير كشف المتابعة">تقرير كشف المتابعة</option>
    <option value="تقرير سجل الدرجات الإلكتروني">تقرير سجل الدرجات الإلكتروني</option>
    <option value="تقرير سجل التغذية الراجعة من الطلاب">تقرير سجل التغذية الراجعة من الطلاب</option>
    <option value="تقرير مقارنة السلاسل الزمنية">تقرير مقارنة السلاسل الزمنية</option>
    <option value="تقرير الاختبارات الذكية">تقرير الاختبارات الذكية</option>
    <option value="تقرير تعزيز السلوك الإيجابي">تقرير تعزيز السلوك الإيجابي</option>
    <option value="تقرير تحفيز الطلاب">تقرير تحفيز الطلاب</option>
    <option value="تقرير معرفة الميول والاتجاهات">تقرير معرفة الميول والاتجاهات</option>
    <option value="تقرير حل مشكلة تربوية">تقرير حل مشكلة تربوية</option>
    <option value="تقرير تكريم المتميزين">تقرير تكريم المتميزين</option>
    <option value="تقرير الاحتفال باليوم الوطني">تقرير الاحتفال باليوم الوطني</option>
    <option value="تقرير المبادرات والابتكار">تقرير المبادرات والابتكار</option>
    <option value="تقرير مبادرة تطوعية">تقرير مبادرة تطوعية</option>
    <option value="تقرير المعلم الصغير">تقرير المعلم الصغير</option>
    <option value="تقرير تنفيذ إذاعة مدرسية">تقرير تنفيذ إذاعة مدرسية</option>
    <option value="تقرير المشاركات بين الطلاب">تقرير المشاركات بين الطلاب</option>
    <option value="تقرير التواصل مع ولي الأمر">تقرير التواصل مع ولي الأمر</option>
    <option value="تقرير إشعار ولي الأمر عن مستوى ابنه">تقرير إشعار ولي الأمر عن مستوى ابنه</option>
    <option value="تقرير حضور اجتماع أولياء الأمور">تقرير حضور اجتماع أولياء الأمور</option>
    <option value="تقرير سجل التواصل مع أولياء الأمور">تقرير سجل التواصل مع أولياء الأمور</option>
    <option value="تقرير تبادل الزيارات">تقرير تبادل الزيارات</option>
    <option value="تقرير حضور دورات وورش تدريبية">تقرير حضور دورات وورش تدريبية</option>
    <option value="تقرير نقل أثر التدريب">تقرير نقل أثر التدريب</option>
    <option value="تقرير الورش التدريبية التي قدمتها">تقرير الورش التدريبية التي قدمتها</option>
    <option value="تقرير البحث الإجرائي">تقرير البحث الإجرائي</option>
    <option value="تقرير خطة أسبوعية">تقرير خطة أسبوعية</option>
    <option value="تقرير تفعيل الخطة الأسبوعية">تقرير تفعيل الخطة الأسبوعية</option>
    <option value="تقرير الإشراف اليومي">تقرير الإشراف اليومي</option>
    <option value="تقرير إدارة الأزمات">تقرير إدارة الأزمات</option>
    <option value="تقرير إدارة الاجتماعات">تقرير إدارة الاجتماعات</option>
    <option value="تقرير المناوبة والفسحة">تقرير المناوبة والفسحة</option>
    <option value="تقارير الجرد (للمختبرات وغرف المصادر)">تقارير الجرد (للمختبرات وغرف المصادر)</option>
    <option value="تقرير تفعيل المنصات التعليمية">تقرير تفعيل المنصات التعليمية</option>
    <option value="تقرير المحتوى الرقمي المنتج">تقرير المحتوى الرقمي المنتج</option>
  </select>
  <input placeholder="المستهدفون" oninput="sync('target',this.value)">
  <input placeholder="العدد" oninput="sync('count',this.value)">
  <input placeholder="مكان التنفيذ" oninput="sync('location',this.value)">
  <input placeholder="الفصل الدراسي" oninput="sync('semester',this.value)">
  <input placeholder="الصف" oninput="sync('grade',this.value)">
  <input placeholder="المادة" oninput="sync('subject',this.value)">
</div>

<label>الهدف التربوي</label>
<textarea oninput="sync('goal',this.value)"></textarea>

<label>وصف مختصر</label>
<textarea oninput="sync('desc1',this.value)"></textarea>

<label>إجراءات التنفيذ</label>
<textarea oninput="sync('desc2',this.value)"></textarea>

<label>النتائج</label>
<textarea oninput="sync('desc3',this.value)"></textarea>

<label>التوصيات</label>
<textarea oninput="sync('desc4',this.value)"></textarea>

<label>التحديات</label>
<textarea oninput="sync('challenges',this.value)"></textarea>

<label>نقاط القوة</label>
<textarea oninput="sync('strengths',this.value)"></textarea>

<label>إرفاق الصور</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)">

<button id="printBtn" onclick="window.print()">تصدير PDF</button>
</div>

<div class="report">

<div class="header">
  <div class="header-content">
    <div class="ministry-title">وزارة التعليم</div>
    <div class="ministry-subtitle">Ministry of Education</div>
    <div class="school-info">
      <div id="edu"></div>
      <div id="school"></div>
    </div>
  </div>
</div>

<div class="top-info two-lines">
  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong><div id="semester"></div></div>
    <div class="box"><strong>الصف</strong><div id="grade"></div></div>
    <div class="box"><strong>المادة</strong><div id="subject"></div></div>
  </div>
  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div id="reportTitle"></div></div>
    <div class="box"><strong>المستهدفون</strong><div id="target"></div></div>
    <div class="box"><strong>العدد</strong><div id="count"></div></div>
    <div class="box"><strong>مكان التنفيذ</strong><div id="location"></div></div>
  </div>
</div>

<div class="goal-section">
<strong>الهدف التربوي</strong>
<div id="goal"></div>
</div>

<div class="grid2">
  <div class="section"><strong>وصف مختصر</strong><div id="desc1"></div></div>
  <div class="section"><strong>إجراءات التنفيذ</strong><div id="desc2"></div></div>
</div>

<div class="grid2">
  <div class="section"><strong>النتائج</strong><div id="desc3"></div></div>
  <div class="section"><strong>التوصيات</strong><div id="desc4"></div></div>
</div>

<div class="grid2">
  <div class="section optional"><strong>التحديات</strong><div id="challenges"></div></div>
  <div class="section optional"><strong>نقاط القوة</strong><div id="strengths"></div></div>
</div>

<div class="images" id="imagesBox"></div>

</div>

<script>
function sync(id,value){
  const el=document.getElementById(id);
  if(el){el.textContent=value;}
}

function loadImages(input){
  const box=document.getElementById("imagesBox");
  box.innerHTML="";
  Array.from(input.files).slice(0,2).forEach(file=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=document.createElement("img");
      img.src=e.target.result;
      box.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}
</script>

</body>
</html>