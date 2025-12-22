
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  transition: all 0.3s ease;
}
.auto-btn:hover {
  background: #0a3b40;
  color: white;
  transform: translateY(-2px);
}
.auto-btn.enrichment {
  background: #e8f5e9;
  border-color: #2e7d32;
  color: #2e7d32;
}
.auto-btn.enrichment:hover {
  background: #2e7d32;
  color: white;
}
.auto-btn.remedial {
  background: #fff3e0;
  border-color: #f57c00;
  color: #f57c00;
}
.auto-btn.remedial:hover {
  background: #f57c00;
  color: white;
}
.auto-btn.strategy {
  background: #e3f2fd;
  border-color: #1565c0;
  color: #1565c0;
}
.auto-btn.strategy:hover {
  background: #1565c0;
  color: white;
}
.auto-btn.lesson {
  background: #f3e5f5;
  border-color: #7b1fa2;
  color: #7b1fa2;
}
.auto-btn.lesson:hover {
  background: #7b1fa2;
  color: white;
}
.auto-btn.technology {
  background: #e8eaf6;
  border-color: #3949ab;
  color: #3949ab;
}
.auto-btn.technology:hover {
  background: #3949ab;
  color: white;
}
.clear-btn {
  background: #fdecea;
  border: 1px solid #c62828;
  color: #c62828;
}
.clear-btn:hover {
  background: #c62828;
  color: white;
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
  transition: all 0.3s ease;
}
#printBtn {
  background: #0a3b40;
  color: white;
}
.buttons-container button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
  background: linear-gradient(rgba(10, 59, 64, 0.9), rgba(10, 59, 64, 0.95)), 
              url('https://i.ibb.co/PsvxS5Q6/9-C92-E57-B-23-FA-479-D-A024-1-D5-F871-B4-F8-D.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  padding: 8px 6px;
  margin-bottom: 8px;
  border-radius: 4px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 2;
  width: 100%;
}
.ministry-title {
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 2px;
}
.ministry-subtitle {
  font-size: 8pt;
  margin-bottom: 4px;
}
.school-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.edu-info {
  font-weight: bold;
  font-size: 9pt;
  line-height: 1.2;
}
.school-name {
  font-weight: bold;
  font-size: 9pt;
  line-height: 1.2;
}
.hijri-date {
  font-size: 7.5pt;
  margin-top: 2px;
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
.category-selector {
  margin: 12px 0;
}
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
}
.category-tab {
  padding: 6px 12px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.3s ease;
}
.category-tab:hover {
  background: #e0e0e0;
}
.category-tab.active {
  background: #0a3b40;
  color: white;
  border-color: #0a3b40;
}
.report-category {
  display: none;
}
.report-category.active {
  display: block;
}
.category-title {
  font-size: 12px;
  color: #0a3b40;
  margin-bottom: 8px;
  padding-bottom: 4px;
  border-bottom: 2px solid #0a3b40;
}
.report-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  margin-bottom: 12px;
}
.report-option {
  padding: 8px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.3s ease;
  text-align: center;
}
.report-option:hover {
  background: #e3f2fd;
  border-color: #0d47a1;
  transform: translateY(-2px);
}
.report-option.selected {
  background: #0a3b40;
  color: white;
  border-color: #0a3b40;
}
@media (max-width: 768px) {
  .small-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .auto-row {
    flex-wrap: wrap;
  }
  .auto-btn {
    min-width: 120px;
  }
  .buttons-container {
    flex-direction: column;
  }
  .report-options {
    grid-template-columns: 1fr;
  }
  .category-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
  .category-tab {
    white-space: nowrap;
  }
}
</style>
</head>
<body>

<div class="tool">
<h2>أداة إعداد التقارير التعليمية (نموذج تجريبي)</h2>

