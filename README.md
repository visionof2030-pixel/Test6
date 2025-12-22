<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تقرير نشاط</title>

<style>
body {
  font-family: Tahoma, Arial, sans-serif;
  background: white;
  margin: 0;
  padding: 0;
  font-size: 10pt;
}

/* ===== التقرير ===== */
.report {
  max-width: 210mm;
  margin: auto;
  padding: 10mm;
}

/* ===== الهيدر ===== */
.header {
  background: #0a3b40;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.ministry-title {
  font-size: 16pt;
  font-weight: bold;
}

.ministry-subtitle {
  font-size: 10pt;
}

.school-info {
  margin-top: 5px;
  font-weight: bold;
}

/* ===== المربعات الصغيرة ===== */
.top-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}

.top-row {
  display: grid;
  gap: 4px;
}

.top-row.first {
  grid-template-columns: repeat(3, 1fr);
}

.top-row.second {
  grid-template-columns: repeat(4, 1fr);
}

.box {
  border: 1px solid #0a3b40;
  border-radius: 4px;
  background: #f8f9fa;
  padding: 4px;
  text-align: center;
  font-size: 7pt;
  min-height: 30px;
}

.box strong {
  display: block;
  color: #0a3b40;
  font-size: 7pt;
}

/* ===== الأقسام ===== */
.section {
  border: 1px solid #0a3b40;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 8px;
}

.section strong {
  display: block;
  border-bottom: 1px solid #0a3b40;
  margin-bottom: 5px;
  padding-bottom: 3px;
  color: #0a3b40;
}

.section.optional {
  border: 1px dashed #e6b800;
  background: #fff8cc;
}

.goal-section {
  background: #e8f5e9;
  border-right: 4px solid #2e7d32;
}

/* ===== شبكات ===== */
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

/* ===== الصور ===== */
.images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.images img {
  width: 100%;
  max-height: 140px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* ===== منع تقطيع الصفحات ===== */
.section, .box, .images {
  page-break-inside: avoid;
}
</style>
</head>

<body>

<div class="report">

<!-- ===== الهيدر ===== -->
<div class="header">
  <div class="ministry-title">وزارة التعليم</div>
  <div class="ministry-subtitle">Ministry of Education</div>
  <div class="school-info">
    الإدارة العامة للتعليم – مدرسة النموذجية الابتدائية
  </div>
</div>

<!-- ===== المربعات الصغيرة ===== -->
<div class="top-info">

  <div class="top-row first">
    <div class="box"><strong>الفصل الدراسي</strong>الفصل الأول</div>
    <div class="box"><strong>الصف</strong>الصف الثالث</div>
    <div class="box"><strong>المادة</strong>التربية الفنية</div>
  </div>

  <div class="top-row second">
    <div class="box"><strong>التقرير</strong>تقرير نشاط إثرائي</div>
    <div class="box"><strong>المستهدفون</strong>طلاب الصف الثالث</div>
    <div class="box"><strong>العدد</strong>25 طالب</div>
    <div class="box"><strong>مكان التنفيذ</strong>قاعة الأنشطة</div>
  </div>

</div>

<!-- ===== الهدف ===== -->
<div class="section goal-section">
  <strong>الهدف التربوي</strong>
  تنمية المواهب والقدرات الإبداعية لدى الطلاب.
</div>

<!-- ===== وصف + إجراءات ===== -->
<div class="grid2">
  <div class="section">
    <strong>وصف مختصر</strong>
    نشاط إثرائي لتنمية مهارات الطلاب.
  </div>
  <div class="section">
    <strong>إجراءات التنفيذ</strong>
    التخطيط – التنفيذ – التقييم.
  </div>
</div>

<!-- ===== نتائج + توصيات ===== -->
<div class="grid2">
  <div class="section">
    <strong>النتائج</strong>
    اكتشاف مواهب طلابية جديدة.
  </div>
  <div class="section">
    <strong>التوصيات</strong>
    زيادة الأنشطة الإثرائية.
  </div>
</div>

<!-- ===== تحديات + نقاط قوة ===== -->
<div class="grid2">
  <div class="section optional">
    <strong>التحديات</strong>
    ضيق الوقت.
  </div>
  <div class="section optional">
    <strong>نقاط القوة</strong>
    تفاعل الطلاب.
  </div>
</div>

<!-- ===== الصور ===== -->
<div class="section">
  <strong>صور النشاط</strong>
  <div class="images">
    <img src="https://via.placeholder.com/300x200">
    <img src="https://via.placeholder.com/300x200">
  </div>
</div>

</div>

</body>
</html>