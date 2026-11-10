// All visible text lives here. Edit wording in one place; keys match data-i18n in index.html.
// The "ed" array drives the Eduleb case study. It only contains facts from the project README.
const T = {
en: {
n_about:"About", n_skills:"Skills", n_edu:"Education", n_proj:"Projects", n_serv:"Services", n_contact:"Contact",
h_eyebrow:"Computer Systems Engineering Student", h_name1:"Eng. Ahmed", h_name2:"M.S.Ayyad",
h_sub:"Computer Systems Engineering Student | Backend-Focused Full-Stack Developer",
h_cta1:"View Eduleb", h_cv:"Download CV", h_photo:"Your photo here — assets/photo.jpg", h_stat:"Cumulative average",
a_h:"About", a_p1:"I build the logic behind applications: databases, business rules, and the structure that keeps software maintainable.",
a_p2:"I am a Computer Systems Engineering student with a backend focus and working knowledge of the frontend. I enjoy understanding how an application works internally, designing databases and implementing structured solutions.",
s_h:"Technical Skills", s_be:"Backend", s_fe:"Frontend", s_db:"Database", s_tl:"Tools",
k_h:"Technical Knowledge", know:["Object-Oriented Programming (OOP)","Software Requirements Engineering","Software Design Principles","Database Design","Data Structures & Algorithms","Operating Systems (OS)","Computer Networks (CN)"],
e_h:"Education", e_uni:"Al-Azhar University – Gaza", e_deg:"B.Sc. in Computer Systems Engineering", e_lvl:"Level 3", e_avg:"94.74% Cumulative Average",
pj_h:"Projects", pj_status:"In development", pj_case:"View case study", pj_cs:"Eduleb: Case Study", pj_desc:"A Laravel-based online learning platform for students, instructors and administrators, with role-based access, courses, lessons, enrollment and reviews.", p_intro:"A Laravel-based online learning platform connecting students and instructors, with separate areas for admins, instructors and students.",
p_status:"Status: in development. No live deployment; the source is on GitHub.", p_shot:"Screenshot placeholder", p_gh:"View on GitHub", p_flow:"A typical request path in the Laravel structure Eduleb follows",
ed:[
["Project Overview","Eduleb brings course discovery, enrollment, learning dashboards, instructor tools and content management into one application, with a public website plus role-based dashboards.",["Laravel 13","PHP 8.3+","Blade"]],
["Backend Architecture","Standard Laravel structure: Eloquent models, controllers for request handling, policies for authorization, and web routes. Views are server-rendered with Blade.",["Models","Controllers","Policies","routes/web.php"]],
["Database Design","Schema history is kept in migrations and accessed through Eloquent models. Works with MySQL or SQLite depending on local configuration.",["MySQL","SQLite","Migrations","Eloquent"]],
["Authentication","Registration, login, password reset and email verification through Laravel authentication, plus Google sign-in with Laravel Socialite.",["Laravel Auth","Socialite","Email verification"]],
["Roles & Permissions","Three roles: administrator, instructor, student. Roles and permissions are managed with Spatie Laravel Permission, and policies guard resources.",["Spatie Permission","Policies"]],
["Course Management","Admins manage courses, users, blog posts, FAQs and applications. Published courses are browsable by visitors.",["Admin","Courses","Blog","FAQ"]],
["Instructor Workflow","Instructor dashboard to view courses and enrolled students, read student feedback, and manage recorded and live lecture lessons. Instructor-related applications go through admin review.",["Dashboard","Lessons","Applications"]],
["Student Workflow","Student dashboard, enrolled courses and lessons, notifications for applications and course events.",["Dashboard","Notifications"]],
["Reviews & Enrollment","Students submit course reviews. Enrollment runs through Stripe Checkout, with a refund request flow. Requires Stripe credentials to run.",["Stripe Checkout","Reviews","Refunds"]]
],
v_h:"Services", v1:"Backend Development", v1p:"Application logic and backend functionality with PHP and Laravel.",
v2:"Web Application Development", v2p:"Responsive web applications, connecting frontend interfaces to application functionality.",
v3:"Database Design", v3p:"Database structures, relationships and data management.", v_note:"I also write code in Java and Python.",
c_h:"Contact", c_p:"Have a project or an opportunity in mind? Write to me.", ft:"Built with HTML, CSS and JavaScript"
},
ar: {
n_about:"نبذة", n_skills:"المهارات", n_edu:"التعليم", n_proj:"المشاريع", n_serv:"الخدمات", n_contact:"تواصل",
h_eyebrow:"طالب هندسة نظم الحاسوب", h_name1:"المهندس أحمد", h_name2:"م.س. عيّاد",
h_sub:"طالب هندسة نظم الحاسوب | مطوّر ويب متكامل بتركيز على الخلفية",
h_cta1:"استعرض إديولب", h_cv:"تحميل السيرة الذاتية", h_photo:"ضع صورتك هنا — assets/photo.jpg", h_stat:"المعدل التراكمي",
a_h:"نبذة عني", a_p1:"أبني المنطق الذي تقوم عليه التطبيقات: قواعد البيانات وقواعد العمل والبنية التي تُبقي البرمجيات قابلة للصيانة.",
a_p2:"أنا طالب هندسة نظم الحاسوب أركّز على تطوير الخلفية ولدي معرفة عملية بالواجهات الأمامية. أحب فهم كيفية عمل التطبيقات من الداخل، وتصميم قواعد البيانات، وتنفيذ حلول برمجية منظمة.",
s_h:"المهارات التقنية", s_be:"الخلفية", s_fe:"الواجهة الأمامية", s_db:"قواعد البيانات", s_tl:"الأدوات",
k_h:"المعرفة التقنية", know:["البرمجة كائنية التوجه (OOP)","هندسة متطلبات البرمجيات","مبادئ تصميم البرمجيات","تصميم قواعد البيانات","هياكل البيانات والخوارزميات","نظم التشغيل (OS)","شبكات الحاسوب (CN)"],
e_h:"التعليم", e_uni:"جامعة الأزهر – غزة", e_deg:"بكالوريوس هندسة نظم الحاسوب", e_lvl:"المستوى الثالث", e_avg:"معدل تراكمي 94.74%",
pj_h:"المشاريع", pj_status:"قيد التطوير", pj_case:"عرض دراسة الحالة", pj_cs:"إديولب: دراسة الحالة", pj_desc:"منصة تعلّم إلكتروني مبنية بـ Laravel للطلاب والمدرّسين والمديرين، مع صلاحيات حسب الدور والدورات والدروس والتسجيل والتقييمات.", p_intro:"منصة تعلّم إلكتروني مبنية بـ Laravel تربط الطلاب بالمدرّسين، مع مناطق مستقلة للمدير والمدرّس والطالب.",
p_status:"الحالة: قيد التطوير. لا يوجد نشر مباشر؛ الشيفرة المصدرية على GitHub.", p_shot:"مكان لقطة الشاشة", p_gh:"عرض على GitHub", p_flow:"مسار الطلب المعتاد في بنية Laravel التي يتبعها إديولب",
ed:[
["نظرة عامة","يجمع إديولب بين استعراض الدورات والتسجيل ولوحات التعلّم وأدوات المدرّسين وإدارة المحتوى في تطبيق واحد، مع موقع عام ولوحات تحكم حسب الدور.",["Laravel 13","PHP 8.3+","Blade"]],
["بنية الخلفية","بنية Laravel القياسية: نماذج Eloquent، ومتحكمات لمعالجة الطلبات، وسياسات للتفويض، ومسارات الويب. الواجهات تُعرض من الخادم عبر Blade.",["Models","Controllers","Policies","routes/web.php"]],
["تصميم قاعدة البيانات","تُحفظ بنية القاعدة في ملفات الترحيل (migrations) ويتم الوصول إليها عبر نماذج Eloquent. تعمل مع MySQL أو SQLite حسب إعدادات البيئة المحلية.",["MySQL","SQLite","Migrations","Eloquent"]],
["المصادقة","تسجيل وتسجيل دخول واستعادة كلمة المرور وتأكيد البريد عبر مصادقة Laravel، إضافة إلى الدخول عبر Google باستخدام Socialite.",["Laravel Auth","Socialite","تأكيد البريد"]],
["الأدوار والصلاحيات","ثلاثة أدوار: مدير ومدرّس وطالب. تُدار الأدوار والصلاحيات عبر Spatie Laravel Permission وتحمي السياسات الموارد.",["Spatie Permission","Policies"]],
["إدارة الدورات","يدير المدير الدورات والمستخدمين والمدونة والأسئلة الشائعة والطلبات. الدورات المنشورة متاحة للزوار.",["Admin","Courses","Blog","FAQ"]],
["مسار المدرّس","لوحة للمدرّس لعرض الدورات والطلاب المسجلين وقراءة آراء الطلاب وإدارة الدروس المسجلة والمباشرة. طلبات المدرّسين تمر بمراجعة المدير.",["Dashboard","Lessons","Applications"]],
["مسار الطالب","لوحة للطالب، والدورات المسجّل بها ودروسها، وإشعارات الطلبات وأحداث الدورات.",["Dashboard","Notifications"]],
["التقييمات والتسجيل","يرسل الطلاب تقييمات للدورات. يتم التسجيل عبر Stripe Checkout مع مسار لطلب الاسترداد. يتطلب بيانات Stripe للتشغيل.",["Stripe Checkout","Reviews","Refunds"]]
],
v_h:"الخدمات", v1:"تطوير الخلفية", v1p:"منطق التطبيقات ووظائف الخلفية باستخدام PHP وLaravel.",
v2:"تطوير تطبيقات الويب", v2p:"تطبيقات ويب متجاوبة وربط الواجهات الأمامية بوظائف التطبيق.",
v3:"تصميم قواعد البيانات", v3p:"تصميم هياكل قواعد البيانات والعلاقات وإدارة البيانات.", v_note:"أكتب الشيفرة أيضًا بلغتي Java وPython.",
c_h:"تواصل معي", c_p:"لديك مشروع أو فرصة؟ راسلني.", ft:"مبني بـ HTML وCSS وJavaScript"
}};
