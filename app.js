/* شاهد على العصر — GHAZALI: WITNESS OF THE ERA — app.js */
/* Based on "Al-Sheikh Mohammed al-Ghazali: Shahidan Ala al-Asr" */

const T = {
  ar: {
    appTitle: 'شاهد على العصر',
    splashSub: 'الشيخ محمد الغزالي — حياته وفكره وإرثه',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الأحزاب ٣٣: ٢٣',
    tabHome: 'الرئيسية', tabCards: 'السيرة', tabTimeline: 'المحطات',
    tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات السيرة',
    cardsDesc: '٢٠ بطاقة عن حياة الشيخ وفكره وإرثه',
    timelineTitle: 'محطات حياته',
    timelineDesc: 'أهم المحطات في مسيرة الشيخ محمد الغزالي',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'ما مدى معرفتك بالشيخ محمد الغزالي؟',
    helpTitle: '❓ مساعدة', duaPanelTitle: '🤲 أدعية',
    submitQuiz: 'اعرف النتيجة', dailyLabel: '✨ حكمة اليوم',
    quizAgain: 'أعد الاختبار', share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...', yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    splashFeatures: ['٢٠ بطاقة عن سيرة الشيخ الغزالي','محطات حياته الرئيسية','اختبر معلوماتك','ثلاث لغات + ثلاثة أنماط'],
  },
  en: {
    appTitle: 'Ghazali: Witness of the Era',
    splashSub: 'Sheikh al-Ghazali — His life, thought, and legacy',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Ahzab 33:23',
    tabHome: 'Home', tabCards: 'Biography', tabTimeline: 'Milestones',
    tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Biography Cards',
    cardsDesc: '20 cards on the Sheikh\'s life, ideas, and legacy',
    timelineTitle: 'Life Milestones',
    timelineDesc: 'Key moments in Sheikh al-Ghazali\'s journey',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you know Sheikh al-Ghazali?',
    helpTitle: '❓ Help', duaPanelTitle: '🤲 Duas',
    submitQuiz: 'See Results', dailyLabel: '✨ Today\'s Wisdom',
    quizAgain: 'Retake Quiz', share: 'Share',
    searchPlaceholder: 'Search cards...', yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    splashFeatures: ['20 biography cards about Sheikh al-Ghazali','Key life milestones','Test your knowledge','Three languages + three themes'],
  },
  fr: {
    appTitle: 'Ghazali : Temoin de l\'Epoque',
    splashSub: 'Sheikh al-Ghazali — Sa vie, sa pensee et son heritage',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Ahzab 33:23',
    tabHome: 'Accueil', tabCards: 'Biographie', tabTimeline: 'Jalons',
    tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes Biographiques',
    cardsDesc: '20 cartes sur la vie, les idees et l\'heritage du Sheikh',
    timelineTitle: 'Jalons de sa Vie',
    timelineDesc: 'Moments cles du parcours du Sheikh al-Ghazali',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous bien le Sheikh al-Ghazali ?',
    helpTitle: '❓ Aide', duaPanelTitle: '🤲 Duas',
    submitQuiz: 'Voir les Resultats', dailyLabel: '✨ Sagesse du Jour',
    quizAgain: 'Refaire le Quiz', share: 'Partager',
    searchPlaceholder: 'Rechercher...', yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    splashFeatures: ['20 cartes biographiques sur le Sheikh al-Ghazali','Jalons cles de sa vie','Testez vos connaissances','Trois langues + trois themes'],
  }
};

