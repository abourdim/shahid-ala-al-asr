/* شاهد على العصر — GHAZALI: WITNESS OF THE ERA — app.js v3.0 */
/* Based on "Al-Sheikh Mohammed al-Ghazali: Shahidan Ala al-Asr" */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'شاهد على العصر',
    splashSub: 'رحلة الشيخ محمد الغزالي — شاهداً على العصر',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ٣: ١١٠',
    tabHome: 'الرئيسية', tabCards: 'المحطات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'محطات في حياة الغزالي',
    cardsDesc: '٢٠ محطة من حياة الشيخ محمد الغزالي — كل محطة بحكمة وعبرة وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن حياة الشيخ محمد الغزالي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي مع الغزالي',
    progressDesc: 'تقدمك وإنجازاتك في معرفة حياة الشيخ الغزالي',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 من أدعية الشيخ الغزالي',
    dailyLabel: '✨ محطة اليوم',
    searchPlaceholder: 'ابحث في المحطات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحكمة',
    apply: '💡 العبرة',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ محطة من حياة الشيخ محمد الغزالي',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Witness of the Era',
    splashSub: "The journey of Sheikh Mohammed al-Ghazali — witness of the era",
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al Imran 3:110',
    tabHome: 'Home', tabCards: 'Milestones', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: "Milestones in Ghazali's Life",
    cardsDesc: '20 milestones from the life of Sheikh al-Ghazali — each with a lesson and practical takeaway',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: "Test your knowledge of Sheikh al-Ghazali's life — 4 choices per question",
    progressTitle: 'My Journey with Ghazali',
    progressDesc: "Your progress in learning about Sheikh al-Ghazali's life",
    helpTitle: '❓ Help',
    duaPanelTitle: "🤲 Ghazali's Favorite Duas",
    dailyLabel: "✨ Today's Milestone",
    searchPlaceholder: 'Search milestones...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Wisdom',
    apply: '💡 Lesson',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Reference',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 milestones from Sheikh al-Ghazali's life",
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "Témoin de l'Époque",
    splashSub: "Le parcours du Sheikh Mohammed al-Ghazali — témoin de l'époque",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al Imran 3:110',
    tabHome: 'Accueil', tabCards: 'Étapes', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    cardsTitle: 'Étapes de la Vie de Ghazali',
    cardsDesc: '20 étapes de la vie du Sheikh al-Ghazali — chacune avec une leçon et un conseil pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la vie du Sheikh al-Ghazali — 4 choix par question',
    progressTitle: 'Mon Parcours avec Ghazali',
    progressDesc: 'Vos progrès dans la découverte de la vie du Sheikh al-Ghazali',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Préférées de Ghazali',
    dailyLabel: '✨ Étape du Jour',
    searchPlaceholder: 'Rechercher les étapes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Sagesse',
    apply: '💡 Leçon',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Référence',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 étapes de la vie du Sheikh al-Ghazali',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 MILESTONE CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'👶',
    ar:{title:'المولد في البحيرة ١٩١٧',desc:'وُلد محمد الغزالي أحمد السقا في ٢٢ سبتمبر ١٩١٧ في قرية نكلا العنب بمحافظة البحيرة في دلتا مصر. نشأ في بيئة ريفية بسيطة محبة للعلم والقرآن والأدب العربي. حفظ القرآن الكريم كاملاً في سن العاشرة في كُتّاب القرية، وكان والده — الذي سمّاه تيمناً بالإمام أبي حامد الغزالي — يشجعه على طلب العلم والتفوق ويقرأ له من كتب التراث الإسلامي. نشأ الغزالي في فترة كانت مصر فيها تحت الاحتلال البريطاني مما غرس في نفسه مبكراً حب الحرية ورفض الظلم والاستعمار. كانت طفولته متواضعة مادياً لكنها غنية بالعلم والقيم والتربية الإيمانية.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'سُمي محمد الغزالي تيمناً بالإمام أبي حامد الغزالي — العالم المسلم الشهير',action:'مهما كانت بداياتك متواضعة، يمكنك أن تصبح عظيماً — ابدأ اليوم بطلب العلم',young:'الشيخ الغزالي كان طفلاً ريفياً بسيطاً حفظ القرآن كاملاً وهو في العاشرة! أنت أيضاً تستطيع 👶'},
    en:{title:'Birth in Beheira 1917',desc:'Mohammed al-Ghazali Ahmad al-Saqqa was born on September 22, 1917, in the village of Nikla al-Inab in Beheira province, in the Nile Delta of Egypt. He grew up in a simple rural environment that cherished knowledge, the Quran, and Arabic literature. He memorized the entire Quran by the age of ten at the village school, and his father — who named him after the famous Imam Abu Hamid al-Ghazali — encouraged him to seek knowledge and read from classical Islamic texts. He grew up during a period when Egypt was under British occupation, which planted in him an early love of freedom and rejection of oppression and colonialism. His childhood was materially modest but rich in knowledge, values, and faith-centered upbringing.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'He was named Mohammed al-Ghazali after the famous Muslim scholar Imam Abu Hamid al-Ghazali',action:'No matter how humble your beginnings, you can become great — start seeking knowledge today',young:'Sheikh al-Ghazali was a simple village boy who memorized the whole Quran by age 10! You can do amazing things too 👶'},
    fr:{title:'Naissance à Beheira 1917',desc:"Mohammed al-Ghazali Ahmad al-Saqqa est né le 22 septembre 1917 au village de Nikla al-Inab dans la province de Beheira, dans le delta du Nil en Égypte. Il a grandi dans un environnement rural simple aimant le savoir, le Coran et la littérature arabe. Il a mémorisé le Coran entier à l'âge de dix ans à l'école coranique du village, et son père — qui l'a nommé d'après le célèbre Imam Abu Hamid al-Ghazali — l'encourageait à chercher le savoir. Il a grandi pendant l'occupation britannique de l'Égypte, ce qui a planté en lui l'amour de la liberté et le rejet de l'oppression.",verse:'Lis au nom de ton Seigneur qui a créé',verseRef:'Al-Alaq 1',hadith:"Il a été nommé Mohammed al-Ghazali d'après le célèbre savant musulman l'Imam Abu Hamid al-Ghazali",action:"Peu importe vos origines modestes, vous pouvez devenir grand — commencez à apprendre aujourd'hui",young:"Le Sheikh al-Ghazali était un simple garçon de village qui a mémorisé tout le Coran à 10 ans ! Toi aussi tu peux 👶"}
  },
  {
    id:2, emoji:'🎓',
    ar:{title:'التعليم في الأزهر',desc:'التحق الشيخ الغزالي بالأزهر الشريف حيث درس العلوم الشرعية والعربية. تخرج من كلية أصول الدين عام ١٩٤١ ثم حصل على العالمية (الماجستير) عام ١٩٤٣. في الأزهر تعرف على كبار العلماء وتأثر بمنهج الوسطية والاعتدال.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'تعلم في أعرق مؤسسة تعليمية إسلامية في العالم — الأزهر الشريف',action:'التعليم أساس كل نجاح — اهتم بدراستك واجتهد فيها مهما كانت الظروف',young:'الشيخ الغزالي درس في الأزهر — أقدم جامعة إسلامية في العالم! التعلم مفتاح النجاح 🎓'},
    en:{title:'Al-Azhar Education',desc:'Sheikh al-Ghazali enrolled at Al-Azhar, where he studied Islamic sciences and Arabic. He graduated from the Faculty of Theology in 1941 and earned his master\'s degree in 1943. At Al-Azhar, he met great scholars and was influenced by a methodology of moderation.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'He studied at the most prestigious Islamic educational institution in the world — Al-Azhar',action:'Education is the foundation of all success — dedicate yourself to your studies no matter the circumstances',young:'Sheikh al-Ghazali studied at Al-Azhar — the oldest Islamic university in the world! Learning is the key to success 🎓'},
    fr:{title:"L'Éducation à Al-Azhar",desc:"Le Sheikh al-Ghazali s'est inscrit à Al-Azhar où il a étudié les sciences islamiques et l'arabe. Il a obtenu son diplôme de la Faculté de Théologie en 1941 et sa maîtrise en 1943. À Al-Azhar, il a rencontré de grands savants.",verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:"Il a étudié dans la plus prestigieuse institution éducative islamique du monde — Al-Azhar",action:"L'éducation est le fondement de tout succès — consacrez-vous à vos études",young:"Le Sheikh al-Ghazali a étudié à Al-Azhar — la plus ancienne université islamique au monde ! 🎓"}
  },
  {
    id:3, emoji:'🏛️',
    ar:{title:'سنوات الإخوان المسلمين',desc:'انضم الشيخ الغزالي إلى جماعة الإخوان المسلمين في شبابه وتأثر بالإمام حسن البنا. عمل خطيباً ومحاضراً في الجماعة وتعلم فن الخطابة والدعوة. لكنه لاحقاً استقل فكرياً وانتقد التطرف والجمود أينما وجده.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'تعلم من البنا فن الدعوة لكنه حافظ على استقلاله الفكري — درس لنا في الشجاعة',action:'كن مستقلاً في تفكيرك — تعلم من الجميع لكن لا تقلد أحداً تقليداً أعمى',young:'الشيخ الغزالي تعلم من الكبار لكنه كان يفكر بنفسه ولا يقلد أحداً — كن مثله! 🏛️'},
    en:{title:'Muslim Brotherhood Years',desc:'Sheikh al-Ghazali joined the Muslim Brotherhood in his youth and was influenced by Imam Hasan al-Banna. He worked as a preacher and lecturer. However, he later became intellectually independent and criticized extremism and rigidity wherever he found it.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'He learned the art of preaching from al-Banna but maintained his intellectual independence — a lesson in courage',action:'Be independent in your thinking — learn from everyone but never blindly follow anyone',young:'Sheikh al-Ghazali learned from great people but always thought for himself — be like him! 🏛️'},
    fr:{title:'Les Années des Frères Musulmans',desc:"Le Sheikh al-Ghazali a rejoint les Frères Musulmans dans sa jeunesse et a été influencé par l'Imam Hasan al-Banna. Il a travaillé comme prédicateur. Cependant, il est devenu intellectuellement indépendant et a critiqué l'extrémisme partout où il le trouvait.",verse:'Appelle à la voie de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:"Il a appris l'art de la prédication d'al-Banna mais a gardé son indépendance intellectuelle",action:"Soyez indépendant dans votre pensée — apprenez de tous mais ne suivez personne aveuglément",young:"Le Sheikh al-Ghazali a appris des grands mais pensait toujours par lui-même — sois comme lui ! 🏛️"}
  },
  {
    id:4, emoji:'📕',
    ar:{title:'الكتاب الأول',desc:'أصدر الشيخ الغزالي كتابه الأول "الإسلام والأوضاع الاقتصادية" عام ١٩٤٧ وهو في الثلاثين من عمره. بدأ بهذا الكتاب مسيرة تأليف امتدت نصف قرن. كتب بأسلوب أدبي جذاب يجمع بين العمق الفكري وسهولة التعبير.',verse:'نُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ',verseRef:'الإسراء ٨٢',hadith:'بدأ رحلة التأليف في الثلاثين — لم يكن أبداً مبكراً أو متأخراً للبدء',action:'ابدأ مشروعك اليوم مهما كان عمرك — أفضل وقت للبداية هو الآن',young:'الشيخ الغزالي كتب أول كتاب وهو شاب! لا تقل "أنا صغير" — ابدأ حلمك الآن 📕'},
    en:{title:'The First Book',desc:'Sheikh al-Ghazali published his first book, "Islam and Economic Conditions," in 1947 at the age of thirty. This book began a writing career that spanned half a century. He wrote in an attractive literary style that combined intellectual depth with easy expression.',verse:'We send down in the Quran that which is a healing and a mercy for the believers',verseRef:'Al-Isra 82',hadith:'He began his writing journey at thirty — it was never too early or too late to start',action:'Start your project today no matter your age — the best time to begin is now',young:'Sheikh al-Ghazali wrote his first book as a young man! Never say "I\'m too young" — start your dream now 📕'},
    fr:{title:'Le Premier Livre',desc:"Le Sheikh al-Ghazali a publié son premier livre, « L'Islam et les Conditions Économiques », en 1947 à l'âge de trente ans. Ce livre a lancé une carrière d'écriture d'un demi-siècle dans un style littéraire alliant profondeur intellectuelle et simplicité.",verse:'Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants',verseRef:'Al-Isra 82',hadith:"Il a commencé sa carrière d'écriture à trente ans — il n'est jamais trop tôt ou trop tard",action:"Commencez votre projet aujourd'hui quel que soit votre âge — le meilleur moment c'est maintenant",young:"Le Sheikh a écrit son premier livre jeune ! Ne dis jamais « je suis trop jeune » — commence ton rêve 📕"}
  },
  {
    id:5, emoji:'✈️',
    ar:{title:'الغربة والتدريس',desc:'سافر الشيخ الغزالي للتدريس في عدة بلدان إسلامية. درّس في جامعة أم القرى بمكة المكرمة وجامعة قطر وجامعة الأمير عبد القادر بقسنطينة في الجزائر. نشر علمه وفكره في كل مكان ذهب إليه وأثر في أجيال من الطلاب.',verse:'وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ',verseRef:'التوبة ١٢٢',hadith:'نشر العلم في مكة وقطر والجزائر — العالِم لا تحده جغرافيا',action:'شارك علمك مع الآخرين أينما كنت — المعرفة تزيد بالمشاركة لا بالاحتكار',young:'الشيخ الغزالي سافر حول العالم لينشر العلم! شارك ما تعرفه مع أصدقائك ✈️'},
    en:{title:'Exile and Teaching',desc:'Sheikh al-Ghazali traveled to teach in several Islamic countries. He taught at Umm al-Qura University in Mecca, Qatar University, and the University of Emir Abdelkader in Constantine, Algeria. He spread his knowledge and thought wherever he went and influenced generations of students.',verse:'Not all believers should go forth. A group from each community should devote themselves to gaining knowledge in religion',verseRef:'At-Tawbah 122',hadith:'He spread knowledge in Mecca, Qatar, and Algeria — a true scholar knows no borders',action:'Share your knowledge with others wherever you are — knowledge grows through sharing, not hoarding',young:'Sheikh al-Ghazali traveled the world to spread knowledge! Share what you know with your friends ✈️'},
    fr:{title:"L'Exil et l'Enseignement",desc:"Le Sheikh al-Ghazali a voyagé pour enseigner dans plusieurs pays islamiques. Il a enseigné à l'Université Umm al-Qura à La Mecque, à l'Université du Qatar et à l'Université Emir Abdelkader à Constantine en Algérie. Il a influencé des générations d'étudiants.",verse:'Les croyants ne doivent pas tous partir. Qu\'un groupe de chaque communauté se consacre à l\'étude de la religion',verseRef:'At-Tawbah 122',hadith:'Il a répandu le savoir à La Mecque, au Qatar et en Algérie — un vrai savant ne connaît pas de frontières',action:'Partagez vos connaissances avec les autres — le savoir grandit par le partage',young:"Le Sheikh al-Ghazali a voyagé dans le monde pour répandre le savoir ! Partage ce que tu sais ✈️"}
  },
  {
    id:6, emoji:'📚',
    ar:{title:'إرث ٩٤ كتاباً',desc:'ألّف الشيخ الغزالي أكثر من ٩٤ كتاباً في مواضيع متنوعة تشمل العقيدة والأخلاق والفقه والسيرة النبوية والفكر الإسلامي المعاصر والنقد الاجتماعي والسياسي وقضايا المرأة والشباب والتعليم. من أشهر كتبه: "خلق المسلم" و"فقه السيرة" و"جدد حياتك" و"الإسلام والاستبداد السياسي" و"قضايا المرأة" و"السنة النبوية بين أهل الفقه وأهل الحديث". كتبه تُرجمت إلى عدة لغات منها الإنجليزية والفرنسية والتركية والأوردية وأثرت في ملايين القراء حول العالم. تميزت كتاباته بأسلوب أدبي جذاب يجمع بين عمق الفكرة وجمال التعبير وسهولة الفهم.',verse:'وَقُلْ رَبِّ زِدْنِي عِلْمًا',verseRef:'طه ١١٤',hadith:'٩٤ كتاباً في ٥٠ عاماً — ما يقارب كتابين كل عام! قوة مذهلة في العطاء',action:'اقرأ كتاباً واحداً على الأقل كل شهر — القراءة تفتح لك آفاقاً لا حدود لها',young:'الشيخ الغزالي كتب ٩٤ كتاباً! هذا مثل كتاب كل ستة أشهر تقريباً — ابدأ القراءة اليوم 📚'},
    en:{title:'Legacy of 94 Books',desc:'Sheikh al-Ghazali authored more than 94 books on diverse topics including creed, ethics, jurisprudence, the Prophetic biography, contemporary Islamic thought, social and political criticism, women\'s issues, youth, and education. Among his most famous books: "The Muslim\'s Character," "Understanding the Prophet\'s Biography," "Renew Your Life," "Islam and Political Despotism," "Women\'s Issues," and "The Prophetic Sunnah Between the People of Fiqh and Hadith." His books were translated into several languages including English, French, Turkish, and Urdu and influenced millions of readers worldwide. His writing was distinguished by an attractive literary style combining depth of thought with beauty of expression and ease of understanding.',verse:'And say: My Lord, increase me in knowledge',verseRef:'Taha 114',hadith:'94 books in 50 years — nearly two books every year! An amazing dedication to giving',action:'Read at least one book every month — reading opens limitless horizons for you',young:'Sheikh al-Ghazali wrote 94 books! That is like a book every 6 months — start reading today 📚'},
    fr:{title:'L\'Héritage de 94 Livres',desc:"Le Sheikh al-Ghazali a écrit plus de 94 livres sur des sujets variés : croyance, éthique, jurisprudence, biographie, pensée islamique et critique sociale et politique. Ses livres ont été traduits en plusieurs langues et ont influencé des millions de lecteurs.",verse:'Et dis : Mon Seigneur, augmente-moi en savoir',verseRef:'Taha 114',hadith:'94 livres en 50 ans — près de deux livres par an ! Un dévouement remarquable',action:'Lisez au moins un livre par mois — la lecture ouvre des horizons sans limites',young:"Le Sheikh al-Ghazali a écrit 94 livres ! C'est presque un livre tous les 6 mois — commence à lire 📚"}
  },
  {
    id:7, emoji:'👩',
    ar:{title:'الدفاع عن حقوق المرأة',desc:'كان الشيخ الغزالي من أبرز المدافعين عن حقوق المرأة في الإسلام. رفض العادات الجاهلية التي تظلم المرأة باسم الدين وأكد أن الإسلام أعطى المرأة حقها كاملاً في التعليم والعمل والمشاركة في الحياة العامة.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',hadith:'قال: ظلم المرأة باسم الدين جريمة — والإسلام بريء من كل تقاليد الجاهلية',action:'احترم حق كل إنسان في التعليم والعمل — ودافع عن حقوق المرأة في مجتمعك',young:'الشيخ الغزالي دافع عن حق البنات في التعليم والعمل — الجميع متساوون! 👩'},
    en:{title:"Defending Women's Rights",desc:"Sheikh al-Ghazali was one of the most prominent defenders of women's rights in Islam. He rejected pre-Islamic customs that oppress women in the name of religion and affirmed that Islam gave women their full rights to education, work, and public participation.",verse:'And women have rights similar to those over them in a fair manner',verseRef:'Al-Baqarah 228',hadith:'He said: Oppressing women in the name of religion is a crime — Islam is free from all pre-Islamic traditions',action:"Respect every person's right to education and work — and defend women's rights in your community",young:"Sheikh al-Ghazali defended girls' right to education and work — everyone is equal! 👩"},
    fr:{title:'Défense des Droits des Femmes',desc:"Le Sheikh al-Ghazali était l'un des plus éminents défenseurs des droits des femmes en Islam. Il a rejeté les coutumes préislamiques qui oppriment les femmes au nom de la religion et affirmé que l'Islam a donné aux femmes tous leurs droits.",verse:'Et elles ont des droits similaires à ceux exercés sur elles',verseRef:'Al-Baqarah 228',hadith:"Il a dit : Opprimer les femmes au nom de la religion est un crime — l'Islam est libre de toute tradition préislamique",action:"Respectez le droit de chacun à l'éducation et au travail — et défendez les droits des femmes",young:"Le Sheikh al-Ghazali a défendu le droit des filles à l'éducation — tous sont égaux ! 👩"}
  },
  {
    id:8, emoji:'⚔️',
    ar:{title:'محاربة الاستبداد',desc:'لم يسكت الشيخ الغزالي عن الظلم والاستبداد. واجه الأنظمة الظالمة بالكلمة الصادقة ودفع ثمن ذلك سجناً ونفياً. كان يؤمن أن السكوت عن الظلم خيانة وأن العالِم يجب أن يقول الحق حتى لو كلفه حياته.',verse:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',verseRef:'هود ١١٣',hadith:'قال: أفضل الجهاد كلمة حق عند سلطان جائر — وطبّق ذلك عملياً في حياته',action:'لا تسكت عن الظلم — قل الحق بحكمة وشجاعة حتى لو كلفك ذلك',young:'الشيخ الغزالي كان شجاعاً جداً! لم يخف من قول الحق أبداً — كن شجاعاً مثله ⚔️'},
    en:{title:'Fighting Despotism',desc:'Sheikh al-Ghazali never stayed silent about injustice and tyranny. He confronted unjust regimes with truthful words and paid the price through imprisonment and exile. He believed that silence about injustice is betrayal and that a scholar must speak the truth even if it costs them their life.',verse:'And do not incline toward those who do wrong, lest the Fire touch you',verseRef:'Hud 113',hadith:'He said: The best jihad is a word of truth before a tyrannical ruler — and he practiced this in his life',action:'Never stay silent about injustice — speak the truth with wisdom and courage even if it costs you',young:'Sheikh al-Ghazali was very brave! He never feared speaking the truth — be courageous like him ⚔️'},
    fr:{title:'Combattre le Despotisme',desc:"Le Sheikh al-Ghazali n'est jamais resté silencieux face à l'injustice et la tyrannie. Il a confronté les régimes injustes avec des paroles véridiques et a payé le prix par l'emprisonnement et l'exil. Il croyait que le silence face à l'injustice est une trahison.",verse:'Et ne penchez pas vers les injustes, sinon le Feu vous touchera',verseRef:'Hud 113',hadith:"Il a dit : Le meilleur jihad est une parole de vérité devant un dirigeant tyrannique — et il l'a pratiqué",action:"Ne restez jamais silencieux face à l'injustice — dites la vérité avec sagesse et courage",young:"Le Sheikh al-Ghazali était très courageux ! Il n'a jamais eu peur de dire la vérité — sois courageux ⚔️"}
  },
  {
    id:9, emoji:'🔄',
    ar:{title:'التجديد الفكري',desc:'كان الشيخ الغزالي مجدداً في الفكر الإسلامي. رفض الجمود والتقليد الأعمى ودعا إلى فهم الإسلام فهماً عصرياً يحافظ على الثوابت ويتفاعل مع المتغيرات. دعا إلى الاجتهاد وإعمال العقل في فهم النصوص.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'رفض الجمود وقال: الإسلام دين حي يتفاعل مع كل زمان ومكان',action:'فكر بعقلك ولا تقلد تقليداً أعمى — افهم الأشياء قبل أن تقبلها أو ترفضها',young:'الشيخ الغزالي يعلمنا أن نفكر بعقولنا! لا تقبل كل شيء تسمعه — فكر واسأل 🔄'},
    en:{title:'Theological Renewal',desc:'Sheikh al-Ghazali was a reformer in Islamic thought. He rejected rigidity and blind imitation and called for a contemporary understanding of Islam that preserves fundamentals while engaging with change. He called for independent reasoning in understanding texts.',verse:'Indeed, Allah will not change the condition of a people until they change what is in themselves',verseRef:'Ar-Rad 11',hadith:'He rejected rigidity and said: Islam is a living religion that interacts with every time and place',action:'Think with your own mind and do not blindly follow — understand things before accepting or rejecting them',young:'Sheikh al-Ghazali teaches us to think with our own minds! Do not accept everything you hear — think and ask 🔄'},
    fr:{title:'Le Renouveau Théologique',desc:"Le Sheikh al-Ghazali était un réformateur de la pensée islamique. Il a rejeté la rigidité et l'imitation aveugle et a appelé à une compréhension contemporaine de l'Islam qui préserve les fondamentaux tout en s'adaptant aux changements.",verse:'Allah ne change pas la condition d\'un peuple tant qu\'il ne change pas ce qui est en lui-même',verseRef:'Ar-Rad 11',hadith:"Il a rejeté la rigidité et a dit : L'Islam est une religion vivante qui interagit avec chaque époque",action:"Pensez par vous-même et ne suivez pas aveuglément — comprenez les choses avant de les accepter",young:"Le Sheikh nous apprend à penser par nous-mêmes ! N'accepte pas tout ce que tu entends — réfléchis 🔄"}
  },
  {
    id:10, emoji:'🇩🇿',
    ar:{title:'السنوات الجزائرية',desc:'قضى الشيخ الغزالي سنوات مهمة في الجزائر أستاذاً في جامعة الأمير عبد القادر بقسنطينة. أحب الجزائر وأحبه أهلها. أسهم في تكوين جيل من العلماء والمفكرين الجزائريين وترك أثراً كبيراً في الحياة الفكرية والدينية في الجزائر.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'في الجزائر وجد الغزالي بيئة علمية خصبة أحبها وأحبته',action:'أينما ذهبت، اترك أثراً إيجابياً في المكان والناس — كن مثل الشجرة التي تعطي ثمارها للجميع',young:'الشيخ الغزالي أحب الجزائر وعلّم فيها سنوات طويلة — كن محبوباً أينما ذهبت! 🇩🇿'},
    en:{title:'The Algerian Years',desc:'Sheikh al-Ghazali spent important years in Algeria as a professor at the University of Emir Abdelkader in Constantine. He loved Algeria and its people loved him. He contributed to forming a generation of Algerian scholars and thinkers and left a great impact on intellectual and religious life there.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Maidah 2',hadith:'In Algeria, Ghazali found a fertile academic environment that he loved and that loved him',action:'Wherever you go, leave a positive impact on the place and people — be like a tree that gives its fruit to everyone',young:'Sheikh al-Ghazali loved Algeria and taught there for many years — be loved wherever you go! 🇩🇿'},
    fr:{title:'Les Années Algériennes',desc:"Le Sheikh al-Ghazali a passé des années importantes en Algérie comme professeur à l'Université Emir Abdelkader à Constantine. Il a aimé l'Algérie et ses habitants l'ont aimé. Il a contribué à former une génération de savants et penseurs algériens.",verse:'Et coopérez dans la bonté et la piété',verseRef:'Al-Maidah 2',hadith:"En Algérie, Ghazali a trouvé un environnement académique fertile qu'il a aimé et qui l'a aimé",action:"Où que vous alliez, laissez un impact positif — soyez comme un arbre qui donne ses fruits à tous",young:"Le Sheikh al-Ghazali a aimé l'Algérie et y a enseigné pendant des années — sois aimé partout ! 🇩🇿"}
  },
  {
    id:11, emoji:'🏆',
    ar:{title:'جائزة الملك فيصل',desc:'حصل الشيخ الغزالي على جائزة الملك فيصل العالمية لخدمة الإسلام عام ١٩٨٩ تقديراً لجهوده الكبيرة الممتدة على مدى أربعة عقود في نشر الفكر الإسلامي المعتدل والدفاع عن حقوق المسلمين والإنسانية جمعاء. تعد هذه الجائزة من أرفع الجوائز الإسلامية في العالم وقد منحت لكبار العلماء والمفكرين. استقبل الجائزة بتواضع وقال إنها تكريم للفكر الإسلامي الوسطي لا له شخصياً. خصص جزءاً من قيمة الجائزة لدعم طلاب العلم والمشاريع الخيرية.',verse:'هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ',verseRef:'الرحمن ٦٠',hadith:'الجائزة تكريم لـ٤٠ عاماً من العطاء المتواصل في خدمة الإسلام',action:'اعمل بإخلاص ولا تنتظر المكافأة — لكن اعلم أن العمل الجاد يُقدّر دائماً',young:'الشيخ الغزالي حصل على جائزة عالمية! عندما تعمل بجد وإخلاص، ستُكافأ يوماً ما 🏆'},
    en:{title:'King Faisal Prize',desc:'Sheikh al-Ghazali received the King Faisal International Prize for Service to Islam in 1989. This prize honored his great efforts in spreading moderate Islamic thought and defending the rights of Muslims and all of humanity.',verse:'Is the reward for good anything but good?',verseRef:'Ar-Rahman 60',hadith:'The prize honored 40 years of continuous giving in service of Islam',action:'Work sincerely and do not wait for rewards — but know that hard work is always appreciated',young:'Sheikh al-Ghazali won a world prize! When you work hard and sincerely, you will be rewarded someday 🏆'},
    fr:{title:'Le Prix Roi Faysal',desc:"Le Sheikh al-Ghazali a reçu le Prix International Roi Faysal pour le Service de l'Islam en 1989. Ce prix a honoré ses grands efforts pour répandre la pensée islamique modérée et défendre les droits des musulmans et de toute l'humanité.",verse:'La récompense du bien est-elle autre chose que le bien ?',verseRef:'Ar-Rahman 60',hadith:"Le prix a honoré 40 ans de don continu au service de l'Islam",action:"Travaillez avec sincérité sans attendre de récompense — mais sachez que le travail dur est toujours apprécié",young:"Le Sheikh al-Ghazali a gagné un prix mondial ! Quand tu travailles dur, tu seras récompensé un jour 🏆"}
  },
  {
    id:12, emoji:'🎤',
    ar:{title:'الخطبة الأخيرة',desc:'ألقى الشيخ الغزالي خطبته الأخيرة في مؤتمر بالرياض عام ١٩٩٦. تحدث فيها عن وحدة الأمة الإسلامية وضرورة التجديد ومحاربة التطرف. كانت خطبة مؤثرة ختم بها حياة حافلة بالعطاء والدعوة.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'ختم حياته بالدعوة إلى الوحدة ومحاربة التفرق — كما بدأها',action:'عش حياتك وأنت تعمل لهدف نبيل — واجعل آخر أعمالك خيراً كأولها',young:'الشيخ الغزالي كان يتحدث عن الخير حتى آخر يوم في حياته — كن مثله! 🎤'},
    en:{title:'The Final Speech',desc:'Sheikh al-Ghazali delivered his final speech at a conference in Riyadh in 1996. He spoke about the unity of the Muslim nation, the need for renewal, and fighting extremism. It was a moving speech that concluded a life full of giving and preaching.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'He ended his life calling for unity and fighting division — just as he began it',action:'Live your life working for a noble goal — and make your last deeds as good as your first',young:'Sheikh al-Ghazali was talking about goodness until his very last day — be like him! 🎤'},
    fr:{title:'Le Dernier Discours',desc:"Le Sheikh al-Ghazali a prononcé son dernier discours lors d'une conférence à Riyad en 1996. Il a parlé de l'unité de la nation musulmane, de la nécessité du renouveau et de la lutte contre l'extrémisme. Un discours émouvant qui a conclu une vie de don.",verse:'Et cramponnez-vous tous ensemble au câble d\'Allah et ne soyez pas divisés',verseRef:'Al Imran 103',hadith:"Il a terminé sa vie en appelant à l'unité et en combattant la division — comme il l'avait commencée",action:"Vivez votre vie en travaillant pour un objectif noble — que vos derniers actes soient aussi bons que les premiers",young:"Le Sheikh al-Ghazali parlait du bien jusqu'à son dernier jour — sois comme lui ! 🎤"}
  },
  {
    id:13, emoji:'🕊️',
    ar:{title:'الوفاة في الرياض ١٩٩٦',desc:'توفي الشيخ محمد الغزالي في ٩ مارس ١٩٩٦ في الرياض بالمملكة العربية السعودية عن عمر ناهز ٧٨ عاماً. توفي بعد إلقاء خطبته الأخيرة في مؤتمر دولي. بكاه المسلمون في كل مكان وشيّعه آلاف المحبين.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',verseRef:'آل عمران ١٨٥',hadith:'رحل وترك إرثاً لا يموت — ٩٤ كتاباً وملايين من المتأثرين بفكره',action:'اعمل عملاً يبقى بعدك — العلم النافع والصدقة الجارية والذكر الحسن',young:'الشيخ الغزالي رحل لكن كتبه وأفكاره باقية! اترك أثراً جميلاً في الدنيا 🕊️'},
    en:{title:'Death in Riyadh 1996',desc:'Sheikh Mohammed al-Ghazali passed away on March 9, 1996, in Riyadh, Saudi Arabia, at the age of 78. He died after delivering his final speech at an international conference. Muslims everywhere mourned him and thousands attended his funeral.',verse:'Every soul will taste death',verseRef:'Al Imran 185',hadith:'He departed and left an immortal legacy — 94 books and millions influenced by his thought',action:'Do work that outlives you — beneficial knowledge, ongoing charity, and a good reputation',young:'Sheikh al-Ghazali passed away but his books and ideas live on! Leave a beautiful mark in this world 🕊️'},
    fr:{title:'Décès à Riyad 1996',desc:"Le Sheikh Mohammed al-Ghazali est décédé le 9 mars 1996 à Riyad, en Arabie Saoudite, à l'âge de 78 ans. Il est décédé après avoir prononcé son dernier discours lors d'une conférence internationale. Les musulmans du monde entier l'ont pleuré.",verse:'Toute âme goûtera la mort',verseRef:'Al Imran 185',hadith:'Il est parti en laissant un héritage immortel — 94 livres et des millions influencés par sa pensée',action:'Faites un travail qui vous survit — un savoir utile, une charité continue et une bonne réputation',young:"Le Sheikh al-Ghazali est parti mais ses livres et ses idées vivent ! Laisse une belle empreinte 🕊️"}
  },
  {
    id:14, emoji:'🌍',
    ar:{title:'التأثير في الأجيال',desc:'أثّر الشيخ الغزالي في ملايين المسلمين حول العالم. كتبه تُدرّس في الجامعات وتُقرأ في البيوت. فكره المعتدل المتجدد ألهم أجيالاً من العلماء والدعاة والمفكرين. هو أحد أكثر العلماء المسلمين تأثيراً في القرن العشرين.',verse:'وَالَّذِينَ جَاءُوا مِنْ بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',verseRef:'الحشر ١٠',hadith:'تأثيره يمتد من مصر إلى الجزائر ومن السعودية إلى إندونيسيا — فكر بلا حدود',action:'كن مصدر إلهام لمن حولك — كلمة طيبة واحدة قد تغير حياة إنسان للأبد',young:'الشيخ الغزالي ألهم الملايين حول العالم! أنت أيضاً يمكنك أن تلهم من حولك 🌍'},
    en:{title:'Influence on Generations',desc:'Sheikh al-Ghazali influenced millions of Muslims around the world. His books are studied in universities and read in homes. His moderate, renewed thought inspired generations of scholars, preachers, and thinkers. He is one of the most influential Muslim scholars of the 20th century.',verse:'And those who came after them say: Our Lord, forgive us and our brothers who preceded us in faith',verseRef:'Al-Hashr 10',hadith:'His influence extends from Egypt to Algeria and from Saudi Arabia to Indonesia — thought without borders',action:'Be a source of inspiration to those around you — one kind word can change someone\'s life forever',young:'Sheikh al-Ghazali inspired millions around the world! You too can inspire those around you 🌍'},
    fr:{title:"L'Influence sur les Générations",desc:"Le Sheikh al-Ghazali a influencé des millions de musulmans dans le monde. Ses livres sont étudiés dans les universités et lus dans les foyers. Sa pensée modérée et renouvelée a inspiré des générations de savants et penseurs. Il est l'un des savants musulmans les plus influents du 20e siècle.",verse:'Et ceux qui sont venus après eux disent : Seigneur, pardonne-nous ainsi qu\'à nos frères qui nous ont précédés dans la foi',verseRef:'Al-Hashr 10',hadith:"Son influence s'étend de l'Égypte à l'Algérie et de l'Arabie Saoudite à l'Indonésie",action:"Soyez une source d'inspiration pour ceux qui vous entourent — un mot gentil peut changer une vie",young:"Le Sheikh al-Ghazali a inspiré des millions de personnes ! Toi aussi tu peux inspirer ceux qui t'entourent 🌍"}
  },
  {
    id:15, emoji:'💬',
    ar:{title:'أقوال وحكم خالدة',desc:'ترك الشيخ الغزالي أقوالاً وحكماً خالدة تُلهم الناس حتى اليوم. من أشهر أقواله: "إن الإسلام لا ينهض بأعداد المصلين بل بالعقول المفكرة" و"أعداء الإسلام الحقيقيون هم الجهل والفقر والمرض". كلماته تجمع بين العمق والبساطة.',verse:'وَقُولُوا لِلنَّاسِ حُسْنًا',verseRef:'البقرة ٨٣',hadith:'قال: "لا يصلح آخر هذه الأمة إلا بما صلح به أولها: الإيمان والعمل"',action:'اكتب حكمة تؤمن بها وشاركها مع من حولك — كلماتك قد تعيش أطول منك',young:'الشيخ الغزالي ترك كلمات جميلة يقرأها الناس حتى اليوم! اكتب أفكارك الجميلة أنت أيضاً 💬'},
    en:{title:'Timeless Quotes and Wisdom',desc:'Sheikh al-Ghazali left timeless sayings that inspire people to this day. Among his most famous: "Islam does not rise with the number of worshippers but with thinking minds" and "The real enemies of Islam are ignorance, poverty, and disease." His words combine depth and simplicity.',verse:'And speak to people with goodness',verseRef:'Al-Baqarah 83',hadith:'He said: "The last of this nation will only be reformed by what reformed its first: faith and action"',action:'Write a piece of wisdom you believe in and share it with those around you — your words may outlive you',young:'Sheikh al-Ghazali left beautiful words that people still read today! Write your beautiful ideas too 💬'},
    fr:{title:'Citations et Sagesse Éternelles',desc:"Le Sheikh al-Ghazali a laissé des paroles intemporelles qui inspirent les gens jusqu'à aujourd'hui. Parmi les plus célèbres : « L'Islam ne progresse pas par le nombre de priants mais par les esprits pensants » et « Les vrais ennemis de l'Islam sont l'ignorance, la pauvreté et la maladie. »",verse:'Et parlez aux gens avec bonté',verseRef:'Al-Baqarah 83',hadith:'Il a dit : « La dernière de cette nation ne sera réformée que par ce qui a réformé la première : la foi et l\'action »',action:"Écrivez une sagesse en laquelle vous croyez et partagez-la — vos mots peuvent vous survivre",young:"Le Sheikh al-Ghazali a laissé de belles paroles que les gens lisent encore ! Écris tes belles idées toi aussi 💬"}
  },
  {
    id:16, emoji:'👩‍🏫',
    ar:{title:'تأثيره على حقوق المرأة',desc:'لم يكتفِ الشيخ الغزالي بالدفاع النظري عن حقوق المرأة بل مارس ذلك عملياً في حياته ومحاضراته. كان يشجع النساء على طلب العلم والمشاركة في الحياة العامة ويرفض بشدة حرمانهن من حقوقهن باسم الدين. كتب فصولاً كاملة في كتبه عن ظلم المرأة في المجتمعات المسلمة وفرّق بين ما هو إسلامي حقيقي وما هو عادات وتقاليد جاهلية. كان يقول إن المجتمع الذي يظلم نصفه لا يمكن أن ينهض أبداً، وأن تعليم المرأة فريضة كتعليم الرجل تماماً. أثار مواقفه ضجة واسعة في عصره لكنه لم يتراجع أبداً عن قناعاته. تأثرت أجيال من النساء المسلمات بكتاباته وخطبه، ورأين فيه صوتاً شجاعاً يدافع عن حقوقهن من داخل المرجعية الإسلامية. من أبرز كتبه في هذا المجال: «قضايا المرأة بين التقاليد الراكدة والوافدة» و«السنة النبوية بين أهل الفقه وأهل الحديث».',verse:'وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَى بَعْضٍ لِلرِّجَالِ نَصِيبٌ مِمَّا اكْتَسَبُوا وَلِلنِّسَاءِ نَصِيبٌ مِمَّا اكْتَسَبْنَ',verseRef:'النساء ٣٢',hadith:'قال الغزالي: المجتمع الذي يظلم نصفه لا ينهض أبداً — والإسلام أنصف المرأة قبل كل المواثيق الدولية',action:'دافع عن حق المرأة في التعليم والعمل اليوم — وارفض كل عادة تظلمها باسم الدين',young:'الشيخ الغزالي علّمنا أن البنات والأولاد متساوون في الحقوق! كلنا نستحق التعليم والاحترام 👩‍🏫'},
    en:{title:'His Influence on Women\'s Rights',desc:'Sheikh al-Ghazali did not just defend women\'s rights theoretically — he practiced it in his life and lectures. He encouraged women to seek knowledge and participate in public life, and strongly rejected depriving them of rights in the name of religion. He wrote entire chapters distinguishing true Islamic teachings from pre-Islamic customs and traditions. He would say that a society which oppresses half of itself can never rise, and that educating women is an obligation just like educating men. His positions caused great controversy in his era but he never retreated from his convictions. Generations of Muslim women were influenced by his writings and saw in him a courageous voice defending their rights from within the Islamic framework. Among his notable works on this topic: "Women\'s Issues Between Stagnant and Foreign Traditions" and "The Prophetic Sunnah Between the People of Fiqh and the People of Hadith."',verse:'And do not wish for that by which Allah has made some of you exceed others. For men is a share of what they have earned, and for women is a share of what they have earned',verseRef:'An-Nisa 32',hadith:'Ghazali said: A society that oppresses half of itself can never rise — and Islam gave women their rights before all international charters',action:'Defend women\'s right to education and work today — reject any custom that oppresses them in the name of religion',young:'Sheikh al-Ghazali taught us that boys and girls are equal in rights! We all deserve education and respect 👩‍🏫'},
    fr:{title:'Son Influence sur les Droits des Femmes',desc:"Le Sheikh al-Ghazali n'a pas seulement défendu les droits des femmes en théorie — il les a pratiqués dans sa vie et ses conférences. Il encourageait les femmes à chercher le savoir et à participer à la vie publique, et rejetait fermement leur privation de droits au nom de la religion. Il a écrit des chapitres entiers distinguant les vrais enseignements islamiques des coutumes préislamiques. Il disait qu'une société qui opprime sa moitié ne peut jamais se relever, et que l'éducation des femmes est une obligation comme celle des hommes. Ses positions ont provoqué une grande controverse mais il n'a jamais reculé. Des générations de femmes musulmanes ont été influencées par ses écrits. Parmi ses oeuvres notables : « Les Questions Féminines entre Traditions Stagnantes et Importées » et « La Sunna Prophétique entre les Gens du Fiqh et les Gens du Hadith ».",verse:'Et ne convoitez pas ce par quoi Allah a favorisé certains d\'entre vous par rapport aux autres. Aux hommes revient une part de ce qu\'ils ont acquis et aux femmes une part',verseRef:'An-Nisa 32',hadith:'Ghazali a dit : Une société qui opprime sa moitié ne se relèvera jamais — l\'Islam a donné aux femmes leurs droits avant toutes les chartes internationales',action:"Défendez le droit des femmes à l'éducation et au travail — rejetez toute coutume qui les opprime au nom de la religion",young:"Le Sheikh al-Ghazali nous a appris que filles et garçons ont les mêmes droits ! Nous méritons tous l'éducation et le respect 👩‍🏫"}
  },
  {
    id:17, emoji:'🎙️',
    ar:{title:'منهج المناظرة والحوار',desc:'تميّز الشيخ الغزالي بأسلوبه الفريد في المناظرة والحوار الفكري. كان يحاور خصومه بالحجة والدليل لا بالتهجم والتكفير. شارك في عشرات المناظرات الفكرية مع العلمانيين والمتطرفين على حد سواء، وكان يؤمن أن الحق لا يحتاج إلى صوت عالٍ بل إلى حجة قوية. وضع قواعد للحوار المثمر أهمها: احترام المحاور وعدم التشخيص والاستماع قبل الرد والبحث عن نقاط الاتفاق قبل الاختلاف. كان يقول: "أنا أحاور من أختلف معه لا لأغلبه بل لأصل معه إلى الحقيقة." تأثر بهذا المنهج كثير من الدعاة والمفكرين المعاصرين. رفض أسلوب الإقصاء والتشنج وآمن بأن الحوار الحضاري هو السبيل الوحيد لنهضة الأمة. كانت مناظراته تُنشر في الصحف والمجلات وتلقى اهتماماً واسعاً من المثقفين والعامة على حد سواء.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'النحل ١٢٥',hadith:'قال الغزالي: أنا أحاور من أختلف معه لا لأغلبه بل لأصل معه إلى الحقيقة — حكمة في فن الحوار',action:'عندما تختلف مع أحد اليوم حاوره بأدب واستمع له قبل أن ترد — الحوار فن وأخلاق',young:'الشيخ الغزالي كان يحاور الناس بأدب حتى لو اختلفوا معه! تعلم أن تستمع قبل أن تتكلم 🎙️'},
    en:{title:'His Debate Methodology',desc:'Sheikh al-Ghazali was distinguished by his unique style of debate and intellectual dialogue. He would engage opponents with evidence and proof, not with attacks or accusations of disbelief. He participated in dozens of intellectual debates with secularists and extremists alike, believing that truth does not need a loud voice but a strong argument. He established rules for productive dialogue, the most important being: respect your interlocutor, do not personalize, listen before responding, and search for points of agreement before disagreement. He used to say: "I dialogue with those I disagree with not to defeat them but to arrive at truth together." Many contemporary preachers and thinkers were influenced by this methodology. He rejected exclusion and tension and believed that civilized dialogue is the only path to the nation\'s renaissance. His debates were published in newspapers and magazines, attracting wide attention from intellectuals and the public.',verse:'Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best',verseRef:'An-Nahl 125',hadith:'Ghazali said: I dialogue with those I disagree with not to defeat them but to arrive at truth together — wisdom in the art of dialogue',action:'When you disagree with someone today, engage them with courtesy and listen before responding — dialogue is both art and ethics',young:'Sheikh al-Ghazali debated people politely even when they disagreed with him! Learn to listen before you speak 🎙️'},
    fr:{title:'Sa Méthodologie du Débat',desc:"Le Sheikh al-Ghazali se distinguait par son style unique de débat et de dialogue intellectuel. Il engageait ses adversaires avec des preuves et des arguments, pas avec des attaques ou des accusations. Il a participé à des dizaines de débats intellectuels avec des laïcs et des extrémistes, croyant que la vérité n'a pas besoin d'une voix forte mais d'un argument solide. Il a établi des règles pour le dialogue productif : respecter l'interlocuteur, ne pas personnaliser, écouter avant de répondre et chercher les points d'accord avant le désaccord. Il disait : « Je dialogue avec ceux dont je diffère non pour les vaincre mais pour arriver ensemble à la vérité. » De nombreux prédicateurs et penseurs contemporains ont été influencés par cette méthodologie. Il rejetait l'exclusion et croyait que le dialogue civilisé est la seule voie vers la renaissance de la nation. Ses débats étaient publiés dans les journaux et attiraient l'attention des intellectuels et du public.",verse:'Appelle à la voie de ton Seigneur par la sagesse et la bonne exhortation, et discute avec eux de la meilleure façon',verseRef:'An-Nahl 125',hadith:'Ghazali a dit : Je dialogue avec ceux dont je diffère non pour les vaincre mais pour arriver à la vérité — sagesse dans l\'art du dialogue',action:"Quand vous êtes en désaccord avec quelqu'un, dialoguez poliment et écoutez avant de répondre — le dialogue est un art et une éthique",young:"Le Sheikh al-Ghazali débattait poliment même avec ceux qui n'étaient pas d'accord ! Apprends à écouter avant de parler 🎙️"}
  },
  {
    id:18, emoji:'🧑‍🎓',
    ar:{title:'تلاميذه وأثره العلمي',desc:'تتلمذ على يد الشيخ الغزالي مئات من العلماء والدعاة والمفكرين الذين حملوا رسالته وفكره إلى أنحاء العالم الإسلامي. من أبرز تلاميذه ومن تأثروا به: الشيخ يوسف القرضاوي والشيخ محمد عمارة والدكتور أحمد كمال أبو المجد والدكتور محمد سليم العوا وكثيرون غيرهم. لم يكن تعليمه مجرد نقل معلومات بل كان يغرس في تلاميذه منهج التفكير النقدي والاجتهاد والاستقلال الفكري. كان يشجعهم على مخالفته إذا رأوا الحق في غير ما يقول ويرفض أن يكون مقلَّداً تقليداً أعمى. تخرج على يديه في الجزائر جيل كامل من العلماء الجزائريين الذين أثّروا في الحياة الدينية والفكرية في بلادهم. أسس مدرسة فكرية وسطية تجمع بين الأصالة والمعاصرة وتحارب الجمود والتطرف في آن واحد. كان يقول لتلاميذه: "لا تحملوا أفكاري بل احملوا منهجي في التفكير فالأفكار تتغير والمنهج يبقى."',verse:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',verseRef:'الفرقان ٧٤',hadith:'قال الغزالي لتلاميذه: لا تحملوا أفكاري بل احملوا منهجي في التفكير — فالأفكار تتغير والمنهج يبقى',action:'علّم غيرك ما تعرفه بإخلاص وصبر — فالعلم الذي تنشره صدقة جارية تبقى بعدك',young:'الشيخ الغزالي علّم مئات الطلاب الذين أصبحوا علماء كباراً! علّم أصدقاءك ما تعرفه 🧑‍🎓'},
    en:{title:'His Students and Scholarly Legacy',desc:'Hundreds of scholars, preachers, and thinkers studied under Sheikh al-Ghazali and carried his message and thought throughout the Islamic world. Among his most prominent students and those influenced by him: Sheikh Yusuf al-Qaradawi, Sheikh Muhammad Imara, Dr. Ahmad Kamal Abu al-Majd, Dr. Muhammad Salim al-Awa, and many others. His teaching was not merely transferring information but instilling in his students a methodology of critical thinking, independent reasoning, and intellectual independence. He would encourage them to disagree with him if they saw truth elsewhere and refused to be blindly followed. In Algeria, he mentored an entire generation of Algerian scholars who influenced religious and intellectual life in their country. He established a centrist intellectual school combining authenticity with contemporaneity and fighting both rigidity and extremism. He would tell his students: "Do not carry my ideas but carry my methodology of thinking — ideas change but methodology endures."',verse:'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us leaders for the righteous',verseRef:'Al-Furqan 74',hadith:'Ghazali told his students: Do not carry my ideas but carry my methodology of thinking — ideas change but methodology endures',action:'Teach others what you know with sincerity and patience — knowledge you share is ongoing charity that outlives you',young:'Sheikh al-Ghazali taught hundreds of students who became great scholars! Teach your friends what you know 🧑‍🎓'},
    fr:{title:'Ses Étudiants et son Héritage Savant',desc:"Des centaines de savants, prédicateurs et penseurs ont étudié sous le Sheikh al-Ghazali et ont porté son message dans le monde islamique. Parmi ses étudiants les plus éminents : le Sheikh Yusuf al-Qaradawi, le Sheikh Muhammad Imara, le Dr. Ahmad Kamal Abu al-Majd, le Dr. Muhammad Salim al-Awa et bien d'autres. Son enseignement n'était pas un simple transfert d'informations mais l'inculcation d'une méthodologie de pensée critique, de raisonnement indépendant et d'indépendance intellectuelle. Il les encourageait à le contredire s'ils voyaient la vérité ailleurs et refusait d'être suivi aveuglément. En Algérie, il a formé une génération entière de savants algériens qui ont influencé la vie religieuse et intellectuelle de leur pays. Il a fondé une école intellectuelle centriste combinant authenticité et contemporanéité. Il disait à ses étudiants : « Ne portez pas mes idées mais portez ma méthodologie de pensée — les idées changent mais la méthodologie perdure. »",verse:'Notre Seigneur, accorde-nous en nos épouses et descendants la joie de nos yeux et fais de nous des guides pour les pieux',verseRef:'Al-Furqan 74',hadith:'Ghazali disait à ses étudiants : Ne portez pas mes idées mais ma méthodologie — les idées changent mais la méthode perdure',action:"Enseignez aux autres avec sincérité et patience — le savoir partagé est une charité continue qui vous survit",young:"Le Sheikh al-Ghazali a enseigné à des centaines d'étudiants devenus de grands savants ! Enseigne à tes amis 🧑‍🎓"}
  },
  {
    id:19, emoji:'🕌',
    ar:{title:'علاقته بالأزهر الشريف',desc:'ظل الشيخ الغزالي مرتبطاً بالأزهر الشريف طوال حياته رغم خلافاته مع بعض شيوخه. تعلّم في الأزهر وتخرج منه وعاد إليه محاضراً ومفكراً. كان ينتقد الأزهر حين يراه يتخلف عن دوره في قيادة الفكر الإسلامي ويطالبه بالتجديد والنهوض. كتب مقالات كثيرة عن إصلاح التعليم الأزهري وضرورة المزج بين العلوم الشرعية والعلوم الحديثة. رغم انتقاداته كان يفخر بالأزهر ويعتبره المرجعية العلمية الأولى في العالم الإسلامي. كان يقول: "الأزهر ملك الأمة كلها وليس ملك شيوخه — وعلينا جميعاً أن نصلحه ونطوّره لأنه ضمير الإسلام." دافع عن استقلال الأزهر عن السلطة السياسية ورأى أن تدخل الحكومات في شؤونه يضعفه. ترك بصمة كبيرة في الأزهر من خلال تلاميذه الذين تولوا مناصب علمية رفيعة فيه.',verse:'فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ وَلِيُنْذِرُوا قَوْمَهُمْ إِذَا رَجَعُوا إِلَيْهِمْ',verseRef:'التوبة ١٢٢',hadith:'قال الغزالي: الأزهر ملك الأمة كلها وليس ملك شيوخه — وعلينا أن نصلحه لأنه ضمير الإسلام',action:'احترم مؤسساتك التعليمية وساهم في إصلاحها — النقد البنّاء حب وليس عداوة',young:'الشيخ الغزالي أحب جامعته الأزهر وأراد لها أن تكون الأفضل! أحب مدرستك وساعد في تحسينها 🕌'},
    en:{title:'His Relationship with Al-Azhar',desc:'Sheikh al-Ghazali remained connected to Al-Azhar throughout his life despite his disagreements with some of its scholars. He learned at Al-Azhar, graduated from it, and returned as a lecturer and thinker. He criticized Al-Azhar when he saw it falling behind its role in leading Islamic thought and demanded renewal and progress. He wrote many articles about reforming Al-Azhar\'s education system and the necessity of combining religious sciences with modern sciences. Despite his criticisms, he took pride in Al-Azhar and considered it the primary scholarly authority in the Islamic world. He said: "Al-Azhar belongs to the entire nation, not to its scholars alone — and we all must reform it because it is the conscience of Islam." He defended Al-Azhar\'s independence from political authority and believed government interference weakened it. He left a great imprint on Al-Azhar through his students who assumed senior scholarly positions within it.',verse:'A group from each community should devote themselves to gaining knowledge in religion and warn their people when they return to them',verseRef:'At-Tawbah 122',hadith:'Ghazali said: Al-Azhar belongs to the entire nation, not just its scholars — we must reform it because it is the conscience of Islam',action:'Respect your educational institutions and contribute to reforming them — constructive criticism is love, not enmity',young:'Sheikh al-Ghazali loved his university Al-Azhar and wanted it to be the best! Love your school and help improve it 🕌'},
    fr:{title:'Sa Relation avec Al-Azhar',desc:"Le Sheikh al-Ghazali est resté lié à Al-Azhar tout au long de sa vie malgré ses désaccords avec certains de ses savants. Il a étudié à Al-Azhar, en est diplômé et y est retourné comme conférencier et penseur. Il critiquait Al-Azhar quand il le voyait manquer à son rôle de leader de la pensée islamique et exigeait renouveau et progrès. Il a écrit de nombreux articles sur la réforme de l'enseignement azharien et la nécessité de combiner sciences religieuses et sciences modernes. Malgré ses critiques, il était fier d'Al-Azhar et le considérait comme l'autorité savante principale du monde islamique. Il disait : « Al-Azhar appartient à toute la nation, pas seulement à ses savants — nous devons tous le réformer car il est la conscience de l'Islam. » Il a défendu l'indépendance d'Al-Azhar vis-à-vis du pouvoir politique. Il a laissé une grande empreinte grâce à ses étudiants qui ont occupé des postes savants élevés en son sein.",verse:'Qu\'un groupe de chaque communauté se consacre à l\'étude de la religion pour avertir les leurs à leur retour',verseRef:'At-Tawbah 122',hadith:'Ghazali a dit : Al-Azhar appartient à toute la nation — nous devons le réformer car il est la conscience de l\'Islam',action:"Respectez vos institutions éducatives et contribuez à les réformer — la critique constructive est un acte d'amour",young:"Le Sheikh al-Ghazali aimait son université Al-Azhar et voulait qu'elle soit la meilleure ! Aime ton école et aide-la à s'améliorer 🕌"}
  },
  {
    id:20, emoji:'🕊️',
    ar:{title:'رؤيته للوحدة الإسلامية',desc:'كان الشيخ الغزالي من أشد المنادين بالوحدة الإسلامية ونبذ الفرقة والتعصب المذهبي. رأى أن الخلافات المذهبية بين السنة والشيعة وغيرهم من الفرق الإسلامية هي خلافات فرعية لا ينبغي أن تمزق الأمة. كان يقول: "نحن أمة واحدة نؤمن بإله واحد ونبي واحد وقرآن واحد وقبلة واحدة — فلماذا نتفرق؟" دعا إلى حوار المذاهب والتقريب بينها على أساس القواسم المشتركة الكثيرة. زار إيران وحاور علماءها ودعا إلى تجاوز الحساسيات التاريخية. كان يرفض تكفير أي فرقة إسلامية ويرى أن الاختلاف في الفروع رحمة لا نقمة. خصص كتباً ومقالات كثيرة لموضوع الوحدة الإسلامية وكان يتألم لحال الأمة المتفرقة المتناحرة. في خطبته الأخيرة قبل وفاته ناشد الأمة الإسلامية أن تتوحد وتتجاوز خلافاتها لمواجهة التحديات المشتركة. رأى أن الوحدة ليست خياراً بل فريضة شرعية أمر بها القرآن الكريم والسنة النبوية الشريفة.',verse:'إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٩٢',hadith:'قال الغزالي: نحن أمة واحدة نؤمن بإله واحد ونبي واحد وقرآن واحد — فلماذا نتفرق؟',action:'تواصل مع مسلم من مذهب أو ثقافة مختلفة اليوم — ابحث عما يجمعكم لا عما يفرقكم',young:'الشيخ الغزالي أراد أن يكون المسلمون يداً واحدة! تعاون مع الجميع ولا تتشاجر بسبب الاختلافات 🕊️'},
    en:{title:'His Vision of Islamic Unity',desc:'Sheikh al-Ghazali was among the strongest advocates for Islamic unity and the rejection of sectarian division and fanaticism. He saw that sectarian differences between Sunnis, Shias, and other Islamic groups are secondary differences that should not tear the nation apart. He would say: "We are one nation believing in one God, one Prophet, one Quran, and one Qiblah — so why do we divide?" He called for dialogue between schools of thought and bringing them closer together based on their many commonalities. He visited Iran, engaged with its scholars, and called for overcoming historical sensitivities. He refused to declare any Islamic sect as disbelievers and saw differences in secondary matters as mercy, not curse. He dedicated many books and articles to the topic of Islamic unity and grieved over the divided and quarreling state of the nation. In his final speech before his death, he implored the Muslim nation to unite and transcend its differences to face common challenges. He believed unity was not an option but a religious obligation commanded by the Quran and the Prophetic tradition.',verse:'Indeed this nation of yours is one nation, and I am your Lord, so worship Me',verseRef:'Al-Anbiya 92',hadith:'Ghazali said: We are one nation believing in one God, one Prophet, one Quran — so why do we divide?',action:'Connect with a Muslim from a different school of thought or culture today — look for what unites you, not what divides you',young:'Sheikh al-Ghazali wanted all Muslims to be one hand! Cooperate with everyone and don\'t argue over differences 🕊️'},
    fr:{title:'Sa Vision de l\'Unité Islamique',desc:"Le Sheikh al-Ghazali était l'un des plus fervents défenseurs de l'unité islamique et du rejet de la division sectaire et du fanatisme. Il voyait les différences sectaires entre sunnites, chiites et autres groupes islamiques comme des différences secondaires qui ne devraient pas déchirer la nation. Il disait : « Nous sommes une seule nation croyant en un seul Dieu, un seul Prophète, un seul Coran et une seule Qibla — alors pourquoi nous divisons-nous ? » Il appelait au dialogue entre les écoles de pensée et à leur rapprochement. Il a visité l'Iran, dialogué avec ses savants et appelé à surmonter les sensibilités historiques. Il refusait de déclarer mécréante toute secte islamique et voyait les différences dans les questions secondaires comme une miséricorde. Il a consacré de nombreux livres et articles à l'unité islamique et souffrait de l'état divisé de la nation. Dans son dernier discours, il a imploré la nation musulmane de s'unir face aux défis communs. Il croyait que l'unité n'était pas un choix mais une obligation religieuse ordonnée par le Coran et la Tradition prophétique.",verse:'Cette communauté qui est la vôtre est une communauté unique, et Je suis votre Seigneur, adorez-Moi donc',verseRef:'Al-Anbiya 92',hadith:'Ghazali a dit : Nous sommes une nation croyant en un seul Dieu, un seul Prophète, un seul Coran — pourquoi nous diviser ?',action:"Connectez-vous avec un musulman d'une école de pensée différente — cherchez ce qui vous unit, pas ce qui vous divise",young:"Le Sheikh al-Ghazali voulait que tous les musulmans soient unis ! Coopère avec tout le monde et ne te dispute pas pour les différences 🕊️"}
  }
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {
    ar:{q:'في أي عام وُلد الشيخ محمد الغزالي؟',opts:['١٩١٠','١٩١٧','١٩٢٠','١٩٢٥'],correct:1,hint:'وُلد في نفس العام الذي قامت فيه الثورة البلشفية',quran:'العلق ١'},
    en:{q:'In what year was Sheikh Mohammed al-Ghazali born?',opts:['1910','1917','1920','1925'],correct:1,hint:'He was born the same year as the Bolshevik Revolution',quran:'Al-Alaq 1'},
    fr:{q:'En quelle année le Sheikh Mohammed al-Ghazali est-il né ?',opts:['1910','1917','1920','1925'],correct:1,hint:'Il est né la même année que la Révolution bolchevique',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'كم كتاباً ألّف الشيخ الغزالي تقريباً؟',opts:['٥٠ كتاباً','٧٠ كتاباً','٩٤ كتاباً','١٢٠ كتاباً'],correct:2,hint:'العدد قريب من المئة',quran:'طه ١١٤'},
    en:{q:'Approximately how many books did Sheikh al-Ghazali write?',opts:['50 books','70 books','94 books','120 books'],correct:2,hint:'The number is close to one hundred',quran:'Taha 114'},
    fr:{q:'Combien de livres le Sheikh al-Ghazali a-t-il écrits environ ?',opts:['50 livres','70 livres','94 livres','120 livres'],correct:2,hint:'Le nombre est proche de cent',quran:'Taha 114'}
  },
  {
    ar:{q:'في أي جامعة جزائرية درّس الشيخ الغزالي؟',opts:['جامعة الجزائر','جامعة وهران','جامعة الأمير عبد القادر بقسنطينة','جامعة باتنة'],correct:2,hint:'هذه الجامعة في مدينة شرق الجزائر',quran:'التوبة ١٢٢'},
    en:{q:'At which Algerian university did Sheikh al-Ghazali teach?',opts:['University of Algiers','University of Oran','University of Emir Abdelkader in Constantine','University of Batna'],correct:2,hint:'This university is in a city in eastern Algeria',quran:'At-Tawbah 122'},
    fr:{q:'Dans quelle université algérienne le Sheikh al-Ghazali a-t-il enseigné ?',opts:["Université d'Alger","Université d'Oran",'Université Emir Abdelkader de Constantine','Université de Batna'],correct:2,hint:"Cette université est dans une ville de l'est algérien",quran:'At-Tawbah 122'}
  },
  {
    ar:{q:'ما اسم الجائزة العالمية التي حصل عليها الشيخ الغزالي؟',opts:['جائزة نوبل','جائزة الملك فيصل','جائزة الأمم المتحدة','جائزة العالم الإسلامي'],correct:1,hint:'هذه الجائزة سعودية',quran:'الرحمن ٦٠'},
    en:{q:'What international prize did Sheikh al-Ghazali receive?',opts:['Nobel Prize','King Faisal Prize','United Nations Prize','Islamic World Prize'],correct:1,hint:'This is a Saudi Arabian prize',quran:'Ar-Rahman 60'},
    fr:{q:'Quel prix international le Sheikh al-Ghazali a-t-il reçu ?',opts:['Prix Nobel','Prix Roi Faysal','Prix des Nations Unies','Prix du Monde Islamique'],correct:1,hint:'C\'est un prix saoudien',quran:'Ar-Rahman 60'}
  },
  {
    ar:{q:'أين توفي الشيخ محمد الغزالي؟',opts:['القاهرة','مكة المكرمة','الرياض','قسنطينة'],correct:2,hint:'توفي في عاصمة المملكة العربية السعودية',quran:'آل عمران ١٨٥'},
    en:{q:'Where did Sheikh Mohammed al-Ghazali pass away?',opts:['Cairo','Mecca','Riyadh','Constantine'],correct:2,hint:'He passed away in the capital of Saudi Arabia',quran:'Al Imran 185'},
    fr:{q:'Où le Sheikh Mohammed al-Ghazali est-il décédé ?',opts:['Le Caire','La Mecque','Riyad','Constantine'],correct:2,hint:"Il est décédé dans la capitale de l'Arabie Saoudite",quran:'Al Imran 185'}
  },
  {
    ar:{q:'في أي مؤسسة تعليمية درس الشيخ الغزالي في مصر؟',opts:['جامعة القاهرة','الأزهر الشريف','دار العلوم','جامعة عين شمس'],correct:1,hint:'هذه أقدم مؤسسة تعليمية إسلامية',quran:'الزمر ٩'},
    en:{q:'At which educational institution did Sheikh al-Ghazali study in Egypt?',opts:['Cairo University','Al-Azhar','Dar al-Ulum','Ain Shams University'],correct:1,hint:'This is the oldest Islamic educational institution',quran:'Az-Zumar 9'},
    fr:{q:'Dans quelle institution éducative le Sheikh al-Ghazali a-t-il étudié en Égypte ?',opts:['Université du Caire','Al-Azhar','Dar al-Ulum','Université Ain Shams'],correct:1,hint:'C\'est la plus ancienne institution éducative islamique',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'ما لقب الشيخ محمد الغزالي؟',opts:['شيخ الإسلام','أديب الدعوة','إمام الأئمة','حجة الإسلام'],correct:1,hint:'اللقب يجمع بين الأدب والدعوة',quran:'النحل ١٢٥'},
    en:{q:'What was Sheikh al-Ghazali\'s nickname?',opts:['Sheikh al-Islam','The Literary Preacher','Imam of Imams','Proof of Islam'],correct:1,hint:'The nickname combines literature and preaching',quran:'An-Nahl 125'},
    fr:{q:'Quel était le surnom du Sheikh al-Ghazali ?',opts:['Sheikh al-Islam','Le Littéraire de la Prédication','Imam des Imams','Preuve de l\'Islam'],correct:1,hint:'Le surnom combine la littérature et la prédication',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'في أي سن حفظ الشيخ الغزالي القرآن كاملاً؟',opts:['خمس سنوات','عشر سنوات','خمس عشرة سنة','عشرون سنة'],correct:1,hint:'في سن مبكرة جداً — أصابع اليدين!',quran:'العلق ١'},
    en:{q:'At what age did Sheikh al-Ghazali memorize the entire Quran?',opts:['Five years','Ten years','Fifteen years','Twenty years'],correct:1,hint:'At a very early age — count on your fingers!',quran:'Al-Alaq 1'},
    fr:{q:'À quel âge le Sheikh al-Ghazali a-t-il mémorisé le Coran entier ?',opts:['Cinq ans','Dix ans','Quinze ans','Vingt ans'],correct:1,hint:'À un très jeune âge — comptez sur vos doigts !',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'ما اسم أول كتاب للشيخ الغزالي؟',opts:['خلق المسلم','الإسلام والأوضاع الاقتصادية','فقه السيرة','عقيدة المسلم'],correct:1,hint:'الكتاب يتحدث عن الاقتصاد في الإسلام',quran:'الإسراء ٨٢'},
    en:{q:'What was Sheikh al-Ghazali\'s first book?',opts:["The Muslim's Character",'Islam and Economic Conditions','Understanding the Prophet\'s Biography','The Muslim\'s Creed'],correct:1,hint:'The book discusses economics in Islam',quran:'Al-Isra 82'},
    fr:{q:'Quel était le premier livre du Sheikh al-Ghazali ?',opts:['Le Caractère du Musulman','L\'Islam et les Conditions Économiques','Comprendre la Biographie du Prophète','La Croyance du Musulman'],correct:1,hint:'Le livre traite de l\'économie en Islam',quran:'Al-Isra 82'}
  },
  {
    ar:{q:'في أي عام توفي الشيخ محمد الغزالي؟',opts:['١٩٩٠','١٩٩٤','١٩٩٦','٢٠٠٠'],correct:2,hint:'قبل نهاية القرن العشرين بأربع سنوات',quran:'آل عمران ١٨٥'},
    en:{q:'In what year did Sheikh al-Ghazali pass away?',opts:['1990','1994','1996','2000'],correct:2,hint:'Four years before the end of the 20th century',quran:'Al Imran 185'},
    fr:{q:'En quelle année le Sheikh al-Ghazali est-il décédé ?',opts:['1990','1994','1996','2000'],correct:2,hint:'Quatre ans avant la fin du 20e siècle',quran:'Al Imran 185'}
  },
  {
    ar:{q:'ما موقف الشيخ الغزالي من حقوق المرأة في الإسلام؟',opts:['رفض عمل المرأة','دافع عن حقوقها الكاملة','لم يتطرق للموضوع','أيد التقاليد السائدة'],correct:1,hint:'كان من أبرز المدافعين عن حقوقها',quran:'النساء ٣٢'},
    en:{q:'What was Sheikh al-Ghazali\'s position on women\'s rights in Islam?',opts:['Opposed women working','Defended their full rights','Did not address the topic','Supported prevailing traditions'],correct:1,hint:'He was one of the most prominent defenders of their rights',quran:'An-Nisa 32'},
    fr:{q:'Quelle était la position du Sheikh al-Ghazali sur les droits des femmes en Islam ?',opts:['Opposé au travail des femmes','Défendait leurs pleins droits','N\'a pas abordé le sujet','Soutenait les traditions en vigueur'],correct:1,hint:'Il était l\'un des plus éminents défenseurs de leurs droits',quran:'An-Nisa 32'}
  },
  {
    ar:{q:'ما هو أسلوب الشيخ الغزالي في المناظرة؟',opts:['التهجم على الخصوم','الحوار بالحجة والدليل','رفض الحوار مع المخالفين','السخرية من المعارضين'],correct:1,hint:'كان يؤمن بقوة الحجة لا بالصوت العالي',quran:'النحل ١٢٥'},
    en:{q:'What was Sheikh al-Ghazali\'s style in debates?',opts:['Attacking opponents','Dialogue with evidence and proof','Refusing to debate opponents','Mocking dissenters'],correct:1,hint:'He believed in the strength of argument, not loud voices',quran:'An-Nahl 125'},
    fr:{q:'Quel était le style du Sheikh al-Ghazali dans les débats ?',opts:['Attaquer les adversaires','Dialoguer avec des preuves','Refuser de débattre','Se moquer des opposants'],correct:1,hint:'Il croyait en la force de l\'argument, pas en la voix forte',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'من أبرز تلاميذ الشيخ الغزالي الذين تأثروا بفكره؟',opts:['الشيخ ابن باز','الشيخ يوسف القرضاوي','الشيخ الألباني','الشيخ ابن عثيمين'],correct:1,hint:'هذا العالم قطري الإقامة مصري الأصل',quran:'الفرقان ٧٤'},
    en:{q:'Who is one of the most prominent students influenced by Sheikh al-Ghazali?',opts:['Sheikh Ibn Baz','Sheikh Yusuf al-Qaradawi','Sheikh al-Albani','Sheikh Ibn Uthaymin'],correct:1,hint:'This scholar is Egyptian-born and Qatar-based',quran:'Al-Furqan 74'},
    fr:{q:'Qui est l\'un des étudiants les plus éminents influencés par le Sheikh al-Ghazali ?',opts:['Sheikh Ibn Baz','Sheikh Yusuf al-Qaradawi','Sheikh al-Albani','Sheikh Ibn Uthaymin'],correct:1,hint:'Ce savant est d\'origine égyptienne et réside au Qatar',quran:'Al-Furqan 74'}
  },
  {
    ar:{q:'ما كان موقف الشيخ الغزالي من الخلافات المذهبية بين المسلمين؟',opts:['أيد التفرق المذهبي','دعا إلى الوحدة ونبذ التعصب','تجاهل الموضوع','انحاز لمذهب واحد فقط'],correct:1,hint:'كان يرى أن الخلافات الفرعية لا تبرر تمزق الأمة',quran:'الأنبياء ٩٢'},
    en:{q:'What was Sheikh al-Ghazali\'s position on sectarian differences among Muslims?',opts:['Supported sectarian division','Called for unity and rejection of fanaticism','Ignored the topic','Sided with one sect only'],correct:1,hint:'He believed secondary differences do not justify tearing the nation apart',quran:'Al-Anbiya 92'},
    fr:{q:'Quelle était la position du Sheikh al-Ghazali sur les différences sectaires entre musulmans ?',opts:['Soutenait la division sectaire','Appelait à l\'unité et au rejet du fanatisme','Ignorait le sujet','Se rangeait du côté d\'une seule secte'],correct:1,hint:'Il croyait que les différences secondaires ne justifient pas la division de la nation',quran:'Al-Anbiya 92'}
  },
  {
    ar:{q:'ما هو لقب الشيخ الغزالي الشائع في مصر؟',opts:['حجة الإسلام','إمام الدعاة','أديب الدعوة','شيخ المجددين'],correct:2,hint:'هذا اللقب يجمع بين جمال الأسلوب الأدبي والعمل الدعوي',quran:'النحل ١٢٥'},
    en:{q:'What was Sheikh al-Ghazali\'s common title in Egypt?',opts:['Proof of Islam','Imam of Preachers','The Literary Preacher','Sheikh of Reformers'],correct:2,hint:'This title combines literary beauty with preaching work',quran:'An-Nahl 125'},
    fr:{q:'Quel était le titre courant du Sheikh al-Ghazali en Égypte ?',opts:['Preuve de l\'Islam','Imam des Prédicateurs','Le Littéraire de la Prédication','Sheikh des Réformateurs'],correct:2,hint:'Ce titre combine la beauté littéraire avec le travail de prédication',quran:'An-Nahl 125'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'}, en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character — Muslim'}, fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère — Muslim'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'}, en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'}, fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'}, en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him — At-Tawbah 129'}, fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'}, en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'}, fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, déverse sur nous la patience — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'}, en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful — An-Naml 19'}, fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier — An-Naml 19'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'}, en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving, so forgive me — Tirmidhi'}, fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur, pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء الوحدة والألفة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'دعاء جامع للوحدة'}, en:{label:'Dua for Unity and Harmony',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'O Allah, unite our hearts, mend our relations, and guide us to paths of peace'}, fr:{label:'Dua pour l\'Unité et l\'Harmonie',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'Ô Allah, unis nos coeurs, répare nos relations et guide-nous vers les chemins de la paix'} },
  { ar:{label:'دعاء نور البصيرة',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'رواه البخاري ومسلم'}, en:{label:'Dua for Light and Insight',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'O Allah, place light in my heart, light in my sight, and light in my hearing — Bukhari & Muslim'}, fr:{label:'Dua pour la Lumière et la Clairvoyance',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً وَفِي بَصَرِي نُوراً وَفِي سَمْعِي نُوراً',tr:'Ô Allah, mets de la lumière dans mon coeur, dans ma vue et dans mon ouïe — Bukhari & Muslim'} }
];

// ═══════════════ XP / BADGE / STREAK / MODE SYSTEM ═══════════════
const XP_KEY = 'shahid-xp'; const BADGES_KEY = 'shahid-badges'; const READ_KEY = 'shahid-read'; const STREAK_KEY = 'shahid-streak'; const MODE_KEY = 'shahid-mode'; const QUIZ_BEST_KEY = 'shahid-quiz-best';
const BADGE_DEFS = [ { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' }, { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' }, { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' }, { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' }, { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' } ];
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar">
    <span class="search-icon">🔍</span>
    <input class="search-input" id="cardsSearch"
      placeholder="${t.searchPlaceholder}"
      oninput="filterCards(this.value)">
  </div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})">
            <span class="share-icon">📤</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}
function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc')
      ? card.querySelector('.trait-desc').textContent.toLowerCase()
      : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) {
    navigator.share({ title: d.title, text });
  } else {
    navigator.clipboard.writeText(text).then(() =>
      showToast(lang==='ar'?'تم النسخ':'Copied!')
    );
  }
}

// ═══════════════ QUIZ ENGINE ═══════════════
let quizState = {
  current: 0,
  score: 0,
  answers: [],
  lifelines: { fifty: true, hint: true, quran: true },
  active: false
};

function renderQuiz() {
  quizState = {
    current: 0,
    score: 0,
    answers: [],
    lifelines: { fifty: true, hint: true, quran: true },
    active: true
  };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width:${num/total*100}%"></div>
    </div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) =>
          `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`
        ).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}"
          onclick="useFiftyFifty()"
          ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}"
          onclick="useHint()"
          ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}"
          onclick="useQuranRef()"
          ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => {
    const el = document.getElementById('qopt-'+i);
    if(el) { el.style.visibility='hidden'; el.disabled=true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) {
    emoji = '🏆';
    title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!';
  } else if (pct >= 50) {
    emoji = '📖';
    title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!';
  } else {
    emoji = '🌱';
    title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!';
  }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);
  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar">
          <div class="xp-bar-fill" style="width:${progressPct}%"></div>
        </div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card">
        <span class="stat-num">${readCards.length}</span>
        <span class="stat-label">${lang==='ar'?'محطة مقروءة':lang==='fr'?'Étapes lues':'Milestones Read'}</span>
        <span class="stat-total">/ ${CARDS.length}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${bestQuiz}%</span>
        <span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${earned.length}</span>
        <span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span>
        <span class="stat-total">/ ${BADGE_DEFS.length}</span>
      </div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}">
          <span class="badge-emoji">${b.emoji}</span>
          <span class="badge-name">${b[lang]}</span>
          <span class="badge-xp">${b.xp} XP</span>
        </div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() { const about = { ar: { disclaimerTitle: '⚠️ تنبيه مهم', disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من مصادر موثوقة عن حياة الشيخ.', authorName: 'الشيخ محمد الغزالي', authorDates: '١٩١٧ — ١٩٩٦', authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". وُلد في البحيرة وتعلم في الأزهر. ألّف ٩٤ كتاباً. درّس في مصر والسعودية وقطر والجزائر. حاصل على جائزة الملك فيصل. توفي في الرياض عام ١٩٩٦.', bookTitle: 'عن الكتاب', bookDesc: '«الشيخ محمد الغزالي شاهداً على العصر» كتاب يروي سيرة الشيخ محمد الغزالي ومحطات حياته العلمية والدعوية والفكرية. يستعرض تجربته مع الأزهر والإخوان والتدريس والتأليف ومواقفه من قضايا العصر.', sourcesTitle: 'المصادر', sources: ['كتاب "الشيخ محمد الغزالي شاهداً على العصر"','مؤلفات الشيخ محمد الغزالي','موسوعة أعلام الفكر الإسلامي'], contact: 'تواصل: abdelhak.bourdim@gmail.com' }, en: { disclaimerTitle: '⚠️ Important Notice', disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is from trusted biographical sources.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Born in Beheira, educated at Al-Azhar. Author of 94 books. Taught in Egypt, Saudi Arabia, Qatar, and Algeria. King Faisal Prize laureate. Passed away in Riyadh in 1996.', bookTitle: 'About the Book', bookDesc: '"Sheikh Mohammed al-Ghazali: Witness of the Era" narrates the biography of Sheikh al-Ghazali and the milestones of his scholarly, preaching, and intellectual life. It reviews his experience with Al-Azhar, the Brotherhood, teaching, writing, and his positions on contemporary issues.', sourcesTitle: 'Sources', sources: ['"Sheikh al-Ghazali: Witness of the Era"','Works of Sheikh Mohammed al-Ghazali','Encyclopedia of Islamic Thought Leaders'], contact: 'Contact: abdelhak.bourdim@gmail.com' }, fr: { disclaimerTitle: '⚠️ Avis Important', disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Savant et penseur islamique égyptien, surnommé "Le Littéraire de la Prédication". Né à Beheira, formé à Al-Azhar. Auteur de 94 livres. A enseigné en Égypte, Arabie Saoudite, Qatar et Algérie. Lauréat du Prix Roi Faysal.', bookTitle: 'À Propos du Livre', bookDesc: '« Le Sheikh al-Ghazali : Témoin de l\'Époque » raconte la biographie du Sheikh et les étapes de sa vie scientifique, de prédication et intellectuelle.', sourcesTitle: 'Sources', sources: ['"Le Sheikh al-Ghazali : Témoin de l\'Époque"','Oeuvres du Sheikh Mohammed al-Ghazali','Encyclopédie des Penseurs Islamiques'], contact: 'Contact : abdelhak.bourdim@gmail.com' } }; const a = about[lang]; (document.getElementById('aboutContainer')||{}).innerHTML= `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`; }