<label>تصنيف التقرير</label>
<div class="category-selector">
  <div class="category-tabs">
    <div class="category-tab active" onclick="showCategory('strategies')">استراتيجيات التدريس</div>
    <div class="category-tab" onclick="showCategory('lessons')">تنفيذ الدروس</div>
    <div class="category-tab" onclick="showCategory('technology')">التقنيات التعليمية</div>
    <div class="category-tab" onclick="showCategory('activities')">الأنشطة التعليمية</div>
    <div class="category-tab" onclick="showCategory('remedial')">الخطط العلاجية</div>
    <div class="category-tab" onclick="showCategory('evaluation')">التقويم والرصد</div>
    <div class="category-tab" onclick="showCategory('tests')">الاختبارات والأسئلة</div>
    <div class="category-tab" onclick="showCategory('supervision')">المتابعة والإشراف</div>
    <div class="category-tab" onclick="showCategory('duty')">المناوبة والانتظار</div>
    <div class="category-tab" onclick="showCategory('professional')">التقارير المهنية</div>
  </div>
  
  <!-- تصنيف استراتيجيات التدريس والتعلم -->
  <div class="report-category active" id="strategies">
    <div class="category-title">استراتيجيات التدريس والتعلم</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('التعلم النشط')">التعلم النشط</div>
      <div class="report-option" onclick="selectReport('التعلم التعاوني')">التعلم التعاوني</div>
      <div class="report-option" onclick="selectReport('حل المشكلات')">حل المشكلات</div>
      <div class="report-option" onclick="selectReport('العصف الذهني')">العصف الذهني</div>
      <div class="report-option" onclick="selectReport('التفكير الناقد')">التفكير الناقد</div>
      <div class="report-option" onclick="selectReport('التفكير الإبداعي')">التفكير الإبداعي</div>
      <div class="report-option" onclick="selectReport('التعلم بالمشروع')">التعلم بالمشروع</div>
      <div class="report-option" onclick="selectReport('التعلم بالاستقصاء')">التعلم بالاستقصاء</div>
      <div class="report-option" onclick="selectReport('الفصول المقلوبة')">الفصول المقلوبة</div>
      <div class="report-option" onclick="selectReport('التعلم باللعب')">التعلم باللعب</div>
      <div class="report-option" onclick="selectReport('التعلم الذاتي')">التعلم الذاتي</div>
      <div class="report-option" onclick="selectReport('القبعات الست')">القبعات الست</div>
      <div class="report-option" onclick="selectReport('الخرائط الذهنية')">الخرائط الذهنية</div>
      <div class="report-option" onclick="selectReport('التعليم المتمايز')">التعليم المتمايز</div>
    </div>
  </div>
  
  <!-- تصنيف تنفيذ الدروس والشرح -->
  <div class="report-category" id="lessons">
    <div class="category-title">تنفيذ الدروس والشرح</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('درس تم تنفيذه')">درس تم تنفيذه</div>
      <div class="report-option" onclick="selectReport('درس تطبيقي')">درس تطبيقي</div>
      <div class="report-option" onclick="selectReport('توزيع وقت الحصة')">توزيع وقت الحصة</div>
      <div class="report-option" onclick="selectReport('تطوير البيئة الصفية')">تطوير البيئة الصفية</div>
    </div>
  </div>
  
  <!-- تصنيف الوسائل والتقنيات التعليمية -->
  <div class="report-category" id="technology">
    <div class="category-title">الوسائل والتقنيات التعليمية</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('الوسائل التعليمية')">الوسائل التعليمية</div>
      <div class="report-option" onclick="selectReport('وسائل تعليمية مبتكرة')">وسائل تعليمية مبتكرة</div>
      <div class="report-option" onclick="selectReport('الوسائل الرقمية')">الوسائل الرقمية</div>
      <div class="report-option" onclick="selectReport('العروض التقديمية')">العروض التقديمية</div>
      <div class="report-option" onclick="selectReport('السبورة التفاعلية')">السبورة التفاعلية</div>
      <div class="report-option" onclick="selectReport('الفيديو التعليمي')">الفيديو التعليمي</div>
      <div class="report-option" onclick="selectReport('التطبيقات التعليمية')">التطبيقات التعليمية</div>
      <div class="report-option" onclick="selectReport('المنصات التعليمية')">المنصات التعليمية</div>
      <div class="report-option" onclick="selectReport('أوراق عمل تفاعلية')">أوراق عمل تفاعلية</div>
      <div class="report-option" onclick="selectReport('الذكاء الاصطناعي')">الذكاء الاصطناعي</div>
    </div>
  </div>
  
  <!-- تصنيف الأنشطة الصفية واللاصفية -->
  <div class="report-category" id="activities">
    <div class="category-title">الأنشطة الصفية واللاصفية</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('أنشطة صفية')">أنشطة صفية</div>
      <div class="report-option" onclick="selectReport('أنشطة إثرائية')">أنشطة إثرائية</div>
      <div class="report-option" onclick="selectReport('أنشطة علاجية')">أنشطة علاجية</div>
      <div class="report-option" onclick="selectReport('أنشطة لاصفية')">أنشطة لاصفية</div>
      <div class="report-option" onclick="selectReport('حصص النشاط')">حصص النشاط</div>
      <div class="report-option" onclick="selectReport('المبادرات الطلابية')">المبادرات الطلابية</div>
      <div class="report-option" onclick="selectReport('المسابقات الطلابية')">المسابقات الطلابية</div>
      <div class="report-option" onclick="selectReport('المشاركات الطلابية')">المشاركات الطلابية</div>
      <div class="report-option" onclick="selectReport('الإذاعة المدرسية')">الإذاعة المدرسية</div>
      <div class="report-option" onclick="selectReport('المعلم الصغير')">المعلم الصغير</div>
    </div>
  </div>
  
  <!-- تصنيف الخطط العلاجية والدعم التعليمي -->
  <div class="report-category" id="remedial">
    <div class="category-title">الخطط العلاجية والدعم التعليمي</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('خطة علاجية')">خطة علاجية</div>
      <div class="report-option" onclick="selectReport('نتائج الخطة العلاجية')">نتائج الخطة العلاجية</div>
      <div class="report-option" onclick="selectReport('علاج ضعف القراءة')">علاج ضعف القراءة</div>
      <div class="report-option" onclick="selectReport('علاج ضعف الكتابة')">علاج ضعف الكتابة</div>
      <div class="report-option" onclick="selectReport('علاج ضعف الحساب')">علاج ضعف الحساب</div>
      <div class="report-option" onclick="selectReport('دعم المتأخرين دراسياً')">دعم المتأخرين دراسياً</div>
      <div class="report-option" onclick="selectReport('التدخل العلاجي المبكر')">التدخل العلاجي المبكر</div>
      <div class="report-option" onclick="selectReport('الإثراء للمتفوقين')">الإثراء للمتفوقين</div>
      <div class="report-option" onclick="selectReport('دراسة حالة طالب')">دراسة حالة طالب</div>
      <div class="report-option" onclick="selectReport('حل مشكلة تربوية')">حل مشكلة تربوية</div>
    </div>
  </div>
  
  <!-- تصنيف التقويم والرصد والتحليل -->
  <div class="report-category" id="evaluation">
    <div class="category-title">التقويم والرصد والتحليل</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('أدوات التقويم')">أدوات التقويم</div>
      <div class="report-option" onclick="selectReport('التقويم التشخيصي')">التقويم التشخيصي</div>
      <div class="report-option" onclick="selectReport('التقويم البنائي')">التقويم البنائي</div>
      <div class="report-option" onclick="selectReport('التقويم الختامي')">التقويم الختامي</div>
      <div class="report-option" onclick="selectReport('تحليل نتائج الاختبارات')">تحليل نتائج الاختبارات</div>
      <div class="report-option" onclick="selectReport('متابعة مستوى التحصيل')">متابعة مستوى التحصيل</div>
      <div class="report-option" onclick="selectReport('مقارنة نتائج الفترات')">مقارنة نتائج الفترات</div>
      <div class="report-option" onclick="selectReport('قياس نواتج التعلم')">قياس نواتج التعلم</div>
      <div class="report-option" onclick="selectReport('رصد وتصحيح الدرجات')">رصد وتصحيح الدرجات</div>
      <div class="report-option" onclick="selectReport('التغذية الراجعة')">التغذية الراجعة</div>
    </div>
  </div>
  
  <!-- تصنيف إعداد الأسئلة والاختبارات -->
  <div class="report-category" id="tests">
    <div class="category-title">إعداد الأسئلة والاختبارات</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('بنك أسئلة')">بنك أسئلة</div>
      <div class="report-option" onclick="selectReport('تنويع مستويات الأسئلة')">تنويع مستويات الأسئلة</div>
      <div class="report-option" onclick="selectReport('مواءمة الأسئلة مع الأهداف')">مواءمة الأسئلة مع الأهداف</div>
      <div class="report-option" onclick="selectReport('تحليل الأسئلة')">تحليل الأسئلة</div>
      <div class="report-option" onclick="selectReport('الاختبارات الإلكترونية')">الاختبارات الإلكترونية</div>
      <div class="report-option" onclick="selectReport('الاختبارات الذكية')">الاختبارات الذكية</div>
      <div class="report-option" onclick="selectReport('اختبار تحسن')">اختبار تحسن</div>
    </div>
  </div>
  
  <!-- تصنيف المتابعة والإشراف والسلوك -->
  <div class="report-category" id="supervision">
    <div class="category-title">المتابعة والإشراف والسلوك</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('كشف المتابعة')">كشف المتابعة</div>
      <div class="report-option" onclick="selectReport('سجل الدرجات الإلكتروني')">سجل الدرجات الإلكتروني</div>
      <div class="report-option" onclick="selectReport('التغذية الراجعة من الطلاب')">التغذية الراجعة من الطلاب</div>
      <div class="report-option" onclick="selectReport('متابعة الانضباط والسلوك')">متابعة الانضباط والسلوك</div>
      <div class="report-option" onclick="selectReport('متابعة الغياب والتأخر')">متابعة الغياب والتأخر</div>
      <div class="report-option" onclick="selectReport('ضبط الصف')">ضبط الصف</div>
      <div class="report-option" onclick="selectReport('تعزيز السلوك الإيجابي')">تعزيز السلوك الإيجابي</div>
      <div class="report-option" onclick="selectReport('تحفيز الطلاب')">تحفيز الطلاب</div>
      <div class="report-option" onclick="selectReport('معرفة الميول والاتجاهات')">معرفة الميول والاتجاهات</div>
    </div>
  </div>
  
  <!-- تصنيف المناوبة وحصص الانتظار -->
  <div class="report-category" id="duty">
    <div class="category-title">المناوبة وحصص الانتظار</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('المناوبة المدرسية')">المناوبة المدرسية</div>
      <div class="report-option" onclick="selectReport('الإشراف اليومي')">الإشراف اليومي</div>
      <div class="report-option" onclick="selectReport('الإشراف على الفسحة')">الإشراف على الفسحة</div>
      <div class="report-option" onclick="selectReport('حصص الانتظار')">حصص الانتظار</div>
    </div>
  </div>
  
  <!-- تصنيف التقارير المهنية للمعلم -->
  <div class="report-category" id="professional">
    <div class="category-title">التقارير المهنية للمعلم</div>
    <div class="report-options">
      <div class="report-option" onclick="selectReport('التدريب على الاختبارات المعيارية')">التدريب على الاختبارات المعيارية</div>
      <div class="report-option" onclick="selectReport('حضور دورات وورش تدريبية')">حضور دورات وورش تدريبية</div>
      <div class="report-option" onclick="selectReport('نقل أثر التدريب')">نقل أثر التدريب</div>
      <div class="report-option" onclick="selectReport('الورش التدريبية المقدمة')">الورش التدريبية المقدمة</div>
      <div class="report-option" onclick="selectReport('البحث الإجرائي')">البحث الإجرائي</div>
    </div>
  </div>
