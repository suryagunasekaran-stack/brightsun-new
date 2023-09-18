import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Welcome": "Ship Repair, We Made It Simple.",
            "Brou": "Brouchere",
            "Welcome2": "Brightsun is Trustworthy for Predictive, Preventive, Shutdown Maintenance and Repairs towards the Safe Sailing of Marine Vessel's all around the Globe.",
            "Our Services": "Our Services",
            "b": "Brochure",
            "ab": "About us",
            "s": "Services",
            "cu": "Contact us",
            "abd": "Established in 1998, Brightsun Marine provides specialized services in the Ship Repair sector. By adapting a customer-centric focus, we have established a strong and proven track record in providing quality services with Safe working practice. We are the preferred contractor to all leading Shipyard's at Singapore, Ship Owner's & Ship Manager's in and around Singapore. With our Anchorage of Trust, Experience, Knowledge and Commitment, We offer Afloat, Wharf Side, Inner Port, Outer Port & Voyage Repair Services in a more Innovative manner and a Competitive Price in line with the Current Market.",
            "ov": "OUR VISION ",
            "v": "To be a Leader in Marine and Offshore Engineering in the Asia Pacific Region ",
            "om": "OUR MISSION ",
            "m": "Deliver Quality Service to our Customers. Provide Optimum Returns to our Shareholders. Create a rewarding and conducive work environment for our employees. Maintain our reputation as a responsible Corporate Citizen ",
            "trust": "TRUST US FOR QUALITY, SAFETY & ON TIME DELIVERY",
            "t": "We provide round the clock able services catering to various field’s like Mechanical, Electrical, Instrumentation & Automation, Machining, Engine Components Reconditioning, Hydraulic, Pneumatic, Steel Work, Piping and Insulation work activities pertaining to various categories of Ocean Going Vessel’s like Bulk, Tanker, Container, Offshore Platform, Tug, PSV, AHTS, FPSO, FSO, FDPSO, Naval Fleet & Frigate, Submarine, Cruise, Dredger etc. Our strong hold on Business front is our dedicated Work Force of over 450 Skilled Technicians, Professional Engineers, Production Managers and Specialists covering an wide array of Work related to Machinery, Electrical, Instrumentation & Control, Steel & Outfitting, Piping & Insulation, Erection & Commissioning of Equipments, Hydraulics & Pneumatics, In-situ Machining & Laser Alignment, Engine Components Repair, Reconditioning, Hard Chrome Plating, Testing, Inspection etc. We also assist in the provision of NDT Services, LSA & FFA Service Arrangement, CNC Machining arrangement, Scaffolding arrangement, Provision of Safety Assessor attendance for Anchorage Hot work Permit & all other work scope that needs Third Party Authentication.",
            "eg": "Engine Overhauling",
            "egd": "Expert engine overhauling for peak performance.",
            "egde": ["Technical Expertise to handle both ME & MC Type MAN B&W, WARTSILA, MITSUBISHI, HYUNDAI, DOOSAN, STX, MTU, YANMAR, CUMMINS, DAIHATSU, CATERPILLAR Etc, Overhauling of HPS, FIVA, Booster Pump, ELFI Valves,", "Valve Actuator Timing, Accumulators, Cylinder Lubricators, HCU Block, Starting Air Distributor, Tacho System, AICU & ACU Inspection and Function Test Assistance to Overhaul & Calibrate Fuel components, Turbo", "Charger, Governor Etc, Team of Service Engineers and Fitters to carry out complete Overhauling at Port Anchorage & Voyage, Supply of Service Engineers and Fitters to assist Vessel Crew/Maker for related works"],
            // ... other English translations
        }
    },
    ja: {
        translation: {
            "Welcome": "船の修理、私たちはそれをシンプルにしました。",
            "Brou": "パンフレット",
            "Welcome2": "Brightsunは、世界中の海洋船舶の安全な航行のための予測、予防、シャットダウンの保守および修理に信頼できます。",
            "Our Services": "私たちのサービス",
            "b": "パンフレット",
            "ab": "私たちについて",
            "s": "サービス ",
            "cu": "お問い合わせ",
            "abd": "1998年に設立されたBrightsun Marineは、船舶修理部門での専門的なサービスを提供しています。お客様中心のアプローチを採用することで、安全な作業慣行での質の高いサービス提供において、強固で実績のあるトラックレコードを築いてきました。私たちはシンガポールのすべての主要な造船所、シンガポールおよびその周辺の船主および船舶管理者の好まれる請負業者です。私たちの信頼、経験、知識、そしてコミットメントの錨として、我々は現在の市場に合わせたより革新的な方法と競争力のある価格で、浮上、埠頭側、内部港、外部港および航海修理サービスを提供しています。",
            "ov": "私たちのビジョン",
            "v": "アジア太平洋地域での海洋および沖合工学のリーダーとなること。",
            "om": "私たちのミッション ",
            "m": " お客様に質の高いサービスを提供する。株主に最適なリターンを提供する。従業員のための報酬的で適切な労働環境を作成する。責任ある企業市民としての評判を維持する。 ",
            "trust": "私たちを信頼してください - 品質、安全、そして時間通りの配送のために",
            "t": "私たちは、機械、電気、計測・自動化、加工、エンジン部品の再調整、油圧、空気圧、鋼鉄作業、配管および絶縁作業活動に関連するさまざまな分野、例えばバルク、タンカー、コンテナ、沖合いプラットフォーム、タグ、PSV、AHTS、FPSO、FSO、FDPSO、海軍艦隊＆フリゲート、潜水艦、クルーズ、浚渫船などのさまざまなカテゴリーの洋上船舶に関連するサービスを24時間提供しています。ビジネスフロントでの私たちの強力なサポートは、機械、電気、計測・制御、鋼鉄＆装備、配管＆絶縁、機器の設置＆委託、油圧＆空気圧、現地加工＆レーザー整列、エンジン部品の修理、再調整、硬クロムめっき、テスト、検査などの作業に関連する450人以上の熟練技術者、専門エンジニア、生産マネージャー、および専門家からなる専用の労働力です。私たちも、NDTサービス、LSA＆FFAサービスの手配、CNC加工の手配、足場の手配、アンカーホットワーク許可の安全評価者の出席の供給、および第三者認証が必要なすべての他の作業範囲の提供をサポートします。",
            "eg": "",
            "egd": "",
            // ... other Japanese translations
        }
    },
    ta: {
        translation: {
            "Welcome": "கப்பல் பழுது பார்த்தல், நாங்கள் அதை எளிதாக்கினோம்.",
            "Brou": "புக்கிளேட்",
            "Welcome2": "உலகம் முழுவதும் கடல் கப்பல்களின் பாதுகாப்பான பயணத்திற்கு முன்கணிப்பு, தடுப்பு, ஷட்டுடவுன் பராமரிப்பு மற்றும் பழுது பார்த்தல் கிடைக்கும் Brightsun நம்பகமானது.",
            "Our Services": "எங்கள் சேவைகள்",
            "b": "புக்கிளேட்",
            "ab": "எங்களை பற்றி",
            "s": "சேவைகள்",
            "cu": "தொடர்பு கொள்ளுங்கள்",
            "abd": "1998ல் நிறுவப்பட்ட Brightsun Marine கப்பல் பழுது சேமிப்பு துறையில் சிறப்பு சேவைகளை வழங்குகிறது. வாடிக்கையாளர் கேண்டிரிக்கப்பட்ட கவனத்துடன் அதப்தது, பாதுகாப்பான பணிக்கடிதத்தில் தரமான சேவைகளை வழங்குவதில் உறுதியான படிதத்தை நிறைவேற்றியுள்ளோம். சிங்கப்பூர் அனைத்து முன்னணி கப்பல் கட்டுமான கூடங்களுக்கு, சிங்கப்பூர் மற்றும் அதன் சுற்றுலா கப்பல் உரிமையாளர்கள் மற்றும் கப்பல் மேலாளர்களுக்கு விரும்பிய உத்தியோகிப்பாளர்கள் நாங்கள். நமது நம்பிக்கை, அனுபவம், அறிவு மற்றும் கடமையின் நங்கூரத்துடன், நாங்கள் பதிவு சேவைகளை மேலும் புதுமையான முறையில் மற்றும் தற்போதைய சந்தையில் போட்டியுள்ள விலையில் வழங்குகின்றோம்.",
            "ov": "எங்கள் காண்கை ",
            "v": "ஆசியா-பசிபிக் பிரதேசத்தில் கடல் மற்றும் கடலூர் பொறியியலில் தலைவராக இருக்க வேண்டும். ",
            "om": "எங்கள் கடமை ",
            "m": "எங்கள் வாடிக்கையாளர்களுக்கு தரமான சேவையை வழங்கு. எங்கள் பங்கேற்பாளர்களுக்கு சிறந்த திருப்தியை வழங்கு. எங்கள் ஊழியர்களுக்கு பரிதாப மற்றும் ஏற்றுக்கொள்ள உகந்த பணியிடத்தை உருவாக்கு.ஒரு பொறுப்புக்கூடிய கார்ப்பரேட் போலியாக எங்கள் பெயர் பாதுகாக்க. ",
            "trust": "தரத்தில், பாதுகாப்பில் & கால வாய்ப்பில் எங்களை நம்புங்கள் ",
            "t": "நாம் முழு காலத்திலும் திறனாளி சேவைகளை வழங்குகின்றோம், இது பொதுவாக மெக்கானிக்கல், எலெக்ட்ரிக்கல், உபகரணம் & ஆட்டோமேஷன், மெஷினிங், எஞ்சின் பாகங்கள் மறுநிலைப்பு, ஹைட்ரோலிக், பினியுமாடிக், உலோக வேலை, பைபிங் மற்றும் இன்சுலேஷன் சேவைகள் ஆகியவற்றை உள்ளடக்கியது. இது கடல் போக்குவரத்து வாகனங்கள் போன்ற பல வகைகளுக்கு ஏற்றது, பல்க், டாங்கர், காண்டைனர், ஆஃப்ஷோர் பிளாட்பாரத்து, டக், PSV, AHTS, FPSO, FSO, FDPSO, கடற்படை படை & பிரிகேட், உபகடல், குரூஸ், ட்ரெட்ஜர் ஆகியவற்றுக்கு. நமது வணிக முனையில் உள்ள பலமான கைவிரியம் எங்களுக்கு 450 குழுமத்தில் அதிகமான திறனாளி தொழிலாளர்கள், விருப்பமுள்ள பொறியாளர்கள், உற்பத்தி மேலாளர்கள் மற்றும் சிறப்புத்தோழர்கள் ஆகியோர். இது மெஷினரி, எலெக்ட்ரிக்கல், உபகரணம் & கட்டுப்பாடு, ஸ்டீல் & ஔட்டிபிட்டிங், பைபிங் & இன்சுலேஷன், உத்தேய சேவைகள் & கமிஷனிங் சேவைகள், ஹைட்ராலிக்ஸ் & பினியுமாடிக்ஸ், இன்-ஸிடு மெஷினிங் & லேசர் அலைன்மெண்ட், எஞ்சின் பாகங்கள் சேவை, மறுநிலைப்பு, ஹார்ட் குரோம் பிளேட்டிங், டெஸ்டிங், பரிசோதனை ஆகியவற்றைக் கொண்டுவருகின்றது. நாம் NDT சேவைகள், LSA & FFA சேவை அமைப்பு, CNC மெஷினிங் அமைப்பு, ஸ்காஃபோல்டிங் அமைப்பு, அங்கோரேஜ் ஹாட் வெர்க் அனுமதி & அனைத்து பிற வேலை காரணங்களுக்கு திருத்த பார்டி அத்தெளித்தல் தேவைப்படும் போது பாதுகாப்பு முதலாளியின் கலந்துரையாடல் வழங்குவதில் உதவுகின்றோம்.",
            "eg": "",
            "egd": "",
            // ... other Tamil translations
        }
    },
    ms: {
        translation: {
            "Welcome": "Pembaikan Kapal, Kami Buat Ia Mudah.",
            "Brou": "Brosur",
            "Welcome2": "Brightsun adalah Dipercayai untuk Penyelenggaraan dan Pembaikan yang Dapat Diprediksi, Pencegahan, Penutupan terhadap Pelayaran Selamat Kapal Laut di seluruh Dunia.",
            "Our Services": "Perkhidmatan kami",
            "b": "Brosur",
            "ab": "Mengenai kami",
            "s": "Perkhidmatan",
            "cu": "Hubungi kami",
            "abd": "Ditubuhkan pada tahun 1998, Brightsun Marine menyediakan perkhidmatan khusus dalam sektor Pembaikan Kapal. Dengan mengadaptasi fokus berpusat kepada pelanggan, kami telah menubuhkan rekod trek yang kuat dan terbukti dalam menyediakan perkhidmatan berkualiti dengan amalan kerja yang selamat. Kami adalah kontraktor pilihan untuk semua Pembinaan Kapal terkemuka di Singapura, Pemilik Kapal & Pengurus Kapal di sekitar Singapura. Dengan Labuh Kita yang berdasarkan Kepercayaan, Pengalaman, Pengetahuan dan Komitmen, Kami menawarkan Perkhidmatan Pembaikan di Afloat, Wharf Side, Inner Port, Outer Port & Voyage dengan cara yang lebih Inovatif dan Harga yang Bersaing sesuai dengan Pasaran Semasa.",
            "ov": "VISI KAMI ",
            "v": "Menjadi Pemimpin dalam Kejuruteraan Marin dan Luar Pesisir di Wilayah Asia Pasifik ",
            "om": "MISI KAMI ",
            "m": "Menyampaikan Perkhidmatan Berkualiti kepada Pelanggan kami. Menyediakan Pulangan Optimum kepada Pemegang Saham kami.Mencipta persekitaran kerja yang memberi ganjaran dan kondusif bagi pekerja kami. Menjaga reputasi kami sebagai Warganegara Korporat yang bertanggungjawab.",
            "trust": "PERCAYAI KAMI UNTUK KUALITI, KESELAMATAN & PENGHANTARAN TEPAT MASA ",
            "t": "Kami menyediakan perkhidmatan yang cekap sepanjang masa yang menepati pelbagai bidang seperti Mekanikal, Elektrik, Instrumentasi & Automasi, Pemesinan, Pembaikan Komponen Enjin, Hidraulik, Pneumatik, Kerja Besi, Pemipaan dan aktiviti Kerja Insulasi yang berkaitan dengan pelbagai kategori Kapal Lautan seperti Bulk, Tanker, Kontena, Platform Laut, Tug, PSV, AHTS, FPSO, FSO, FDPSO, Armada Tentera Laut & Frigate, Kapal Selam, Pelayaran, Dredger dan lain-lain. Kekuatan utama kami dalam aspek perniagaan adalah Tenaga Kerja kami yang berdedikasi yang terdiri daripada lebih 450 Teknisi Mahir, Jurutera Profesional, Pengurus Produksi dan Pakar yang meliputi pelbagai aspek Kerja berkaitan dengan Mesin, Elektrik, Instrumentasi & Kawalan, Baja & Peralatan, Pemipaan & Insulasi, Pemasangan & Pengkomisen Peralatan, Hidraulik & Pneumatik, Pemesinan In-situ & Penjajaran Laser, Pembaikan Komponen Enjin, Pembaikan semula, Pelapisan Krom Keras, Ujian, Pemeriksaan dan lain-lain. Kami juga membantu dalam penyediaan Perkhidmatan NDT, Penyusunan Perkhidmatan LSA & FFA, Penyusunan Pemesinan CNC, Penyusunan Perancah, Penyediaan Penilai Keselamatan untuk Kebenaran Kerja Panas di Labuh & semua skop kerja lain yang memerlukan Pengesahan Pihak Ketiga.",
            "eg": "",
            "egd": "",
            // ... other Malay translations
        }
    },
    zh: {
        translation: {
            "Welcome": "船舶修理，我们让它变得简单",
            "Brou": "手册",
            "Welcome2": "Brightsun在全球范围内都被认为是可靠的，能够预测、预防、关闭维护和修理，确保海上船舶的安全航行。",
            "Our Services": " 我们的服务",
            "b": "手册",
            "ab": "关于我们",
            "s": " 服务",
            "cu": "联系我们",
            "abd": "Brightsun Marine成立于1998年，专门在船舶维修领域提供专业服务。通过采纳以客户为中心的策略，我们在提供安全工作实践的高质量服务方面建立了强大且经过验证的业绩。我们是新加坡所有领先造船厂，新加坡及其周边地区的船东和船舶经理的首选承包商。凭借我们的信任、经验、知识和承诺锚点，我们以更创新的方式以及与当前市场相符的竞争价格提供浮动、码头旁、内港、外港和航行维修服务。",
            "ov": "我们的愿景 ",
            "v": "成为亚太地区海洋和离岸工程的领导者。 ",
            "om": "我们的使命 ",
            "m": "为我们的客户提供高质量的服务。 为我们的股东提供最佳回报。为我们的员工创造一个有益且有利的工作环境。维护我们作为一个负责任的企业公民的声誉。 ",
            "trust": "信赖我们的质量、安全和准时交付 ",
            "t": "我们提供全天候的能力服务，满足各种领域的需求，如机械、电气、仪表和自动化、机加工、发动机部件再制、液压、气动、钢铁工作、管道和绝缘工作活动，涉及各种类别的远洋船只，如散货、油船、集装箱、离岸平台、拖船、PSV、AHTS、FPSO、FSO、FDPSO、海军舰队和护卫舰、潜艇、游轮、挖泥船等。我们在业务方面的坚强后盾是我们的专用工作队伍，包括超过450名熟练技术员、专业工程师、生产经理和专家，涵盖了与机械、电气、仪器和控制、钢铁和设备、管道和绝缘、设备的安装和调试、液压和气动、现场机加工和激光对准、发动机部件修理、再制、硬铬镀、测试、检查等相关的广泛工作。我们还协助提供NDT服务、LSA和FFA服务安排、CNC机加工安排、脚手架安排、为锚地热工作许可提供安全评估员出席和需要第三方认证的所有其他工作范围。",
            "eg": "",
            "egd": "",
            // ... other Chinese translations
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;