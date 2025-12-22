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
}

textarea {
  resize: vertical;
  min-height: 80px;
}

/* ================= التقرير ================= */

.report {
  display: none;
}

@media print {
  body { background: white; padding: 0; }
  .tool { display: none; }
  .report { display: block; }
}

/* ===== الهيدر ===== */
.header {
  background: #0a3b40;
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
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

/* ===== مربعات المعلومات (سطرين) ===== */

.top-info.two-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0;
}

.top-row {
  display: grid;
  gap: 4px;
}

/* السطر الأول: 3 مربعات */
.top-row.first {
  grid-template-columns: repeat(3, 1fr);
}

/* السطر الثاني: 4 مربعات */
.top-row.second {
  grid-template-columns: repeat(4, 1fr);
}

.box {
  border: 1px solid #0a3b40;
  background: #f8f9fa;
  border-radius: 3px;
  text-align: center;
  padding: 2px;
  font-size: 6.5pt;
  min-height: 26px;
  max-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.box strong {
  font-size: 6.5pt;
  color: #0a3b40;
}

.box div {
  font-size: 6pt;
  line-height: 1.1;
}

/* ===== الأقسام ===== */

.goal-section {
  background: #e8f5e9;
  border-right: 3px solid #2e7d32;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.section {
  border: 1px solid #0a3b40;
  border-radius: 6px;
  padding: 6px;
  font-size: 9pt;
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.images img {
  width: 100%;
  border-radius: 5px;
}
</style>
</head>

<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية</h2>

<label>إدارة التعليم</label>
<input value="الإدارة العامة للتعليم بمنطقة الرياض">

<label>اسم المدرسة</label>
<input value="مدرسة النموذجية الابتدائية">

<button onclick="window.print()">تصدير PDF</button>
</div>

<!-- ===== التقرير ===== -->
<div class="report">

<div class="header">
  <div class="ministry-title">وزارة التعليم</div>
  <div class="ministry-subtitle">Ministry of Education</div>
  <div class="school-info">
    <div>الإدارة العامة للتعليم بمنطقة الرياض</div>
    <div>مدرسة النموذجية الابتدائية</div>
  </div>
</div>

<!-- ===== مربعات المعلومات ===== -->
<div class="top-info two-lines">

  <!-- السطر الأول -->
  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong><div>الفصل الأول</div></div>
    <div class="box"><strong>الصف</strong><div>الصف الثالث</div></div>
    <div class="box"><strong>المادة</strong><div>التربية الفنية</div></div>
  </div>

  <!-- السطر الثاني -->
  <div class="top-row second">
    <div class="box"><strong>التقرير</strong><div>تقرير نشاط إثرائي</div></div>
    <div class="box"><strong>المستهدفون</strong><div>طلاب الصف الثالث</div></div>
    <div class="box"><strong>العدد</strong><div>25 طالب</div></div>
    <div class="box"><strong>مكان التنفيذ</strong><div>قاعة الأنشطة</div></div>
  </div>

</div>

<div class="goal-section">
<strong>الهدف التربوي</strong>
<div>تنمية المواهب والقدرات الإبداعية لدى الطلاب</div>
</div>

<div class="grid2">
  <div class="section"><strong>وصف مختصر</strong><div>تنمية مواهب طلابية</div></div>
  <div class="section"><strong>إجراءات التنفيذ</strong><div>تخطيط – تنفيذ – تقييم</div></div>
</div>

<div class="grid2">
  <div class="section"><strong>النتائج</strong><div>اكتشاف مواهب جديدة</div></div>
  <div class="section"><strong>التوصيات</strong><div>زيادة الأنشطة الإثرائية</div></div>
</div>

<div class="images">
  <img src="" alt="صورة">
  <img src="" alt="صورة">
</div>

</div>

</body>
</html>