</div>

<label>إدارة التعليم</label>
<select id="eduSelect" onchange="updateEduInfo(this.value)">
  <option value="">اختر إدارة التعليم</option>
  <option value="الإدارة العامة للتعليم بمنطقة الرياض" selected>الإدارة العامة للتعليم بمنطقة الرياض</option>
  <option value="الإدارة العامة للتعليم بمنطقة مكة المكرمة">الإدارة العامة للتعليم بمنطقة مكة المكرمة</option>
  <option value="الإدارة العامة للتعليم بمنطقة المدينة المنورة">الإدارة العامة للتعليم بمنطقة المدينة المنورة</option>
  <option value="الإدارة العامة للتعليم بالمنطقة الشرقية">الإدارة العامة للتعليم بالمنطقة الشرقية</option>
</select>

<label>اسم المدرسة</label>
<input id="schoolInput" placeholder="أدخل اسم المدرسة هنا" oninput="sync('school',this.value)">

<div class="small-grid">
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
  <select id="reportTypeSelect" oninput="sync('reportTitle',this.value)">
    <option value="">اختر نوع التقرير</option>
  </select>
</div>

<!-- اختيار النص التلقائي - 5 نصوص لكل فئة -->
<div class="auto-row">
  <button class="auto-btn strategy" onclick="loadSmartText('strategy', 1)">استراتيجية 1<br><small>التعلم النشط</small></button>
  <button class="auto-btn strategy" onclick="loadSmartText('strategy', 2)">استراتيجية 2<br><small>التعلم التعاوني</small></button>
  <button class="auto-btn strategy" onclick="loadSmartText('strategy', 3)">استراتيجية 3<br><small>حل المشكلات</small></button>
  <button class="auto-btn strategy" onclick="loadSmartText('strategy', 4)">استراتيجية 4<br><small>العصف الذهني</small></button>
  <button class="auto-btn strategy" onclick="loadSmartText('strategy', 5)">استراتيجية 5<br><small>التفكير الناقد</small></button>
</div>

<div class="auto-row">
  <button class="auto-btn lesson" onclick="loadSmartText('lesson', 1)">درس 1<br><small>تنفيذ درس</small></button>
  <button class="auto-btn technology" onclick="loadSmartText('technology', 1)">تقنية 1<br><small>وسائل تعليمية</small></button>
  <button class="auto-btn enrichment" onclick="loadSmartText('activity', 1)">نشاط 1<br><small>أنشطة صفية</small></button>
  <button class="auto-btn remedial" onclick="loadSmartText('remedial', 1)">علاجي 1<br><small>خطة علاجية</small></button>
  <button class="auto-btn clear-btn" onclick="clearAllFields()">مسح الحقول</button>
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

<div class="buttons-container">
  <button id="printBtn" onclick="window.print()">
    <span>🖨️</span> معاينة وطباعة التقرير
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

