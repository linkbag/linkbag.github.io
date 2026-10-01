export const site = {
  name: "Webster Wang",
  email: "websterwangai@gmail.com",
  github: "https://github.com/linkbag",
  url: "https://linkbag.github.io",
  ui: {
    en: {
      work: "Work",
      about: "About",
      contact: "Contact",
      explore: "Explore the work",
      heroEyebrow: "WEBSTER WANG / PERSONAL PORTFOLIO",
      heroTitle: "Ideas into <em>useful things.</em>",
      heroLead:
        "I build tools for learning, life sciences, personal finance, and teams of AI agents.",
      heroAside: "Curiosity is the common thread.",
      artLearn: "LEARN",
      artBuild: "BUILD",
      artExplore: "EXPLORE",
      artProgress: "ALWAYS IN PROGRESS",
      artFields: "NEUROSCIENCE / BIOTECH / CODE / SNOW",
      top: "Top",
      aboutEyebrow: "A LITTLE ABOUT ME",
      aboutTitle: "A curious mind with a builder's habit.",
      aboutText:
        "Neuroscience PhD. Biotech veteran. Snowboarder. Vibe coder running on 10B+ tokens a month. I turn complex ideas into tools people can actually use.",
      workEyebrow: "SELECTED WORK",
      workTitle: "A collection of things I've built.",
      workLead:
        "Different fields, one impulse: make complex decisions and ideas easier to explore.",
      all: "All projects",
      viewProject: "Explore project",
      visit: "Visit project",
      detailBack: "Back to all projects",
      detailPurpose: "Why it exists",
      detailHighlights: "What it does",
      detailInvolve: "Get involved",
      detailNext: "Up next",
      contactEyebrow: "LET'S CONNECT",
      contactTitle: "Have an idea worth building?",
      contactLead:
        "I’m always interested in thoughtful collaborations, useful tools, and good questions.",
      emailMe: "Email me",
      githubProfile: "GitHub profile",
      screenshot: "Project screenshot",
      figures:
        "Audience and download figures are owner-reported as of September 2026.",
      footerLine: "Made with curiosity. Built to be useful.",
      skip: "Skip to content",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    zh: {
      work: "作品",
      about: "关于",
      contact: "联系",
      explore: "浏览作品",
      heroEyebrow: "WEBSTER WANG / 个人作品集",
      heroTitle: "把好奇心，做成<em>有用的东西。</em>",
      heroLead: "我做学习、生物医药、个人金融研究和 AI 协作领域的工具。",
      heroAside: "好奇心，是它们共同的起点。",
      artLearn: "学习",
      artBuild: "创造",
      artExplore: "探索",
      artProgress: "一直在路上",
      artFields: "神经科学 / 生物医药 / 编程 / 滑雪",
      top: "顶部",
      aboutEyebrow: "关于我",
      aboutTitle: "喜欢探索，更喜欢动手做出来。",
      aboutText:
        "神经科学博士、生物医药老兵、单板滑雪爱好者，也是一位每月燃烧 100 亿+ token 的vibe coding玩家。我喜欢把复杂想法做成真正能用的工具。",
      workEyebrow: "精选作品",
      workTitle: "这些是我做过的东西。",
      workLead: "领域各不相同，出发点却相似：让复杂的问题和想法更容易探索。",
      all: "全部项目",
      viewProject: "了解项目",
      visit: "访问项目",
      detailBack: "返回全部作品",
      detailPurpose: "为什么做",
      detailHighlights: "项目亮点",
      detailInvolve: "如何参与",
      detailNext: "下一个项目",
      contactEyebrow: "保持联系",
      contactTitle: "有值得一起做的想法吗？",
      contactLead: "欢迎聊聊有价值的合作、实用工具，或一个好问题。",
      emailMe: "发邮件给我",
      githubProfile: "GitHub 主页",
      screenshot: "项目截图",
      figures: "访问量及下载量为项目所有者提供的截至 2026 年 9 月的数据。",
      footerLine: "始于好奇，落于实用。",
      skip: "跳转到内容",
      menu: "打开菜单",
      closeMenu: "关闭菜单",
    },
  },
  categories: [
    {
      id: "published",
      en: "Published websites & apps",
      zh: "已上线网站与应用",
      noteEn: "Out in the world",
      noteZh: "已经与用户见面",
    },
    {
      id: "learning",
      en: "Learning tools",
      zh: "学习工具",
      noteEn: "Make knowledge tangible",
      noteZh: "让知识看得见",
    },
    {
      id: "biopharma",
      en: "Biopharma",
      zh: "生物医药",
      noteEn: "Evidence in context",
      noteZh: "把证据放回场景中",
    },
    {
      id: "finance",
      en: "Personal finance research",
      zh: "个人金融研究",
      noteEn: "Explore the evidence",
      noteZh: "看见研究依据",
    },
    {
      id: "ai",
      en: "AI orchestration",
      zh: "AI 协作编排",
      noteEn: "Teams that can be seen",
      noteZh: "可观察的协作",
    },
    {
      id: "next",
      en: "More to come",
      zh: "敬请期待",
      noteEn: "Still taking shape",
      noteZh: "正在酝酿",
    },
  ],
  projects: [
    {
      slug: "peervine",
      category: "published",
      index: "01",
      color: "mint",
      media: "screen",
      image: {
        en: "/assets/media/peervine-en.png",
        zh: "/assets/media/peervine-zh.png",
      },
      status: { en: "LIVE WEBSITE", zh: "已上线" },
      metric: { en: "50+ verified mentors", zh: "50+ 位认证导师" },
      tags: { en: ["Mentorship", "Education"], zh: ["导师辅导", "教育"] },
      actions: [
        {
          en: "Visit PeerVine",
          zh: "访问 PeerVine",
          url: "https://peervine.org/",
          primary: true,
        },
        {
          en: "Become a mentor",
          zh: "申请成为导师",
          url: "https://peervine.org/",
          primary: false,
        },
      ],
      en: {
        title: "PeerVine",
        line: "Real mentors. Practical paths to dream schools.",
        summary:
          "PeerVine connects students with mentors who have firsthand experience in the programs they hope to join. With more than 50 verified mentors, it offers personal guidance on choosing schools, preparing applications, and navigating the path ahead.",
        purpose:
          "Choosing a school and preparing an application can feel opaque. PeerVine makes it easier to find a person who has already walked a similar path and can offer relevant, personal guidance.",
        highlights: [
          "A growing network of 50+ verified mentors",
          "Direct guidance on programs and applications",
          "One-to-one conversations grounded in lived experience",
        ],
        involvement:
          "Browse mentors if you are planning your next academic step, or join the network if you have experience worth sharing.",
        alt: "PeerVine homepage with mentor search and verified mentor count",
      },
      zh: {
        title: "PeerVine",
        line: "真实导师，让升学建议更贴近实际。",
        summary:
          "PeerVine 帮助学生联系拥有目标院校和项目亲身经验的导师。目前平台已有 50 多位经过验证的导师，为选校、申请准备和下一步规划提供更具体的个人建议。",
        purpose:
          "选校和申请常常充满不确定性。PeerVine 帮助学生找到走过相似道路的人，获得与自身目标更相关、更具体的建议。",
        highlights: [
          "已加入 50 多位经过验证的导师",
          "围绕项目选择和申请准备提供指导",
          "基于亲身经历的一对一交流",
        ],
        involvement:
          "如果你正在规划下一段求学之路，可以浏览导师；如果你愿意分享经验，也欢迎加入导师网络。",
        alt: "PeerVine 首页，展示导师搜索和认证导师数量",
      },
    },
    {
      slug: "gradchoice",
      category: "published",
      index: "02",
      color: "blue",
      media: "screen",
      image: {
        en: "/assets/media/gradchoice-en.png",
        zh: "/assets/media/gradchoice-zh.png",
      },
      status: { en: "LIVE WEBSITE", zh: "已上线" },
      metric: { en: "50K+ visitors", zh: "5 万+ 访问者" },
      tags: {
        en: ["Higher education", "Open source"],
        zh: ["高等教育", "开源"],
      },
      actions: [
        {
          en: "Visit GradChoice",
          zh: "访问研选",
          url: "https://gradchoice.org/",
          primary: true,
        },
        {
          en: "View source",
          zh: "查看源码",
          url: "https://github.com/linkbag/GradChoice",
          primary: false,
        },
      ],
      en: {
        title: "GradChoice",
        line: "A clearer view of the people behind the programs.",
        summary:
          "GradChoice is a free platform for anonymous graduate supervisor reviews at Chinese universities. Since launching in Q2 2026, it has welcomed more than 50,000 visitors. Its aim is to help students make a consequential academic choice with more information and room for honest experiences.",
        purpose:
          "The relationship with a graduate supervisor shapes years of research and daily life. GradChoice creates a place where students can learn from the experiences of others before making that choice.",
        highlights: [
          "Anonymous, student-contributed perspectives",
          "Free access to supervisor information",
          "Open source code and a transparent mission",
        ],
        involvement:
          "Explore supervisors, share a thoughtful review of your own experience, or contribute to the open source project.",
        alt: "GradChoice homepage with supervisor search and platform mission",
      },
      zh: {
        title: "研选 GradChoice",
        line: "选导师之前，先多了解一点。",
        summary:
          "研选 GradChoice 是面向中国高校的免费、匿名研究生导师评价平台。自 2026 年第二季度上线以来，已有超过 5 万人访问。它希望让学生在做出重要的导师选择前，看到更多信息，也让真实经历有表达空间。",
        purpose:
          "导师关系会影响数年的科研方向和日常生活。研选希望让学生在作出选择前，能借鉴更多人的真实经历。",
        highlights: [
          "由学生匿名分享的经历和观点",
          "免费获取导师相关信息",
          "开源代码与透明的项目目标",
        ],
        involvement:
          "你可以搜索导师、认真分享自己的经历，也可以参与开源项目建设。",
        alt: "研选首页，展示导师搜索与平台理念",
      },
    },
    {
      slug: "tap-to-learn",
      category: "published",
      index: "03",
      color: "cyan",
      media: "phone",
      image: {
        en: "/assets/media/tap-lookup.jpg",
        zh: "/assets/media/tap-lookup.jpg",
      },
      imageSecondary: "/assets/media/tap-example.jpg",
      status: { en: "ANDROID APP", zh: "安卓应用" },
      metric: { en: "20+ countries", zh: "用户来自 20+ 个国家" },
      tags: {
        en: ["Language learning", "Android"],
        zh: ["语言学习", "Android"],
      },
      actions: [
        {
          en: "Get it on Google Play",
          zh: "前往 Google Play",
          url: "https://play.google.com/store/apps/details?id=com.lingualens.app",
          primary: true,
        },
      ],
      en: {
        title: "Tap to Learn",
        line: "Turn everyday reading into vocabulary practice.",
        summary:
          "Tap to Learn lets Android users look up words while reading across apps, then revisit them through saved vocabulary, flashcards, and quizzes. Since its Q2 2026 launch, it has approached 500 downloads from users in more than 20 countries. The goal is to make language practice part of reading itself.",
        purpose:
          "New words appear during the things we already read. Tap to Learn lets that moment of curiosity become a useful lookup and a future review opportunity.",
        highlights: [
          "Look up words across supported Android screens",
          "Save vocabulary for flashcards and quizzes",
          "Learn in the context of everyday reading",
        ],
        involvement:
          "Install the app on Android and send feedback about the words, screens, or learning moments you want it to handle better.",
        alt: "Tap to Learn Android word lookup screen",
      },
      zh: {
        title: "Tap to Learn",
        line: "随手查词，让日常阅读变成学习。",
        summary:
          "Tap to Learn 让 Android 用户在不同应用中阅读时随手查词，再通过生词本、记忆卡片和测验复习。自 2026 年第二季度上线以来，下载量接近 500 次，用户遍及 20 多个国家。它让语言学习自然融入每天的阅读。",
        purpose:
          "新词常常出现在我们原本就在读的内容里。Tap to Learn 让当下的好奇变成一次查词，也变成之后可以复习的内容。",
        highlights: [
          "在支持的 Android 页面中随手查词",
          "保存词汇并通过记忆卡片和测验复习",
          "结合日常阅读语境学习",
        ],
        involvement:
          "欢迎在 Android 手机上试用，也欢迎反馈你希望它改进的查词和学习场景。",
        alt: "Tap to Learn 安卓应用的单词查询界面",
      },
    },
    {
      slug: "neuroaxis",
      category: "learning",
      index: "04",
      color: "violet",
      media: "screen",
      image: {
        en: "/assets/media/neuroaxis.png",
        zh: "/assets/media/neuroaxis.png",
      },
      status: { en: "AVAILABLE ON REQUEST", zh: "可联系获取" },
      metric: { en: "3D + 2D atlas", zh: "三维 + 二维图谱" },
      tags: {
        en: ["Neuroanatomy", "Interactive atlas"],
        zh: ["神经解剖", "交互图谱"],
      },
      actions: [
        {
          en: "Request installation package",
          zh: "索取安装包",
          url: "mailto:websterwangai@gmail.com?subject=NeuroAxis%20installation%20package",
          primary: true,
        },
        {
          en: "View source",
          zh: "查看源码",
          url: "https://github.com/linkbag/neuroaxis-atlas",
          primary: false,
        },
      ],
      en: {
        title: "NeuroAxis",
        line: "Explore the brain from structure to function.",
        summary:
          "NeuroAxis is an interactive 3D neuroanatomy learning tool. Select structures in the model, follow synchronized 2D sections, and connect anatomy with clinical syndromes and reference notes. A free installation package is available on request, with an online version planned.",
        purpose:
          "Neuroanatomy becomes easier to reason about when the spatial model, sectional view, and clinical context can be explored together. NeuroAxis brings those views into one workspace.",
        highlights: [
          "Selectable 3D structures and anatomical layers",
          "2D sections synchronized with the model",
          "Clinical syndromes and structure-level reference notes",
        ],
        involvement:
          "Request the free installation package, explore the public source, and share feedback on the structures or learning flows that matter most to you.",
        alt: "NeuroAxis 3D brain atlas with selected putamen and synchronized section",
      },
      zh: {
        title: "NeuroAxis",
        line: "从结构走向功能，立体认识大脑。",
        summary:
          "NeuroAxis 是一款交互式三维神经解剖学习工具。学习者可以在模型中选择结构，对照同步的二维切面，并结合临床综合征和参考资料理解其意义。免费安装包可按需提供，在线版本也在计划中。",
        purpose:
          "把空间模型、二维切面和临床语境放在一起，神经解剖会更容易理解。NeuroAxis 将这些视角汇入同一个学习界面。",
        highlights: [
          "可选择的三维结构和解剖层",
          "与模型同步的二维切面",
          "临床综合征和结构级参考资料",
        ],
        involvement:
          "欢迎索取免费安装包、浏览公开源码，并反馈你最关心的解剖结构或学习体验。",
        alt: "NeuroAxis 三维脑图谱，展示选中的壳核和同步切面",
      },
    },
    {
      slug: "diffusionatlas",
      category: "learning",
      index: "05",
      color: "mint",
      media: "screen",
      image: {
        en: "/assets/media/diffusionatlas.png",
        zh: "/assets/media/diffusionatlas.png",
      },
      status: { en: "ONLINE VERSION PLANNED", zh: "在线版规划中" },
      metric: { en: "One idea → growing map", zh: "一个想法 → 生长的地图" },
      tags: { en: ["Knowledge graph", "Learning"], zh: ["知识图谱", "学习"] },
      actions: [
        {
          en: "Ask about availability",
          zh: "咨询项目进展",
          url: "mailto:websterwangai@gmail.com?subject=DiffusionAtlas%20availability",
          primary: true,
        },
      ],
      en: {
        title: "DiffusionAtlas",
        line: "Start with one idea. Grow a map of what comes next.",
        summary:
          "DiffusionAtlas starts with a single concept and grows into a navigable knowledge graph as the learner explores. Its 2D and 3D views show relationships, prerequisites, and promising next concepts while keeping the starting map small. An online version is planned; visitors can contact me for availability and updates.",
        purpose:
          "A useful learning map should reveal just enough to guide the next step. DiffusionAtlas grows with the learner's exploration while keeping relationships and prerequisites visible.",
        highlights: [
          "Begin with one familiar concept",
          "Explore typed links between related ideas",
          "See suggested next concepts in 2D or 3D",
        ],
        involvement:
          "Contact me about access or share a subject area where a growing knowledge map would help you learn.",
        alt: "DiffusionAtlas concept graph with connected learning nodes",
      },
      zh: {
        title: "DiffusionAtlas",
        line: "从一个概念出发，让知识地图随探索生长。",
        summary:
          "DiffusionAtlas 从一个概念开始，随着学习者的探索逐步扩展为可浏览的知识图谱。二维与三维视图呈现概念关系、先修知识和适合继续学习的方向，同时让初始地图保持简洁。在线版本正在规划中，欢迎联系了解进展。",
        purpose:
          "好的学习地图应该恰好揭示下一步需要的内容。DiffusionAtlas 跟随学习者的探索逐步生长，同时保留概念关系和先修知识的脉络。",
        highlights: [
          "从一个熟悉的概念开始",
          "探索不同类型的概念关系",
          "在二维或三维视图中发现下一步",
        ],
        involvement:
          "欢迎联系了解使用方式，也欢迎分享你想用知识地图学习的领域。",
        alt: "DiffusionAtlas 知识图谱，展示相连的学习概念",
      },
    },
    {
      slug: "siteselection",
      category: "biopharma",
      index: "06",
      color: "blue",
      media: "screen",
      image: {
        en: "/assets/media/siteselection.png",
        zh: "/assets/media/siteselection.png",
      },
      status: { en: "ONLINE VERSION PLANNED", zh: "在线版规划中" },
      metric: { en: "Map + evidence", zh: "地图 + 证据" },
      tags: {
        en: ["Clinical trials", "Site research"],
        zh: ["临床试验", "中心研究"],
      },
      actions: [
        {
          en: "Ask about the tool",
          zh: "咨询工具",
          url: "mailto:websterwangai@gmail.com?subject=SiteSelection%20tool",
          primary: true,
        },
      ],
      en: {
        title: "SiteSelection",
        line: "Put clinical trial sites on the map—and the evidence beside them.",
        summary:
          "SiteSelection brings authorized IQVIA DQS site exports and public ClinicalTrials.gov study information into an interactive map. It helps teams examine geography, site experience, and competing studies, then organize a shortlist for further review. The tool is intended to be free; an online version is planned.",
        purpose:
          "Site selection draws on multiple datasets and judgments. SiteSelection places those inputs side by side so a team can review its candidates with a clearer trail of evidence.",
        highlights: [
          "Interactive map and site-level inspection",
          "Study context from ClinicalTrials.gov",
          "Filtering, prioritization, and exportable shortlists",
        ],
        involvement:
          "Contact me about availability. To use your own data, you will need access to the relevant IQVIA DQS export.",
        alt: "Clinical Trial Site Selection Map with trial site markers and study details",
      },
      zh: {
        title: "SiteSelection",
        line: "把临床试验中心放到地图上，也把依据放到眼前。",
        summary:
          "SiteSelection 将经授权使用的 IQVIA DQS 中心数据与 ClinicalTrials.gov 的公开试验信息整合到交互式地图中，帮助团队查看地理分布、中心经验和竞争试验，并整理候选中心名单供进一步评估。工具计划免费提供，在线版本正在规划中。",
        purpose:
          "临床中心选择需要结合多种数据与判断。SiteSelection 把这些依据并排呈现，让团队能更清楚地复核候选中心。",
        highlights: [
          "交互式地图与中心详情",
          "来自 ClinicalTrials.gov 的试验背景",
          "筛选、优先级评估与候选名单导出",
        ],
        involvement:
          "欢迎联系了解工具进展。若要分析自己的数据，需要拥有相应 IQVIA DQS 数据导出的使用权限。",
        alt: "临床试验中心选择地图，展示中心标记和试验详情",
      },
    },
    {
      slug: "us-stockselector",
      category: "finance",
      index: "07",
      color: "lime",
      media: "screen",
      image: {
        en: "/assets/media/us-stockselector.png",
        zh: "/assets/media/us-stockselector.png",
      },
      status: { en: "RESEARCH PROJECT", zh: "研究项目" },
      metric: { en: "Public-data research", zh: "公开数据研究" },
      tags: {
        en: ["US equities", "Research dashboard"],
        zh: ["美股", "研究看板"],
      },
      actions: [
        {
          en: "Join project updates",
          zh: "加入项目更新列表",
          url: "mailto:websterwangai@gmail.com?subject=US%20StockSelector%20updates",
          primary: true,
        },
      ],
      en: {
        title: "US StockSelector",
        line: "US equity research with the evidence in view.",
        summary:
          "US StockSelector combines public company data, valuation, quality, momentum, and market context into a daily research dashboard. It presents ranked candidates alongside data quality and investability checks so each result can be examined in context. Email me to join the project updates list.",
        purpose:
          "A ranking is more useful when its inputs and limits are easy to inspect. US StockSelector brings the underlying research, market setting, and data checks into the same daily view.",
        highlights: [
          "Daily research rankings from public data",
          "Quality, valuation, momentum, and market context",
          "Visible data-health and investability checks",
        ],
        involvement:
          "Email me to join the updates list and hear about the research workflow as it develops.",
        alt: "US StockSelector daily overview dashboard and market environment gauge",
      },
      zh: {
        title: "US StockSelector",
        line: "让美股研究的依据清晰可见。",
        summary:
          "US StockSelector 将公开公司数据、估值、质量、动量和市场环境整合进每日研究看板。候选股票与数据质量、可投资性检查一同展示，便于逐项理解筛选依据。欢迎发邮件加入项目更新列表。",
        purpose:
          "排名有用的前提，是能够看清它的输入与局限。US StockSelector 把研究依据、市场环境和数据检查放进同一个每日视图。",
        highlights: [
          "基于公开数据的每日研究排名",
          "结合质量、估值、动量和市场环境",
          "可查看数据健康和可投资性检查",
        ],
        involvement: "欢迎发邮件加入项目更新列表，了解研究流程的后续进展。",
        alt: "US StockSelector 每日总览看板和市场环境仪表图",
      },
    },
    {
      slug: "a-share-stockselector",
      category: "finance",
      index: "08",
      color: "orange",
      media: "screen",
      image: {
        en: "/assets/media/ashare-stockselector.png",
        zh: "/assets/media/ashare-stockselector.png",
      },
      status: { en: "RESEARCH PROJECT", zh: "研究项目" },
      metric: { en: "CSI 800 universe", zh: "中证 800 股票池" },
      tags: {
        en: ["A-shares", "Research dashboard"],
        zh: ["A 股", "研究看板"],
      },
      actions: [
        {
          en: "Join project updates",
          zh: "加入项目更新列表",
          url: "mailto:websterwangai@gmail.com?subject=A-share%20StockSelector%20updates",
          primary: true,
        },
      ],
      en: {
        title: "A-share StockSelector",
        line: "China market research built around A-share realities.",
        summary:
          "A-share StockSelector researches the CSI 800 universe using China-oriented market data and a Chinese-language dashboard. Its scoring and review flow accounts for local conditions such as suspensions and price limits, making the evidence behind a candidate easier to inspect. Email me to join project updates.",
        purpose:
          "A-share research needs to reflect the way the local market actually works. This tool keeps China-specific data, trading conditions, and candidate evidence together in one review flow.",
        highlights: [
          "Research across the CSI 800 universe",
          "China-oriented data sources and Chinese dashboard",
          "Checks for suspensions and price-limit conditions",
        ],
        involvement:
          "Email me to join the project updates list and follow the research workflow as it evolves.",
        alt: "A-share StockSelector Chinese dashboard with market status and candidate overview",
      },
      zh: {
        title: "A 股精选器",
        line: "按 A 股市场的实际规则做研究。",
        summary:
          "A-share StockSelector 面向中证 800 股票池，使用适合中国市场的数据源和中文看板开展研究。筛选与复核流程考虑停牌、涨跌停等本地市场条件，并清楚展示候选股票背后的依据。欢迎发邮件加入项目更新列表。",
        purpose:
          "A 股研究需要符合本地市场的实际运作方式。这款工具把中国市场数据、交易条件和候选股票依据放在同一条复核流程里。",
        highlights: [
          "研究中证 800 股票池",
          "适合中国市场的数据源和中文看板",
          "考虑停牌及涨跌停等交易条件",
        ],
        involvement: "欢迎发邮件加入项目更新列表，关注研究流程的后续进展。",
        alt: "A 股精选器中文看板，展示市场状态和候选股票概览",
      },
    },
    {
      slug: "dsh-ai-swarm",
      category: "ai",
      index: "09",
      color: "lime",
      media: "screen",
      image: {
        en: "/assets/media/dsh-ai-swarm.png",
        zh: "/assets/media/dsh-ai-swarm.png",
      },
      status: { en: "OPEN SOURCE", zh: "开源项目" },
      metric: { en: "~6K recent downloads", zh: "近期约 6 千次下载" },
      tags: {
        en: ["AI agents", "Orchestration"],
        zh: ["AI 智能体", "协作编排"],
      },
      actions: [
        {
          en: "View and install",
          zh: "查看与安装",
          url: "https://github.com/linkbag/dsh-swarm-orchestrator",
          primary: true,
        },
      ],
      en: {
        title: "DSH-AI-Swarm",
        line: "One goal. A visible team of AI agents.",
        summary:
          "DSH-AI-Swarm turns a goal into a coordinated task graph inside DeepSeek Harness. Role-specific agents can work in parallel, pass through review gates, and show their progress on a live board. The project has recorded roughly 6,000 downloads in a recent month, according to the owner-reported figure.",
        purpose:
          "Complex work benefits from clear roles, visible progress, and a review step. DSH-AI-Swarm makes that coordination part of the agent workflow inside DeepSeek Harness.",
        highlights: [
          "Task graphs with parallel work where dependencies allow",
          "Role-specific models and review gates",
          "Live board and flow view for progress",
        ],
        involvement:
          "Install the open source plugin, try it on a real goal, and share feedback or issues through the repository.",
        alt: "DSH-AI-Swarm flow board with parallel agent tasks and review stages",
      },
      zh: {
        title: "DSH-AI-Swarm",
        line: "一个目标，一支看得见进度的 AI 团队。",
        summary:
          "DSH-AI-Swarm 在 DeepSeek Harness 中把一个目标拆解为有依赖关系的任务。不同角色的智能体可以并行工作，经过审核关卡，并在实时看板中展示进度。根据项目所有者提供的数据，最近一个月约有 6,000 次下载。",
        purpose:
          "复杂任务需要清晰的分工、可见的进度和审核环节。DSH-AI-Swarm 将这些协作机制直接放进 DeepSeek Harness 的智能体工作流。",
        highlights: [
          "根据依赖关系安排并行任务",
          "按角色配置模型与审核关卡",
          "通过实时看板和流程图查看进度",
        ],
        involvement:
          "欢迎安装开源插件，用真实目标试用，并在仓库中分享反馈或问题。",
        alt: "DSH-AI-Swarm 流程看板，展示并行任务和审核阶段",
      },
    },
    {
      slug: "indie-games",
      category: "next",
      index: "10",
      color: "violet",
      media: "abstract",
      image: null,
      status: { en: "COMING SOON", zh: "敬请期待" },
      metric: { en: "Playful experiments", zh: "玩法实验" },
      tags: { en: ["Indie games", "Prototypes"], zh: ["独立游戏", "原型"] },
      actions: [
        {
          en: "Follow on GitHub",
          zh: "关注 GitHub",
          url: "https://github.com/linkbag",
          primary: true,
        },
      ],
      en: {
        title: "Indie games",
        line: "Small games. New ideas to play with.",
        summary:
          "This space is reserved for independent game prototypes and experiments in playful interaction. As projects become playable, each will get its own screenshots, development notes, and a link to try it.",
        purpose:
          "Some ideas are best explored by playing with them. This is a place for small interactive experiments as they move from prototypes toward playable releases.",
        highlights: [
          "Independent game concepts",
          "Experiments in interaction and play",
          "Playable links as projects become ready",
        ],
        involvement:
          "Follow my GitHub profile for future prototypes and releases.",
        alt: "Abstract artwork for future indie game projects",
      },
      zh: {
        title: "独立游戏",
        line: "小小的游戏，新的玩法实验。",
        summary:
          "这里将收录独立游戏原型和交互玩法实验。等作品可以体验时，我会陆续加入截图、开发笔记和试玩链接。",
        purpose:
          "有些想法最适合通过玩来探索。这里会收录从原型逐渐走向可玩作品的小型交互实验。",
        highlights: [
          "独立游戏构想",
          "交互与玩法实验",
          "作品准备好后提供试玩链接",
        ],
        involvement: "欢迎关注我的 GitHub 主页，了解未来的原型和发布。",
        alt: "为未来独立游戏项目设计的抽象图形",
      },
    },
  ],
};
