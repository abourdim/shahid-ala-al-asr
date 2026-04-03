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
    cardsDesc: '١٥ محطة من حياة الشيخ محمد الغزالي — كل محطة بحكمة وعبرة وتطبيق عملي',
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
      '١٥ محطة من حياة الشيخ محمد الغزالي',
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
    cardsDesc: '15 milestones from the life of Sheikh al-Ghazali — each with a lesson and practical takeaway',
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
      "15 milestones from Sheikh al-Ghazali's life",
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
    cardsDesc: '15 étapes de la vie du Sheikh al-Ghazali — chacune avec une leçon et un conseil pratique',
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
      '15 étapes de la vie du Sheikh al-Ghazali',
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
    ar:{title:'المولد في البحيرة ١٩١٧',desc:'وُلد محمد الغزالي أحمد السقا في ٢٢ سبتمبر ١٩١٧ في قرية نكلا العنب بمحافظة البحيرة في مصر. نشأ في بيئة ريفية بسيطة محبة للعلم والقرآن. حفظ القرآن الكريم كاملاً في سن العاشرة، وكان والده يشجعه على طلب العلم والتفوق.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'سُمي محمد الغزالي تيمناً بالإمام أبي حامد الغزالي — العالم المسلم الشهير',action:'مهما كانت بداياتك متواضعة، يمكنك أن تصبح عظيماً — ابدأ اليوم بطلب العلم',young:'الشيخ الغزالي كان طفلاً ريفياً بسيطاً حفظ القرآن كاملاً وهو في العاشرة! أنت أيضاً تستطيع 👶'},
    en:{title:'Birth in Beheira 1917',desc:'Mohammed al-Ghazali Ahmad al-Saqqa was born on September 22, 1917, in the village of Nikla al-Inab in Beheira province, Egypt. He grew up in a simple rural environment that loved knowledge and the Quran. He memorized the entire Quran by the age of ten, and his father encouraged him to seek knowledge.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'He was named Mohammed al-Ghazali after the famous Muslim scholar Imam Abu Hamid al-Ghazali',action:'No matter how humble your beginnings, you can become great — start seeking knowledge today',young:'Sheikh al-Ghazali was a simple village boy who memorized the whole Quran by age 10! You can do amazing things too 👶'},
    fr:{title:'Naissance à Beheira 1917',desc:"Mohammed al-Ghazali Ahmad al-Saqqa est né le 22 septembre 1917 au village de Nikla al-Inab dans la province de Beheira en Égypte. Il a grandi dans un environnement rural simple aimant le savoir et le Coran. Il a mémorisé le Coran entier à l'âge de dix ans.",verse:'Lis au nom de ton Seigneur qui a créé',verseRef:'Al-Alaq 1',hadith:"Il a été nommé Mohammed al-Ghazali d'après le célèbre savant musulman l'Imam Abu Hamid al-Ghazali",action:"Peu importe vos origines modestes, vous pouvez devenir grand — commencez à apprendre aujourd'hui",young:"Le Sheikh al-Ghazali était un simple garçon de village qui a mémorisé tout le Coran à 10 ans ! Toi aussi tu peux 👶"}
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
    ar:{title:'إرث ٩٤ كتاباً',desc:'ألّف الشيخ الغزالي أكثر من ٩٤ كتاباً في مواضيع متنوعة: العقيدة والأخلاق والفقه والسيرة والفكر الإسلامي والنقد الاجتماعي والسياسي. كتبه تُرجمت إلى عدة لغات وأثرت في ملايين القراء حول العالم.',verse:'وَقُلْ رَبِّ زِدْنِي عِلْمًا',verseRef:'طه ١١٤',hadith:'٩٤ كتاباً في ٥٠ عاماً — ما يقارب كتابين كل عام! قوة مذهلة في العطاء',action:'اقرأ كتاباً واحداً على الأقل كل شهر — القراءة تفتح لك آفاقاً لا حدود لها',young:'الشيخ الغزالي كتب ٩٤ كتاباً! هذا مثل كتاب كل ستة أشهر تقريباً — ابدأ القراءة اليوم 📚'},
    en:{title:'Legacy of 94 Books',desc:'Sheikh al-Ghazali authored more than 94 books on diverse topics: creed, ethics, jurisprudence, biography, Islamic thought, and social and political criticism. His books were translated into several languages and influenced millions of readers worldwide.',verse:'And say: My Lord, increase me in knowledge',verseRef:'Taha 114',hadith:'94 books in 50 years — nearly two books every year! An amazing dedication to giving',action:'Read at least one book every month — reading opens limitless horizons for you',young:'Sheikh al-Ghazali wrote 94 books! That is like a book every 6 months — start reading today 📚'},
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
    ar:{title:'جائزة الملك فيصل',desc:'حصل الشيخ الغزالي على جائزة الملك فيصل العالمية لخدمة الإسلام عام ١٩٨٩. هذه الجائزة تكريم لجهوده الكبيرة في نشر الفكر الإسلامي المعتدل والدفاع عن حقوق المسلمين والإنسانية جمعاء.',verse:'هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ',verseRef:'الرحمن ٦٠',hadith:'الجائزة تكريم لـ٤٠ عاماً من العطاء المتواصل في خدمة الإسلام',action:'اعمل بإخلاص ولا تنتظر المكافأة — لكن اعلم أن العمل الجاد يُقدّر دائماً',young:'الشيخ الغزالي حصل على جائزة عالمية! عندما تعمل بجد وإخلاص، ستُكافأ يوماً ما 🏆'},
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
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'}, en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character — Muslim'}, fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère — Muslim'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'}, en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'}, fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'}, en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him — At-Tawbah 129'}, fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'}, en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'}, fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, déverse sur nous la patience — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'}, en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful — An-Naml 19'}, fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier — An-Naml 19'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'}, en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving, so forgive me — Tirmidhi'}, fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur, pardonne-moi — Tirmidhi'} }
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
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }
let lang = document.documentElement.lang || 'ar'; let currentTheme = document.documentElement.dataset.theme || 'nature'; const THEMES = ['nature','night','ocean']; const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' }; let currentCardIdx = -1;
function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() { const t = T[lang]; document.getElementById('appTitle').textContent = t.appTitle; document.getElementById('splashSub').textContent = t.splashSub; document.getElementById('splashHint').textContent = t.splashHint; document.getElementById('tabHome').textContent = t.tabHome; document.getElementById('tabCards').textContent = t.tabCards; document.getElementById('tabQuiz').textContent = t.tabQuiz; document.getElementById('tabProgress').textContent = t.tabProgress; document.getElementById('tabAbout').textContent = t.tabAbout; document.getElementById('cardsTitle').textContent = t.cardsTitle; document.getElementById('cardsDesc').textContent = t.cardsDesc; document.getElementById('quizTitle').textContent = t.quizTitle; document.getElementById('quizDesc').textContent = t.quizDesc; document.getElementById('progressTitle').textContent = t.progressTitle; document.getElementById('progressDesc').textContent = t.progressDesc; document.getElementById('helpTitle').textContent = t.helpTitle; document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle; document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode; renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker(); }
function renderHome() { const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang]; document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`; document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join(''); }
function renderCards() { const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer'); const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`; container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id); return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}"><div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})"><span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join(''); }
function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ QUIZ ENGINE ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }
function showQuizQuestion() { const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden'); if (quizState.current >= QUIZ.length) { showQuizResult(); return; } const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1; container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`; }
function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }
function showQuizResult() { const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20); let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; } document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden'); result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`; result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false; }

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() { const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100); document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'محطة مقروءة':lang==='fr'?'Étapes lues':'Milestones Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`; }
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() { const about = { ar: { disclaimerTitle: '⚠️ تنبيه مهم', disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من مصادر موثوقة عن حياة الشيخ.', authorName: 'الشيخ محمد الغزالي', authorDates: '١٩١٧ — ١٩٩٦', authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". وُلد في البحيرة وتعلم في الأزهر. ألّف ٩٤ كتاباً. درّس في مصر والسعودية وقطر والجزائر. حاصل على جائزة الملك فيصل. توفي في الرياض عام ١٩٩٦.', bookTitle: 'عن الكتاب', bookDesc: '«الشيخ محمد الغزالي شاهداً على العصر» كتاب يروي سيرة الشيخ محمد الغزالي ومحطات حياته العلمية والدعوية والفكرية. يستعرض تجربته مع الأزهر والإخوان والتدريس والتأليف ومواقفه من قضايا العصر.', sourcesTitle: 'المصادر', sources: ['كتاب "الشيخ محمد الغزالي شاهداً على العصر"','مؤلفات الشيخ محمد الغزالي','موسوعة أعلام الفكر الإسلامي'], contact: 'تواصل: abdelhak.bourdim@gmail.com' }, en: { disclaimerTitle: '⚠️ Important Notice', disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is from trusted biographical sources.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Born in Beheira, educated at Al-Azhar. Author of 94 books. Taught in Egypt, Saudi Arabia, Qatar, and Algeria. King Faisal Prize laureate. Passed away in Riyadh in 1996.', bookTitle: 'About the Book', bookDesc: '"Sheikh Mohammed al-Ghazali: Witness of the Era" narrates the biography of Sheikh al-Ghazali and the milestones of his scholarly, preaching, and intellectual life. It reviews his experience with Al-Azhar, the Brotherhood, teaching, writing, and his positions on contemporary issues.', sourcesTitle: 'Sources', sources: ['"Sheikh al-Ghazali: Witness of the Era"','Works of Sheikh Mohammed al-Ghazali','Encyclopedia of Islamic Thought Leaders'], contact: 'Contact: abdelhak.bourdim@gmail.com' }, fr: { disclaimerTitle: '⚠️ Avis Important', disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Savant et penseur islamique égyptien, surnommé "Le Littéraire de la Prédication". Né à Beheira, formé à Al-Azhar. Auteur de 94 livres. A enseigné en Égypte, Arabie Saoudite, Qatar et Algérie. Lauréat du Prix Roi Faysal.', bookTitle: 'À Propos du Livre', bookDesc: '« Le Sheikh al-Ghazali : Témoin de l\'Époque » raconte la biographie du Sheikh et les étapes de sa vie scientifique, de prédication et intellectuelle.', sourcesTitle: 'Sources', sources: ['"Le Sheikh al-Ghazali : Témoin de l\'Époque"','Oeuvres du Sheikh Mohammed al-Ghazali','Encyclopédie des Penseurs Islamiques'], contact: 'Contact : abdelhak.bourdim@gmail.com' } }; const a = about[lang]; document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`; }

// ═══════════════ RENDER: HELP, DUAS, TICKER ═══════════════
function renderHelp() { const help = { ar: [ {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لتعريف الشباب بسيرة الشيخ الغزالي بطريقة تفاعلية.'}, {title:'📚 المصادر',body:'كتاب "الشيخ محمد الغزالي شاهداً على العصر"، مؤلفات الشيخ، مصادر موثوقة.'}, {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ١٥ محطة، مسابقة تفاعلية، نظام نقاط وشارات.'}, {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة.'}, {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع تفاصيل تاريخية.'}, {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/shahid-ala-al-asr'}, ], en: [ {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to introduce youth to Sheikh al-Ghazali\'s biography interactively.'}, {title:'📚 Sources',body:'"Sheikh al-Ghazali: Witness of the Era", his works, and trusted biographical sources.'}, {title:'✨ Features',body:'Three languages, 3 themes, 15 milestones, interactive quiz, XP and badges.'}, {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'}, {title:'📖 Teen Scholar',body:'For teens 13+ — full text with historical details.'}, {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/shahid-ala-al-asr'}, ], fr: [ {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour présenter la biographie du Sheikh al-Ghazali aux jeunes.'}, {title:'📚 Sources',body:'"Le Sheikh al-Ghazali : Témoin de l\'Époque", ses oeuvres et des sources biographiques fiables.'}, {title:'✨ Fonctionnalités',body:'Trois langues, 3 thèmes, 15 étapes, quiz interactif, système XP et badges.'}, {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifié.'}, {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec détails historiques.'}, {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/shahid-ala-al-asr'}, ] }; document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join(''); }
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }
function renderTicker() { const tips = { ar: ['📖 اقرأ محطة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ١٥ محطة لتصبح خبيراً'], en: ['📖 Read a new milestone every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget dua','⭐ Complete all 15 milestones to become Expert'], fr: ['📖 Lisez une nouvelle étape chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Complétez les 15 étapes pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH, TABS, SCROLL, KEYBOARD, UTILITIES ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }
const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