<script>
// قاعدة البيانات للنصوص الذكية - 5 نصوص لكل تصنيف
const smartTextsDatabase = {
  // استراتيجيات التدريس (5 نصوص)
  strategy: {
    1: {
      reportType: "تقرير تطبيق استراتيجية التعلم النشط",
      goal: "تنمية التفاعل الإيجابي والمشاركة الفعالة لدى الطلاب في العملية التعليمية من خلال تفعيل استراتيجية التعلم النشط",
      desc1: "تطبيق استراتيجية التعلم النشط التي تعتمد على إشراك الطلاب بشكل فعّال في بناء المعرفة وتطوير المهارات من خلال أنشطة تفاعلية وممارسات عملية",
      desc2: "تقسيم الطلاب إلى مجموعات عمل، استخدام الوسائل التعليمية التفاعلية، تنظيم مناقشات جماعية، تطبيق تمارين عملية، ربط المحتوى بالحياة اليومية، تقديم تغذية راجعة فورية",
      desc3: "زيادة مشاركة الطلاب بنسبة 75%، تحسن مستوى الفهم والاستيعاب، تنمية مهارات العمل الجماعي، رفع مستوى التفاعل الصفي، تحسن الأداء في التقييمات التكوينية",
      desc4: "الاستمرار في تطبيق استراتيجية التعلم النشط في جميع الدروس، تدريب المعلمين على أساليب التعلم النشط، تطوير مواد تعليمية تفاعلية، تعميم التجربة على جميع الصفوف",
      motivators: "أنشطة تعليمية ممتعة، جوائز للمشاركة الفعالة، نشر إنجازات الطلاب، تفعيل التقنية في التعليم، رحلات تعليمية مرتبطة بالمنهج",
      strengths: "تفاعل إيجابي من الطلاب، بيئة صفية محفزة، تنوع الأنشطة التعليمية، استخدام التقنية بشكل فاعل، دعم إداري مستمر",
      challenges: "ضيق وقت الحصة، اختلاف مستويات الطلاب، الحاجة إلى تحضير مسبق مكثف، صعوبة تقييم بعض الأنشطة التفاعلية",
      weaknesses: "نقص بعض الوسائل التعليمية التفاعلية، حاجة بعض الطلاب للتكيف مع النظام الجديد، محدودية المساحة الصفية لبعض الأنشطة"
    },
    2: {
      reportType: "تقرير تطبيق استراتيجية التعلم التعاوني",
      goal: "تنمية مهارات العمل الجماعي والتعاون بين الطلاب وتعزيز القيم الاجتماعية من خلال تطبيق استراتيجية التعلم التعاوني",
      desc1: "تفعيل استراتيجية التعلم التعاوني التي تركز على بناء فرق عمل تعليمية لتحقيق أهداف مشتركة وتنمية المسؤولية الفردية والجماعية",
      desc2: "تشكيل فرق تعاونية متجانسة، تحديد الأدوار والمهام، تصميم أنشطة جماعية، توفير مصادر تعلم مشتركة، متابعة أداء الفرق، تقييم التعاون والمشاركة",
      desc3: "تطوير 8 مشاريع جماعية ناجحة، تحسن مهارات التواصل بنسبة 68%، تعزيز روح الفريق، تنمية المسؤولية الذاتية، نجاح في حل المشكلات بشكل جماعي",
      desc4: "توسيع نطاق التعلم التعاوني ليشمل جميع المواد، تدريب الطلاب على مهارات العمل الجماعي، إنشاء نادي للتعلم التعاوني، توثيق التجارب الناجحة",
      motivators: "جوائز لأفضل الفرق، نشر إنجازات المجموعات، فرص لقيادة الفرق، شهادات تقدير جماعية، أنشطة تنافسية بين الفرق",
      strengths: "تنوع المهارات في الفرق، دعم وتعاون بين الطلاب، بيئة تعليمية إيجابية، تنمية القيادة الطلابية، مشاركة فاعلة",
      challenges: "اختلاف شخصيات الطلاب، صعوبة تقييم المساهمة الفردية، الحاجة إلى توجيه مستمر، اختلاف وتيرة العمل بين الفرق",
      weaknesses: "تفاوت مستوى الالتزام بين أعضاء الفريق، محدودية الوقت للعمل الجماعي، صعوبة تكوين فرق متجانسة"
    },
    3: {
      reportType: "تقرير تطبيق استراتيجية حل المشكلات",
      goal: "تنمية مهارات التفكير التحليلي وحل المشكلات لدى الطلاب من خلال تطبيق استراتيجية حل المشكلات في المواقف التعليمية",
      desc1: "تفعيل استراتيجية حل المشكلات التي تعزز التفكير النقدي والإبداعي من خلال مواجهة الطلاب لتحديات واقعية والعمل على إيجاد حلول عملية لها",
      desc2: "عرض مشكلات تعليمية واقعية، تحليل المشكلات وتحديد جوانبها، جمع المعلومات والبيانات، اقتراح حلول بديلة، تقييم الحلول، اختيار الحل الأمثل، تطبيق ومتابعة",
      desc3: "حل 12 مشكلة تعليمية متنوعة، تحسن مهارات التحليل بنسبة 72%، تنمية التفكير الإبداعي، تطبيق المعرفة في مواقف حياتية، زيادة الثقة في اتخاذ القرارات",
      desc4: "دمج استراتيجية حل المشكلات في المنهج الدراسي، إنشاء بنك للمشكلات التعليمية، تدريب المعلمين على تصميم المشكلات، تنظيم مسابقات لحل المشكلات",
      motivators: "تحديات تعليمية شيقة، جوائز لأفضل الحلول، نشر الحلول المبتكرة، فرص لتطبيق الحلول عملياً، اعتراف بالإنجازات",
      strengths: "مواقف تعليمية واقعية، تنمية التفكير العالي، ارتباط التعلم بالحياة، مشاركة فاعلة، نتائج قابلة للقياس",
      challenges: "صعوبة بعض المشكلات، اختلاف القدرات على التحليل، الحاجة إلى وقت كافٍ، صعوبة تقييم الحلول الإبداعية",
      weaknesses: "نقص الخبرة في التعامل مع المشكلات المعقدة، محدودية الموارد لحل بعض المشكلات، تفاوت مهارات التفكير التحليلي"
    },
    4: {
      reportType: "تقرير تطبيق استراتيجية العصف الذهني",
      goal: "تنمية التفكير الإبداعي وتوليد الأفكار المبتكرة لدى الطلاب من خلال تطبيق استراتيجية العصف الذهني في العملية التعليمية",
      desc1: "تفعيل استراتيجية العصف الذهني التي تشجع على توليد أكبر عدد ممكن من الأفكار بحرية ودون نقد لتحفيز التفكير الإبداعي والابتكار",
      desc2: "تحديد موضوع العصف الذهني، شرح القواعد والأسس، توليد الأفكار بحرية، تسجيل جميع الأفكار، تصنيف وتنظيم الأفكار، تقييم واختيار الأفكار المناسبة",
      desc3: "توليد أكثر من 100 فكرة إبداعية في 5 جلسات، تنمية التفكير الإبداعي بنسبة 65%، اكتشاف مواهب إبداعية، تطوير 8 مشاريع من الأفكار المولدة، زيادة الثقة في التعبير عن الأفكار",
      desc4: "عقد جلسات عصف ذهني دورية، تدريب الطلاب على تقنيات التفكير الإبداعي، إنشاء سجل للأفكار المبتكرة، تنفيذ أفضل الأفكار عملياً",
      motivators: "جوائز لأكثر الأفكار إبداعية، نشر الأفكار المبتكرة، فرص لتطبيق الأفكار، شهادات إبداعية، مسابقات للأفكار الجديدة",
      strengths: "بيئة حرة للإبداع، مشاركة جميع الطلاب، توليد أفكار متنوعة، تنمية الثقة بالنفس، جو تعاوني إيجابي",
      challenges: "صعوبة ضبط الوقت، اختلاف القدرات الإبداعية، الحاجة إلى توجيه لطيف، صعوبة تقييم الأفكار الإبداعية",
      weaknesses: "بعض الأفكار غير قابلة للتطبيق، تفاوت مشاركة الطلاب، حاجة لمزيد من التدريب على التقنيات الإبداعية"
    },
    5: {
      reportType: "تقرير تطبيق استراتيجية التفكير الناقد",
      goal: "تنمية مهارات التفكير الناقد والتحليل المنطقي لدى الطلاب من خلال تطبيق استراتيجية التفكير الناقد في التحليل والتقييم",
      desc1: "تفعيل استراتيجية التفكير الناقد التي تركز على تطوير قدرة الطلاب على التحليل والتقييم واتخاذ القرارات بناءً على الأدلة والمنطق",
      desc2: "عرض قضايا ومناقشات، تدريب على طرح الأسئلة الناقدة، تحليل الأدلة والمعلومات، تقييم الحجج والبراهين، اتخاذ قرارات مستنيرة، تقديم مبررات منطقية",
      desc3: "تحسن مهارات التحليل النقدي بنسبة 70%، تنمية القدرة على تقييم المعلومات، تحسن مهارات اتخاذ القرار، زيادة الوعي بالتحيزات الفكرية، نجاح في حل المشكلات المعقدة",
      desc4: "دمج التفكير الناقد في جميع المواد، تدريب المعلمين على استراتيجيات التفكير الناقد، إنشاء نادي للتفكير الناقد، تنظيم مناظرات طلابية",
      motivators: "مناقشات شيقة، جوائز لأفضل التحليلات، نشر الأبحاث النقدية، فرص للمناظرات، اعتراف بالتفكير المنطقي",
      strengths: "تنمية التفكير العالي، تعزيز التحليل المنطقي، بيئة محفزة للتفكير، مشاركة فاعلة، نتائج إيجابية قابلة للقياس",
      challenges: "صعوبة بعض القضايا النقدية، اختلاف القدرات التحليلية، الحاجة إلى معلومات دقيقة، صعوبة تقييم التفكير الناقد",
      weaknesses: "نقص الخبرة في التحليل النقدي، محدودية المصادر للمناقشات، تفاوت مهارات التفكير المنطقي"
    }
  },
  
  // تنفيذ الدروس (5 نصوص)
  lesson: {
    1: {
      reportType: "تقرير درس تم تنفيذه",
      goal: "تحقيق الأهداف التعليمية المحددة للدرس وتنمية المهارات المعرفية والمهنية لدى الطلاب من خلال تنفيذ فعال وممنهج",
      desc1: "تنفيذ درس تعليمي متكامل يركز على تحقيق الأهداف السلوكية والمعرفية والمهارية من خلال أنشطة متنوعة وتفاعلية",
      desc2: "التخطيط المسبق للدرس، تحديد الأهداف التعليمية، إعداد الوسائل التعليمية، تنفيذ الأنشطة التعليمية، التقويم التكويني، تقديم التغذية الراجعة، متابعة التقدم",
      desc3: "تحقيق 85% من الأهداف التعليمية، تفاعل إيجابي من 90% من الطلاب، تحسن في مستوى الفهم، تنفيذ جميع الأنشطة المخطط لها، تقديم تغذية راجعة فورية",
      desc4: "تطوير خطط الدروس المستقبلية، تحسين الوسائل التعليمية، تدريب على استراتيجيات التدريس الفعال، توثيق الدروس الناجحة، تبادل الخبرات مع الزملاء",
      motivators: "تحديات تعليمية شيقة، جوائز للمشاركة الفعالة، نشر الإنجازات، اعتراف بالأداء المتميز، أنشطة تنافسية تعليمية",
      strengths: "تحضير مسبق ممتاز، وسائل تعليمية مناسبة، تفاعل إيجابي، بيئة صفية محفزة، تحقيق الأهداف التعليمية",
      challenges: "ضيق وقت الحصة، اختلاف مستويات الطلاب، الحاجة إلى تعديل الخطط، صعوبة بعض المفاهيم التعليمية",
      weaknesses: "نقص بعض الوسائل التعليمية، حاجة لمزيد من الوقت للأنشطة، تفاوت سرعة التعلم بين الطلاب"
    },
    2: {
      reportType: "تقرير درس تطبيقي",
      goal: "تطبيق المعارف والمهارات النظرية في مواقف عملية وحياتية لتعزيز الفهم والاستيعاب لدى الطلاب",
      desc1: "تنفيذ درس تطبيقي يركز على ربط المحتوى النظري بالتطبيق العملي من خلال أنشطة وتجارب عملية واقعية",
      desc2: "ربط المحتوى النظري بالتطبيق، تصميم أنشطة عملية، تنفيذ التجارب والتطبيقات، مناقشة النتائج، تحليل التطبيقات، تقييم المهارات التطبيقية",
      desc3: "نجاح في تطبيق 8 مفاهيم نظرية عملياً، تحسن مهارات التطبيق بنسبة 75%، زيادة الفهم العميق للمفاهيم، ربط التعلم بالحياة الواقعية، تنمية المهارات العملية",
      desc4: "زيادة الدروس التطبيقية، تطوير المختبرات والتجهيزات، تدريب على المهارات العملية، إنشاء مشاريع تطبيقية، ربط المنهج بسوق العمل",
      motivators: "أنشطة عملية ممتعة، تطبيقات واقعية، جوائز للإبداع التطبيقي، نشر المشاريع الناجحة، رحلات ميدانية تطبيقية",
      strengths: "ربط النظرية بالتطبيق، أنشطة عملية محفزة، بيئة تعلم تفاعلية، نتائج ملموسة، تنمية المهارات الحياتية",
      challenges: "نقص التجهيزات العملية، صعوبة بعض التطبيقات، الحاجة إلى وقت إضافي، صعوبة تقييم المهارات العملية",
      weaknesses: "محدودية الموارد للتطبيقات، تفاوت المهارات العملية، حاجة لمزيد من الإشراف"
    },
    3: {
      reportType: "تقرير توزيع وقت الحصة",
      goal: "تحسين استغلال وقت الحصة التعليمية وتوزيعه بشكل فعال لتحقيق أقصى استفادة تعليمية للطلاب",
      desc1: "تحليل وتخطيط توزيع وقت الحصة التعليمية لتحقيق التوازن بين المكونات التعليمية المختلفة وضمان الاستفادة القصوى من الوقت المتاح",
      desc2: "تقسيم الحصة إلى فترات زمنية محددة، تخصيص وقت لكل نشاط، مراقبة استخدام الوقت، تقييم فعالية التوزيع، تعديل التخطيط حسب النتائج، تدريب الطلاب على إدارة الوقت",
      desc3: "تحسن في استغلال وقت الحصة بنسبة 80%، زيادة الوقت الفعلي للتعلم، تقليل الوقت الضائع، تحسن إنجاز الأنشطة، تنظيم أفضل للعمل الصفي",
      desc4: "تطوير نماذج لتوزيع وقت الحصص، تدريب المعلمين على إدارة الوقت الصفي، مراقبة وتقييم استخدام الوقت، تحسين الجدول الدراسي، تعميم النماذج الناجحة",
      motivators: "تحديات زمنية شيقة، جوائز للإدارة الزمنية الجيدة، نشر النماذج الناجحة، اعتراف بكفاءة إدارة الوقت، منافسات في إنجاز المهام",
      strengths: "تنظيم محكم للوقت، استغلال أمثل للزمن، بيئة تعليمية منظمة، إنجاز أفضل للمهام، تقليل الفوضى الصفية",
      challenges: "ضيق الوقت الإجمالي، اختلاف وتيرة العمل بين الطلاب، الحاجة إلى مرونة في التخطيط، صعوبة الالتزام بالجدول الزمني",
      weaknesses: "صعوبة التنبؤ بالوقت المطلوب للأنشطة، تفاوت سرعة التعلم، حاجة لمهارات إدارة وقت متقدمة"
    },
    4: {
      reportType: "تقرير تطوير البيئة الصفية",
      goal: "تحسين البيئة الصفية وتجهيزها لتكون محفزة للتعلم ومناسبة للأنشطة التعليمية المختلفة",
      desc1: "تطوير وتجهيز البيئة الصفية لتصبح بيئة تعليمية جاذبة ومحفزة للتعلم تدعم الأنشطة التعليمية المختلفة وتلبي احتياجات الطلاب",
      desc2: "تقييم البيئة الصفية الحالية، تحديد الاحتياجات التطويرية، تصميم خطة التطوير، تجهيز الوسائل والأدوات، تنظيم الفصل، إضافة عناصر تحفيزية، تقييم النتائج",
      desc3: "تحسن البيئة الصفية بنسبة 85%، زيادة رضا الطلاب عن الفصل، تحسين التفاعل الصفي، تنظيم أفضل للمساحات، إضافة 15 وسيلة تعليمية جديدة",
      desc4: "استمرارية تطوير البيئة الصفية، تدريب المعلمين على تصميم الفصول، تبادل الخبرات بين المعلمين، تعميم النماذج الناجحة، توفير الدعم المادي",
      motivators: "مسابقات لأجمل فصل، نشر الصور النهائية، جوائز للإبداع في التصميم، اعتراف بالجهود، زيارات تبادلية بين الفصول",
      strengths: "بيئة تعليمية محفزة، تنظيم ممتاز للمساحات، وسائل تعليمية متنوعة، تفاعل إيجابي، نتائج مرئية وملموسة",
      challenges: "محدودية الميزانية، صعوبة التغييرات الكبيرة، اختلاف وجهات النظر، الحاجة إلى وقت للتجهيز",
      weaknesses: "نقص بعض الوسائل التعليمية، حاجة لمزيد من الدعم المادي، تفاوت الإمكانيات بين الفصول"
    }
  },
  
  // التقنيات التعليمية (5 نصوص)
  technology: {
    1: {
      reportType: "تقرير استخدام الوسائل التعليمية",
      goal: "توظيف الوسائل التعليمية المناسبة لتحسين عملية التعليم والتعلم وتسهيل فهم المفاهيم المعقدة",
      desc1: "استخدام وتوظيف وسائل تعليمية متنوعة لتعزيز عملية التعليم وجعلها أكثر فاعلية وجاذبية للطلاب",
      desc2: "اختيار الوسائل المناسبة للموضوع، إعداد وتجهيز الوسائل، توظيفها في الشرح، تفعيل مشاركة الطلاب، تقييم فاعلية الوسائل، تعديل وتحسين الاستخدام",
      desc3: "استخدام 12 وسيلة تعليمية مختلفة، تحسن الفهم بنسبة 70%، زيادة التفاعل الصفي، تسهيل شرح المفاهيم المجردة، تنمية مهارات التعلم البصري",
      desc4: "توسيع استخدام الوسائل التعليمية، تدريب المعلمين على إنتاج الوسائل، إنشاء بنك للوسائل التعليمية، تبادل الخبرات بين المعلمين، تحديث الوسائل باستمرار",
      motivators: "وسائل تعليمية مبتكرة، جوائز لأفضل وسيلة، نشر الأعمال الإبداعية، اعتراف بالجهود، مسابقات إنتاج الوسائل",
      strengths: "تنوع الوسائل التعليمية، جاذبية التعلم، تسهيل الفهم، تفعيل الحواس المختلفة، نتائج إيجابية",
      challenges: "نقص بعض المواد الخام، حاجة لوقت للإعداد، صعوبة بعض التجهيزات، تفاوت جودة الوسائل",
      weaknesses: "محدودية الميزانية، حاجة لمهارات فنية، صعوبة حفظ وصيانة الوسائل"
    }
  },
  
  // الأنشطة التعليمية (5 نصوص)
  activity: {
    1: {
      reportType: "تقرير أنشطة صفية",
      goal: "تنفيذ أنشطة صفية متنوعة لتعزيز التعلم النشط وتنمية المهارات المختلفة لدى الطلاب",
      desc1: "تنفيذ مجموعة من الأنشطة الصفية التعليمية المصممة لتحقيق أهداف تعليمية محددة وتعزيز المشاركة الفعالة للطلاب",
      desc2: "تصميم الأنشطة المناسبة، توفير المواد والأدوات، شرح وتنظيم النشاط، متابعة التنفيذ، تقييم الأداء، تقديم التغذية الراجعة، تحليل النتائج",
      desc3: "تنفيذ 10 أنشطة صفية متنوعة، مشاركة 95% من الطلاب، تحسن المهارات المستهدفة، تفاعل إيجابي، تحقيق الأهداف التعليمية",
      desc4: "تطوير بنك للأنشطة الصفية، تدريب المعلمين على تصميم الأنشطة، تبادل الخبرات، تعميم الأنشطة الناجحة، تحديث الأنشطة باستمرار",
      motivators: "أنشطة تعليمية ممتعة، جوائز للمشاركة، نشر الإنجازات، اعتراف بالأداء، مسابقات بين المجموعات",
      strengths: "تنوع الأنشطة، مشاركة فاعلة، بيئة تعليمية محفزة، تحقيق الأهداف، نتائج إيجابية",
      challenges: "ضيق وقت الحصة، اختلاف مستويات الطلاب، الحاجة إلى تحضير مسبق، صعوبة تقييم بعض الأنشطة",
      weaknesses: "نقص بعض المواد، حاجة لمزيد من الوقت، تفاوت المشاركة"
    }
  },
  
  // الخطط العلاجية (5 نصوص)
  remedial: {
    1: {
      reportType: "تقرير خطة علاجية",
      goal: "معالجة الضعف التعليمي لدى الطلاب المتأخرين دراسياً وتحسين مستواهم الأكاديمي من خلال برنامج علاجي ممنهج",
      desc1: "تنفيذ خطة علاجية شاملة ومتدرجة لمعالجة الصعوبات التعليمية لدى الطلاب وتحسين أدائهم الأكاديمي",
      desc2: "تشخيص الصعوبات التعليمية، تصميم البرنامج العلاجي، تنفيذ الجلسات العلاجية، استخدام وسائل مساعدة، متابعة التقدم، تقييم النتائج، تعديل الخطة",
      desc3: "تحسن مستوى 8 طلاب علاجياً، تحسن المهارات المستهدفة بنسبة 65%، زيادة الثقة بالنفس، تفاعل إيجابي مع العلاج، تحسن في الدرجات",
      desc4: "تطوير برامج علاجية متخصصة، تدريب معلمين على الأساليب العلاجية، إنشاء غرفة مصادر، تعزيز الشراكة مع الأسر، متابعة مستمرة",
      motivators: "برامج تحفيزية، شهادات تحسن، نشر قصص النجاح، جوائز للتقدم، أنشطة ترفيهية مرتبطة",
      strengths: "معلمون متخصصون، وسائل تعليمية مناسبة، دعم إداري، منهجية علاجية مثبتة، نتائج إيجابية",
      challenges: "تفاوت الصعوبات، مقاومة بعض الطلاب، ضعف المتابعة الأسرية، صعوبة التشخيص الدقيق",
      weaknesses: "نقص الكوادر المتخصصة، محدودية الوقت، تفاوت الاستجابة للعلاج"
    }
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
    // تاريخ افتراضي في حالة الفشل
    const today = new Date();
    const hijriDate = today.toLocaleDateString('ar-SA', { calendar: 'islamic' });
    document.getElementById('hijriDate').textContent = `التاريخ الهجري: ${hijriDate}`;
  }
}

