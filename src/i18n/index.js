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
            "egde1": "Technical Expertise to handle both ME & MC Type MAN B&W, WARTSILA, MITSUBISHI, HYUNDAI, DOOSAN, STX, MTU, YANMAR, CUMMINS, DAIHATSU, CATERPILLAR Etc", 
            "egde2": "Overhauling of HPS, FIVA, Booster Pump, ELFI Valves, Valve Actuator Timing, Accumulators, Cylinder Lubricators, HCU Block, Starting Air Distributor, Tacho System, AICU & ACU Inspection and Function Test", 
            "egde3": "Assistance to Overhaul & Calibrate Fuel components, Turbo Charger, Governor Etc, Team of Service Engineers and Fitters to carry out complete Overhauling at Port Anchorage & Voyage", 
            "egde4": "Supply of Service Engineers and Fitters to assist Vessel Crew/Maker for related works",
            
            "mea": "Marine Electrical & Automation",
            "mead": "Comprehensive marine electrical and automation services.",
            "mea1": "Repair, Recondition, Overhaul, Renew, Trouble Shoot & Diagnostics services on offer",
            "mea2": "Generator, Alternator, Motor, Switch Gear, Control Panel, Breaker, Safety device etc",
            "mea3": "M/E & A/E Control Circuit, Maneuvering Control, Alarms, Tank Gauging, PLC, DC etc",
            "mea4": "Rewinding of Rotor & Stator Coil, Exciter, Washing Bay, Baking Oven, Insulation Service",
            "mea5": "Telecom& Satellite Communication, Infrared Thermograph, Oil Monitoring system etc",

            "rlc": "Robotic Laser Cladding",
            "rlcd": "Advanced robotic laser cladding for optimal durability.",
            "rlc1": "State of the art additive technology to replace chrome plating on Piston ring grooves",
            "rlc2": "Reconditioning of Exhaust valve spindle lid and seat",
            "rlc3": "Cladding services on Piston rods and rotating equipments",
            "rlc4": "Reconditioning of Cam shaft, Turbo rotors, Generator rotors, Cross head and Gear shaft",

            "mms": "Marine Mechanical Services",
            "mmsd": "Expert mechanical services for marine excellence.",
            "mms1": "Services cover Rotating equipments, Propeller & Thruster, Tail Shaft & CPP, Rudder etc",
            "mms2": "Crane, Pump, Motor, Windlass, Winch, Boiler, Heat Exchanger, Power pack Gear box etc",
            "mms3": "Cylinder, Valve, Accumulator, Strg gear, Console, Servo, Grab, Clutch, Cargo pump, Gauge",
            "mms4": "Governor, Turbocharger, I.G Sys, Purifier, Fuel pump, Oily water separator, Pneumatic etc",
            "mms5": "Over Hauling of Main Engine / Auxiliary Engine , Renewal of Liner , Bearing Clearance Measurement",

            "pi":"Piping & Insulation",
            "pid": "Reliable marine piping and insulation solutions.",
            "pi1":"WPS, PQR & WPQ for Carbon Steel, Stainless Steel SS 304 & 316, Copper Nickel Pipes",
            "pi2":"Facilities to cater for SMAW, FCAW, GTAW, SAW Process with Baking & Holding Oven",
            "pi3":"Cropping & Renewal of Various System Pipe Lines, Modification & Pressure Testing etc",
            "pi4":"Hot & Cold Insulation along with Cladding & Sheet metal work",
            "pi5":"FRP, CU-NI, SUS, Alloy Pipe Fabrication and Installation",

            "ssw": "Structural Steel Work",
            "sswd": "Precision structural steel craftsmanship for marine needs.",
            "ssw1": "WPS, PQR & WPQ for Mild Steel, High Tensile Steel, Stainless Steel, Aluminum etc",
            "ssw2": "Facilities to cater for SMAW, FCAW, SAW, Gouging Process with Baking & Holding Oven",
            "ssw3": "Cropping & Renewal of Structural Steel all over the Vessel along with NDT inspection etc",
            "ssw4": "Fabrication & Installation of Outfitting Structures, Skids, Modules, Helipad Deck etc",

            "ms": "Machine Shop",
            "msd": "Advanced machining for precision marine components",
            "ms1": "Proven track record aided with state of the art equipments & specialized procedures",
            "ms2": "Services include Turning, Boring, Drilling, Milling, Facing, Knurling, Thread & Gear etc",
            "ms3": "Rudder Trunk, Strg Flap, Winch Pedestal, Heel Pin Housing, Stern Tube & Rudder Bush",
            "ms4": "Rudder Stock, Thruster Shaft, Windlass & Mooring Winch Shaft, Pump Case & Cover, Hatch cover Roller, Pedestal Bearing etc",

            "ism": "In Situ Machining",
            "ismd": "On-site precision machining for immediate solutions.",
            "ism1": "Proven track record aided with state of the art equipments & specialized procedures",
            "ism2": "Machining of Stern Tube, Crane Column, Crane Heel Pin, Rudder Trunk, Flanges etc",

            "fac": "Facilities",
            "laa": "Language",


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
           
            "eg": "エンジンオーバーホール",
            "egd": "ピークパフォーマンスのための専門的なエンジンオーバーホール",
            "egde1": "MEおよびMCタイプのMAN B&W、WARTSILA、MITSUBISHI、HYUNDAI、DOOSAN、STX、MTU、YANMAR、CUMMINS、DAIHATSU、CATERPILLARなどを取り扱うための技術的専門知識", 
            "egde2": "HPS、FIVA、ブースターポンプ、ELFIバルブ、バルブアクチュエータタイミング、アキュムレータ、シリンダー潤滑器、HCUブロック、始動空気ディストリビュータ、タコシステム、AICUおよびACU検査および機能テストのオーバーホール", 
            "egde3": "燃料コンポーネント、ターボチャージャー、ガバナーなどのオーバーホールおよびキャリブレーションのサポート。港のアンカレイジおよび航海での完全なオーバーホールを実施するためのサービスエンジニアとフィッターのチーム。", 
            "egde4": "関連作業のための船舶乗組員/メーカーを支援するサービスエンジニアとフィッターの供給。",

            "mea": "海洋電気および自動化",
            "mead": "総合的な海洋電気および自動化サービス",
            "mea1": "修理、再調整、オーバーホール、更新、トラブルシュート、診断サービスを提供",
            "mea2": "ジェネレーター、オルタネーター、モーター、スイッチギア、制御パネル、ブレーカー、安全装置など",
            "mea3": "M/EおよびA/E制御回路、操縦制御、アラーム、タンクゲージング、PLC、DCなど",
            "mea4": "ローターおよびステータコイルの巻き戻し、励磁器、洗浄ベイ、焼成炉、絶縁サービス",
            "mea5": "テレコムおよび衛星通信、赤外線サーモグラフィ、油監視システムなど",

            "rlc": "ロボットレーザークラッディング",
            "rlcd": "最適な耐久性のための先進的なロボットレーザークラッディング",
            "rlc1": "ピストンリングの溝のクロムめっきを置き換えるための最先端の添加技術",
            "rlc2": "排気バルブスピンドルの蓋と座席の再調整",
            "rlc3": "ピストンロッドおよび回転装置に対するクラッディングサービス",
            "rlc4": "カムシャフト、ターボローター、ジェネレータローター、クロスヘッド、ギアシャフトの再調整",

            "mms": "海洋機械サービス",
            "mmsd": " 海洋優れたための専門の機械サービス",
            "mms1": "サービスは、回転装置、プロペラおよびスラスター、テールシャフトおよびCPP、舵などをカバーしています",
            "mms2": "クレーン、ポンプ、モーター、ウィンドラス、ウィンチ、ボイラー、熱交換器、パワーパックギアボックスなど",
            "mms3": "シリンダー、バルブ、アキュムレータ、Strgギア、コンソール、サーボ、グラブ、クラッチ、貨物ポンプ、ゲージ",
            "mms4": "ガバナー、ターボチャージャー、I.Gシステム、浄化器、燃料ポンプ、油水分離器、空気圧など",
            "mms5": "メインエンジン/補助エンジンのオーバーホール、ライナーの更新、ベアリングクリアランスの測定",

            "pi":"配管および断熱",
            "pid": "信頼性のある海洋配管および断熱ソリューション",
            "pi1":"炭素鋼、ステンレス鋼SS 304および316、銅ニッケルパイプのWPS、PQR、およびWPQ",
            "pi2":"SMAW、FCAW、GTAW、SAWプロセスの焼成および保持オーブンを備えた施設",
            "pi3":"各種システムパイプラインの切断および更新、改造および圧力試験など",
            "pi4":"熱および冷断熱に加えてクラッディングおよびシートメタル作業",
            "pi5":"FRP、CU-NI、SUS、合金パイプの製造および取り付け",

            "ssw": "構造鋼の作業",
            "sswd": "海洋ニーズのための精密な構造鋼の職人技",
            "ssw1": "軟鋼、高引張鋼、ステンレス鋼、アルミニウムなどのWPS、PQR、WPQ",
            "ssw2": "SMAW、FCAW、SAW、ガウジングプロセスの焼成および保持オーブンを備えた施設",
            "ssw3": "船全体の構造鋼の切断および更新、およびNDT検査など",
            "ssw4": "アウトフィッティング構造、スキッド、モジュール、ヘリパッドデッキなどの製造および取り付け",

            "ms": "機械工場",
            "msd": "精密な海洋部品のための先進的な加工",
            "ms1": "最先端の機器および特殊な手順を使用した実績が確認されています",
            "ms2": "サービスには、旋削、ボーリング、ドリリング、フライス加工、顔面加工、ナーリング、ねじ切り、ギアなどが含まれます",
            "ms3": "ルダートランク、Strgフラップ、ウィンチ台座、ヒールピンハウジング、スターンチューブおよびルダーブッシュ",
            "ms4": "ルーダーストック、スラスターシャフト、ウィンドラスおよび係留ウィンチシャフト、ポンプケースおよびカバー、ハッチカバーローラー、台座ベアリングなど",

            "ism": "現場加工",
            "ismd": "即座の解決策のための現場での精密加工",
            "ism1": "最先端の機器および特殊な手順を使用した実績が確認されています",
            "ism2": "スターンチューブ、クレーンコラム、クレーンヒールピン、ルダートランク、フランジなどの加工",

            "fac": "設備",
            "laa": "日本語",

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
            
            "eg": "இஞ்சின் மீண்டும் அமைத்தல்",
            "egd": "உச்ச செயல்திறனுக்கு அதிபரப்படுத்த இஞ்சின் மீண்டும் அமைத்தல் வல்லவர்",
            "egde1": "ME & MC வகை MAN B&W, WARTSILA, MITSUBISHI, HYUNDAI, DOOSAN, STX, MTU, YANMAR, CUMMINS, DAIHATSU, CATERPILLAR போன்றவற்றை கையாளுவதற்கான தொழில்நுட்ப அறிஞர்", 
            "egde2": "HPS, FIVA, பூஸ்டர் பம்ப், ELFI வால்வுகள், வால்வ் ஆக்டியேட்டர் டைமிங், அக்யுமுலேட்டர்ஸ், சிலிண்டர் லுப்ரிகேட்டர்ஸ், HCU பிளாக், ஸ்டார்டிங் ஏர் டிஸ்டிரிபியூட்டர், டாகோ சிஸ்டம், AICU & ACU பரிசோதனை மற்றும் செயல்பார்வை டெஸ்ட்", 
            "egde3": "ஈரிய அங்கங்கள், டர்போ சார்ஜர், கவர்னர் முதலியவற்றை மீண்டும் அமைத்து மற்றும் கேலிபிரேட் செய்வதற்கு உதவி, போர்ட் ஆங்கரேஜ் & வோயேஜில் முழுமையாக மீண்டும் அமைக்க சேவை பொறியாளர்கள் மற்றும் பிட்டர்களின் குழு.", 
            "egde4": "தொடர்புடைய பணிகளுக்கு கப்பல் அணியினர்/உருவாக்குபவர் உதவுவதற்கு சேவை பொறியாளர்கள் மற்றும் பிட்டர்கள் வழங்குகின்றோம்.",

            "mea": " கடல் மின்னணு மற்றும் தானியங்கி",
            "mead": "ஒருங்கிணைந்த கடல் மின்னணு மற்றும் தானியங்கி சேவைகள்",
            "mea1": "பழுது நீக்க, மறுசூழல், புதுப்பித்தல், புதுப்பிக்க, சிக்கல் கண்டுபிடி & உறுதிப்படுத்தல் சேவைகள் வழங்கப்படுகின்றன",
            "mea2": " ஜெனரேட்டர், ஆல்டர்நேட்டர், மோட்டார், ஸ்விச் கியர், கட்டுப்பாட்டு பாணி, பிரேக்கர், பாதுகாப்பு சாதனம் முதலியவை",
            "mea3": "M/E & A/E கட்டுப்பாட்டு சுழற்சி, மாற்றுத் தட்டு, அலாரங்கள், டேங்க் கேஜிங், PLC, DC முதலியவை",
            "mea4": "ரோட்டர் மற்றும் ஸ்டேட்டர் கயிர் மறுவிளையாட்டம், எக்ஸைட்டர், வாஷிங் பே, பேக்கிங் ஓவன், தடுப்பு சேவை",
            "mea5": "தொலைதோலை & செயல்நிலை தொடர்பு, இன்பிரெட் தெர்மோகிராப், எண்ணெய் கண்தோற்ற அமைப்பு முதலியவை",

            "rlc": "ரோபோடிக் லேசர் கிளாடிங்",
            "rlcd": "ஆதிகமான தொகுத்தல் உடைமைக்கு முன்னணி ரோபோடிக் லேசர் கிளாடிங்",
            "rlc1": " பிஸ்டன் ரிங் பள்ளத்தில் குரோம் அலங்கரிப்பை மாற்றுவதற்கான முன்னோட்ட சேர்க்கை தொழில்நுட்பம்",
            "rlc2": "எக்ஸாஸ்ட் வால்வ் ஸ்பிண்டில் மூடி மற்றும் ஆஸனத்தின் மறுசூழல்",
            "rlc3": "பிஸ்டன் கோல்கள் மற்றும் சுழற்று உபகரணங்களில் கிளாடிங் சேவைகள்",
            "rlc4": "கேம் ஷாப்ட், டர்போ ரோட்டர்கள், ஜெனரேட்டர் ரோட்டர்கள், கிராஸ் ஹெட் மற்றும் கியர் ஷாப்டின் மறுசூழல்",

            "mms": "கடல் இயந்திர சேவைகள்",
            "mmsd": " கடல் சிறப்புக்கு அதிபரப்படுத்த இயந்திர சேவைகள்",
            "mms1": "சேவைகள் சுழற்று உபகரணங்கள், பிரோபெல்லர் & திரஸ்டர், வால் ஷாப்ட் & CPP, ருத்தர் முதலியவற்றை சூழ்ந்து வாங்குகின்றன",
            "mms2": "கிரேன், பம்ப், மோட்டார், விண்டிலஸ், விஞ்ச், பயலர், வெப்ப மாற்றி, பவர் பேக் கியர் பாக்ஸ் முதலியவை",
            "mms3": "சிலிண்டர், வால்வ், அக்யுமுலேட்டர், Strg கியர், கன்சோல், செர்வோ, கிராப், கிளட்ச், கார்கோ பம்ப், கேஜ்",
            "mms4": "கவர்னர், டர்போசார்ஜர், I.G சிஸ், தூய்மைபாக்கி, எரிவாயு பம்ப், எண்ணெய் நீர் பிரிப்பான், காற்றுவியல் முதலியவை",
            "mms5": "முதல் இயந்திர / உதவியியந்திர மீண்டும் அமைத்தல், லைனர் புதுப்பிக்க, அசைவு வெளிசூழல் அளவீடு",

            "pi":"குழாய் மற்றும் தடுப்பு",
            "pid": "நம்பிக்கையாக உள்ள கடல் குழாய் மற்றும் தடுப்பு தீர்வுகள்",
            "pi1":"கார்பன் உலோகம், ஸ்டைன்லெஸ் ஸ்டீல் SS 304 & 316, காப்பர் நிக்கல் குழாய்களுக்கு WPS, PQR & WPQ",
            "pi2":"SMAW, FCAW, GTAW, SAW செயல்முறைக்கு வேண்டிய வசதிகள் வேந்தி வைக்கும் & வைத்திருக்கும் ஓவன்",
            "pi3":"பல்வேறு அமைப்பு குழாய் வரிகளின் வெட்டித்தல் மற்றும் புதுப்பித்தல், மாற்றம் & அழுத்த சோதனை முதலியவை",
            "pi4":"வெப்ப & குளிர் தடுப்பு கிளாடிங் & ஷீட் உலோக வேலைக்குடன்",
            "pi5":"FRP, CU-NI, SUS, அலாய் குழாய் உற்பத்தி மற்றும் நிறுவல்",

            "ssw": "கட்டமைப்பு உலோக வேலை",
            "sswd": "கடல் தேவைகளுக்கு துல்லியமான கட்டமைப்பு உலோக வேலைக்கலை",
            "ssw1": "மிகவும் மெல்லிய உலோகம், உயர் நம்பிக்கை உலோகம், ஸ்டைன்லெஸ் ஸ்டீல், அலுமினியம் முதலியவற்றுக்கு WPS, PQR & WPQ",
            "ssw2": "SMAW, FCAW, SAW, கௌஜிங் செயல்முறைக்கு வேண்டிய வசதிகள் வேந்தி வைக்கும் & வைத்திருக்கும் ஓவன்",
            "ssw3": "கப்பலின் முழுவதும் கட்டமைப்பு உலோகத்தின் வெட்டித்தல் மற்றும் புதுப்பித்தல், NDT பரிசோதனை முதலியவைக்குடன்",
            "ssw4": "ஆட்டியல் கட்டமைப்புகள், ஸ்கிட்ஸ், மாடியுல்கள், ஹெலிபேட் டெக் முதலியவற்றின் உற்பத்தி மற்றும் நிறுவல்",

            "ms": "இயந்திர அங்காடி",
            "msd": "துல்லியமான கடல் உறுப்புகளுக்கு முதலாதிக இயந்திர வேலை",
            "ms1": "முதலாதிக உபகரணங்கள் & சிறப்பு செயல்முறைகளுடன் உத்தமமான பாதை பதிவு",
            "ms2": "சேவைகள் உழைந்து சுழற்றுதல், குழுவாக்குதல், மில்லிங், முகம் செயல்முறை, நூலிழத்தல், தலை & கியர் முதலியவற்றை உள்ளடக்கின்றன",
            "ms3": "ருத்தர் டிரங்க், ஸ்ட்ர்ஜ் பிளாப், விஞ்ச் பெடிஸ்டல், ஹீல் பின் வீடு, ஸ்டேர் டியூப் & ருத்தர் புஷ்",
            "ms4": "ருத்தர் ஸ்டாக், திரஸ்டர் ஷாப்ட், விண்டிலஸ் & மூரிங் விஞ்ச் ஷாப்ட், பம்ப் கேஸ் & கவர், ஹாச் கவர் ரோலர், பெடிஸ்டல் பேரிங் முதலியவை",

            
            "ism": "இடத்தில் இயந்திர வேலை",
            "ismd": "உடனடியாக தீர்வுகளுக்கு இடத்தில் துல்லியமான இயந்திர வேலை",
            "ism1": "முதலாதிக உபகரணங்கள் & சிறப்பு செயல்முறைகளுடன் உத்தமமான பாதை பதிவு",
            "ism2": "ஸ்டேர் டியூப், கிரேன் கம்பு, கிரேன் ஹீல் பின், ருத்தர் டிரங்க், ஃபிளாஞ்சிஸ் முதலியவற்றின் இயந்திர வேலை",

            "fac": "வசதிகள்",
            "laa": "தமிழ்",
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
            
            "eg": " Pengubahsuaian Enjin",
            "egd": "Pengubahsuaian enjin pakar untuk prestasi puncak",
            "egde1": "Kepakaran teknikal untuk mengendalikan kedua-dua jenis ME & MC seperti MAN B&W, WARTSILA, MITSUBISHI, HYUNDAI, DOOSAN, STX, MTU, YANMAR, CUMMINS, DAIHATSU, CATERPILLAR dan sebagainya", 
            "egde2": "Pengubahsuaian HPS, FIVA, Pam Pemacu, Injap ELFI, Penentuan Masa Aktuator Injap, Akumulator, Pelincir Silinder, Blok HCU, Pengedar Udara Mula, Sistem Tacho, Pemeriksaan AICU & ACU dan Ujian Fungsi", 
            "egde3": "Bantuan untuk Pengubahsuaian & Kalibrasi Komponen Bahan Api, Turbo Charger, Gubernur dan sebagainya, Pasukan Jurutera Perkhidmatan dan Pemasang untuk menjalankan Pengubahsuaian lengkap di Labuh Pelabuhan & Pelayaran.", 
            "egde4": "Pembekalan Jurutera Perkhidmatan dan Pemasang untuk membantu Kru/Kilang Kapal dalam kerja-kerja berkaitan.",

            "mea": " Elektrik & Automasi Marin",
            "mead": "Perkhidmatan elektrik dan automasi marin yang komprehensif",
            "mea1": "Baik pulih, Pemulihan semula, Pengubahsuaian, Pembaharuan, Menembak masalah & Perkhidmatan diagnostik yang ditawarkan",
            "mea2": " Generator, Alternator, Motor, Alat Suis, Panel Kawalan, Pemutus Litar, Peranti Keselamatan dan sebagainya",
            "mea3": "Litar Kawalan M/E & A/E, Kawalan Manuver, Alaram, Pengukuran Tangki, PLC, DC dan sebagainya",
            "mea4": "Menggulung semula Kili Rotor & Stator, Penguat, Teluk Pencucian, Oven Membakar, Perkhidmatan Penebat",
            "mea5": "Telekom & Komunikasi Satelit, Termografi Inframerah, Sistem Pemantauan Minyak dan sebagainya",

            "rlc": "Pendandan Laser Robotik",
            "rlcd": "Pendandan laser robotik lanjutan untuk ketahanan yang optimal",
            "rlc1": " Teknologi tambahan terkini untuk menggantikan pelapik kromium pada alur cincin piston",
            "rlc2": "Pengkondisian semula penutup spindel injap ekzos dan tempat duduk",
            "rlc3": "Perkhidmatan pendandan pada batang piston dan peralatan berputar",
            "rlc4": "Pengkondisian semula batang cam, rotor turbo, rotor penjana, kepala silang dan batang gear",

            "mms": "Perkhidmatan Mekanikal Marin",
            "mmsd": " Perkhidmatan mekanikal pakar untuk kecemerlangan marin",
            "mms1": " Perkhidmatan meliputi peralatan berputar, Propeller & Thruster, Shaft Ekor & CPP, Kemudi dan sebagainya",
            "mms2": "Kren, Pam, Motor, Windlass, Winch, Dandang, Penukar Habah, Kotak Gear Bateri Kuasa dan sebagainya",
            "mms3": "Silinder, Injap, Akumulator, Gear Strg, Konsol, Servo, Cengkerang, Klac, Pam Kargo, Pengukur",
            "mms4": "Gubernur, Turbocharger, Sistem I.G, Penyucih, Pam Bahan Api, Pemisah Air Berminyak, Pneumatik dan sebagainya",
            "mms5": "Pemeriksaan Semula Enjin Utama / Enjin Pembantu, Pembaharuan Liner, Pengukuran Jarak Asas",

            "pi":"Pemipaan & Penebatan",
            "pid": "Penyelesaian pemipaan dan penebatan marin yang boleh dipercayai",
            "pi1":"WPS, PQR & WPQ untuk Keluli Karbon, Keluli Tahan Karat SS 304 & 316, Paip Nikel Tembaga",
            "pi2":"Kemudahan untuk melayani proses SMAW, FCAW, GTAW, SAW dengan Oven Membakar & Menahan",
            "pi3":"Pemotongan & Pembaharuan Pelbagai Sistem Paip, Pengubahsuaian & Ujian Tekanan dll",
            "pi4":"Penebatan Panas & Sejuk bersama dengan Pendandan & Kerja logam lembaran",
            "pi5":"Fabrikasi dan Pemasangan Paip FRP, CU-NI, SUS, Aloi",

            "ssw": "Kerja Keluli Struktur",
            "sswd": "Kemahiran keluli struktur yang tepat untuk keperluan marin",
            "ssw1": "WPS, PQR & WPQ untuk Keluli Lemah, Keluli Tegangan Tinggi, Keluli Tahan Karat, Aluminium dan sebagainya",
            "ssw2": "Kemudahan untuk melayani proses SMAW, FCAW, SAW, Gouging dengan Oven Membakar & Menahan",
            "ssw3": "Pemotongan & Pembaharuan Keluli Struktur di seluruh kapal bersama dengan pemeriksaan NDT dan sebagainya",
            "ssw4": "Fabrikasi & Pemasangan Struktur Pakaian, Skid, Modul, Dek Helipad dan sebagainya",

            "ms": "Bengkel Mesin",
            "msd": "Pemesinan lanjutan untuk komponen marin yang tepat",
            "ms1": "Rekod trek yang terbukti dengan peralatan canggih & prosedur khusus",
            "ms2": "Perkhidmatan termasuk Memusing, Membosankan, Menggerudi, Mengisar, Menghadapi, Knurling, Benang & Gear dan sebagainya",
            "ms3": "Bagasi Kemudi, Strg Flap, Pedestal Winch, Perumahan Pin Tumit, Tiub Buritan & Semak Rudder",
            "ms4": "Stok Rudder, Paksi Thruster, Windlass & Paksi Winch Mooring, Kes Pam & Penutup, Roller penutup luak, Galas Pedestal dan sebagainya",

            "ism": "Pemesinan In Situ",
            "ismd": "Pemesinan tepat di tapak untuk penyelesaian segera",
            "ism1": "Rekod trek yang terbukti dengan peralatan canggih & prosedur khusus",
            "ism2": "Pemesinan Tiub Buritan, Kolom Kren, Pin Tumit Kren, Bagasi Kemudi, Flens dan sebagainya",

            "fac": "Kemudahan",
            "laa": "melayu",
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
            
            "eg": " 发动机大修",
            "egd": "为达到最佳性能的专家发动机大修",
            "egde1": "具有处理ME和MC类型的MAN B&W、WARTSILA、MITSUBISHI、HYUNDAI、DOOSAN、STX、MTU、YANMAR、CUMMINS、DAIHATSU、CATERPILLAR等的技术专长", 
            "egde2": "对HPS、FIVA、增压泵、ELFI阀、阀门执行器时序、蓄能器、气缸润滑器、HCU块、启动空气分配器、测速系统、AICU和ACU检查和功能测试进行大修", 
            "egde3": "协助翻新和校准燃料组件、涡轮增压器、调速器等，服务工程师和装配工的团队在港口锚地和航行中进行完整的翻新", 
            "egde4": "供应服务工程师和装配工协助船员/制造商进行相关工作。",

            "mea": " 海洋电气与自动化",
            "mead": "综合性的海洋电气与自动化服务",
            "mea1": "提供修理、翻新、大修、更新、故障排除和诊断服务",
            "mea2": " 发电机、交流发电机、电动机、开关设备、控制面板、断路器、安全设备等",
            "mea3": "M/E和A/E控制电路，机动控制，报警，油箱测量，PLC，直流等",
            "mea4": "电机转子和定子线圈的重绕，激励器，洗车位，烘烤炉，绝缘服务",
            "mea5": "电信和卫星通信，红外热像仪，油监测系统等",

            "rlc": "机器人激光堆焊",
            "rlcd": "高级机器人激光堆焊，以实现最佳耐久性",
            "rlc1": " 使用最新添加技术替换活塞环槽的铬镀",
            "rlc2": "排气阀主轴盖和座位的再调整",
            "rlc3": "对活塞杆和旋转设备的堆焊服务",
            "rlc4": "再调整凸轮轴、涡轮转子、发电机转子、十字头和齿轮轴",

            "mms": "海洋机械服务",
            "mmsd": "为海洋卓越提供的专家机械服务",
            "mms1": "服务涵盖旋转设备、螺旋桨和推进器、尾轴和CPP、舵等",
            "mms2": "起重机、泵、电机、绞车、绞盘、锅炉、热交换器、动力包齿轮箱等",
            "mms3": "气缸、阀门、蓄能器、Strg齿轮、控制台、伺服、抓手、离合器、货物泵、计量器",
            "mms4": "调速器、涡轮增压器、I.G系统、净化器、燃油泵、油水分离器、气动等",
            "mms5": "主发动机/辅助发动机的大修，衬套的更换，轴承间隙测量",

            "pi":"管道与绝热",
            "pid": "可靠的海洋管道和绝热解决方案",
            "pi1":"碳钢，不锈钢SS 304和316，铜镍管的WPS，PQR和WPQ",
            "pi2":"设施可满足SMAW、FCAW、GTAW、SAW过程，并配有烘烤和保温炉",
            "pi3":"裁剪和更新各种系统管道，修改和压力测试等",
            "pi4":"热和冷绝热以及覆盖和钣金加工",
            "pi5":"FRP、CU-NI、SUS、合金管制造和安装",

            "ssw": "结构钢工作",
            "sswd": "为海洋需求提供精确的结构钢工艺",
            "ssw1": "WPS、PQR和WPQ用于轻钢、高强度钢、不锈钢、铝等",
            "ssw2": "设施可满足SMAW、FCAW、SAW、凿槽过程，并配有烘烤和保温炉",
            "ssw3": "船上所有结构钢的裁剪和更新以及NDT检查等",
            "ssw4": "装备结构、滑行、模块、直升机停机坪甲板等的制造和安装",

            "ms": "机械车间",
            "msd": "高级加工用于精密的海洋部件",
            "ms1": "经过验证的跟踪记录，配备最先进的设备和专门的程序",
            "ms2": "服务包括车削、钻孔、钻孔、铣削、面加工、滚花、螺纹和齿轮等",
            "ms3": "舵柱、Strg瓣、绞车基座、后跟销壳、船尾管和舵衬套",
            "ms4": "舵柄、推进器轴、绞车和系泊绞车轴、泵壳和盖、舱口盖辊、基座轴承等",

            "ism": "现场加工",
            "ismd": "现场精密加工以获得即时解决方案",
            "ism1": "经过验证的跟踪记录，配备最先进的设备和专门的程序",
            "ism2": "船尾管、起重机柱、起重机后跟销、舵柱、法兰等的加工",

            "fac": "设施",
            "laa": "中国人",
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