<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>أداة إعداد التقارير التعليمية (نموذج تجريبي)</title>
<style>
body {
  font-family: Tahoma, Arial, sans-serif;
  background: #eef7f5;
  margin: 0;
  padding: 20px;
  font-size: 12px;
}
.tool {
  max-width: 900px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
}
.tool h2 {
  text-align: center;
  color: #0a3b40;
  margin-bottom: 16px;
  font-size: 18px;
}
label {
  font-weight: 700;
  margin-top: 12px;
  display: block;
  color: #0a3b40;
  font-size: 11px;
}
input, textarea, select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 12px;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
  min-height: 70px;
  max-height: 120px;
  overflow-y: auto;
}
.small-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin: 12px 0;
}
.small-grid input,
.small-grid select {
  font-size: 10px;
  padding: 4px 3px;
  height: 32px;
}
.auto-row {
  display: flex;
  gap: 6px;
  margin-top: 6px;
}
.auto-btn {
  flex: 1;
  background: #e0f2f1;
  border: 1px solid #0a3b40;
  color: #0a3b40;
  font-size: 11px;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
}
.clear-btn {
  background: #fdecea;
  border: 1px solid #c62828;
  color: #c62828;
}
.buttons-container {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}
.buttons-container button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
#printBtn {
  background: #0a3b40;
  color: white;
}
#whatsappBtn {
  background: #25D366;
  color: white;
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
  background: linear-gradient(rgba(10, 59, 64, 0.85), rgba(10, 59, 64, 0.95)), 
              url('https://i.ibb.co/PsvxS5Q6/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 15px 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 2;
}
.ministry-title {
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 5px;
}
.ministry-subtitle {
  font-size: 9pt;
  margin-bottom: 10px;
}
.school-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}
.edu-info {
  font-weight: bold;
  font-size: 10pt;
}
.school-name {
  font-weight: bold;
  font-size: 10pt;
}
.hijri-date {
  font-size: 9pt;
  margin-top: 5px;
  color: #e0f7fa;
}
.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 8px;
}
.top-row {
  display: grid;
  gap: 2px;
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
  font-size: 5.5pt;
  min-height: 22px;
  max-height: 40px;
  border-radius: 2px;
  background: #f8f9fa;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box strong {
  display: block;
  font-size: 5.5pt;
  color: #0a3b40;
  margin-bottom: 1px;
}
.box div {
  font-size: 5.5pt;
  line-height: 1.2;
  max-height: 28px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goal-section {
  background: #e8f5e9;
  border-right: 2px solid #2e7d32;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 8px;
  text-align: center;
  min-height: auto;
  max-height: 80px;
  overflow: hidden;
}
.goal-section strong {
  font-size: 10px;
  margin-bottom: 2px;
}
.goal-section div {
  font-size: 10px;
  line-height: 1.3;
  max-height: 55px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}
.grid4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}
.section {
  border: 1px solid #0a3b40;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  max-height: 100px;
  overflow: hidden;
}
.section strong {
  font-size: 10px;
  margin-bottom: 2px;
  display: block;
}
.section div {
  font-size: 10px;
  line-height: 1.3;
  max-height: 75px;
  overflow-y: auto;
  padding-right: 3px;
}
.section.motivators {
  border: 1px solid #9ccc65;
  background: #f1f8e9;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.motivators strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #689f38;
}
.section.motivators div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.strengths {
  border: 1px solid #0d47a1;
  background: #e3f2fd;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.strengths strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #0d47a1;
}
.section.strengths div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.challenges {
  border: 1px solid #f57f17;
  background: #fffde7;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.challenges strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #f57f17;
}
.section.challenges div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.section.weaknesses {
  border: 1px solid #c62828;
  background: #ffebee;
  min-height: 50px;
  max-height: 80px;
  height: auto;
  padding: 3px;
  font-size: 9px;
}
.section.weaknesses strong {
  font-size: 9.5px;
  margin-bottom: 1px;
  color: #c62828;
}
.section.weaknesses div {
  font-size: 9px;
  line-height: 1.2;
  max-height: 55px;
}
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}
.images img {
  width: 100%;
  max-height: 185px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
.signatures {
  margin-top: 15px;
  padding-top: 8px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 8pt;
}
.teacher-signature, .principal-signature {
  text-align: center;
  width: 45%;
}
.teacher-signature input, .principal-signature input {
  width: 80%;
  font-size: 8pt;
  padding: 3px;
  margin-top: 3px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.signature-label {
  font-weight: bold;
  color: #0a3b40;
  margin-bottom: 3px;
  font-size: 9px;
}
.whatsapp-icon {
  font-size: 16px;
}
.loading {
  display: none;
  text-align: center;
  padding: 10px;
  color: #0a3b40;
  font-weight: bold;
}
</style>
</head>
<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية (نموذج تجريبي)</h2>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="updateEduInfo(this.value)">
  <option value="">اختر إدارة التعليم</option>
  <option value="الإدارة العامة للتعليم بمنطقة الرياض" selected>الإدارة العامة للتعليم بمنطقة الرياض</option>
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
<input id="schoolInput" placeholder="أدخل اسم المدرسة هنا" oninput="sync('school',this.value)">

<div class="small-grid">
  <select onchange="sync('reportTitle',this.value)" id="reportSelect">
    <option value="">اختر نوع التقرير</option>
    <option value="تقرير نشاط إثرائي" selected>تقرير نشاط إثرائي</option>
    <option value="تقرير خطة علاجية">تقرير خطة علاجية</option>
  </select>
  <input placeholder="المستهدفون" oninput="sync('target',this.value)" maxlength="30" title="الحد الأقصى 30 حرف">
  <input placeholder="العدد" oninput="sync('count',this.value)" maxlength="10" title="الحد الأقصى 10 أرقام">
  <input placeholder="مكان التنفيذ" oninput="sync('location',this.value)" maxlength="40" title="الحد الأقصى 40 حرف">
  <select id="semesterSelect" onchange="sync('semester',this.value)">
    <option value="">اختر الفصل الدراسي</option>
    <option value="الفصل الدراسي الأول">الفصل الدراسي الأول</option>
    <option value="الفصل الدراسي الثاني">الفصل الدراسي الثاني</option>
  </select>
  <input placeholder="الصف" oninput="sync('grade',this.value)" maxlength="20" title="الحد الأقصى 20 حرف">
  <input placeholder="المادة" oninput="sync('subject',this.value)" maxlength="25" title="الحد الأقصى 25 حرف">
</div>

<!-- اختيار النص التلقائي - تم إصلاح الأزرار -->
<div class="auto-row">
  <button class="auto-btn" onclick="loadSmartText(1)">النص الإثرائي 1</button>
  <button class="auto-btn" onclick="loadSmartText(2)">النص الإثرائي 2</button>
  <button class="auto-btn" onclick="loadSmartText(3)">النص الإثرائي 3</button>
  <button class="auto-btn clear-btn" onclick="clearAllFields()">مسح الحقول</button>
</div>
<div class="auto-row">
  <button class="auto-btn" onclick="loadSmartText(4)">النص العلاجي 1</button>
  <button class="auto-btn" onclick="loadSmartText(5)">النص العلاجي 2</button>
</div>

<label>الهدف التربوي (الحد الأقصى: 150 حرف)</label>
<textarea id="goalInput" oninput="sync('goal',this.value)" maxlength="150" title="الحد الأقصى 150 حرف"></textarea>

<label>وصف مختصر (الحد الأقصى: 200 حرف)</label>
<textarea id="desc1Input" oninput="sync('desc1',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>

<label>إجراءات التنفيذ (الحد الأقصى: 300 حرف)</label>
<textarea id="desc2Input" oninput="sync('desc2',this.value)" maxlength="300" title="الحد الأقصى 300 حرف"></textarea>

<label>النتائج (الحد الأقصى: 250 حرف)</label>
<textarea id="desc3Input" oninput="sync('desc3',this.value)" maxlength="250" title="الحد الأقصى 250 حرف"></textarea>

<label>التوصيات (الحد الأقصى: 250 حرف)</label>
<textarea id="desc4Input" oninput="sync('desc4',this.value)" maxlength="250" title="الحد الأقصى 250 حرف"></textarea>

<!-- الصف الأول: المحفزات ونقاط القوة -->
<div class="grid2">
  <div>
    <label>المحفزات (الحد الأقصى: 200 حرف)</label>
    <textarea id="motivatorsInput" oninput="sync('motivators',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
  <div>
    <label>نقاط القوة (الحد الأقصى: 200 حرف)</label>
    <textarea id="strengthsInput" oninput="sync('strengths',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
</div>

<!-- الصف الثاني: التحديات ومواطن القصور -->
<div class="grid2">
  <div>
    <label>التحديات (الحد الأقصى: 200 حرف)</label>
    <textarea id="challengesInput" oninput="sync('challenges',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
  <div>
    <label>مواطن القصور (الحد الأقصى: 200 حرف)</label>
    <textarea id="weaknessesInput" oninput="sync('weaknesses',this.value)" maxlength="200" title="الحد الأقصى 200 حرف"></textarea>
  </div>
</div>

<label>إرفاق الصور (اختياري - الحد الأقصى: صورتين)</label>
<input type="file" multiple accept="image/*" onchange="loadImages(this)" title="يمكن إرفاق صورتين كحد أقصى">

<div class="signatures">
  <div class="teacher-signature">
    <div class="signature-label">اسم المعلم</div>
    <input type="text" id="teacherInput" placeholder="أدخل اسم المعلم" oninput="sync('teacherName', this.value)" maxlength="50">
  </div>
  <div class="principal-signature">
    <div class="signature-label">اسم مدير المدرسة</div>
    <input type="text" id="principalInput" placeholder="أدخل اسم المدير" oninput="sync('principalName', this.value)" maxlength="50">
  </div>
</div>

<div class="loading" id="loadingMessage">جاري تحويل التقرير إلى PDF...</div>

<div class="buttons-container">
  <button id="printBtn" onclick="window.print()">
    <span>🖨️</span> معاينة وطباعة التقرير
  </button>
  <button id="whatsappBtn" onclick="sendToWhatsApp()">
    <span class="whatsapp-icon">📱</span> إرسال التقرير بالواتساب
  </button>
</div>
</div>

<!-- قسم التقرير للطباعة -->
<div class="report" id="reportContent">
<div class="header">
  <div class="header-content">
    <div class="ministry-title">وزارة التعليم</div>
    <div class="ministry-subtitle">Ministry of Education</div>
    <div class="school-info">
      <div class="edu-info" id="eduHeader">الإدارة العامة للتعليم بمنطقة الرياض</div>
      <div class="school-name" id="school"></div>
    </div>
    <div class="hijri-date" id="hijriDate">جاري تحميل التاريخ الهجري...</div>
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

<!-- الصف الأول في التقرير: المحفزات ونقاط القوة -->
<div class="grid4">
  <div class="section motivators"><strong>المحفزات</strong><div id="motivators"></div></div>
  <div class="section strengths"><strong>نقاط القوة</strong><div id="strengths"></div></div>
</div>

<!-- الصف الثاني في التقرير: التحديات ومواطن القصور -->
<div class="grid4">
  <div class="section challenges"><strong>التحديات</strong><div id="challenges"></div></div>
  <div class="section weaknesses"><strong>مواطن القصور</strong><div id="weaknesses"></div></div>
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
</div>

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
// قاعدة البيانات للنصوص الذكية والمتنوعة (5 نصوص مختلفة)
const smartTextsDatabase = {
  // النصوص الإثرائية (1-3)
  1: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تنمية التفكير النقدي والإبداعي لدى الطلاب المتميزين عبر أنشطة متقدمة",
    desc1: "برنامج إثرائي متخصص لصقل مهارات التفكير العليا والبحث العلمي",
    desc2: "اختيار الطلاب الموهوبين، ورش عمل متخصصة، مشاريع بحثية، منافسات علمية، متابعة فردية",
    desc3: "تطوير 12 مشروعاً بحثياً مبتكراً، تحسن مهارات التحليل بنسبة 45%، فوز في مسابقات محلية",
    desc4: "توسيع نطاق البرنامج، تدريب معلمين متخصصين، إنشاء مكتبة مصادر، توثيق التجارب الناجحة",
    motivators: "جوائز مالية رمزية، رحلات تعليمية، نشر الأبحاث، شهادات تميز معتمدة",
    strengths: "كوادر تدريسية متميزة، مختبرات مجهزة، منهجية علمية دقيقة، دعم إداري مستمر",
    challenges: "تحديد الموهوبين بدقة، تكاليف البرامج المتخصصة، ضيق الوقت الدراسي",
    weaknesses: "نقص الخبرات المتقدمة، محدودية التمويل، صعوبة القياس الكمي"
  },
  2: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تعزيز المهارات البحثية والعلمية لدى النخبة الطلابية الواعدة",
    desc1: "مشروع علمي متكامل لتنمية القدرات البحثية والابتكارية",
    desc2: "تقييم القدرات البحثية، تدريب على المنهج العلمي، إشراف أكاديمي، تقديم المشاريع، تقييم النتائج",
    desc3: "إنتاج 8 أبحاث علمية قابلة للنشر، تنمية مهارات العرض بنسبة 60%، اكتشاف مواهب بحثية",
    desc4: "إنشاء نادي البحث العلمي، تدريب المدربين، توفير منح دراسية، إقامة مؤتمر طلابي",
    motivators: "منح بحثية صغيرة، مشاركة في مؤتمرات، نشر في مجلات طلابية، زيارات لمؤسسات بحثية",
    strengths: "شراكات مع جامعات، مراكز بحثية داعمة، مكتبة رقمية شاملة، خبراء استشاريون",
    challenges: "صعوبة النشر العلمي، محدودية الإشراف المتخصص، تكاليف المعدات البحثية",
    weaknesses: "ضعف الخلفية البحثية، قلة الوقت للبحث، محدودية المراجع المتخصصة"
  },
  3: {
    reportType: "تقرير نشاط إثرائي",
    goal: "تطوير القدرات الابتكارية والتكنولوجية للطلاب الموهوبين",
    desc1: "برنامج تقني متقدم لتعزيز الابتكار والتفكير الحاسوبي",
    desc2: "تدريب على البرمجة، ورش الابتكار التقني، مشاريع تكنولوجية، مسابقات برمجية، معارض ابتكار",
    desc3: "تصميم 15 تطبيقاً تعليمياً، فوز في 3 مسابقات برمجية، إنشاء نادٍ تقني، اكتشاف مواهب تقنية",
    desc4: "تطوير منهج تقني متخصص، تأهيل مدربين تقنيين، توفير أجهزة متطورة، إنشاء حاضنة تقنية",
    motivators: "جوائز لأفضل التطبيقات، تدريبات في شركات تقنية، شهادات احترافية، رحلات تقنية",
    strengths: "معامل حاسب متطورة، مدربون متخصصون، شراكات مع شركات تقنية، بيئة محفزة للإبداع",
    challenges: "تحديث الأجهزة باستمرار، سرعة التطور التقني، نقص الكوادر المتخصصة",
    weaknesses: "فجوة المهارات التقنية، تكاليف الصيانة العالية، محدودية البرامج المتخصصة"
  },
  // النصوص العلاجية (4-5)
  4: {
    reportType: "تقرير خطة علاجية",
    goal: "معالجة الصعوبات القرائية والكتابية لدى الطلاب المتأخرين دراسياً",
    desc1: "برنامج تدخلي مكثف لتحسين المهارات الأساسية في القراءة والكتابة",
    desc2: "تشخيص فردي للصعوبات، جلسات علاجية مكثفة، استخدام وسائل مساعدة، متابعة أسرية، تقييم دوري",
    desc3: "تحسن مهارات القراءة بنسبة 70%، تحسن الكتابة بنسبة 65%، زيادة الثقة اللغوية، تفاعل إيجابي",
    desc4: "تطوير أدوات التشخيص، تدريب فرق علاجية، إنشاء بنك أنشطة، تعزيز الشراكة الأسرية",
    motivators: "برامج تحفيزية أسبوعية، شهادات تحسن، نشر قصص نجاح، جوائز للتقدم الملحوظ",
    strengths: "معلمون متخصصون في الصعوبات، وسائل تعليمية مساندة، دعم إداري كامل، منهجية علاجية مثبتة",
    challenges: "تفاوت مستويات الصعوبات، مقاومة بعض الطلاب، ضعف المتابعة الأسرية",
    weaknesses: "نقص الكوادر المتخصصة، محدودية الوقت العلاجي، صعوبة التشخيص الدقيق"
  },
  5: {
    reportType: "تقرير خطة علاجية",
    goal: "تحسين المهارات الحسابية والرياضية للطلاب الضعفاء دراسياً",
    desc1: "برنامج علاجي منهجي لمعالجة ضعف المهارات الرياضية الأساسية",
    desc2: "تقييم المهارات الحسابية، تدريبات علاجية مكثفة، استخدام وسائل بصرية، أنشطة تطبيقية، تقييم تقدم",
    desc3: "تحسن العمليات الحسابية بنسبة 75%، فهم المفاهيم الرياضية، زيادة الثقة بالنفس، تحسن المشاركة",
    desc4: "تطوير مواد علاجية، تدريب معلمي رياضيات، إنشاء مختبر رياضي، تعزيز التعلم التطبيقي",
    motivators: "مسابقات حسابية، شهادات تقدم، نشر الإنجازات، رحلات تعليمية",
    strengths: "وسائل تعليمية مبتكرة، معلمون متمرسون، بيئة تعلم محفزة، دعم نفسي مستمر",
    challenges: "صعوبة بعض المفاهيم، تفاوت القدرات الاستيعابية، محدودية الوقت",
    weaknesses: "نقص الوسائل التعليمية، ضعف الخلفية الرياضية، صعوبة الربط بالتطبيق"
  }
};

