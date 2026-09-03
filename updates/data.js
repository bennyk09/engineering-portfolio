// updates/data.js

const PORTFOLIO_DATA = {
    biography: {
        headline: "Undergraduate AI/ML Engineer specializing in Edge AI, Embedded Systems, and ML Pipelines.",
        summary: "Pursuing a Bachelor of Technology in Artificial Intelligence & Machine Learning. Hands-on expertise in machine learning pipelines, edge computing, and embedded IoT systems with one published Indian Patent. Experienced in deploying quantized TensorFlow Lite models to resource-constrained microcontrollers (Raspberry Pi, ESP8266, Arduino) and engineering resilient physical-layer computing solutions.",
        email: "bennykothapalli09@gmail.com",
        phone: "+91 8688174715",
        location: "Pamarru, Andhra Pradesh, India"
    },
    socialLinks: {
        instagram: "https://www.instagram.com/seph23.io/",
        linkedin: "https://www.linkedin.com/in/joseph-kothapalli-313393301/",
        github: "https://github.com/bennyk09",
        x: "https://x.com/bennyk99"
    },
    experience: [
        {
            role: "Research and Development (R&D) Lab Member",
            organization: "e-Yantra Robotic Lab, Sri Vasavi Institute of Engineering and Technology",
            timeline: "2025 – 2026",
            contributions: [
                "Built an autonomous obstacle-navigating Raspberry Pi rover featuring smartphone Wi-Fi override controls.",
                "Benchmarked and optimized edge firmware in C and Python across diverse microcontrollers, boosting deployment performance by 96%.",
                "Assembled and flight-tested a lightweight quadcopter drone integrated with mobile telemetry controls."
            ]
        }
    ],
    patents: [
        {
            title: "Real-Time Intruder Detection & Alerting System",
            status: "Published (April 10, 2026)",
            details: "Patent Application No: IN202641039220 A1 (Journal No: 15/2026). Autonomous edge-security unit deploying PIR and vibration sensor fusion, camera event hooks, GPS-tagged email alerts, and motorized parameter locks within 2 seconds."
        },
        {
            title: "Driver Drowsiness & Alcohol Detection System",
            status: "Filed / Under Review (2026)",
            details: "Edge-AI driver safety system combining an MQ-3 alcohol sensor with an OpenCV eye-aspect-ratio (EAR) drowsiness pipeline executing at 24 FPS on Raspberry Pi with automated emergency GPS broadcasts."
        }
    ],
    technicalMatrix: [
        {
            category: "Core Languages & Frameworks",
            skills: [
                "Python, Java, C, JavaScript",
                "TensorFlow, TensorFlow Lite, PyTorch",
                "OpenCV, NumPy, Pandas",
                "Data Structures & Algorithms"
            ]
        },
        {
            category: "Embedded & Edge Hardware",
            skills: [
                "Raspberry Pi, Raspberry Pi Pico W",
                "ESP8266 NodeMCU, Arduino (UNO/Nano)",
                "Sensor Interfacing (PIR, MPU6050, MQ-3, Ultrasonic)",
                "Edge AI Deployment, Sensor Fusion, Analog Circuitry"
            ]
        },
        {
            category: "Tools, Cloud & Methodologies",
            skills: [
                "Firebase Realtime Database, Web Speech API",
                "Git, GitHub, Linux Basics, Google Colab",
                "Rapid Prototyping & Hackathon-Driven Development",
                "Firmware Optimization & Cryptographic Entropy Harvesting"
            ]
        }
    ],
    projects: [
        {
            title: "Solar Flare Forecasting & Nowcasting using Aditya-L1",
            desc: "An end-to-end 4-stage pipeline analyzing soft and hard X-ray telemetry from Aditya-L1 (SoLEXS & HEL1OS) for solar flare detection.",
            badges: ["TensorFlow Lite", "Aditya-L1 Telemetry", "Edge AI"],
            details: [
                "Architected a four-stage pipeline covering data preprocessing, feature extraction, flare detection, and real-time nowcasting.",
                "Quantized deep learning models to TensorFlow Lite, cutting memory footprint by 72% for on-device inference on Raspberry Pi.",
                "Benchmarked and calibrated prediction accuracy against baseline GOES satellite data."
            ],
            techTags: ["Python", "TensorFlow Lite", "Raspberry Pi", "Google Colab"],
            link: ""
        },
        {
            title: "Real-Time Intruder Detection & Alerting System",
            desc: "An autonomous edge-security architecture fusing multi-sensor telemetry with automated physical overrides and real-time alerting.",
            badges: ["Patent Published", "Raspberry Pi", "Edge Security"],
            details: [
                "Engineered zero-lag sensor fusion utilizing PIR motion detectors and structural vibration modules.",
                "Orchestrated instantaneous visual capture routines and automated email dispatch with live GPS coordinates.",
                "Triggered physical motor-driven security locks within 2 seconds of confirmed boundary violation."
            ],
            techTags: ["Python", "Raspberry Pi", "IoT", "Sensors"],
            link: ""
        },
        {
            title: "Hardware-Based True Random Number Generator (TRNG)",
            desc: "A physical entropy harvester generating non-deterministic bitstreams from avalanche breakdown noise under quantum tunneling states.",
            badges: ["CodeFusion Winner", "Hardware Security", "Analog Circuitry"],
            details: [
                "Extracted high-entropy analog voltage fluctuations across reverse-biased Zener diodes.",
                "Digitized stochastic physical noise into high-grade cryptographic bitstreams, bypassing algorithmic pseudorandomness.",
                "Designed, tested, and assembled functional circuit prototypes in under 3 hours."
            ],
            techTags: ["Analog Circuitry", "Zener Diodes", "Embedded C", "Cryptography"],
            link: ""
        },
        {
            title: "IoT Emergency Response Wearable",
            desc: "A wearable fall and impact detection unit featuring automated emergency routing and hands-free voice triage.",
            badges: ["Pico W", "Firebase", "Real-Time Telemetry"],
            details: [
                "Configured MPU6050 accelerometer thresholds to identify high-g impacts and sudden falls with minimal false alarms.",
                "Streamed real-time sensor packets to Firebase Realtime Database for live telemetry dashboards.",
                "Integrated Web Speech API for emergency voice triage and automated nearest-hospital navigation routes."
            ],
            techTags: ["Raspberry Pi Pico W", "MPU6050", "Firebase", "Web Speech API"],
            link: ""
        },
        {
            title: "ML-Based Smart Waste Segregation System",
            desc: "An automated image-based sorting system routing municipal waste into wet and dry streams in real time.",
            badges: ["Computer Vision", "Edge Automation", "94% Accuracy"],
            details: [
                "Trained edge image classification models to classify discarded refuse into wet and dry fractions.",
                "Coupled inference signals directly to an Arduino-controlled servo arm, achieving 94% autonomous sorting accuracy."
            ],
            techTags: ["Python", "OpenCV", "Teachable Machine", "Arduino"],
            link: ""
        },
        {
            title: "Custom Generative Pre-trained Transformer (GPT)",
            desc: "A PyTorch transformer implementation constructed from scratch within 48 hours to study core multi-head attention dynamics.",
            badges: ["PyTorch", "NLP", "Sprint Project"],
            details: [
                "Built an attention-driven text generation model from the ground up using PyTorch primitives.",
                "Analyzed transformer weight distributions, self-attention layers, and token embeddings over a rapid development sprint."
            ],
            techTags: ["Python", "PyTorch", "Transformers", "NLP"],
            link: ""
        },
        {
            title: "Network Signal Analyzer",
            desc: "A deterministic signal strength calculation engine applying matrix summation algorithms for infrastructure analysis.",
            badges: ["Java", "Matrix Computation", "O(1) Optimization"],
            details: [
                "Mapped incoming communication signal states into discrete matrix elements for rapid mathematical analysis.",
                "Optimized multi-signal summation logic in Java to deliver instantaneous metrics for active network monitoring."
            ],
            techTags: ["Java", "Matrix Computation", "Algorithm Design"],
            link: "https://github.com/bennyk09/-Network-Decision-System-"
        }
    ],
    education: [
        {
            timeline: "2024 – 2028 (EXPECTED)",
            title: "B.Tech — Artificial Intelligence and Machine Learning",
            institution: "Sri Vasavi Institute of Engineering and Technology, Nandamuru"
        },
        {
            timeline: "HIGHER SECONDARY",
            title: "Intermediate Education",
            institution: "Sri Viswasanthi Educational Institutions"
        },
        {
            timeline: "PRIMARY FOUNDATION",
            title: "Secondary School Certificate",
            institution: "Sri Chaitanya Techno School"
        }
    ],
    accreditation: [
        {
            timeline: "2026",
            title: "2nd Prize – SolveX Hackathon",
            sub: "Department of CSE, VOICE Association"
        },
        {
            timeline: "2026",
            title: "National Hackathon Competitor",
            sub: "ISRO Bharatiya Antariksh Hackathon (Hack2Skill)"
        },
        {
            timeline: "2026",
            title: "Finalist / Competitor",
            sub: "AVEVA National AI/ML Hackathon (IIT Hyderabad)"
        },
        {
            timeline: "2026",
            title: "Hackathon Competitor Circuit",
            sub: "InnoGenesis 5.0 (Dr. RVR NRI), AVISHKAR (SRGEC), CodeFusion (VRSEC), PSCMR"
        },
        {
            timeline: "2025",
            title: "Certificate of Proficiency",
            sub: "Institution's Innovation Council (IIC), Innovation Day"
        },
        {
            timeline: "2025",
            title: "Workshop Certification",
            sub: "Generative AI Tools & LLM Fundamentals, SVIET"
        }
    ]
};