const CARDS = [
  {id:1,emoji:'👶',ar:{title:'المولد والنشأة',desc:'وُلد محمد الغزالي أحمد السقا في ٢٢ سبتمبر ١٩١٧ بقرية نكلا العنب في محافظة البحيرة بمصر. نشأ في بيئة ريفية متدينة وحفظ القرآن الكريم في صغره.',action:'تعرف على البيئة التي نشأ فيها الشيخ'},en:{title:'Birth and Upbringing',desc:'Mohammed al-Ghazali Ahmad al-Saqqa was born on September 22, 1917 in Nikla al-Inab village, Beheira Governorate, Egypt. He grew up in a devout rural environment and memorized the Quran in his childhood.',action:'Learn about the environment where the Sheikh grew up'},fr:{title:'Naissance et Education',desc:'Mohammed al-Ghazali Ahmad al-Saqqa est ne le 22 septembre 1917 au village de Nikla al-Inab, gouvernorat de Beheira, Egypte. Il a grandi dans un milieu rural pieux et a memorise le Coran enfant.',action:'Decouvrez l\'environnement ou le Sheikh a grandi'}},
  {id:2,emoji:'🎓',ar:{title:'التعليم في الأزهر',desc:'التحق بالأزهر الشريف وتخرج من كلية أصول الدين عام ١٩٤١. تأثر بشيوخه الكبار وخاصة الشيخ عبد العظيم الزرقاني.',action:'اكتشف مراحل تعليمه الأزهري'},en:{title:'Al-Azhar Education',desc:'He joined Al-Azhar University and graduated from the Faculty of Usul al-Din (Islamic Theology) in 1941. He was influenced by great scholars, especially Sheikh Abdel-Azim al-Zarqani.',action:'Discover his stages of Al-Azhar education'},fr:{title:'Education a Al-Azhar',desc:'Il a rejoint l\'Universite Al-Azhar et a obtenu son diplome de la Faculte d\'Usul al-Din en 1941. Il a ete influence par de grands savants.',action:'Decouvrez ses etapes d\'education a Al-Azhar'}},
  {id:3,emoji:'📖',ar:{title:'التأثر بالإمام حسن البنا',desc:'كان الشيخ الغزالي من تلاميذ الإمام حسن البنا مؤسس جماعة الإخوان المسلمين. تأثر بفكره الإصلاحي ومنهجه في الدعوة.',action:'تعرف على العلاقة بين الغزالي والبنا'},en:{title:'Influence of Hassan al-Banna',desc:'Sheikh al-Ghazali was a student of Imam Hassan al-Banna, founder of the Muslim Brotherhood. He was influenced by his reformist thought and approach to preaching.',action:'Learn about the relationship between al-Ghazali and al-Banna'},fr:{title:'L\'Influence de Hassan al-Banna',desc:'Le Sheikh al-Ghazali etait un eleve de l\'Imam Hassan al-Banna, fondateur des Freres Musulmans. Il a ete influence par sa pensee reformiste.',action:'Decouvrez la relation entre al-Ghazali et al-Banna'}},
  {id:4,emoji:'✍️',ar:{title:'بداية التأليف',desc:'بدأ التأليف في سن مبكرة وكان أول كتبه "الإسلام والأوضاع الاقتصادية" عام ١٩٤٧. أكمل بعدها مسيرة غنية بأكثر من ٩٤ كتاباً.',action:'اقرأ أول كتب الشيخ الغزالي'},en:{title:'Beginning of Writing',desc:'He began writing at an early age. His first book was "Islam and Economic Conditions" in 1947. He went on to author over 94 books in a rich literary career.',action:'Read the Sheikh\'s first books'},fr:{title:'Debut de l\'Ecriture',desc:'Il a commence a ecrire jeune. Son premier livre etait "L\'Islam et les Conditions Economiques" en 1947. Il a ensuite ecrit plus de 94 livres.',action:'Lisez les premiers livres du Sheikh'}},
  {id:5,emoji:'🕌',ar:{title:'أديب الدعوة',desc:'لُقّب بـ"أديب الدعوة" لأسلوبه الأدبي الراقي في الكتابة الإسلامية. جمع بين عمق الفكر وبلاغة التعبير بطريقة فريدة.',action:'اكتشف أسلوب الشيخ الأدبي'},en:{title:'The Literary Preacher',desc:'He was nicknamed "The Literary Preacher" for his elegant literary style in Islamic writing. He uniquely combined depth of thought with eloquent expression.',action:'Discover the Sheikh\'s literary style'},fr:{title:'Le Litteraire de la Predication',desc:'Il a ete surnomme "Le Litteraire de la Predication" pour son style litteraire elegant. Il combinait profondeur de pensee et eloquence d\'expression.',action:'Decouvrez le style litteraire du Sheikh'}},
  {id:6,emoji:'⚔️',ar:{title:'مواقف شجاعة',desc:'عُرف بشجاعته في مواجهة الظلم والاستبداد. سُجن في عهد عبد الناصر بسبب مواقفه. لم يتراجع عن قناعاته رغم الضغوط.',action:'تعرف على مواقفه الشجاعة'},en:{title:'Courageous Stances',desc:'He was known for his courage in confronting injustice and tyranny. He was imprisoned under Nasser\'s regime for his positions. He never retreated from his convictions despite pressure.',action:'Learn about his courageous stances'},fr:{title:'Positions Courageuses',desc:'Il etait connu pour son courage face a l\'injustice et la tyrannie. Il a ete emprisonne sous le regime de Nasser. Il n\'a jamais recule malgre les pressions.',action:'Decouvrez ses positions courageuses'}},
  {id:7,emoji:'🌍',ar:{title:'الدعوة في الجزائر',desc:'انتقل إلى الجزائر وأسس جامعة الأمير عبد القادر للعلوم الإسلامية في قسنطينة. كان له أثر كبير في النهضة الفكرية الجزائرية.',action:'تعرف على دوره في الجزائر'},en:{title:'Preaching in Algeria',desc:'He moved to Algeria and founded the Emir Abdelkader University for Islamic Sciences in Constantine. He had a major impact on Algeria\'s intellectual renaissance.',action:'Learn about his role in Algeria'},fr:{title:'La Predication en Algerie',desc:'Il s\'est installe en Algerie et a fonde l\'Universite Emir Abdelkader des Sciences Islamiques a Constantine. Il a eu un impact majeur sur la renaissance intellectuelle algerienne.',action:'Decouvrez son role en Algerie'}},
  {id:8,emoji:'📚',ar:{title:'كتبه الأشهر',desc:'من أشهر كتبه: "فقه السيرة"، "جدد حياتك"، "خلق المسلم"، "الإسلام والاستبداد السياسي"، "حقوق الإنسان". كل كتاب معلم في الفكر الإسلامي المعاصر.',action:'اقرأ أهم كتبه'},en:{title:'Most Famous Books',desc:'Among his most famous books: "Fiqh of the Seerah", "Renew Your Life", "Muslim Character", "Islam and Political Tyranny", "Human Rights". Each is a landmark in contemporary Islamic thought.',action:'Read his most important books'},fr:{title:'Livres les Plus Celebres',desc:'Parmi ses livres les plus celebres : "Fiqh de la Sira", "Renouvelle ta Vie", "Le Caractere du Musulman", "L\'Islam et la Tyrannie Politique". Chacun est un repere de la pensee islamique.',action:'Lisez ses livres les plus importants'}},
  {id:9,emoji:'💡',ar:{title:'منهج الوسطية',desc:'تبنى منهج الوسطية والاعتدال في فهم الإسلام. رفض التشدد والتطرف كما رفض التساهل المفرط. دعا إلى فهم مقاصد الشريعة.',action:'تعرف على منهجه الفكري'},en:{title:'Path of Moderation',desc:'He adopted a path of moderation and balance in understanding Islam. He rejected both extremism and excessive laxity, calling for understanding the purposes of Islamic law.',action:'Learn about his intellectual methodology'},fr:{title:'La Voie de la Moderation',desc:'Il a adopte la voie de la moderation et de l\'equilibre dans la comprehension de l\'Islam. Il a rejete l\'extremisme comme le laxisme excessif.',action:'Decouvrez sa methodologie intellectuelle'}},
  {id:10,emoji:'👩',ar:{title:'موقفه من المرأة',desc:'كان من أوائل العلماء الذين دافعوا عن حقوق المرأة في الإسلام. انتقد الممارسات الظالمة باسم الدين وأكد على مكانة المرأة الحقيقية.',action:'اقرأ عن موقفه من المرأة'},en:{title:'His Stance on Women',desc:'He was among the first scholars to defend women\'s rights in Islam. He criticized unjust practices in the name of religion and affirmed women\'s true status in Islam.',action:'Read about his stance on women'},fr:{title:'Sa Position sur la Femme',desc:'Il etait parmi les premiers savants a defendre les droits des femmes en Islam. Il a critique les pratiques injustes au nom de la religion.',action:'Lisez sa position sur les femmes'}},
  {id:11,emoji:'🔥',ar:{title:'نقد التصوف المنحرف',desc:'انتقد الانحرافات الصوفية والبدع التي دخلت على التصوف. دافع عن التصوف الحقيقي القائم على الكتاب والسنة.',action:'تعرف على موقفه من التصوف'},en:{title:'Critique of Deviant Sufism',desc:'He criticized Sufi deviations and innovations. He defended authentic Sufism based on the Quran and Sunnah while rejecting superstitious practices.',action:'Learn about his stance on Sufism'},fr:{title:'Critique du Soufisme Deviant',desc:'Il a critique les deviations et innovations soufies. Il a defendu le soufisme authentique base sur le Coran et la Sunna.',action:'Decouvrez sa position sur le soufisme'}},
  {id:12,emoji:'🏛️',ar:{title:'نقد الاستبداد',desc:'كان من أشد المنتقدين للاستبداد السياسي في العالم العربي. رأى أن الحرية السياسية ضرورة إسلامية وليست ترفاً.',action:'اقرأ كتابه عن الاستبداد السياسي'},en:{title:'Critique of Tyranny',desc:'He was one of the strongest critics of political tyranny in the Arab world. He saw political freedom as an Islamic necessity, not a luxury.',action:'Read his book on political tyranny'},fr:{title:'Critique de la Tyrannie',desc:'Il etait l\'un des plus fervents critiques de la tyrannie politique dans le monde arabe. Il voyait la liberte politique comme une necessite islamique.',action:'Lisez son livre sur la tyrannie politique'}},
  {id:13,emoji:'🤝',ar:{title:'حوار الحضارات',desc:'دعا إلى حوار بناء مع الحضارات الأخرى. رأى أن الإسلام منفتح على العالم ولا يخشى الحوار بل يرحب به.',action:'تعرف على رؤيته للحوار'},en:{title:'Dialogue of Civilizations',desc:'He called for constructive dialogue with other civilizations. He believed Islam is open to the world and welcomes dialogue rather than fearing it.',action:'Learn about his vision for dialogue'},fr:{title:'Dialogue des Civilisations',desc:'Il a appele au dialogue constructif avec les autres civilisations. Il croyait que l\'Islam est ouvert au monde et accueille le dialogue.',action:'Decouvrez sa vision du dialogue'}},
  {id:14,emoji:'📜',ar:{title:'فهم السنة النبوية',desc:'ألّف كتاب "السنة النبوية بين أهل الفقه وأهل الحديث" الذي أثار جدلاً واسعاً. دعا فيه إلى فهم الحديث في سياقه ومقاصده.',action:'اقرأ عن منهجه في فهم السنة'},en:{title:'Understanding the Prophetic Sunnah',desc:'He authored "The Prophetic Sunnah Between Jurists and Hadith Scholars" which sparked wide debate. He called for understanding hadith in its context and purposes.',action:'Read about his approach to the Sunnah'},fr:{title:'Comprendre la Sunna Prophetique',desc:'Il a ecrit "La Sunna Prophetique entre les Juristes et les Savants du Hadith" qui a suscite un large debat. Il appelait a comprendre le hadith dans son contexte.',action:'Decouvrez son approche de la Sunna'}},
  {id:15,emoji:'🌟',ar:{title:'أقوال مأثورة',desc:'من أشهر أقواله: "الإسلام لا يُعرف بسلوك المسلمين بل بما جاء في القرآن والسنة." كلماته تجمع بين الحكمة والبلاغة.',action:'احفظ بعض أقواله المأثورة'},en:{title:'Famous Quotes',desc:'Among his famous sayings: "Islam is not known by the behavior of Muslims but by what is in the Quran and Sunnah." His words combine wisdom and eloquence.',action:'Memorize some of his famous quotes'},fr:{title:'Citations Celebres',desc:'Parmi ses citations celebres : "L\'Islam ne se connait pas par le comportement des musulmans mais par ce qui est dans le Coran et la Sunna."',action:'Memorisez quelques-unes de ses citations celebres'}},
  {id:16,emoji:'🎤',ar:{title:'خطيب المنابر',desc:'كان خطيباً مفوهاً ذا حضور طاغٍ على المنبر. خطبه كانت تجذب الآلاف وتؤثر في النفوس. جمع بين الموعظة والتحليل العقلي.',action:'استمع لمقتطفات من خطبه'},en:{title:'Master of the Pulpit',desc:'He was an eloquent preacher with a commanding presence at the pulpit. His sermons attracted thousands and touched hearts, combining admonition with rational analysis.',action:'Listen to excerpts from his sermons'},fr:{title:'Maitre de la Chaire',desc:'Il etait un predicateur eloquent avec une presence imposante a la chaire. Ses sermons attiraient des milliers de personnes et touchaient les coeurs.',action:'Ecoutez des extraits de ses sermons'}},
  {id:17,emoji:'🕊️',ar:{title:'الدفاع عن الحريات',desc:'دافع عن حرية التعبير والفكر في الإسلام. رفض تكفير المخالفين ودعا إلى قبول الاختلاف في إطار الثوابت الإسلامية.',action:'تعرف على موقفه من الحريات'},en:{title:'Defense of Freedoms',desc:'He defended freedom of expression and thought in Islam. He rejected excommunicating dissenters and called for accepting differences within Islamic fundamentals.',action:'Learn about his stance on freedoms'},fr:{title:'Defense des Libertes',desc:'Il a defendu la liberte d\'expression et de pensee en Islam. Il a rejete l\'excommunication des dissidents et appele a accepter les differences.',action:'Decouvrez sa position sur les libertes'}},
  {id:18,emoji:'🌱',ar:{title:'تجديد الفكر الإسلامي',desc:'كان من رواد تجديد الفكر الإسلامي المعاصر. رأى أن التجديد ضرورة لا ترف، وأن الجمود الفكري يضر بالإسلام.',action:'اكتشف رؤيته للتجديد'},en:{title:'Renewal of Islamic Thought',desc:'He was a pioneer of contemporary Islamic thought renewal. He saw renewal as a necessity, not a luxury, and that intellectual stagnation harms Islam.',action:'Discover his vision for renewal'},fr:{title:'Renouveau de la Pensee Islamique',desc:'Il etait un pionnier du renouveau de la pensee islamique contemporaine. Il voyait le renouveau comme une necessite et la stagnation comme nuisible.',action:'Decouvrez sa vision du renouveau'}},
  {id:19,emoji:'💔',ar:{title:'الوفاة في أرض الحرمين',desc:'توفي الشيخ محمد الغزالي في ٩ مارس ١٩٩٦ أثناء مشاركته في ملتقى الفكر الإسلامي بالرياض. دُفن في البقيع بالمدينة المنورة.',action:'تعرف على ظروف وفاته'},en:{title:'Death in the Holy Land',desc:'Sheikh al-Ghazali passed away on March 9, 1996 while participating in an Islamic Thought Forum in Riyadh. He was buried in al-Baqi cemetery in Madinah.',action:'Learn about the circumstances of his death'},fr:{title:'Deces en Terre Sainte',desc:'Le Sheikh al-Ghazali est decede le 9 mars 1996 lors de sa participation a un forum de pensee islamique a Riyad. Il a ete enterre au cimetiere al-Baqi a Medine.',action:'Decouvrez les circonstances de son deces'}},
  {id:20,emoji:'🏆',ar:{title:'الإرث الخالد',desc:'ترك الشيخ الغزالي إرثاً فكرياً ضخماً: أكثر من ٩٤ كتاباً وآلاف الخطب والمحاضرات. أثّر في أجيال من المفكرين والدعاة والعلماء حول العالم.',action:'واصل نشر فكره وحكمته'},en:{title:'The Lasting Legacy',desc:'Sheikh al-Ghazali left a massive intellectual legacy: over 94 books and thousands of sermons and lectures. He influenced generations of thinkers, preachers, and scholars worldwide.',action:'Continue spreading his thought and wisdom'},fr:{title:'L\'Heritage Eternel',desc:'Le Sheikh al-Ghazali a laisse un heritage intellectuel immense : plus de 94 livres et des milliers de sermons. Il a influence des generations de penseurs et de savants.',action:'Continuez a diffuser sa pensee et sa sagesse'}},
];