// تقصير النصوص الطويلة لعرضها في المربعات
function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

// دالة للحصول على التاريخ الهجري من API خارجي
async function getHijriDate() {
  try {
    const response = await fetch('https://api.aladhan.com/v1/gToH');
    
    if (!response.ok) {
      throw new Error('فشل في الحصول على التاريخ الهجري');
    }
    
    const data = await response.json();
    
    if (data.code === 200 && data.data) {
      const hijri = data.data.hijri;
      const dateString = `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`;
      document.getElementById('hijriDate').textContent = `التاريخ الهجري: ${dateString}`;
    } else {
      document.getElementById('hijriDate').textContent = "التاريخ الهجري: غير متاح";
    }
  } catch (error) {
    console.error('خطأ في الحصول على التاريخ الهجري:', error);
    document.getElementById('hijriDate').textContent = "التاريخ الهجري: ١ رمضان ١٤٤٥ هـ";
  }
}

// دالة لتحديث معلومات إدارة التعليم في الهيدر
function updateEduInfo(value) {
  if (!value) return;
  const eduHeader = document.getElementById('eduHeader');
  if (eduHeader) {
    eduHeader.textContent = truncateText(value, 50);
  }
}

function sync(id, value) {
  const el = document.getElementById(id);
  if (el) {
    let maxLength;
    switch(id) {
      case 'goal': maxLength = 150; break;
      case 'desc1': maxLength = 200; break;
      case 'desc2': maxLength = 300; break;
      case 'desc3': maxLength = 250; break;
      case 'desc4': maxLength = 250; break;
      case 'motivators': maxLength = 200; break;
      case 'strengths': maxLength = 200; break;
      case 'challenges': maxLength = 200; break;
      case 'weaknesses': maxLength = 200; break;
      case 'target': maxLength = 30; break;
      case 'count': maxLength = 10; break;
      case 'location': maxLength = 40; break;
      case 'grade': maxLength = 20; break;
      case 'subject': maxLength = 25; break;
      default: maxLength = 100;
    }
    
    el.textContent = truncateText(value, maxLength);
  }
}

