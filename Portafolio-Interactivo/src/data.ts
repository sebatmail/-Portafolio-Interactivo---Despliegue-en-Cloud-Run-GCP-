import { ExperienceItem, ProjectItem, SkillItem, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Sebastián Ignacio Torres Zamorano',
  shortName: 'Sebastián Torres',
  title: 'Analista Programador en Formación | Infraestructura, Soporte & Automatización TI',
  email: 'storres@momentumspace.cl',
  phone: '+569 8956 6411',
  location: 'Temuco, Región de La Araucanía, Chile',
  github: 'https://github.com', // fallback
  linkedin: 'https://linkedin.com', // fallback
  domain: 'www.momentumspace.cl',
  bio: 'Estudiante de Analista Programador / Ingeniería en Informática con rendimiento académico sobresaliente (Promedio 6.1) en INACAP Sede Temuco, y formación previa en Administración de Empresas (UPV, España). Cuento con experiencia práctica en soporte de hardware y software, administración de infraestructura web comercial independiente, y nociones básicas de integración de flujos de automatización con n8n.',
  headline: 'Impulsando la eficiencia operacional mediante soporte técnico, automatización de flujos y desarrollo seguro en formación.',
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-altoplagas',
    title: 'Soporte TI & Encargado de Infraestructura Web',
    company: 'AltoplagasChile',
    period: 'Ene 2013 - Presente',
    location: 'Chile (Remoto / Presencial)',
    url: 'https://altoplagas-chile.cl',
    tags: ['Web Support', 'n8n (Básico)', 'Google Ads', 'SysAdmin Básico'],
    metrics: [
      { label: 'Uptime', value: '99%' },
      { label: 'Automatizaciones', value: 'Flujos de oficina simples' },
      { label: 'Soporte', value: '100% efectividad' },
    ],
    tasks: [
      'Administración básica del hosting, renovación de SSL y control del dominio comercial, asegurando la continuidad de servicio del sitio de la empresa.',
      'Soporte y comprensión de flujos básicos de oficina con n8n para optimizar la organización y canalización interna de correos de cotizaciones de clientes.',
      'Soporte técnico directo de hardware y estaciones de trabajo, resolviendo incidentes lógicos informáticos de nivel de usuario.',
      'Coordinación de campañas sencillas en Google Ads para visibilidad digital, midiendo métricas clave de comportamiento web.'
    ]
  },
  {
    id: 'exp-smartech',
    title: 'Vendedor Técnico & Asesor en Accesorios de Móviles',
    company: 'Tecnología Smartech Chile',
    period: 'Ene 2015 - Dic 2016',
    location: 'Temuco, Chile',
    tags: ['Accesorios Móviles', 'Asesoría al Cliente', 'Protectores de Pantalla', 'Soporte Móvil Básico'],
    metrics: [
      { label: 'Rol Principal', value: 'Accesorios y protectores' },
      { label: 'Instalaciones', value: '100% precisión' }
    ],
    tasks: [
      'Asesoramiento personalizado de clientes sobre compatibilidad de accesorios, fundas protectoras, cargadores y repuestos homologados.',
      'Instalación impecable y profesional de láminas protectoras de pantalla de vidrio templado, hidrogel y otros materiales de protección física.',
      'Atención al público en general, consultoría rápida para la configuración inicial de sistemas operativos móviles (Android/iOS) y diagnóstico visual básico.'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-momentum',
    name: 'MomentumSpace.cl',
    description: 'Levantamiento autónomo y administración de mi propio entorno web comercial y de pruebas para respaldar proyectos de estudio personales. Configuración integral de DNS de cara a precaver spam, HTTPS con renovación de certificados Let\'s Encrypt y políticas básicas de enrutamiento web seguro.',
    role: 'Administrador de Infraestructura & Fundador',
    period: 'Proyecto Activo',
    url: 'https://www.momentumspace.cl',
    status: 'active',
    securityHighlights: [
      'Configuración correcta de HTTPS forzado, renovación transparente de certificados SSL y protección simple contra Spam.',
      'Configuración óptima de registros DNS (SPF, DKIM, DMARC) de cara a precaver la suplantación de identidad en campañas de correo o contactos.'
    ],
    infrastructureDetails: [
      'Administración limpia de panel de control de hosting cPanel / WebHost Manager.',
      'Gestión rutinaria del ciclo de vida de respaldos redundantes.'
    ],
    businessImpact: 'Este proyecto demuestra una competencia tangible en el mundo real para configurar, publicar y proteger servicios computacionales en producción, listos para un ambiente corporativo.'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Administración de Redes y DNS',
    category: 'infra',
    level: 75,
    command: 'dig momentumspace.cl',
    output: [
      ';; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 48911',
      ';; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0',
      ';; ANSWER SECTION:',
      'momentumspace.cl.	3600	IN	A	200.54.12.19',
      '[OK] DNS configurado con registros de correo SPF y redirecciones HTTPS.'
    ]
  },
  {
    name: 'Soporte de Hardware & Software',
    category: 'infra',
    level: 80,
    command: 'systeminfo | findstr /B /C:"OS Name" /C:"Total Physical Memory"',
    output: [
      'OS Name:                   Microsoft Windows 11 Enterprise',
      'Total Physical Memory:     16,234 MB',
      'Soporte completo e instalación física de discos NVMe, módulos RAM y mantenimiento térmico.'
    ]
  },
  {
    name: 'Bases de Datos Relacionales (SQL)',
    category: 'coding',
    level: 70,
    command: 'sqlite3 academico.db "SELECT nombre, nota FROM alumnos ORDER BY nota DESC LIMIT 1;"',
    output: [
      'Sebastián Torres|6.1',
      '[SQL Query executed successfully. Database engine: SQLite/MySQL]'
    ]
  },
  {
    name: 'Fundamentos de Ciberseguridad',
    category: 'security',
    level: 65,
    command: 'nmap -sV -F 192.168.1.1',
    output: [
      'Host is up (0.005s latency).',
      'PORT     STATE SERVICE VERSION',
      '80/tcp   open  http    Apache httpd 2.4.52',
      '443/tcp  open  ssl     OpenSSL 3.0.2',
      '[INFO] Auditoría básica de puertos en laboratorios virtuales académicos.'
    ]
  },
  {
    name: 'Conceptos de Automatización (n8n)',
    category: 'coding',
    level: 45,
    command: 'n8n --version',
    output: [
      'n8n nodemation - Community Version',
      '[Nivel]: Básico / Principios de Automatización',
      '[Conceptos]: Entendimiento de Webhooks, IMAP Triggers y flujos condicionales simples.',
      '[Objetivo]: Complemento para soporte de oficina y tareas repetitivas.'
    ]
  },
  {
    name: 'Análisis de Requerimientos',
    category: 'soft',
    level: 75,
    command: 'analisis_diseno --get-diagram',
    output: [
      '[+] Generando Diagrama de Casos de Uso (UML)',
      '[+] Entidades detectadas: Cliente, Transacción, Reporte_Soporte',
      '[+] Plan estructurado bajo metodologías ágiles en desarrollo.'
    ]
  },
  {
    name: 'Windows Server 2019 & Directorio Activo',
    category: 'infra',
    level: 75,
    command: 'Get-ADUser -Filter * | Select-Object Name, UserPrincipalName, Enabled',
    output: [
      '[OK] Windows Server 2019 Standard - Active Directory Domain Services',
      '[Control de Acceso]: Configuración de Unidades Organizativas (OUs), Políticas de Grupo (GPOs).',
      '[Permisos]: Control total, lectura o denegación de acceso estructurado a recursos compartidos.',
      '[Formación]: Aprobado y dominado como parte clave de la materia de Sistemas Operativos en INACAP.'
    ]
  },
  {
    name: 'Entornos de Virtualización',
    category: 'infra',
    level: 70,
    command: 'vboxmanage list vms',
    output: [
      '"srv-windows-server-2019" {a67f1b98-d21a-4ea8-b391}',
      '"ubuntu-desktop-client" {28de31ca-94f8-410a-84ea}',
      '[Entorno de Pruebas]: Simulación local de controladores de dominio y clientes para pruebas de permisos.'
    ]
  },
  {
    name: 'Analítica Google Ads',
    category: 'coding',
    level: 65,
    command: 'ads_conversion_track --get-ctr',
    output: [
      'CTR Publicitario: 6.8% | Rebote: -22%',
      'Rastreo básico de conversiones mediante etiquetas e integración manual.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-inacap',
    degree: 'Analista Programador / Ingeniería en Informática',
    institution: 'INACAP – Sede Temuco',
    period: '2025 - Actualidad',
    gpa: '6.1 / 7.0',
    details: 'Cursando último año de la titulación de Analista Programador con egreso programado en Diciembre de 2026. Sólidas bases académicas en programación orientada a objetos (Java, C#), bases de datos SQL relacionales (Oracle, MySQL), desarrollo web front-end/back-end, lógica de redes y arquitectura segura.',
    highlights: [
      'Promedio de calificaciones actual de 6.1, manteniéndome con distinción académica superior.',
      'Titulación de Analista Programador finalizada en Diciembre de 2026.',
      'Sólido manejo en algoritmos, diseño UML y despliegue de aplicaciones de escritorio y Web semi-complejas.'
    ]
  },
  {
    id: 'edu-upv',
    degree: 'Administración y Dirección de Empresas',
    institution: 'Universitat Politècnica de València – Campus Alcoy, España',
    period: '3 Años Cursados (Grado Incompleto)',
    details: 'Estudios profundizados en presupuestos, administración estratégica y gestión de procesos operativos. Esta base analítica dota al perfil de capacidad para analizar riesgos operacionales y optimizar el retorno de inversión publicitaria.',
    highlights: [
      'Firme dominio de la gestión de operaciones y análisis financiero.',
      'Capacidad para evaluar costos operacionales de incidentes tecnológicos para priorizar el soporte.',
      'Estructural mental orientada al control de procesos internos y auditorías administrativas.'
    ]
  }
];

export const OBJECTIVES_AND_CERTS = {
  certs: [
    {
      name: 'CompTIA Security+',
      status: 'En Preparación (Examen Proyectado)',
      description: 'Estudio autodidacta regular de los pilares de seguridad e infraestructura informática, control de identidad y gestión de vulnerabilidades para formalizar mi perfil de analista de TI.'
    }
  ],
  languages: [
    {
      name: 'Inglés',
      level: 'Técnico',
      context: 'Capacidad para leer e interpretar documentación técnica, guías de errores, diagramas estructurados y tutoriales de desarrollo de software.'
    },
    {
      name: 'Alemán',
      level: 'Nivel Inicial / Constancia',
      context: 'Estudio regular con racha de 381+ días activos en Duolingo, demostrando persistencia, enfoque y disciplina regular orientada a resultados.'
    }
  ]
};