const TIMELINE_DATA = [
  {emoji:'👶',ar:{year:'١٩١٧',title:'المولد',desc:'وُلد في قرية نكلا العنب، محافظة البحيرة، مصر'},en:{year:'1917',title:'Birth',desc:'Born in Nikla al-Inab village, Beheira, Egypt'},fr:{year:'1917',title:'Naissance',desc:'Ne au village de Nikla al-Inab, Beheira, Egypte'}},
  {emoji:'📖',ar:{year:'١٩٣٧',title:'الالتحاق بالأزهر',desc:'التحق بكلية أصول الدين في جامعة الأزهر'},en:{year:'1937',title:'Joining Al-Azhar',desc:'Joined the Faculty of Usul al-Din at Al-Azhar University'},fr:{year:'1937',title:'Entree a Al-Azhar',desc:'Rejoint la Faculte d\'Usul al-Din a l\'Universite Al-Azhar'}},
  {emoji:'🎓',ar:{year:'١٩٤١',title:'التخرج',desc:'تخرج من كلية أصول الدين'},en:{year:'1941',title:'Graduation',desc:'Graduated from the Faculty of Usul al-Din'},fr:{year:'1941',title:'Diplome',desc:'Diplome de la Faculte d\'Usul al-Din'}},
  {emoji:'✍️',ar:{year:'١٩٤٧',title:'أول كتاب',desc:'صدور كتابه الأول "الإسلام والأوضاع الاقتصادية"'},en:{year:'1947',title:'First Book',desc:'Published his first book "Islam and Economic Conditions"'},fr:{year:'1947',title:'Premier Livre',desc:'Publication de son premier livre "L\'Islam et les Conditions Economiques"'}},
  {emoji:'⚔️',ar:{year:'١٩٤٩',title:'السجن',desc:'سُجن في عهد الملك فاروق بسبب نشاطه الإسلامي'},en:{year:'1949',title:'Imprisonment',desc:'Imprisoned under King Farouk for his Islamic activism'},fr:{year:'1949',title:'Emprisonnement',desc:'Emprisonne sous le roi Farouk pour son activisme islamique'}},
  {emoji:'🌍',ar:{year:'١٩٨١',title:'الانتقال للجزائر',desc:'انتقل إلى الجزائر وأسهم في تأسيس جامعة الأمير عبد القادر'},en:{year:'1981',title:'Move to Algeria',desc:'Moved to Algeria and helped establish Emir Abdelkader University'},fr:{year:'1981',title:'Depart pour l\'Algerie',desc:'S\'installe en Algerie et aide a fonder l\'Universite Emir Abdelkader'}},
  {emoji:'🏆',ar:{year:'١٩٨٩',title:'جائزة الملك فيصل',desc:'حصل على جائزة الملك فيصل العالمية في خدمة الإسلام'},en:{year:'1989',title:'King Faisal Prize',desc:'Received the King Faisal International Prize for Service to Islam'},fr:{year:'1989',title:'Prix Roi Faisal',desc:'A recu le Prix International Roi Faisal pour le Service de l\'Islam'}},
  {emoji:'💔',ar:{year:'١٩٩٦',title:'الوفاة',desc:'توفي في الرياض ودُفن في البقيع بالمدينة المنورة'},en:{year:'1996',title:'Death',desc:'Passed away in Riyadh and was buried in al-Baqi, Madinah'},fr:{year:'1996',title:'Deces',desc:'Decede a Riyad et enterre a al-Baqi, Medine'}},
];