// دالة لعرض تصنيف معين
function showCategory(categoryId) {
  // إخفاء جميع التصنيفات
  const allCategories = document.querySelectorAll('.report-category');
  allCategories.forEach(category => {
    category.classList.remove('active');
  });
  
  // إزالة النشاط من جميع الألسنة
  const allTabs = document.querySelectorAll('.category-tab');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // إظهار التصنيف المطلوب
  const targetCategory = document.getElementById(categoryId);
  if (targetCategory) {
    targetCategory.classList.add('active');
  }
  
  // تنشيط اللسان المناسب
  const activeTab = document.querySelector(`.category-tab[onclick="showCategory('${categoryId}')"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

// دالة لاختيار تقرير معين
function selectReport(reportName) {
  // تحديث اسم التقرير
  document.getElementById('reportTitle').textContent = reportName;
  
  // تحديث القائمة المنسدلة
  const reportTypeSelect = document.getElementById('reportTypeSelect');
  reportTypeSelect.value = reportName;
  
  // إزالة التحديد السابق
  const allOptions = document.querySelectorAll('.report-option');
  allOptions.forEach(option => {
    option.classList.remove('selected');
  });
  
  // تحديد الخيار الجديد
  event.target.classList.add('selected');
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

// دالة رئيسية لتحميل النص الذكي
function loadSmartText(category, textNumber) {
  // الحصول على النص من قاعدة البيانات
  const textData = smartTextsDatabase[category]?.[textNumber];
  if (!textData) {
    alert("النص غير متوفر، الرجاء المحاولة مرة أخرى");
    return;
  }
  
  // تحديث نوع التقرير
  document.getElementById('reportTitle').textContent = textData.reportType;
  
  // تحديث القائمة المنسدلة
  const reportTypeSelect = document.getElementById('reportTypeSelect');
  reportTypeSelect.value = textData.reportType;
  
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
  if (category === 'strategy') {
    document.querySelector('input[placeholder="المستهدفون"]').value = "طلاب الصف";
    document.querySelector('input[placeholder="العدد"]').value = "25";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "الفصل الدراسي";
  } else if (category === 'lesson') {
    document.querySelector('input[placeholder="المستهدفون"]').value = "طلاب الصف";
    document.querySelector('input[placeholder="العدد"]').value = "30";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "قاعة الدرس";
  } else if (category === 'technology') {
    document.querySelector('input[placeholder="المستهدفون"]').value = "طلاب الصف";
    document.querySelector('input[placeholder="العدد"]').value = "20";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "معمل الوسائل";
  } else if (category === 'activity') {
    document.querySelector('input[placeholder="المستهدفون"]').value = "طلاب الصف";
    document.querySelector('input[placeholder="العدد"]').value = "15";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "قاعة الأنشطة";
  } else if (category === 'remedial') {
    document.querySelector('input[placeholder="المستهدفون"]').value = "الطلاب المتأخرون";
    document.querySelector('input[placeholder="العدد"]').value = "8";
    document.querySelector('input[placeholder="مكان التنفيذ"]').value = "غرفة المصادر";
  }
  
  // مزامنة الحقول
  sync('target', document.querySelector('input[placeholder="المستهدفون"]').value);
  sync('count', document.querySelector('input[placeholder="العدد"]').value);
  sync('location', document.querySelector('input[placeholder="مكان التنفيذ"]').value);
  
  // إشعار للمستخدم
  alert(`تم تحميل النص ${textNumber} من فئة ${category} بنجاح!`);
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
  
  document.getElementById('reportTypeSelect').selectedIndex = 0;
  sync('reportTitle', '');
  
  document.getElementById('imagesBox').innerHTML = '';
  
  // إزالة التحديد من خيارات التقرير
  const allOptions = document.querySelectorAll('.report-option');
  allOptions.forEach(option => {
    option.classList.remove('selected');
  });
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

// تعبئة أولية للمساعدة في التجربة
window.onload = async function() {
  document.getElementById('schoolInput').value = "مدرسة التجربة النموذجية";
  sync('school', "مدرسة التجربة النموذجية");
  updateEduInfo("الإدارة العامة للتعليم بمنطقة الرياض");
  
  // تعبئة القائمة المنسدلة بأنواع التقارير
  const reportTypeSelect = document.getElementById('reportTypeSelect');
  const reportOptions = [
    "التعلم النشط", "التعلم التعاوني", "حل المشكلات", "العصف الذهني", "التفكير الناقد",
    "التفكير الإبداعي", "التعلم بالمشروع", "التعلم بالاستقصاء", "الفصول المقلوبة",
    "التعلم باللعب", "التعلم الذاتي", "القبعات الست", "الخرائط الذهنية", "التعليم المتمايز",
    "درس تم تنفيذه", "درس تطبيقي", "توزيع وقت الحصة", "تطوير البيئة الصفية",
    "الوسائل التعليمية", "وسائل تعليمية مبتكرة", "الوسائل الرقمية", "العروض التقديمية",
    "السبورة التفاعلية", "الفيديو التعليمي", "التطبيقات التعليمية", "المنصات التعليمية",
    "أوراق عمل تفاعلية", "الذكاء الاصطناعي", "أنشطة صفية", "أنشطة إثرائية",
    "أنشطة علاجية", "أنشطة لاصفية", "حصص النشاط", "المبادرات الطلابية",
    "المسابقات الطلابية", "المشاركات الطلابية", "الإذاعة المدرسية", "المعلم الصغير",
    "خطة علاجية", "نتائج الخطة العلاجية", "علاج ضعف القراءة", "علاج ضعف الكتابة",
    "علاج ضعف الحساب", "دعم المتأخرين دراسياً", "التدخل العلاجي المبكر",
    "الإثراء للمتفوقين", "دراسة حالة طالب", "حل مشكلة تربوية", "أدوات التقويم",
    "التقويم التشخيصي", "التقويم البنائي", "التقويم الختامي", "تحليل نتائج الاختبارات",
    "متابعة مستوى التحصيل", "مقارنة نتائج الفترات", "قياس نواتج التعلم",
    "رصد وتصحيح الدرجات", "التغذية الراجعة", "بنك أسئلة", "تنويع مستويات الأسئلة",
    "مواءمة الأسئلة مع الأهداف", "تحليل الأسئلة", "الاختبارات الإلكترونية",
    "الاختبارات الذكية", "اختبار تحسن", "كشف المتابعة", "سجل الدرجات الإلكتروني",
    "التغذية الراجعة من الطلاب", "متابعة الانضباط والسلوك", "متابعة الغياب والتأخر",
    "ضبط الصف", "تعزيز السلوك الإيجابي", "تحفيز الطلاب", "معرفة الميول والاتجاهات",
    "المناوبة المدرسية", "الإشراف اليومي", "الإشراف على الفسحة", "حصص الانتظار",
    "التدريب على الاختبارات المعيارية", "حضور دورات وورش تدريبية", "نقل أثر التدريب",
    "الورش التدريبية المقدمة", "البحث الإجرائي"
  ];
  
  reportOptions.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option;
    reportTypeSelect.appendChild(opt);
  });
  
  // جلب التاريخ الهجري عند تحميل الصفحة
  await getHijriDate();
  
  // تحميل نص تجريبي عند بدء التشغيل
  setTimeout(() => {
    loadSmartText('strategy', 1);
  }, 500);
};
</script>
</body>
</html>