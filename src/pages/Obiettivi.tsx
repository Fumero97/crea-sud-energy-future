import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const orData = [
  {
    id: "or1",
    num: "OR1",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Project Management e Disseminazione",
    titolo_en: "Project Management and Dissemination",
    sommario_it: "Coordinamento del partnerariato, gestione amministrativa e finanziaria del progetto, e disseminazione dei risultati verso la comunità scientifica e il pubblico.",
    sommario_en: "Partnership coordination, administrative and financial management, and dissemination of results to the scientific community and the public.",
    sezioni_it: [
      { label: "Obiettivo", text: "L'OR1 ha come obiettivo la gestione del progetto e la coordinazione dei vari partner. L'innovazione proposta ha un riferimento stretto con il mercato economico e un processo reso più efficiente genera maggiore competitività. È opportuno coordinare al meglio la gestione del partnerariato attraverso la definizione di strategie e obiettivi comuni." },
      { label: "Ruolo del capofila", text: "L'ente capofila svolgerà il ruolo di coordinatore con funzioni di responsabilità amministrativa e finanziaria del Progetto, fornendo anche supporto primario nella progettazione, pianificazione e realizzazione delle attività." },
      { label: "Governance", text: "Il procedimento di assunzione delle decisioni verrà disciplinato nel rispetto dei seguenti aspetti: modalità assembleare; modalità di informazione preventiva dei partecipanti; indicazione del momento dal quale la decisione deve dirsi assunta ed efficace; previsione del procedimento di adozione delle modifiche." },
      { label: "Innovazione e strategia", text: "Proposte di progettazione ed interventi di innovazione verranno affidati all'ente capofila, che si occuperà di fornire le linee guida definendo le strategie per valorizzare le risorse (sia materiali che umane) e stabilendo le metodologie per analizzare in modo critico e continuativo i risultati ottenuti." },
      { label: "Comunicazione e disseminazione", text: "Azioni di comunicazione saranno rivolte ai cittadini, ad aziende e agli studenti con contenuti educativi e divulgativi. Altre azioni veicoleranno informazioni tecniche verso i tecnici di settore e le loro forme associative. Il progetto verrà illustrato anche attraverso la partecipazione a convegni, workshop e seminari nazionali ed internazionali sul tema della sostenibilità." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR1 aims at project management and coordination of the various partners. The proposed innovation has a direct connection with the economic market and a more efficient process generates greater competitiveness." },
      { label: "Role of the lead entity", text: "The lead entity will act as project coordinator with administrative and financial responsibility, providing primary support in the design, planning and implementation of the project activities." },
      { label: "Governance", text: "Decision-making procedures will follow these principles: assembly mode; advance information to participants; clear moment of decision effectiveness; procedures for adopting modifications." },
      { label: "Innovation and strategy", text: "Design proposals and innovation initiatives will be entrusted to the lead entity, which will provide guidelines defining strategies to enhance resources and establish methodologies to critically and continuously analyse results." },
      { label: "Communication and dissemination", text: "Communication actions will target citizens, companies and students with educational content. Technical actions will reach sector professionals and industry associations. The project will also be presented at national and international conferences and workshops on sustainability." },
    ],
    deliverables: [
      "M1.1 – Monitoraggio dello stato di avanzamento del progetto",
      "M1.2 – Monitoraggio dello sviluppo del Piano strategico di comunicazione/disseminazione",
    ],
  },
  {
    id: "or2",
    num: "OR2",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Sintesi di ionomeri e di materiali ibridi e nanostrutturati finalizzati allo sviluppo di membrane elettrolitiche nanocomposite per rPEMC",
    titolo_en: "Synthesis of ionomers and hybrid/nanostructured materials for nanocomposite electrolytic membranes for rPEMC",
    sommario_it: "Progettazione e sintesi di membrane elettrolitiche ibride nanocomposite per rPEMC operative a temperature superiori a 100 °C e bassa umidità relativa.",
    sommario_en: "Design and synthesis of hybrid nanocomposite electrolytic membranes for rPEMC operating above 100°C and at low relative humidity.",
    sezioni_it: [
      { label: "Obiettivo", text: "Le attività dell'OR2, svolte presso il laboratorio PCAM-lab del dipartimento CTC, sono focalizzate sulla membrana elettrolitica a scambio protonico (PEM). L'obiettivo generale è progettare, sintetizzare e valutare nuove membrane ibride nanocomposite adatte alle celle reversibili r-PEMC operative a temperature sopra i 100 °C (target 120 °C) e a bassa umidità relativa." },
      { label: "Materiali nanostrutturati", text: "Saranno sviluppate tre classi di materiali nanostrutturati — silicati, carboniosi e argille anioniche — da disperdere in una matrice polimerica per migliorare la ritenzione d'acqua a T > 100 °C e le proprietà meccaniche. Ionomeri perfluorurati (Nafion) saranno usati come riferimento; i nanofiller più promettenti saranno poi adottati con ionomeri aromatici non fluorurati (Polisulfone solfonato) per membrane a basso costo e basso impatto ambientale." },
      { label: "Strategia composita", text: "La strategia organica/inorganica si basa sull'incorporazione di nanoparticelle ibride altamente idrofiliche nella matrice polimerica, che agiscono da riserva d'acqua e promuovono il meccanismo Grotthuss per la mobilità protonica ad alta temperatura." },
      { label: "Metodologie di preparazione e caratterizzazione", text: "Le membrane verranno preparate via solvent-casting ed elettrospinning, esplorando anche architetture asimmetriche per un migliore controllo dell'idratazione sui due lati della cella. Saranno condotti studi di caratterizzazione ex-situ (chimico-fisici, strutturali, trasporto ionico, morfologici) e analisi post-mortem, inclusa tomografia presso la facility STAR-light di UNICAL." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR2 activities, carried out at the PCAM-lab of the CTC department, focus on the proton exchange membrane (PEM). The general objective is to design, synthesize and evaluate new hybrid nanocomposite membranes for reversible r-PEMC cells operating above 100°C and at reduced humidity." },
      { label: "Nanostructured materials", text: "Three classes of nanostructured materials — silicates, carbonaceous, and anionic clays — will be dispersed in a polymer matrix to improve water retention and mechanical properties. Fluorinated ionomers (Nafion) serve as reference; the most promising nanofillers will be combined with non-fluorinated aromatic ionomers (sulfonated polysulfone) for low-cost, low-impact membranes." },
      { label: "Composite strategy", text: "The organic/inorganic strategy incorporates highly hydrophilic hybrid nanoparticles acting as water reservoirs in the polymer matrix, promoting the Grotthuss mechanism for proton mobility at high temperature." },
      { label: "Preparation and characterisation", text: "Membranes will be prepared via solvent-casting and electrospinning, exploring asymmetric architectures for better hydration control. Extensive ex-situ characterisation (physico-chemical, structural, ionic transport, morphological) and post-mortem analysis, including tomography at UNICAL's STAR-light facility, will be conducted." },
    ],
    deliverables: [
      "M2.1 – Conducibilità protonica delle PEM a base di sPSf ≥0.075 S cm⁻¹ @ 120 °C e RH ≤ 40%, e uno swelling di ~ 10%",
      "M2.2 – Modulo di Young delle PEM > 800 MPa",
      "M2.3 – Degradazione della membrana: valutazione della stabilità mediante test di Fenton con perdita di peso <1% dopo 8 ore",
    ],
  },
  {
    id: "or3",
    num: "OR3",
    ente: "Sapienza Università di Roma",
    logo: "/loghi/sapienza.png",
    url: "https://www.uniroma1.it/",
    titolo_it: "Catalizzatori low-Pt e Pt-free per rPEMC, Preparazione e Caratterizzazione energetica dei MEA e degli stack di rPEMFC",
    titolo_en: "Low-Pt and Pt-free catalysts for rPEMC, Preparation and Energy Characterization of MEAs and rPEMFC stacks",
    sommario_it: "Sviluppo di elettrocatalizzatori a basso costo, realizzazione di MEA e stack rPEM reversibili, con caratterizzazione energetica e validazione sperimentale.",
    sommario_en: "Development of low-cost electrocatalysts, fabrication of reversible rPEM MEAs and stacks, with energy characterisation and experimental validation.",
    sezioni_it: [
      { label: "Obiettivo", text: "L'OR3 mira allo sviluppo e allo studio chimico-fisico di elettrocatalizzatori attivi a basso costo, alla realizzazione di assemblati membrana-elettrodo (MEA) per la cella reversibile rPEM e allo studio dello stack, al fine di migliorare l'efficienza e la durabilità del sistema." },
      { label: "Sviluppo catalizzatori", text: "Le prestazioni della cella sono limitate dalla lenta cinetica della riduzione dell'ossigeno (ORR), rendendo necessario l'uso di platino. Le ricerche punteranno a formulazioni \"Pt-free\" o \"ultra-low Pt loading\" tramite preparative colloidali e di impregnazione, con catalizzatori bi-metallici su supporti carboniosi ad alta porosità e ossidi inorganici come promotori. Saranno esplorati anche supporti alternativi a base di Titanio per aumentare la stabilità elettrochimica." },
      { label: "Caratterizzazione MEA e stack", text: "Presso il DIMA (Sapienza), si svolgerà la caratterizzazione energetica di MEA con le membrane dei partner e i catalizzatori del laboratorio di Chimica. Verranno preparati GDL e piatti bipolari con materiali alternativi al carbonio per aumentare la stabilità in modalità elettrolisi. Piccoli stack r-PEM saranno poi assemblati e inseriti in una micro-rete realistica, con sviluppo e validazione di modelli numerici fluidodinamici ed elettrochimici." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR3 aims to develop and study low-cost active electrocatalysts, fabricate MEAs for the reversible rPEM cell, and study the stack to improve system efficiency and durability." },
      { label: "Catalyst development", text: "Cell performance is limited by slow ORR kinetics, requiring platinum. Research targets 'Pt-free' or 'ultra-low Pt loading' formulations via colloidal and impregnation methods, with bimetallic catalysts on high-porosity carbon supports and inorganic oxide promoters. Titanium-based alternative supports will also be explored for improved electrochemical stability." },
      { label: "MEA and stack characterisation", text: "At DIMA (Sapienza), energy characterisation of MEAs will be carried out using partner membranes and chemistry-lab catalysts. GDLs and bipolar plates with alternative materials will be prepared. Small r-PEM stacks will be assembled into a realistic micro-grid, with development and validation of numerical fluid-dynamic and electrochemical models." },
    ],
    deliverables: [
      "M3.1 – Sviluppo di catalizzatori Pt-free",
      "M3.2 – Definizione della tipologia di membrane più adatte per il funzionamento in modalità reversibile",
      "M3.3 – Realizzazione di stack di celle PEM reversibili",
      "M3.4 – Realizzazione di codici di calcolo fluidodinamici ed elettrochimici per la simulazione del comportamento degli stack",
    ],
  },
  {
    id: "or4",
    num: "OR4",
    ente: "Università degli Studi di Salerno",
    logo: "/loghi/salerno.jpg",
    url: "https://www.unisa.it/",
    titolo_it: "Sviluppo di nuovi materiali, formulazioni alternative, caratterizzazione e produzione mediante deposizione di film sottili con RF sputtering di celle reversibili (rSOC) operanti a temperature inferiori a 700°C",
    titolo_en: "Development of new materials, alternative formulations, characterization and production via RF sputtering thin-film deposition of reversible cells (rSOC) operating below 700°C",
    sommario_it: "Sviluppo di nuovi materiali e produzione di componenti rSOC mediante RF sputtering, per celle operanti a temperature inferiori a 700°C.",
    sommario_en: "Development of new materials and production of rSOC components via RF sputtering, for cells operating below 700°C.",
    sezioni_it: [
      { label: "Obiettivo", text: "L'OR4 si propone lo sviluppo di nuovi materiali e formulazioni alternative per celle reversibili (rSOC) a bassa temperatura (almeno 650 °C), con produzione di catodi e interconnect ad elevata conducibilità mediante deposizione di film sottili con RF sputtering, seguita da caratterizzazione di laboratorio e valutazione delle prestazioni tramite Spettroscopia Elettrochimica d'Impedenza (EIS)." },
      { label: "Sfida tecnologica", text: "Il fattore critico che limita le rSOC a bassa temperatura è l'alto valore di Area Specific Resistance (ASR). La soluzione adottata consiste nella riduzione degli spessori degli strati funzionali (anodo, elettrolita, barrier layer, catodo, interconnect) tramite tecniche PVD (Physical Vapour Deposition), che consentono miglioramenti fino al 20% della densità di corrente e riduzione del 25% dell'ASR rispetto alle tecniche tradizionali di screen printing." },
      { label: "Materiali e architetture", text: "Verranno investigati catodi a base di materiali perovskitici (manganiti, cobalto-ferriti) e interconnect con ossidi a base di Cu e Mn, prodotti tramite sputtering RF + annealing in aria. L'approccio PVD aprirà la strada a architetture multistrato ad hoc, dove il catodo può presentare più materiali sovrapposti per ottimizzare le prestazioni." },
      { label: "Caratterizzazione e scale-up", text: "Presso i laboratori UNISA verranno eseguite misure XRD, SEM, TG-MS, BET, UV-vis, XRF/EDX e Raman. Il sistema di sputtering RF verrà aggiornato per depositare su celle di dimensioni industriali (~100 cm²). Le misure EIS, eseguite anche dopo test di invecchiamento accelerato, consentiranno la parametrizzazione analitica delle prestazioni e la stima del degrado." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR4 aims to develop new materials and alternative formulations for low-temperature reversible cells (rSOC) operating at least at 650°C, producing high-conductivity cathodes and interconnects via RF sputtering thin-film deposition, followed by laboratory characterisation and EIS performance evaluation." },
      { label: "Technological challenge", text: "The critical factor limiting low-temperature rSOC is high Area Specific Resistance (ASR). The adopted solution reduces the thickness of functional layers (anode, electrolyte, barrier layer, cathode, interconnect) via PVD techniques, achieving up to 20% improvement in current density and 25% ASR reduction compared to conventional screen printing." },
      { label: "Materials and architectures", text: "Perovskitic cathode materials (manganites, cobalt-ferrites) and Cu/Mn oxide interconnects will be investigated via RF sputtering + air annealing. The PVD approach enables multi-layer architectures where the cathode can incorporate multiple superimposed materials for optimised performance." },
      { label: "Characterisation and scale-up", text: "UNISA labs will perform XRD, SEM, TG-MS, BET, UV-vis, XRF/EDX and Raman measurements. The RF sputtering system will be upgraded for industrial-scale cells (~100 cm²). EIS measurements, including after accelerated aging tests, will enable analytical parametrisation of performance and degradation estimation." },
    ],
    deliverables: [
      "M4.1 – Completamento upgrading attrezzatura per sputtering RF su rSOC 100 cm²",
      "M4.2 – Realizzazione su substrati cristallini di film sottili di diversi materiali di interesse per componenti di rSOC",
      "M4.3 – Realizzazione di componenti di rSOC di 10 cm²",
      "M4.4 – Realizzazione di componenti di rSOC di 100 cm²",
    ],
  },
  {
    id: "or5",
    num: "OR5",
    ente: "Università degli Studi di Camerino",
    logo: "/loghi/camerino.svg",
    url: "https://www.unicam.it/",
    titolo_it: "Caratterizzazioni chimico-fisiche avanzate di materiali e MEA per sistemi reversibili rPEMC e rSOC. Sviluppo di metodologie per la diagnosi dello state-of-health di celle reversibili rPEMC e rSOC basati su misure di impedenza e analisi DRT",
    titolo_en: "Advanced physico-chemical characterization of materials and MEAs for reversible rPEMC and rSOC systems. Development of state-of-health diagnostic methodologies based on impedance measurements and DRT analysis",
    sommario_it: "Caratterizzazione avanzata di materiali ed elettrodi e sviluppo di metodologie diagnostiche per lo stato di salute delle celle reversibili rPEMC e rSOC tramite EIS-DRT.",
    sommario_en: "Advanced characterisation of materials and electrodes, and development of state-of-health diagnostics for reversible rPEMC and rSOC cells via EIS-DRT.",
    sezioni_it: [
      { label: "Obiettivo", text: "L'OR5 mira alla caratterizzazione della cinetica e dei meccanismi di degrado di materiali, elettrodi e MEA per r-PEMC e r-SOC (sviluppati in OR2, OR3 e OR4), e di nuovi catalizzatori per r-PEMC basati su metalli non nobili derivati da metal-organic framework (MOF)." },
      { label: "Attività sperimentali", text: "Saranno sviluppate tre linee di attività: (i) caratterizzazioni spettroscopiche avanzate su polvere fresh e su cella in-situ ed ex-situ; (ii) caratterizzazione della cinetica in r-PEMC tramite misure voltammetriche su elettrodo stazionario, RDE e RRDE; (iii) caratterizzazione dei meccanismi di degrado tramite misure di impedenza e analisi EIS-DRT in diverse condizioni operative (P, T, RH, flow rate, densità di corrente)." },
      { label: "Approccio comparativo", text: "Materiali commerciali verranno usati come termine di riferimento. Per i materiali sviluppati nel progetto, la caratterizzazione sarà effettuata anche in celle operative appositamente progettate, per studiare la struttura locale e i meccanismi redox in condizioni reali." },
      { label: "Infrastrutture e laboratori", text: "Le attività si svolgeranno presso la struttura ChIP (Chemistry Interdisciplinary Project) di UNICAM, dotata di sistemi per assemblaggio celle, generazione di idrogeno e misure EIS. Il gruppo ha accesso consolidato a sincrotroni per esperimenti XAS in-operando e misure di fotoemissione per la caratterizzazione delle superfici." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR5 aims to characterise the kinetics and degradation mechanisms of materials, electrodes and MEAs for r-PEMC and r-SOC (developed in OR2, OR3 and OR4), and of new catalysts for r-PEMC based on non-noble metals derived from metal-organic frameworks (MOF)." },
      { label: "Experimental activities", text: "Three activity lines are planned: (i) advanced spectroscopic characterisation on fresh powder and in-situ/ex-situ cells; (ii) kinetic characterisation of r-PEMC via voltammetric measurements on stationary electrodes, RDE and RRDE; (iii) characterisation of degradation mechanisms via EIS-DRT analysis under varying operating conditions (P, T, RH, flow rate, current density)." },
      { label: "Comparative approach", text: "Commercial materials serve as reference. For materials developed within the project, characterisation will also be performed in specifically designed operational cells to study local structure and redox mechanisms under real conditions." },
      { label: "Infrastructure and laboratories", text: "Activities will be carried out at UNICAM's ChIP facility, equipped for cell assembly, hydrogen generation and EIS measurements. The group has established access to synchrotrons for in-operando XAS experiments and photoemission measurements for surface characterisation." },
    ],
    deliverables: [
      "M5.1 – Risoluzione delle strutture e morfologie dei materiali commerciali disponibili",
      "M5.2 – Caratterizzazione superficiale dei materiali commerciali disponibile",
      "M5.3 – Setup per misure in situ disponibile",
      "M5.4 – Modello elettrochimico di funzionamento della cella disponibile",
      "M5.5 – Catalizzatori derivati da MOFs disponibili",
      "M5.6 – Risoluzione delle strutture e morfologie dei materiali sviluppati nel progetto",
      "M5.7 – Caratterizzazione superficiale dei materiali sviluppati nel progetto disponibile",
      "M5.8 – Caratterizzazione operando disponibile",
      "M5.9 – Metodologia per la prevenzione e il degrado del funzionamento delle celle disponibile",
      "M5.10 – Caratterizzazione dei materiali sintetizzati disponibile, con comportamento stabile in celle singole per t>1000h",
    ],
  },
  {
    id: "or6",
    num: "OR6",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo_it: "Concept, Design del Sistema Stack Reversibile rPEM e rSOC, Analisi delle Performance Energetiche tramite Modelli Numerici e Attività Sperimentale",
    titolo_en: "Concept and Design of the Reversible Stack System rPEM and rSOC, Energy Performance Analysis via Numerical Models and Experimental Activity",
    sommario_it: "Progettazione del sistema stack reversibile rPEMC/rSOC e analisi delle performance energetiche tramite modelli numerici e attività sperimentale al Fuel Cell and Hydrogen Lab.",
    sommario_en: "Design of the reversible rPEMC/rSOC stack system and energy performance analysis via numerical models and experimental activity at the Fuel Cell and Hydrogen Lab.",
    sezioni_it: [
      { label: "Obiettivo", text: "Le attività dell'OR6 mirano a identificare il concept e il design del sistema energetico innovativo proposto, effettuando analisi termo-fluidodinamiche dei sistemi a cella reversibile r-PEMC e r-SOC, e verificandone prestazioni elettrochimiche, energetiche e durabilità in un corretto ciclo di funzionamento reversibile." },
      { label: "Design del sistema e Balance of Plant", text: "Il concept di un idoneo Balance of Plant (BoP) verrà usato per effettuare il design del sistema energetico stack reversibile. Le prestazioni dello stack verranno mappate in funzionamento reversibile — sia in modalità cella a combustibile che elettrolizzatore — per identificare le zone di lavoro ad alta efficienza sia per le r-PEMC che per le r-SOC." },
      { label: "Modelli numerici e attività sperimentale", text: "Le ricerche si basano su modelli numerici sviluppati ad hoc, tecniche di modellazione avanzata e software commerciali di analisi ingegneristica. Le prove sperimentali verranno condotte presso il Fuel Cell and Hydrogen Lab dell'Università della Calabria, sfruttando l'ampia esperienza del gruppo in pubblicazioni scientifiche e collaborazioni internazionali nel settore." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR6 aims to identify the concept and design of the proposed innovative energy system, performing thermo-fluid-dynamic analyses of reversible r-PEMC and r-SOC energy systems, verifying electrochemical, energy and thermo-fluid-dynamic performance and durability in a correct reversible operating cycle." },
      { label: "System design and Balance of Plant", text: "An appropriate Balance of Plant (BoP) concept will be used to design the reversible stack energy system. Stack performance will be mapped in reversible operation — both in fuel cell and electrolyser modes — to identify high-efficiency working regions for both r-PEMC and r-SOC." },
      { label: "Numerical models and experimental activity", text: "Research relies on ad-hoc numerical models, advanced modelling techniques and commercial engineering software. Experimental tests will be conducted at the Fuel Cell and Hydrogen Lab of UNICAL, leveraging the group's extensive expertise in scientific publications and international collaborations." },
    ],
    deliverables: [
      "M6.1 – Prestazioni simulate dell'integrazione BoP-rPEMC che garantiscano il funzionamento dello stack",
      "M6.2 – Prestazioni simulate dell'integrazione BoP-rSOC che garantiscano il funzionamento dello stack",
      "M6.3 – Validazione dei modelli numerici sviluppati su banco prova sperimentale settato e funzionante",
      "M6.4 – Prestazioni del sistema energetico rPEMC superiori all'equivalente sistema discreto separato in EL e FC",
      "M6.5 – Prestazioni del sistema energetico rSOC superiori all'equivalente sistema discreto separato in EL e FC",
    ],
  },
  {
    id: "or7",
    num: "OR7",
    ente: "Calabra Maceri e Recuperi S.r.l.",
    logo: "/loghi/calabra-maceri.png",
    url: "https://www.calabramaceri.it/",
    titolo_it: "Analisi Complessive del Sistema ed Analisi di Casi Studio Applicativi Rilevanti per i Sistemi Reversibili",
    titolo_en: "Overall System Analysis and Analysis of Relevant Application Case Studies for Reversible Systems",
    sommario_it: "Analisi di fattibilità tecnica, economica e ambientale di impianti Power-to-Hydrogen-to-Power e Power-to-X con sistemi reversibili rSOC e rPEM.",
    sommario_en: "Technical, economic and environmental feasibility analysis of Power-to-Hydrogen-to-Power and Power-to-X plants using reversible rSOC and rPEM systems.",
    sezioni_it: [
      { label: "Obiettivo", text: "L'OR7 analizza casi studio applicativi rilevanti per i nuovi concept di cella reversibile sviluppati nel progetto. Le rSOC e rPEM possono svolgere due compiti distinti — produzione di energia (modalità cella a combustibile) e accumulo di energia (modalità elettrolizzatore) — a un costo potenzialmente inferiore rispetto a sistemi discreti separati." },
      { label: "Contesto e motivazione", text: "Nella tendenza globale di includere fonti rinnovabili intermittenti nei mix energetici, il duplice funzionamento di r-PEMC e r-SOC si inserisce perfettamente nella sfida della transizione energetica: consente di evitare la dissipazione dell'elettricità in eccesso convertendola in idrogeno, e di restituirla alla rete quando necessario. La letteratura attuale presenta gap significativi nell'analisi integrata di questi sistemi, soprattutto per applicazioni con biometano, ammoniaca e syngas." },
      { label: "Approccio metodologico", text: "L'OR indaga la fattibilità tecnica, economica e ambientale degli impianti con approccio di ricerca fondamentale, valutando il CAPEX massimo accessibile in funzione di: concept di impianto (supply e process chain); alternative di progettazione; dimensionamento e gestione ottimali; scenari applicativi diversificati; analisi di sensitività dei fattori chiave influenti." },
    ],
    sezioni_en: [
      { label: "Objective", text: "OR7 analyses application case studies relevant to the new reversible cell concepts developed. rSOC and rPEM systems can perform two distinct tasks — energy production (fuel cell mode) and energy storage (electrolyser mode) — at potentially lower cost than discrete separate systems." },
      { label: "Context and motivation", text: "In the global trend of integrating intermittent renewables into energy mixes, the dual-operation of r-PEMC and r-SOC fits perfectly into the energy transition challenge: surplus electricity is converted into hydrogen instead of being curtailed, and returned to the grid when needed. Current literature presents significant gaps in the integrated analysis of these systems, especially for applications with biomethane, ammonia and syngas." },
      { label: "Methodological approach", text: "The OR investigates the technical, economic and environmental feasibility of plants using a fundamental research approach, evaluating maximum accessible CAPEX as a function of: plant concepts (supply and process chain); design alternatives; optimal sizing and management; diverse application scenarios; sensitivity analysis of key influencing factors." },
    ],
    deliverables: [
      "M7.1 – Identificazione dei casi studio tecnicamente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.2 – Identificazione dei casi studio economicamente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.3 – Identificazione dei casi studio ambientalmente ottimali per applicazioni Power-to-Hydrogen-to-Power con rSOC",
      "M7.4 – Identificazione dei casi studio tecnicamente ottimali per applicazioni Power-to-X-to-Power con rSOC",
      "M7.5 – Identificazione dei casi studio economicamente ottimali per applicazioni Power-to-X-to-Power con rSOC",
      "M7.6 – Identificazione dei casi studio ambientalmente ottimali per applicazioni Power-to-X-to-Power con rSOC",
    ],
  },
];

const ObiettiviList = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t("nav.objectives")} | CREA-SUD`;
  }, [t]);

  return (
  <Layout>
    <SEO
      title="Obiettivi Realizzativi"
      description="I 7 Obiettivi Realizzativi del progetto CREA-SUD: membrane elettrolitiche, catalizzatori, celle rSOC, diagnostica EIS-DRT, design di stack e casi studio Power-to-Hydrogen."
      canonical="/obiettivi"
      lang={language as "it" | "en"}
    />
    <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#30A0D0]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="cs-container relative z-10">
        <p className="cs-eyebrow mb-6 cs-reveal">{t("objectives.eyebrow")}</p>
        <h1 className="cs-h1 mb-10 cs-reveal-delayed-1">{t("objectives.title")}</h1>
        <p className="cs-lead max-w-2xl cs-reveal-delayed-2">
          {t("objectives.lead")}
        </p>
      </div>
    </div>

    <section className="py-24">
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
             <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-[#C9C5BF] p-8">
                  <h3 className="cs-eyebrow text-[10px] mb-6 text-[#908080]">{t("objectives.sidebar_title")}</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    {t("objectives.sidebar_text")}
                  </p>
                </div>
                <div className="cs-rule-accent" />
             </div>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-4">
              {orData.map((or) => (
                <Link
                  key={or.id}
                  to={`/obiettivi/${or.id}`}
                  className="block bg-white border border-[#C9C5BF] hover:border-[#002040] transition-all duration-300 group cs-hover-lift cs-reveal-delayed-2"
                >
                  <div className="flex items-stretch">
                    <div className="w-20 shrink-0 border-r border-[#E8E6E2] flex items-center justify-center bg-[#FAF9F6]/50">
                       <span className="font-serif italic text-2xl text-[#E08030]/40 group-hover:text-[#E08030] transition-colors">
                        {or.num}
                      </span>
                    </div>
                    <div className="p-8 flex-1">
                      <p className="cs-mono text-[9px] mb-1 text-[#908080] uppercase tracking-wider">{or.ente}</p>
                      <h2 className="font-sans font-bold text-[#0E1626] text-[18px] leading-snug group-hover:text-[#E08030] transition-colors mb-3">
                        {language === "it" ? or.titolo_it : or.titolo_en}
                      </h2>
                      <p className="text-[14px] text-[#4A4744] leading-relaxed">
                        {language === "it" ? or.sommario_it : or.sommario_en}
                      </p>
                    </div>
                    <div className="w-16 shrink-0 flex items-center justify-center">
                      <ArrowRight size={18} className="text-[#C9C5BF] group-hover:text-[#002040] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

const ObiettivoDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const or = orData.find((o) => o.id === id);

  if (!or) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="cs-lead mx-auto">{t("objectives.not_found")}</p>
          <Link to="/obiettivi" className="cs-link mt-4 inline-block">
            {t("objectives.back_link")}
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = orData.findIndex((o) => o.id === id);
  const prev = currentIndex > 0 ? orData[currentIndex - 1] : null;
  const next = currentIndex < orData.length - 1 ? orData[currentIndex + 1] : null;

  useEffect(() => {}, [or, language]);

  const orTitle = language === "it" ? or.titolo_it : or.titolo_en;
  const orSommario = language === "it" ? or.sommario_it : or.sommario_en;

  return (
    <Layout>
      <SEO
        title={`${or.num} · ${orTitle}`}
        description={orSommario}
        canonical={`/obiettivi/${or.id}`}
        lang={language as "it" | "en"}
      />
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <Link to="/obiettivi" className="cs-mono text-[10px] text-[#908080] hover:text-[#0E1626] uppercase flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={12} /> {t("objectives.back_to_list")}
          </Link>
          <div className="grid md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-2">
                <span className="cs-h1 text-[#E08030] font-serif italic">{or.num}</span>
             </div>
             <div className="md:col-span-10">
                <p className="cs-eyebrow mb-4">{or.ente}</p>
                <h1 className="cs-h2 mb-4">
                  {language === "it" ? or.titolo_it : or.titolo_en}
                </h1>
             </div>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-12">
              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">{t("objectives.desc_title")}</h2>
                <div className="space-y-8">
                  {(language === "it" ? or.sezioni_it : or.sezioni_en).map((s, i) => (
                    <div key={i}>
                      <p className="cs-mono text-[10px] text-[#E08030] uppercase tracking-widest mb-2">{s.label}</p>
                      <p className="text-[15px] text-[#0E1626] leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">{t("objectives.deliv_title")}</h2>
                <div className="grid gap-4">
                  {or.deliverables.map((d, i) => {
                    const parts = d.split(' – ');
                    const code = parts[0];
                    const text = parts.slice(1).join(' – ').trim();
                    return (
                      <div key={i} className="bg-[#FAF9F6] border border-[#E8E6E2] p-6 flex items-start gap-4">
                        <span className="cs-mono text-[#E08030] font-bold shrink-0">{code}</span>
                        <p className="text-[14px] text-[#4A4744] leading-relaxed">{text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white border border-[#C9C5BF] p-8">
                <h3 className="cs-eyebrow text-[10px] mb-8 text-[#908080]">{t("objectives.info_title")}</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.code_label")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626]">{or.num}</dd>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.lead_entity")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626] mb-4">{or.ente}</dd>
                    <a 
                      href={or.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#FAF9F6] p-4 border border-[#E8E6E2] inline-block hover:border-[#E08030] transition-colors group"
                    >
                      <img src={or.logo} alt={or.ente} className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                    </a>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">{t("objectives.status_label")}</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#E08030]">{t("objectives.status_value")}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-24 pt-12 border-t border-[#E8E6E2] grid grid-cols-2 gap-8">
            {prev ? (
              <Link
                to={`/obiettivi/${prev.id}`}
                className="group text-left"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">← {t("objectives.prev")}</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">
                  {prev.num}: {language === "it" ? prev.titolo_it : prev.titolo_en}
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/obiettivi/${next.id}`}
                className="group text-right"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">{t("objectives.next")} →</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">
                  {next.num}: {language === "it" ? next.titolo_it : next.titolo_en}
                </span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Obiettivi = () => {
  const { id } = useParams();
  return id ? <ObiettivoDetail /> : <ObiettiviList />;
};

export default Obiettivi;