const QUIZ = [
  {ar:'هل قرأت كتاباً واحداً على الأقل للشيخ الغزالي؟',en:'Have you read at least one book by Sheikh al-Ghazali?',fr:'Avez-vous lu au moins un livre du Sheikh al-Ghazali ?'},
  {ar:'هل تعرف أين وُلد الشيخ الغزالي؟',en:'Do you know where Sheikh al-Ghazali was born?',fr:'Savez-vous ou est ne le Sheikh al-Ghazali ?'},
  {ar:'هل سمعت خطبة من خطب الشيخ الغزالي؟',en:'Have you heard one of Sheikh al-Ghazali\'s sermons?',fr:'Avez-vous entendu un sermon du Sheikh al-Ghazali ?'},
  {ar:'هل تعرف لماذا لُقّب بأديب الدعوة؟',en:'Do you know why he was nicknamed The Literary Preacher?',fr:'Savez-vous pourquoi il etait surnomme Le Litteraire de la Predication ?'},
  {ar:'هل تعرف كم كتاباً ألّف الشيخ الغزالي؟',en:'Do you know how many books Sheikh al-Ghazali authored?',fr:'Savez-vous combien de livres le Sheikh al-Ghazali a ecrits ?'},
  {ar:'هل تعرف أين دُفن الشيخ الغزالي؟',en:'Do you know where Sheikh al-Ghazali was buried?',fr:'Savez-vous ou le Sheikh al-Ghazali a ete enterre ?'},
  {ar:'هل تعرف دور الشيخ في الجزائر؟',en:'Do you know about the Sheikh\'s role in Algeria?',fr:'Connaissez-vous le role du Sheikh en Algerie ?'},
  {ar:'هل تتبنى منهج الوسطية الذي دعا إليه؟',en:'Do you adopt the moderation methodology he advocated?',fr:'Adoptez-vous la methodologie de moderation qu\'il preconisait ?'},
  {ar:'هل تحرص على قراءة الفكر الإسلامي المعاصر؟',en:'Do you make an effort to read contemporary Islamic thought?',fr:'Faites-vous l\'effort de lire la pensee islamique contemporaine ?'},
  {ar:'هل تعرف موقف الشيخ من حقوق المرأة؟',en:'Do you know the Sheikh\'s stance on women\'s rights?',fr:'Connaissez-vous la position du Sheikh sur les droits des femmes ?'},
];