// دالة رئيسية لتحميل النص الذكي - تم إصلاحها
function loadSmartText(textNumber) {
  // الحصول على النص من قاعدة البيانات
  const textData = smartTextsDatabase[textNumber];
  if (!textData) {
    alert("النص غير متوفر، الرجاء المحاولة مرة أخرى");
    return;
  }
  
  // تحديث نوع التقرير في القائمة المنسدلة
  const reportSelect = document.getElementById('reportSelect');
  reportSelect.value = textData.reportType;
  sync('reportTitle', textData.reportType);
  
  // تعبئة الحقول مع النصوص
  document.getElementById('goalInput').value = textData.goal;
  document.getElementById('desc1Input').value = textData.desc1;
  document.getElementById('desc2Input').value = textData.desc2;
  document.getElementById('desc3Input').value = textData.desc3;
  document.getElementById('desc4Input').value = textData.desc4;
  document.getElementById('motivatorsInput').value = textData.motivators;
  document.getElementById('strengthsInput').value = textData.strengths;
  document.getElementById('challengesInput').value = textData.challenges;
  document.getElementById('weaknessesInput').value = textData.weaknesses;
  
  // مزامنة مع العرض
  sync('goal', textData.goal);
  sync('desc1', textData.desc1);
  sync('desc2', textData.desc2);
  sync('desc3', textData.desc3);
  sync('desc4', textData.desc4);
  sync('motivators', textData.motivators);
  sync('strengths', textData.strengths);
  sync('challenges', textData.challenges);
  sync('weaknesses', textData.weaknesses);
  
  // تعبئة تلقائية للحقول الأخرى بناءً على نوع التقرير
  if (textData.reportType === "تقرير نشاط إثرائي") {
    document.querySelector('input[placeholder="المستهدفون"]').value = "الطلاب المتميزين أكاديمياً";
    document.querySelector('input[placeholder="العدد"]').value = "18";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "المختبر العلمي المتقدم";
    
    sync('target', "الطلاب المتميزين أكاديمياً");
    sync('count', "18");
    sync('location', "المختبر العلمي المتقدم");
  } else if (textData.reportType === "تقرير خطة علاجية") {
    document.querySelector('input[placeholder="المستهدفون"]').value = "الطلاب المتأخرين دراسياً";
    document.querySelector('input[placeholder="العدد"]').value = "12";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "غرفة المصادر التعليمية";
    
    sync('target', "الطلاب المتأخرين دراسياً");
    sync('count', "12");
    sync('location', "غرفة المصادر التعليمية");
  }
  
  // إشعار للمستخدم
  alert(`تم تحميل ${textData.reportType} - النص ${textNumber} بنجاح!`);
}

