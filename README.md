
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

.signatures {
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 9pt;
}

.teacher-signature, .principal-signature {
  text-align: center;
  width: 45%;
}

.teacher-signature input, .principal-signature input {
  width: 80%;
  font-size: 9pt;
  padding: 4px;
  margin-top: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.signature-label {
  font-weight: bold;
  color: #0a3b40;
  margin-bottom: 5px;
}

.footer-note {
  font-size: 8pt;
  color: #666;
  text-align: center;
  margin-top: 5px;
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
  <select onchange="sync('reportTitle',this.value); autoFillReport(this.value);" id="reportSelect">
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
    <option value="تقرير التعلم التعاوني">تقرير التعلم التعاوني</option>
    <option value="تقرير التعلم القائم على المشروعات">تقرير التعلم القائم على المشروعات</option>
    <option value="تقرير التعلم القائم على حل المشكلات">تقرير التعلم القائم على حل المشكلات</option>
    <option value="تقرير التعلم بالاكتشاف">تقرير التعلم بالاكتشاف</option>
    <option value="تقرير العصف الذهني">تقرير العصف الذهني</option>
    <option value="تقرير التعلم باللعب">تقرير التعلم باللعب</option>
    <option value="تقرير التعلم الذاتي">تقرير التعلم الذاتي</option>
    <option value="تقرير التعلم القائم على الاستقصاء">تقرير التعلم القائم على الاستقصاء</option>
    <option value="تقرير التعلم المتمركز حول الطالب">تقرير التعلم المتمركز حول الطالب</option>
    <option value="تقرير التدريس المتمايز">تقرير التدريس المتمايز</option>
    <option value="تقرير التدريس المباشر">تقرير التدريس المباشر</option>
    <option value="تقرير التدريس العلاجي">تقرير التدريس العلاجي</option>
    <option value="تقرير التدريس الإثرائي">تقرير التدريس الإثرائي</option>
    <option value="تقرير التدريس القائم على الكفايات">تقرير التدريس القائم على الكفايات</option>
    <option value="تقرير التدريس باستخدام النمذجة">تقرير التدريس باستخدام النمذجة</option>
    <option value="تقرير التدريس باستخدام الأسئلة السابرة">تقرير التدريس باستخدام الأسئلة السابرة</option>
    <option value="تقرير التدريس بالحوار والمناقشة">تقرير التدريس بالحوار والمناقشة</option>
    <option value="تقرير التقويم التشخيصي">تقرير التقويم التشخيصي</option>
    <option value="تقرير التقويم البنائي">تقرير التقويم البنائي</option>
    <option value="تقرير التقويم الختامي">تقرير التقويم الختامي</option>
    <option value="تقرير التقويم بالأداء">تقرير التقويم بالأداء</option>
    <option value="تقرير التقويم الذاتي للطلاب">تقرير التقويم الذاتي للطلاب</option>
    <option value="تقرير التقويم بالأقران">تقرير التقويم بالأقران</option>
    <option value="تقرير التقويم الإلكتروني">تقرير التقويم الإلكتروني</option>
    <option value="تقرير تحليل أدوات التقويم">تقرير تحليل أدوات التقويم</option>
    <option value="تقرير استخدام المنصات التعليمية">تقرير استخدام المنصات التعليمية</option>
    <option value="تقرير توظيف التقنيات التعليمية">تقرير توظيف التقنيات التعليمية</option>
    <option value="تقرير استخدام التطبيقات التعليمية">تقرير استخدام التطبيقات التعليمية</option>
    <option value="تقرير توظيف السبورة التفاعلية">تقرير توظيف السبورة التفاعلية</option>
    <option value="تقرير إنتاج محتوى تعليمي رقمي">تقرير إنتاج محتوى تعليمي رقمي</option>
  </select>
  <input placeholder="المستهدفون" oninput="sync('target',this.value)">
  <input placeholder="العدد" oninput="sync('count',this.value)">
  <input placeholder="مكان التنفيذ" oninput="sync('location',this.value)">
  <select id="semesterSelect" onchange="sync('semester',this.value)">
    <option value="">اختر الفصل الدراسي</option>
    <option value="الفصل الدراسي الأول">الفصل الدراسي الأول</option>
    <option value="الفصل الدراسي الثاني">الفصل الدراسي الثاني</option>
  </select>
  <input placeholder="الصف" oninput="sync('grade',this.value)">
  <input placeholder="المادة" oninput="sync('subject',this.value)">
</div>

<div class="auto-row">
  <button class="auto-btn" onclick="autoFillReport(document.getElementById('reportSelect').value)">تعبئة تلقائية للتقرير</button>
  <button class="auto-btn clear-btn" onclick="clearAllFields()">مسح جميع الحقول</button>
</div>

<label>الهدف التربوي</label>
<textarea id="goalInput" oninput="sync('goal',this.value)"></textarea>

<label>وصف مختصر</label>
<textarea id="desc1Input" oninput="sync('desc1',this.value)"></textarea>

<label>إجراءات التنفيذ</label>
<textarea id="desc2Input" oninput="sync('desc2',this.value)"></textarea>

<label>النتائج</label>
<textarea id="desc3Input" oninput="sync('desc3',this.value)"></textarea>

<label>التوصيات</label>
<textarea id="desc4Input" oninput="sync('desc4',this.value)"></textarea>

<label>التحديات</label>
<textarea id="challengesInput" oninput="sync('challenges',this.value)"></textarea>

<label>نقاط القوة</label>
<textarea id="strengthsInput" oninput="sync('strengths',this.value)"></textarea>

<label>إرفاق الصور</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)">

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">اسم المعلم</div>
    <input type="text" id="teacherName" placeholder="أدخل اسم المعلم" oninput="sync('teacherName',this.value)">
  </div>
  <div class="principal-signature">
    <div class="signature-label">اسم مدير المدرسة</div>
    <input type="text" id="principalName" placeholder="أدخل اسم المدير" oninput="sync('principalName',this.value)">
  </div>
</div>

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

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">المعلم</div>
    <div id="teacherName"></div>
  </div>
  <div class="principal-signature">
    <div class="signature-label">مدير المدرسة</div>
    <div id="principalName"></div>
  </div>
</div>
<div class="footer-note">تم إعداد هذا التقرير بواسطة أداة إعداد التقارير التعليمية - وزارة التعليم</div>

</div>

<script>
// قاعدة بيانات النصوص التلقائية الدقيقة لكل تقرير
const reportTexts = {
  "تقرير نشاط إثرائي": {
    goal: "تنمية قدرات الطلاب المتميزين عبر أنشطة تعليمية متقدمة",
    desc1: "نشاط إثرائي لتعزيز مهارات التفكير العليا والبحث العلمي",
    desc2: "تحديد الطلاب المتميزين، تصميم أنشطة متخصصة، توفير موارد تعليمية، تنفيذ الأنشطة، تقييم الأداء",
    desc3: "تحسن ملحوظ في أداء الطلاب، زيادة الدافعية للتعلم، تنمية التفكير النقدي",
    desc4: "الاستمرار في الأنشطة الإثرائية، تدريبات متخصصة، مشاركة في مسابقات",
    challenges: "نقص الموارد المتخصصة، ضيق الوقت المخصص",
    strengths: "طلاب متميزون، حماس المشاركة، دعم إداري"
  },
  "تقرير خطة علاجية": {
    goal: "معالجة صعوبات التعلم وتحسين المستوى التحصيلي",
    desc1: "خطة شاملة لمعالجة الضعف الدراسي لدى الطلاب",
    desc2: "تشخيص الصعوبات، وضع خطط فردية، تدريس علاجي، متابعة أسبوعية، تقييم مستمر",
    desc3: "تحسن في مستوى 80% من الطلاب، زيادة الثقة بالنفس، تحسن المشاركة",
    desc4: "استمرار المتابعة، تطوير أدوات تقييم، شراكة مع الأهالي",
    challenges: "تفاوت مستويات الصعوبات، ضعف متابعة الأهالي، كثافة المنهج",
    strengths: "تعاون الطلاب، معلمون متخصصون، برامج تدخل مبكر"
  },
  "تقرير تعليم تعاوني بين الطلاب": {
    goal: "تنمية مهارات العمل الجماعي والتعلم النشط",
    desc1: "أنشطة تعليمية تعاونية لتعزيز التفاعل الإيجابي",
    desc2: "تقسيم المجموعات، تحديد المهام، أدوات عمل جماعي، تفاعل المجموعات، تقييم أداء",
    desc3: "تحسن مهارات التواصل، زيادة التفاعل، تنمية روح الفريق، تحسن التحصيل",
    desc4: "توسيع نطاق العمل، تدريب على القيادة، دمج التقنية",
    challenges: "تفاوت القدرات، صعوبة إدارة المجموعات، أساليب تعلم مختلفة",
    strengths: "حماس الطلاب، تنوع المهارات، بيئة محفزة"
  },
  "تقرير الفصول المقلوبة": {
    goal: "تحويل التعليم إلى تعلم تفاعلي خارج الصف",
    desc1: "تطبيق استراتيجية التعلم خارج الصف والداخله",
    desc2: "إعداد محتوى رقمي، تعلم ذاتي خارجي، أنشطة صفية تفاعلية، استخدام منصات، تقييم مستمر",
    desc3: "زيادة وقت التفاعل، تحسن الفهم، تنمية التعلم الذاتي، تفريد التعليم",
    desc4: "تطوير محتوى رقمي، تدريب على التعلم الذاتي، توسيع التطبيق",
    challenges: "صعوبة الإنترنت، مقاومة التغيير، عبء تحضيري",
    strengths: "توفر التقنية، استجابة الطلاب، دعم الأهالي"
  },
  "تقرير استخدام المنصات التعليمية": {
    goal: "توظيف المنصات الرقمية لتحسين جودة التعليم",
    desc1: "استخدام منصات تعليمية لدعم العملية التعليمية",
    desc2: "اختيار المنصات المناسبة، تدريب المستخدمين، تصميم أنشطة رقمية، تفعيل المنصات، متابعة التقدم",
    desc3: "تحسن التفاعل التعليمي، مصادر تعلم متنوعة، سهولة المتابعة، زيادة الدافعية",
    desc4: "التوسع في الاستخدام، تطوير محتوى رقمي، تدريب مستمر",
    challenges: "صعوبة الإنترنت، نقص المهارات التقنية، تكاليف اشتراكات",
    strengths: "بنية تحتية، دعم الوزارة، تقبل التكنولوجيا"
  },
  "تقرير التدريس المتمايز": {
    goal: "تلبية احتياجات الطلاب المتنوعة حسب قدراتهم",
    desc1: "تطبيق تدريس متمايز يراعي الفروق الفردية",
    desc2: "تشخيص المستويات، تخطيط أنشطة متنوعة، تجميع مرن، تقديم محتوى متمايز، تقييم متنوع",
    desc3: "تحسن جميع المستويات، رضا الطلاب، مشاركة فعالة، بيئة داعمة",
    desc4: "استمرار التمايز، تطوير أنشطة، تدريب معلمين",
    challenges: "وقت التخطيط، موارد متنوعة، صعوبة التقييم",
    strengths: "مرونة المنهج، معلمون مبدعون، طلاب متفاعلون"
  },
  "تقرير التقويم التشخيصي": {
    goal: "تشخيص نقاط القوة والضعف قبل بدء التعلم",
    desc1: "تقييم تشخيصي لتحديد المستوى الأولي للطلاب",
    desc2: "إعداد أدوات تشخيص، تطبيق الاختبارات، تحليل النتائج، تحديد الفجوات، وضع خطط",
    desc3: "تشخيص دقيق للمستويات، تحديد احتياجات، توجيه تعليمي مناسب",
    desc4: "تطوير أدوات تشخيص، تدريب معلمين، تكرار التشخيص",
    challenges: "وقت التطبيق، دقة الأدوات، تحليل البيانات",
    strengths: "معلومات دقيقة، توجيه تعليمي، تحسين مخرجات"
  },
  "تقرير توظيف الذكاء الاصطناعي": {
    goal: "استخدام الذكاء الاصطناعي في تحسين التعلم",
    desc1: "توظيف تقنيات الذكاء الاصطناعي في التعليم",
    desc2: "اختيار أدوات ذكية، تدريب المستخدمين، تطبيق تجريبي، تحليل نتائج، توسيع نطاق",
    desc3: "تخصيص التعلم، تحسين التفاعل، توفير وقت، نتائج أفضل",
    desc4: "تطوير استخدام الذكاء الاصطناعي، شراكات تقنية، تدريب متخصص",
    challenges: "تكاليف عالية، نقص الخبرات، مخاوف أمنية",
    strengths: "تطور تقني، دعم مؤسسي، طلاب تقنيون"
  },
  "تقرير الأنشطة الصفية": {
    goal: "تنفيذ أنشطة صفية تفاعلية محفزة للتعلم",
    desc1: "أنشطة صفية متنوعة لتعزيز التفاعل والتعلم",
    desc2: "تخطيط الأنشطة، تجهيز المواد، تنفيذ تفاعلي، مشاركة طلابية، تقييم فوري",
    desc3: "تفاعل إيجابي، فهم أعمق، دافعية عالية، بيئة تعلم نشطة",
    desc4: "تنويع الأنشطة، تدريب معلمين، توفير موارد",
    challenges: "وقت محدود، صعوبة الإدارة، تفاوت المشاركة",
    strengths: "طلاب متفاعلون، معلمون مبدعون، موارد متاحة"
  },
  "تقرير التواصل مع ولي الأمر": {
    goal: "تعزيز الشراكة مع الأهالي لتحسين التحصيل",
    desc1: "تواصل منتظم مع أولياء الأمور لمتابعة الطلاب",
    desc2: "تحديد قنوات اتصال، إعداد تقارير، اجتماعات دورية، متابعة مستمرة، تبادل معلومات",
    desc3: "تحسن في متابعة الطلاب، رضا الأهالي، شراكة فاعلة، تحسن التحصيل",
    desc4: "استمرار التواصل، تطوير قنوات، تفعيل شراكة",
    challenges: "انشغال الأهالي، صعوبة التواصل، نقص الوقت",
    strengths: "رغبة الأهالي، قنوات متنوعة، إدارة داعمة"
  },
  "تقرير الاحتفال باليوم الوطني": {
    goal: "تعزيز الانتماء الوطني والهوية السعودية",
    desc1: "فعاليات وأنشطة للاحتفال باليوم الوطني",
    desc2: "تخطيط الفعاليات، تشكيل فرق عمل، تنفيذ أنشطة، مشاركة مجتمعية، توثيق الفعاليات",
    desc3: "تعزيز الانتماء، مشاركة واسعة، بيئة احتفالية، تنمية قيم وطنية",
    desc4: "استمرار الفعاليات، توسيع المشاركة، توثيق الخبرات",
    challenges: "تنظيم الفعاليات، توفير الدعم، تنسيق الأنشطة",
    strengths: "حماس المشاركة، دعم مجتمعي، موارد متاحة"
  },
  "تقرير البحث الإجرائي": {
    goal: "دراسة مشكلات تربوية وإيجاد حلول عملية",
    desc1: "بحث إجرائي لحل مشكلة تعليمية محددة",
    desc2: "تحديد المشكلة، جمع بيانات، تحليل النتائج، وضع حلول، تطبيق وتقييم",
    desc3: "حلول عملية، تحسين ممارسات، تطوير مهني، نتائج قابلة للتطبيق",
    desc4: "نشر النتائج، تطبيق الحلول، تدريب زملاء",
    challenges: "وقت البحث، جمع البيانات، تحليل النتائج",
    strengths: "مشاكل واقعية، نتائج تطبيقية، تطوير مهني"
  },
  "تقرير إنتاج محتوى تعليمي رقمي": {
    goal: "إنشاء محتوى تعليمي رقمي جذاب وفعال",
    desc1: "إنتاج مواد تعليمية رقمية لدعم التعلم",
    desc2: "تحديد المحتوى، تصميم المواد، إنتاج رقمي، تجريب المحتوى، نشر واستخدام",
    desc3: "مواد تعليمية جذابة، دعم التعلم الذاتي، تفاعل طلابي، تحسين تعلم",
    desc4: "تطوير محتوى، تدريب منتجين، نشر تجارب",
    challenges: "تكاليف الإنتاج، وقت التصميم، مهارات تقنية",
    strengths: "تقنيات متاحة، معلمون مبدعون، طلاب تقنيون"
  }
};

// النصوص الافتراضية للتقارير الأخرى
const defaultTexts = {
  goal: "تحسين العملية التعليمية وتطوير الممارسات التدريسية",
  desc1: "تقرير يصف عملية تنفيذ نشاط تعليمي هادف",
  desc2: "تخطيط النشاط، تجهيز الموارد، التنفيذ الفعلي، المتابعة المستمرة، التقييم النهائي",
  desc3: "تحقيق الأهداف المخطط لها، تحسن في الأداء، رضا المشاركين",
  desc4: "الاستمرارية في التنفيذ، التوسع في النشاط، تطوير الآليات",
  challenges: "ضيق الوقت، نقص الموارد، صعوبة التنسيق",
  strengths: "التزام الفريق، دعم الإدارة، حماس المشاركين"
};

function sync(id,value){
  const el=document.getElementById(id);
  if(el){el.textContent=value;}
}

function autoFillReport(reportType) {
  if (!reportType) {
    alert("يرجى اختيار نوع التقرير أولاً");
    return;
  }
  
  const texts = reportTexts[reportType] || defaultTexts;
  
  // تعبئة الحقول
  document.getElementById('goalInput').value = texts.goal;
  document.getElementById('desc1Input').value = texts.desc1;
  document.getElementById('desc2Input').value = texts.desc2;
  document.getElementById('desc3Input').value = texts.desc3;
  document.getElementById('desc4Input').value = texts.desc4;
  document.getElementById('challengesInput').value = texts.challenges;
  document.getElementById('strengthsInput').value = texts.strengths;
  
  // مزامنة مع العرض
  sync('goal', texts.goal);
  sync('desc1', texts.desc1);
  sync('desc2', texts.desc2);
  sync('desc3', texts.desc3);
  sync('desc4', texts.desc4);
  sync('challenges', texts.challenges);
  sync('strengths', texts.strengths);
  
  // تعبئة تلقائية للحقول الأخرى بناءً على نوع التقرير
  const reportFields = {
    "تقرير نشاط إثرائي": { target: "الطلاب المتميزين", count: "15", location: "المختبر العلمي" },
    "تقرير خطة علاجية": { target: "الطلاب المتأخرين دراسياً", count: "10", location: "غرفة المصادر" },
    "تقرير تعليم تعاوني بين الطلاب": { target: "جميع طلاب الصف", count: "25", location: "الفصل الدراسي" },
    "تقرير الفصول المقلوبة": { target: "طلاب الصف السادس", count: "30", location: "الفصل الدراسي + المنصة" },
    "تقرير استخدام المنصات التعليمية": { target: "طلاب الصفوف العليا", count: "40", location: "معمل الحاسب + المنصات" },
    "تقرير التدريس المتمايز": { target: "طلاب الصف الرابع", count: "28", location: "الفصل الدراسي" },
    "تقرير التقويم التشخيصي": { target: "طلاب الصف الخامس", count: "32", location: "قاعة الاختبارات" },
    "تقرير توظيف الذكاء الاصطناعي": { target: "طلاب الصفوف المتوسطة", count: "45", location: "معمل الحاسب الآلي" },
    "تقرير الأنشطة الصفية": { target: "طلاب الصف الثالث", count: "22", location: "الفصل الدراسي" },
    "تقرير التواصل مع ولي الأمر": { target: "أولياء أمور الطلاب", count: "50", location: "قاعة الاجتماعات" },
    "تقرير الاحتفال باليوم الوطني": { target: "جميع طلاب المدرسة", count: "150", location: "ساحة المدرسة" },
    "تقرير البحث الإجرائي": { target: "معلمو المدرسة", count: "8", location: "قاعة التدريب" },
    "تقرير إنتاج محتوى تعليمي رقمي": { target: "معلمو المواد الدراسية", count: "12", location: "معمل الوسائط المتعددة" }
  };
  
  if (reportFields[reportType]) {
    const fields = reportFields[reportType];
    document.querySelector('input[placeholder="المستهدفون"]').value = fields.target;
    document.querySelector('input[placeholder="العدد"]').value = fields.count;
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = fields.location;
    
    sync('target', fields.target);
    sync('count', fields.count);
    sync('location', fields.location);
  }
}

function clearAllFields() {
  // مسح جميع حقول النصوص
  const textAreas = ['goalInput', 'desc1Input', 'desc2Input', 'desc3Input', 'desc4Input', 'challengesInput', 'strengthsInput'];
  textAreas.forEach(id => {
    document.getElementById(id).value = '';
    sync(id.replace('Input', ''), '');
  });
  
  // مسح حقول الإدخال الأخرى
  document.querySelector('input[placeholder="المستهدفون"]').value = '';
  document.querySelector('input[placeholder="العدد"]').value = '';
  document.querySelector('input[placeholder="مكان التنفيذ"]').value = '';
  document.querySelector('input[placeholder="الصف"]').value = '';
  document.querySelector('input[placeholder="المادة"]').value = '';
  document.getElementById('teacherName').value = '';
  document.getElementById('principalName').value = '';
  
  sync('target', '');
  sync('count', '');
  sync('location', '');
  sync('grade', '');
  sync('subject', '');
  sync('teacherName', '');
  sync('principalName', '');
  
  // إعادة تعيين القوائم المنسدلة
  document.getElementById('semesterSelect').selectedIndex = 0;
  document.getElementById('reportSelect').selectedIndex = 0;
  
  sync('semester', '');
  sync('reportTitle', '');
  
  // مسح الصور
  document.getElementById('imagesBox').innerHTML = '';
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