const DUAS = [
  {ar:{label:'دعاء العلم',text:'اللهم علمني ما ينفعني وانفعني بما علمتني وزدني علماً',tr:'O Allah, teach me what benefits me and increase me in knowledge'},en:{label:'Knowledge Dua',text:'O Allah, teach me what benefits me, benefit me from what You taught me, and increase me in knowledge',tr:''},fr:{label:'Dua du Savoir',text:'O Allah, enseigne-moi ce qui me profite et augmente mon savoir',tr:''}},
  {ar:{label:'دعاء الهداية',text:'اللهم اهدني وسددني',tr:'O Allah, guide me and set me right'},en:{label:'Guidance Dua',text:'O Allah, guide me and set me right',tr:''},fr:{label:'Dua de la Guidance',text:'O Allah, guide-moi et redresse-moi',tr:''}},
  {ar:{label:'دعاء الثبات',text:'يا مقلب القلوب ثبت قلبي على دينك',tr:'O Turner of hearts, keep my heart firm on Your religion'},en:{label:'Steadfastness Dua',text:'O Turner of hearts, keep my heart firm on Your religion',tr:''},fr:{label:'Dua de la Fermete',text:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion',tr:''}},
];

let lang = localStorage.getItem('sa-lang') || 'ar';
let theme = localStorage.getItem('sa-theme') || 'purple';
const themes = ['purple','night','lavender'];
const themeIcons = ['💜','🌙','💐'];
const themeNames = {purple:lang==='ar'?'بنفسجي':'Purple',night:lang==='ar'?'ليلي':'Night',lavender:lang==='ar'?'خزامى':'Lavender'};

function playSound(type) {}
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (!t || !m) return; m.textContent = msg; t.style.display = 'block'; setTimeout(() => { t.style.display = 'none'; }, 2500); }
function initSplash() { let count = 5; const el = document.getElementById('splashCount'); const interval = setInterval(() => { count--; if (el) el.textContent = count; if (count <= 0) { dismissSplash(); clearInterval(interval); } }, 1000); }
function dismissSplash() { const s = document.getElementById('splash'); if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); } }