function clearAllFields() {
  const fieldsToClear = [
    'goalInput', 'desc1Input', 'desc2Input', 'desc3Input', 'desc4Input',
    'motivatorsInput', 'strengthsInput', 'challengesInput', 'weaknessesInput',
    'teacherInput', 'principalInput', 'schoolInput'
  ];
  
  const placeholders = [
    'المستهدفون',
    'العدد',
    'مكان التنفيذ',
    'الصف',
    'المادة'
  ];
  
  fieldsToClear.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = '';
      const syncId = id.replace('Input', '');
      if (!['teacher', 'principal', 'school'].includes(syncId)) {
        sync(syncId, '');
      }
    }
  });
  
  placeholders.forEach(placeholder => {
    const input = document.querySelector(`input[placeholder="${placeholder}"]`);
    if (input) input.value = '';
  });
  
  sync('target', '');
  sync('count', '');
  sync('location', '');
  sync('grade', '');
  sync('subject', '');
  sync('teacherName', '');
  sync('principalName', '');
  
  document.getElementById('semesterSelect').selectedIndex = 0;
  sync('semester', '');
  
  document.getElementById('imagesBox').innerHTML = '';
  
  // إعادة تعيين نوع التقرير
  document.getElementById('reportSelect').selectedIndex = 0;
  sync('reportTitle', '');
}