// ═══════════════ RENDER: HELP, DUAS, TICKER ═══════════════
function renderHelp() { const help = { ar: [ {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لتعريف الشباب بسيرة الشيخ الغزالي بطريقة تفاعلية.'}, {title:'📚 المصادر',body:'كتاب "الشيخ محمد الغزالي شاهداً على العصر"، مؤلفات الشيخ، مصادر موثوقة.'}, {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ محطة، ١٥ سؤالاً، ٨ أدعية، مسابقة تفاعلية، نظام نقاط وشارات.'}, {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة.'}, {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع تفاصيل تاريخية.'}, {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/shahid-ala-al-asr'}, ], en: [ {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to introduce youth to Sheikh al-Ghazali\'s biography interactively.'}, {title:'📚 Sources',body:'"Sheikh al-Ghazali: Witness of the Era", his works, and trusted biographical sources.'}, {title:'✨ Features',body:'Three languages, 3 themes, 20 milestones, 15 quiz questions, 8 duas, interactive quiz, XP and badges.'}, {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'}, {title:'📖 Teen Scholar',body:'For teens 13+ — full text with historical details.'}, {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/shahid-ala-al-asr'}, ], fr: [ {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour présenter la biographie du Sheikh al-Ghazali aux jeunes.'}, {title:'📚 Sources',body:'"Le Sheikh al-Ghazali : Témoin de l\'Époque", ses oeuvres et des sources biographiques fiables.'}, {title:'✨ Fonctionnalités',body:'Trois langues, 3 thèmes, 20 étapes, 15 questions, 8 duas, quiz interactif, système XP et badges.'}, {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifié.'}, {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec détails historiques.'}, {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/shahid-ala-al-asr'}, ] }; (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join(''); }
function renderDuas() { (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }
function renderTicker() { const tips = { ar: ['📖 اقرأ محطة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ٢٠ محطة لتصبح خبيراً'], en: ['📖 Read a new milestone every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget dua','⭐ Complete all 20 milestones to become Expert'], fr: ['📖 Lisez une nouvelle étape chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Complétez les 20 étapes pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH, TABS, SCROLL, KEYBOARD, UTILITIES ═══════════════
let splashTimer;

function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}

function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 600);
  }
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchTab(tab.dataset.tab);
    });
  });
}

function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el =>
    window._scrollObserver.observe(el)
  );
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c =>
        c.style.display !== 'none'
      );
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) {
        cards[currentCardIdx].classList.remove('open');
      }
      const dir = document.documentElement.dir === 'rtl'
        ? (e.key==='ArrowRight'?-1:1)
        : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('open');
    playSound('click');
  }
}

function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}

function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) {
    m.textContent = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2500);
  }
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') {
      osc.frequency.value = 800;
      osc.type = 'sine';
      gain.gain.value = 0.04;
    } else if (type==='success') {
      osc.frequency.value = 523;
      osc.type = 'sine';
      gain.gain.value = 0.06;
    } else if (type==='theme') {
      osc.frequency.value = 440;
      osc.type = 'triangle';
      gain.gain.value = 0.05;
    }
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  draw();
}

function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) {
      dailyTitle.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      setTimeout(() => dailyTitle.classList.add('tw-done'), 1500);
    }
  }
  setTimeout(typeChar, 500);
}

function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => {
      const p = document.getElementById('panel-'+t);
      return p && p.classList.contains('active');
    });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1;
    else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