function setLang(l) {
  lang = l; localStorage.setItem('sa-lang', l);
  const isRTL = l === 'ar'; document.documentElement.lang = l; document.documentElement.dir = isRTL ? 'rtl' : 'ltr'; document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l]; const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabTimeline', t.tabTimeline);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('timelineTitle', t.timelineTitle); set('timelineDesc', t.timelineDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderCards(); renderTimeline(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) featuresEl.innerHTML = T[l].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`).join('');
}

function setTheme(t) { theme = t; document.documentElement.dataset.theme = t; localStorage.setItem('sa-theme', t); const idx = themes.indexOf(t); const el = document.getElementById('themeIcon'); if (el) el.textContent = themeIcons[idx]; }
function cycleTheme() { const idx = (themes.indexOf(theme) + 1) % themes.length; setTheme(themes[idx]); showToast(themeNames[themes[idx]]); }

function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); tab.classList.add('active'); const panel = document.getElementById('panel-' + tab.dataset.tab); if (panel) panel.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); }); }); }

function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const c = CARDS[dayIdx]; const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${cd.title}</div><div class="daily-body">${cd.desc}</div><div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>`;
  const sections = [{icon:'📋',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة':lang==='fr'?'20 cartes':'20 cards'},{icon:'📅',tab:'timeline',title:t.tabTimeline,desc:lang==='ar'?'محطات حياته':lang==='fr'?'Jalons de sa vie':'Life milestones'},{icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},{icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'The book'}];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `<div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()"><span class="hc-icon">${s.icon}</span><div class="hc-title">${s.title}</div><div class="hc-desc">${s.desc}</div></div>`).join('');
}