function loadImages(input) {
  const box = document.getElementById("imagesBox");
  box.innerHTML = "";
  const files = Array.from(input.files).slice(0, 2);
  if (files.length > 2) {
    alert("يمكنك إرفاق صورتين كحد أقصى");
  }
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      box.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// دالة لتحويل التقرير إلى PDF وإرساله عبر الواتساب
async function sendToWhatsApp() {
  const loading = document.getElementById('loadingMessage');
  loading.style.display = 'block';
  
  try {
    // التحقق من أن التقرير يحتوي على بيانات أساسية
    const schoolName = document.getElementById('school').textContent;
    const reportTitle = document.getElementById('reportTitle').textContent;
    
    if (!schoolName || !reportTitle) {
      alert("الرجاء تعبئة البيانات الأساسية للمدرسة ونوع التقرير قبل الإرسال");
      loading.style.display = 'none';
      return;
    }
    
    // استخدام html2canvas لالتقاط صورة للتقرير
    const reportElement = document.getElementById('reportContent');
    
    // عرض التقرير قبل التقاط الصورة
    reportElement.style.display = 'block';
    
    const canvas = await html2canvas(reportElement, {
      scale: 2, // لتحسين جودة الصورة
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    // إخفاء التقرير مرة أخرى
    reportElement.style.display = 'none';
    
    // تحويل Canvas إلى صورة
    const imgData = canvas.toDataURL('image/jpeg', 0.9);
    
    // تحميل مكتبة jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // إضافة صورة التقرير إلى PDF
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = pdfWidth - 20; // هوامش
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let position = 10;
    
    // إضافة الصفحة الأولى
    pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
    
    // حفظ PDF كبيانات Base64
    const pdfOutput = pdf.output('datauristring');
    
    // إنشاء نص للرسالة
    const messageText = `تقرير تعليمي - ${reportTitle}
المدرسة: ${schoolName}
التاريخ: ${document.getElementById('hijriDate').textContent}
    
تم إنشاء التقرير باستخدام أداة إعداد التقارير التعليمية.
    
مع تحيات وزارة التعليم`;
    
    // تشفير النص للواتساب
    const encodedMessage = encodeURIComponent(messageText);
    
    // إخفاء رسالة التحميل
    loading.style.display = 'none';
    
    // عرض خيارات للمستخدم
    const userChoice = confirm("سيتم فتح تطبيق الواتساب لإرسال التقرير. تأكد من حفظ التقرير كملف PDF على جهازك أولاً.\n\nهل تريد المتابعة؟");
    
    if (userChoice) {
      // تنزيل الملف PDF أولاً
      pdf.save(`تقرير_تعليمي_${Date.now()}.pdf`);
      
      // بعد تحميل الملف، فتح رابط الواتساب مع نص الرسالة
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        alert("تم حفظ التقرير كملف PDF على جهازك.\n\nالرجاء الآن:\n1. افتح تطبيق الواتساب\n2. اختر الشخص أو المجموعة المراد الإرسال لها\n3. أرفق ملف PDF الذي تم تحميله");
      }, 1000);
    } else {
      loading.style.display = 'none';
    }
    
  } catch (error) {
    console.error('خطأ في إنشاء PDF:', error);
    loading.style.display = 'none';
    alert("حدث خطأ أثناء إنشاء التقرير. الرجاء المحاولة مرة أخرى.");
  }
}

// تعبئة أولية للمساعدة في التجربة
window.onload = async function() {
  document.getElementById('schoolInput').value = "مدرسة التجربة النموذجية";
  sync('school', "مدرسة التجربة النموذجية");
  updateEduInfo("الإدارة العامة للتعليم بمنطقة الرياض");
  
  // جلب التاريخ الهجري عند تحميل الصفحة
  await getHijriDate();
  
  // تحميل نص تجريبي عند بدء التشغيل
  setTimeout(() => {
    loadSmartText(1);
  }, 500);
};
</script>
</body>
</html>