function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => { const d = c[lang]; return `<div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}"><div class="principle-head" onclick="toggleCard('card-${c.id}')"><span class="principle-num">${c.id}</span><span class="principle-emoji">${c.emoji}</span><span class="principle-title">${d.title}</span><span class="principle-chev">&#9660;</span></div><div class="principle-body"><div class="principle-inner"><p class="principle-desc">${d.desc}</p><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="event.stopPropagation();shareCard(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button></div></div></div>`; }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function renderTimeline() {
  document.getElementById('timelineContainer').innerHTML = TIMELINE_DATA.map(t => { const d = t[lang]; return `<div class="timeline-card scroll-reveal"><div class="timeline-year">${d.year}</div><div class="timeline-content"><span class="timeline-emoji">${t.emoji}</span><div><div class="timeline-title">${d.title}</div><div class="timeline-desc">${d.desc}</div></div></div></div>`; }).join('');
}

function toggleCard(id) { const c = document.getElementById(id); if (c) c.classList.toggle('open'); }
function filterCards(q) { const s = q.toLowerCase().trim(); document.querySelectorAll('.principle-card').forEach(c => { const st = c.dataset.search || ''; const tt = c.querySelector('.principle-title'); const t = tt ? tt.textContent.toLowerCase() : ''; c.style.display = !s || st.includes(s) || t.includes(s) ? '' : 'none'; }); }
async function shareCard(idx) { const c = CARDS[idx]; const d = c[lang]; const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n— شاهد على العصر`; if (navigator.share) { try { await navigator.share({ title: d.title, text }); } catch(e) {} } else { try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) {} } }

function renderQuiz() {
  const t = T[lang]; const container = document.getElementById('quizContainer');
  container.innerHTML = QUIZ.map((q, i) => `<div class="quiz-question scroll-reveal" id="quiz-q-${i}"><div class="quiz-q-text">${i+1}. ${q[lang]}</div><div class="quiz-options"><button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button></div></div>`).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden'); window._quizAnswers = {};
}
function selectQuizOpt(qi, val) { window._quizAnswers[qi] = val; document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => o.classList.toggle('selected', [2,1,0][oi] === val)); }
function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) { showToast(lang==='ar'?'أجب على جميع الأسئلة':'Answer all questions'); return; }
  let score = 0; Object.values(answers).forEach(v => { score += v; });
  const max = QUIZ.length * 2; const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) { emoji='🏆'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!'; desc=lang==='ar'?'أنت تعرف الشيخ الغزالي جيداً!':lang==='fr'?'Vous connaissez bien le Sheikh !':'You know Sheikh al-Ghazali well!'; }
  else if (pct >= 50) { emoji='📚'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good'; desc=lang==='ar'?'معرفتك جيدة لكن هناك المزيد لتكتشفه.':'Good knowledge but there\'s more to discover.'; }
  else { emoji='🔍'; title=lang==='ar'?'اكتشف المزيد':lang==='fr'?'Decouvrez plus':'Discover More'; desc=lang==='ar'?'اقرأ البطاقات لتتعرف على الشيخ الغزالي.':'Read the cards to learn about Sheikh al-Ghazali.'; }
  const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
}

function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري بارز، لُقب بأديب الدعوة. ألّف أكثر من ٩٤ كتاباً وأثّر في أجيال من العلماء والدعاة.', bookTitle:'عن الكتاب', bookDesc:'"الشيخ محمد الغزالي شاهداً على العصر" يسلط الضوء على حياة الشيخ ومواقفه وأفكاره وإرثه الفكري الذي تركه للأمة الإسلامية.', sourcesTitle:'المصادر', sources:['كتب الشيخ محمد الغزالي','مقابلات وشهادات معاصريه','مصادر تاريخية إسلامية'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'A prominent Egyptian Islamic scholar and thinker, nicknamed The Literary Preacher. Author of 94+ books who influenced generations of scholars and preachers.', bookTitle:'About the Book', bookDesc:'"Sheikh Mohammed al-Ghazali: Witness of the Era" sheds light on the Sheikh\'s life, positions, ideas, and the intellectual legacy he left for the Islamic Ummah.', sourcesTitle:'Sources', sources:['Books by Sheikh al-Ghazali','Interviews and testimonies of his contemporaries','Islamic historical sources'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Un eminent savant et penseur islamique egyptien, surnomme Le Litteraire de la Predication. Auteur de plus de 94 livres.', bookTitle:'A Propos du Livre', bookDesc:'"Sheikh Mohammed al-Ghazali : Temoin de l\'Epoque" met en lumiere la vie du Sheikh, ses positions, ses idees et son heritage intellectuel.', sourcesTitle:'Sources', sources:['Livres du Sheikh al-Ghazali','Interviews et temoignages de ses contemporains','Sources historiques islamiques'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">🏆</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

function renderHelp() {
  const help = { ar: [{title:'⚠️ تنبيه',body:'هذا جهد متواضع لنشر سيرة الشيخ الغزالي.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، محطات حياة، اختبار.'}], en: [{title:'⚠️ Disclaimer',body:'A humble effort to share Sheikh al-Ghazali\'s biography.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, timeline, quiz.'}], fr: [{title:'⚠️ Avis',body:'Un effort humble pour partager la biographie du Sheikh.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, chronologie, quiz.'}] };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div>${dd.tr ? `<div class="dua-item-tr">${dd.tr}</div>` : ''}</div>`; }).join(''); }

function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); }
function initScroll() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }); }, { threshold: 0.1 }); document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el)); }
function initTicker() { const items = CARDS.slice(0, 10).map(c => c[lang].title); const ticker = document.getElementById('tickerText'); if (ticker) { const text = items.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;&#8226;</span>`).join(''); ticker.innerHTML = text + text; ticker.style.animation = `tickerMarquee ${items.length * 4}s linear infinite`; } }
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#6A1B9A','#AB47BC','#CE93D8','#E1BEE7','#FFD54F','#66BB6A']; for (let i = 0; i < 120; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10}); let frame = 0; function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

document.addEventListener('DOMContentLoaded', () => { setTheme(theme); setLang(lang); initTabs(); initSplash(); initTicker(); setTimeout(initScroll, 300); });
