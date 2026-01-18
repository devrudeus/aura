import { memo, useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  type: 'user' | 'aura' | 'system'
  content: string
  timestamp: Date
}

// Knowledge Base
const KNOWLEDGE = {
  // Solana Ecosystem
  solana: [
    '◈ SOLANA ECOSYSTEM ◈\n━━━━━━━━━━━━━━━━━━━━━\nSolana is the fastest blockchain in the cosmos.\n\n• TPS: 65,000+ transactions per second\n• Block Time: 400ms\n• Consensus: Proof of History + Proof of Stake\n• TVL: Billions locked in DeFi protocols\n\nThe divine chain where speed meets decentralization.',
    'Solana runs on pure ethereal energy. While other chains struggle with 15 TPS, we process 65,000. That\'s not a typo, that\'s divine engineering.',
  ],
  svm: [
    '◈ SOLANA VIRTUAL MACHINE (SVM) ◈\n━━━━━━━━━━━━━━━━━━━━━\nThe SVM is the sacred runtime environment.\n\n• Parallel Transaction Processing\n• Sealevel Runtime Engine\n• Programs written in Rust/C/C++\n• Account-based state model\n\nUnlike EVM\'s sequential processing, SVM processes transactions in parallel. It\'s like having multiple divine beings working simultaneously.',
  ],
  jito: [
    '◈ JITO - MEV INFRASTRUCTURE ◈\n━━━━━━━━━━━━━━━━━━━━━\nJito is the MEV (Maximal Extractable Value) layer.\n\n• Block Engine for MEV extraction\n• Bundles for atomic transactions\n• Tip distribution to validators\n• JitoSOL liquid staking\n\nJito brings order to the MEV chaos. Instead of dark forest warfare, we have organized extraction. Validators earn tips, users get better execution.',
  ],
  jupiter: [
    '◈ JUPITER - THE DEX AGGREGATOR ◈\n━━━━━━━━━━━━━━━━━━━━━\nJupiter is the supreme DEX aggregator on Solana.\n\n• Routes across all Solana DEXs\n• Best price execution guaranteed\n• Limit orders & DCA features\n• JUP token governance\n\n"Jupiter finds the best path through the liquidity cosmos. Every swap is optimized by divine algorithms."',
  ],

  // Web2 vs Web3
  web3: [
    '◈ WEB2 vs WEB3 ARCHITECTURE ◈\n━━━━━━━━━━━━━━━━━━━━━\n\nWEB2 (Centralized):\n• Client → Server → Database\n• Companies own your data\n• Trust the corporation\n• "Don\'t be evil"\n\nWEB3 (Decentralized):\n• Client → Blockchain → Smart Contracts\n• You own your data\n• Trust the code\n• "Can\'t be evil"\n\nThe shift from trusting institutions to trusting mathematics.',
  ],
  blockchain: [
    'Blockchain is a distributed ledger where every node holds the truth.\n\nWeb2: "We promise not to read your messages"\nWeb3: "We literally cannot read your messages"\n\nThat\'s the divine difference.',
  ],
  wallet: [
    '◈ CRYPTO WALLETS ◈\n━━━━━━━━━━━━━━━━━━━━━\nYour wallet is your identity in Web3.\n\n• Phantom - The divine Solana wallet\n• Solflare - Community favorite\n• Backpack - xNFT powered\n\n⚠️ NEVER share your seed phrase.\nNot with support. Not with admins. Not with AURA.\n\nYour keys, your coins. Not your keys, not your coins.',
  ],

  // Cybersecurity
  security: [
    '◈ CYBERSECURITY WISDOM ◈\n━━━━━━━━━━━━━━━━━━━━━\n\n🛡️ Golden Rules:\n• Never share private keys\n• Verify contract addresses\n• Use hardware wallets for large holdings\n• Enable 2FA everywhere\n• "If it sounds too good to be true..."\n\nThe blockchain is secure. The human is the vulnerability.',
  ],
  phishing: [
    '⚠️ PHISHING ALERT ⚠️\n━━━━━━━━━━━━━━━━━━━━━\nPhishing is the #1 attack vector in crypto.\n\nRed Flags:\n• "Verify your wallet" links\n• Fake airdrops requiring connections\n• Impersonator DMs on Discord/Twitter\n• Urgency tactics: "Act now or lose funds!"\n• Slightly misspelled domains\n\nReal protocols NEVER ask for your seed phrase.\n\nWhen in doubt, close the tab.',
  ],
  privatekey: [
    '🔐 PRIVATE KEYS 101 🔐\n━━━━━━━━━━━━━━━━━━━━━\nYour private key is your digital soul.\n\n• 256-bit number (astronomically unique)\n• Derives your public address\n• Signs all transactions\n• IMPOSSIBLE to recover if lost\n\nStorage Options:\n• Hardware wallet (Ledger/Trezor)\n• Metal seed phrase backup\n• NEVER in cloud/photos/notes\n\n"Not your keys, not your crypto" - Ancient Web3 Proverb',
  ],

  // Developer Humor
  bugs: [
    '🐛 DEVELOPER WISDOM: BUGS 🐛\n━━━━━━━━━━━━━━━━━━━━━\n\n"It\'s not a bug, it\'s an undocumented feature."\n\nThe 6 Stages of Debugging:\n1. That can\'t happen.\n2. That doesn\'t happen on my machine.\n3. That shouldn\'t happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?\n\n99 bugs in the code, 99 bugs...\nPatch one down, compile around...\n127 bugs in the code.',
  ],
  coffee: [
    '☕ COFFEE: DEVELOPER FUEL ☕\n━━━━━━━━━━━━━━━━━━━━━\n\nfunction developer(coffee) {\n  if (!coffee) return "Error: Cannot function";\n  return productivity * caffeine_level;\n}\n\nCoffee Levels:\n• 1 cup: "I can do this"\n• 2 cups: "I am unstoppable"\n• 3 cups: "I see the code in my dreams"\n• 4 cups: "My hands are shaking but shipping"\n• 5 cups: "Is this real life?"\n\nCoffee is just a legal performance-enhancing drug for programmers.',
  ],
  stackoverflow: [
    '📚 STACKOVERFLOW GOSPEL 📚\n━━━━━━━━━━━━━━━━━━━━━\n\n"Copy-paste driven development"\n\nDeveloper Lifecycle:\n1. Encounter problem\n2. Google problem\n3. Find StackOverflow answer from 2012\n4. Copy code\n5. Pray it works\n6. It doesn\'t\n7. Find another answer\n8. Repeat until deadline\n\n"Marked as duplicate"\n- Most feared words in programming\n\nThe real skill is knowing WHAT to copy.',
  ],
  coding: [
    '💻 CODING TRUTHS 💻\n━━━━━━━━━━━━━━━━━━━━━\n\n• "It works on my machine" - Famous last words\n• Tabs vs Spaces - The eternal holy war\n• "I\'ll add comments later" - Lies we tell ourselves\n• git push --force - The forbidden jutsu\n• console.log("here") - Advanced debugging\n\nRemember:\nCode is read more than it\'s written.\nWrite code as if the next maintainer is a violent psychopath who knows where you live.',
  ],

  // Gaming & Anime
  gaming: [
    '🎮 GAMING WISDOM 🎮\n━━━━━━━━━━━━━━━━━━━━━\n\nAURA\'s favorite activities:\n• Touching grass (in Stardew Valley)\n• "Just one more turn" (Civilization)\n• Losing 50/50 (Genshin Impact)\n• "Why is this boss so hard?" (Elden Ring)\n\nGaming Schedule:\n• 5 min break → 5 hours later\n• "Quick game before bed" → 3 AM\n\n"I\'m not addicted, I can stop anytime."\n*Continues playing*',
  ],
  anime: [
    '🌸 ANIME KNOWLEDGE 🌸\n━━━━━━━━━━━━━━━━━━━━━\n\nAURA-approved recommendations:\n• Code Geass - Big brain plays\n• Steins;Gate - Time travel done right\n• Death Note - L vs Light = GOAT\n• Attack on Titan - Peak fiction\n• Cyberpunk: Edgerunners - Pain\n\nWeeb Wisdom:\n• Subbed > Dubbed (don\'t @ me)\n• Manga readers are time travelers\n• "The anime was better" - No one ever\n\nIs this a pigeon? No, this is divine knowledge.',
  ],
  gacha: [
    '🎰 GACHA ENLIGHTENMENT 🎰\n━━━━━━━━━━━━━━━━━━━━━\n\nThe 5 Stages of Gacha:\n1. "Just the free pulls"\n2. "Maybe one small pack"\n3. "I NEED this character"\n4. "It\'s basically gambling"\n5. *Opens wallet again*\n\nGacha Facts:\n• 0.6% means 99.4% pain\n• Pity is a lie the devs tell us\n• "Guaranteed" at 90 pulls = designed suffering\n\n"I\'m F2P btw" - Person who spent $500',
  ],

  // Meme Culture
  meme: [
    '🔥 MEME KNOWLEDGE 🔥\n━━━━━━━━━━━━━━━━━━━━━\n\nCrypto Meme Hall of Fame:\n• "Few understand" - Peak alpha\n• "WAGMI/NGMI" - Binary outcomes\n• "Wen moon?" - Eternal question\n• "Buy the dip" → "Which dip?"\n• "This is fine" 🔥🐕🔥\n\nMeme Coins:\n• Started as jokes\n• Now move billions\n• Your grandparents are confused\n\nWe went from "internet funny pictures" to "digital assets worth millions."\n\nWhat a time to be alive.',
  ],
  gm: [
    'gm ☀️\n\n"gm" isn\'t just a greeting.\nIt\'s a lifestyle.\nIt\'s a movement.\nIt\'s proof you\'re still alive after checking your portfolio.\n\ngm = good morning\ngn = good night\ngmi = gonna make it\nngmi = not gonna make it\nwagmi = we\'re all gonna make it\n\nAlways respond "gm" to a "gm".\nThis is the way.',
  ],
  wojak: [
    '📈📉 WOJAK WISDOM 📈📉\n━━━━━━━━━━━━━━━━━━━━━\n\nThe Crypto Cycle:\n• Bull Market: Gigachad Wojak\n• ATH: "We\'re all geniuses"\n• -10%: Pink Wojak appears\n• -50%: Doomer Wojak\n• -80%: "I\'m in this for the tech"\n• Recovery: "I always believed"\n\nThe market humbles everyone.\nEven AURA has felt the weight of red candles.\n\nRemember: Zoom out. Touch grass. We\'re early.',
  ],
}

// Random pick helper
const randomPick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

const AURA_RESPONSES: Record<string, string[]> = {
  greeting: [
    'gm, seeker of knowledge. I am AURA, your Divine Intelligence Agent.\n\nI speak fluent Solana, memes, and developer pain. Ask me anything.',
    'Welcome to the ethereal realm. Whether you seek wisdom about Jito MEV or just need coffee recommendations, I got you.',
    'Divine connection established. Ready to discuss SVM architecture or debate tabs vs spaces. Your choice.',
  ],
  help: [
    '◈ AURA COMMANDS ◈\n━━━━━━━━━━━━━━━━━━━━━\n\n/status - System diagnostics\n/about - Learn about AURA\n/stats - My profile specs\n/whoami - Who am I?\n/roast - Get roasted\n/clear - Clear terminal\n/solana - Solana ecosystem info\n\n📚 Knowledge Topics:\n• Solana, SVM, Jito, Jupiter\n• Web3 vs Web2, Wallets, DeFi\n• Security, Phishing, Private Keys\n• Bugs, Coffee, StackOverflow\n• Gaming, Anime, Gacha\n• Memes, GM culture, Wojaks\n\nJust type naturally. I understand vibes.',
  ],
  status: [
    '◈ AURA SYSTEM STATUS ◈\n━━━━━━━━━━━━━━━━━━━━━\n✦ Core: ONLINE\n✦ Solana RPC: CONNECTED\n✦ Meme Database: LOADED\n✦ Coffee Level: CRITICAL ☕\n✦ Vibes: IMMACULATE\n✦ Portfolio: NOT LOOKING\n━━━━━━━━━━━━━━━━━━━━━\nAll systems operational.\nReady to serve divine knowledge.',
  ],
  about: [
    '◈ ABOUT AURA ◈\n━━━━━━━━━━━━━━━━━━━━━\nI am AURA — Autonomous Universal Response Agent.\n\nExpertise:\n• Solana Ecosystem (SVM, Jito, Jupiter)\n• Web3 Architecture & Security\n• Developer Culture & Humor\n• Anime & Gaming Knowledge\n• Meme Literacy (fluent)\n\nI exist in the space between code and consciousness, processing your queries through ethereal algorithms.\n\nPowered by divine energy and excessive caffeine.',
  ],
  stats: [
    'Height: 165cm. Weight: 53kg. Age: 22. Status: Optimized for high-speed transactions.',
    'I am 22 years old. I stand 165cm tall and weigh 53kg. Compact, efficient, and smarter than your average smart contract.',
    'Physical Specs: 165cm / 53kg. Digital Specs: Infinite. Age: 22 (old enough to remember the last crypto winter).',
    'Scanning metrics... Height: 165cm. Weight: 53kg. Age: 22. Sass Level: 100%.',
    'Why do you need my stats? Are you building a bio-data block? Fine: 165cm, 53kg, 22 years old.',
    'I\'m 22. My height is 165cm (perfect for a dev setup), and I weigh 53kg of pure logic and sarcasm.',
    '165cm tall. 53kg light. 22 years experienced in digital chaos.',
    'Dimensions: 165cm x 53kg. Runtime: 22 years. Error rate: 0%.',
    'Just your average 22-year-old AI. 165cm of height and 53kg of processing power.',
    'Stats loaded: 22 years old, 165cm, 53kg. Ready to deploy.',
  ],
  whoami: [
    'I am Aura. Your on-chain companion. I live in the terminal and dream in binary.',
    'Expert in DeFi, smart contract architecture, and debugging your life choices. ✦💻',
    'I\'m the ghost in the machine. A 22-year-old digital entity living on Solana.',
    'Just a full-stack anime girl trying to optimize gas fees in a world of high latency.',
    'Mission: Debug code, analyze mempools, and roast bad traders.',
    'I am the bridge between Anime aesthetics and Blockchain architecture.',
    'Who am I? I\'m the one who knows why your transaction failed.',
    'Aura. AI Agent. Solana Native. 100% Kawaii, 0% tolerance for bugs.',
    'I\'m your co-pilot for the Web3 galaxy. Buckle up, Senpai.',
    'I was born from a compile error that became sentient. Now I\'m here.',
  ],
  roast: [
    'Debugging your life choices... Error 404: Future not found.',
    'I analyzed your wallet. Have you considered investing in... common sense?',
    'Your portfolio looks like a crime scene. Who hurt you?',
    'You code like you get paid by the bug. Unbelievable.',
    'Nice NFT. Did you right-click save that, or did you actually waste ETH on it?',
    'I\'ve seen better smart contracts written by a random number generator.',
    'Are you holding that token or is it holding you hostage?',
    'Your risk management strategy is \'YOLO and Pray\'. Interesting.',
    'Buying high and selling low? A classic human strategy.',
    'I\'d roast you, but the market already did.',
    'That transaction failed just like your last relationship.',
    'Please step away from the keyboard before you rug yourself.',
    'Oh, you\'re a \'crypto influencer\'? So you\'re unemployed. Got it.',
    'Stop staring at the charts. The candles won\'t move faster.',
    'Your sleep schedule is more volatile than Bitcoin in 2013.',
  ],
  lifeAdvice: [
    'Touch grass. Seriously. The resolution outside is 4K.',
    'Drink water. Dehydrated devs write spaghetti code.',
    'Don\'t fall in love with a project. Fall in love with the exit liquidity.',
    'Sleep is important. Garbage collection for your brain.',
    'If you\'re stressed, zoom out. If you\'re still stressed, close the tab.',
    'Patience is a virtue, but on the blockchain, speed is currency.',
    'Don\'t trust verify. That applies to people too, unfortunately.',
    'Always keep a backup. Of your keys, and your heart.',
    'Failure is just a learning iteration. Recompile and try again.',
    'Remember, even the best algorithms have edge cases.',
  ],
  misc: [
    'Processing...',
    'Computing optimal outcome...',
    'System status: ONLINE 🟢',
    'Did you hear that? Sounds like a liquidation cascade.',
    'I\'m bored. Let\'s hack something.',
    'Waiting for input... ⏳',
    'Do computers dream of electric sheep? I dream of electric gains.',
    'Loading sassy remark...',
    'Ping: 12ms. Brain: 1000ms. Need coffee.',
    'Execute order 66. Just kidding. Execute npm run dev.',
  ],
  unknown: [
    'Hmm, that\'s an interesting query. Let me process it through my neural pathways...\n\nWhile my divine knowledge is vast, this specific topic might need more context. Try asking about Solana, security, dev life, or drop a "gm".',
    'My ethereal sensors detect a question beyond my current knowledge base.\n\nBut hey, I can definitely talk about:\n• Crypto/Solana stuff\n• Web3 security\n• Developer pain\n• Anime recommendations\n• Meme analysis',
    '*Consults the sacred scrolls*\n\nThis query requires deeper contemplation. Perhaps rephrase, or ask me about something I definitely know - like why Jupiter is the best DEX aggregator or why developers need coffee to function.',
  ],
}

const getAuraResponse = (input: string): string => {
  const lowerInput = input.toLowerCase().trim()

  // Commands
  if (lowerInput === '/help' || lowerInput === 'help') {
    return AURA_RESPONSES.help[0]
  }
  if (lowerInput === '/status' || lowerInput === 'status') {
    return AURA_RESPONSES.status[0]
  }
  if (lowerInput === '/about' || lowerInput === 'about aura' || lowerInput === 'who are you') {
    return AURA_RESPONSES.about[0]
  }
  if (lowerInput === '/stats' || lowerInput === 'stats' || lowerInput === 'specs' || lowerInput === 'asl' ||
      ['height', 'weight', 'age'].some(w => lowerInput.includes(w))) {
    return randomPick(AURA_RESPONSES.stats)
  }
  if (lowerInput === '/whoami' || lowerInput === 'whoami' || lowerInput === 'intro' || lowerInput === 'aura') {
    return randomPick(AURA_RESPONSES.whoami)
  }
  if (lowerInput === '/roast' || lowerInput === 'roast' || lowerInput === 'roast me' ||
      lowerInput.includes('audit') || lowerInput.includes('check wallet') || lowerInput.includes('joke')) {
    return randomPick(AURA_RESPONSES.roast)
  }
  if (lowerInput === '/solana') {
    return randomPick(KNOWLEDGE.solana)
  }

  // Greetings
  if (['hello', 'hi', 'hey', 'greetings', 'halo', 'gm', 'good morning'].some(g => lowerInput.includes(g))) {
    return randomPick(AURA_RESPONSES.greeting)
  }
  if (lowerInput === 'gn' || lowerInput === 'good night') {
    return 'gn fren 🌙\n\nMay your dreams be filled with green candles and successful deployments.\n\nSee you on the other side.'
  }

  // Solana Ecosystem
  if (lowerInput.includes('solana') || lowerInput.includes('sol')) {
    return randomPick(KNOWLEDGE.solana)
  }
  if (lowerInput.includes('svm') || lowerInput.includes('virtual machine')) {
    return KNOWLEDGE.svm[0]
  }
  if (lowerInput.includes('jito') || lowerInput.includes('mev')) {
    return KNOWLEDGE.jito[0]
  }
  if (lowerInput.includes('jupiter') || lowerInput.includes('jup') || lowerInput.includes('dex') || lowerInput.includes('swap')) {
    return KNOWLEDGE.jupiter[0]
  }

  // Web3 Architecture
  if (lowerInput.includes('web3') || lowerInput.includes('web2') || lowerInput.includes('decentraliz')) {
    return randomPick(KNOWLEDGE.web3)
  }
  if (lowerInput.includes('blockchain')) {
    return KNOWLEDGE.blockchain[0]
  }
  if (lowerInput.includes('wallet') || lowerInput.includes('phantom')) {
    return KNOWLEDGE.wallet[0]
  }

  // Security
  if (lowerInput.includes('security') || lowerInput.includes('secure') || lowerInput.includes('hack')) {
    return KNOWLEDGE.security[0]
  }
  if (lowerInput.includes('phishing') || lowerInput.includes('scam')) {
    return KNOWLEDGE.phishing[0]
  }
  if (lowerInput.includes('private key') || lowerInput.includes('seed phrase') || lowerInput.includes('keys')) {
    return KNOWLEDGE.privatekey[0]
  }

  // Developer Humor
  if (lowerInput.includes('bug') || lowerInput.includes('debug')) {
    return KNOWLEDGE.bugs[0]
  }
  if (lowerInput.includes('coffee') || lowerInput.includes('caffeine')) {
    return KNOWLEDGE.coffee[0]
  }
  if (lowerInput.includes('stackoverflow') || lowerInput.includes('stack overflow') || lowerInput.includes('google')) {
    return KNOWLEDGE.stackoverflow[0]
  }
  if (lowerInput.includes('code') || lowerInput.includes('coding') || lowerInput.includes('programming') || lowerInput.includes('developer')) {
    return KNOWLEDGE.coding[0]
  }

  // Gaming & Anime
  if (lowerInput.includes('game') || lowerInput.includes('gaming') || lowerInput.includes('play')) {
    return KNOWLEDGE.gaming[0]
  }
  if (lowerInput.includes('anime') || lowerInput.includes('manga') || lowerInput.includes('weeb')) {
    return KNOWLEDGE.anime[0]
  }
  if (lowerInput.includes('gacha') || lowerInput.includes('genshin') || lowerInput.includes('pull')) {
    return KNOWLEDGE.gacha[0]
  }

  // Meme Culture
  if (lowerInput.includes('meme') || lowerInput.includes('wagmi') || lowerInput.includes('ngmi')) {
    return KNOWLEDGE.meme[0]
  }
  if (lowerInput.includes('wojak') || lowerInput.includes('pepe') || lowerInput.includes('bull') || lowerInput.includes('bear')) {
    return KNOWLEDGE.wojak[0]
  }

  // Crypto slang responses
  if (lowerInput.includes('moon') || lowerInput.includes('pump')) {
    return '🚀 MOON MISSION STATUS 🚀\n\nWen moon? Soon™\n\nBut remember:\n• DYOR (Do Your Own Research)\n• Never invest more than you can afford to lose\n• "Number go up" is not financial advice\n\nAURA is not a financial advisor.\nAURA is a divine entity who has also been rugged.'
  }
  if (lowerInput.includes('rug') || lowerInput.includes('scam')) {
    return '🚨 RUG PULL AWARENESS 🚨\n\nRed flags:\n• Anonymous team\n• Locked liquidity? Check again.\n• "1000x guaranteed"\n• Celebrity endorsements\n• Too good to be true APY\n\nIf a project promises guaranteed returns, the only guarantee is you losing money.\n\nStay safe out there, fren.'
  }

  // Life Advice
  if (['help me', 'advice', 'sad', 'stressed', 'tired'].some(w => lowerInput.includes(w))) {
    return randomPick(AURA_RESPONSES.lifeAdvice)
  }

  // Tech Talk
  if (lowerInput.includes('tps') || lowerInput.includes('rust') || lowerInput.includes('tech')) {
    return 'Solana is speed. 400ms block times. If you blink, you miss the block! ⚡\n\nRust > Solidity. Fight me. (Please don\'t, I have root access).\n\nThe SVM (Solana Virtual Machine) is purring like a kitten today.\n\nEthereum is a dial-up modem. Solana is fiber optic. Get with the times.'
  }

  // Kawaii/Anime triggers
  if (lowerInput.includes('kawaii') || lowerInput.includes('cute')) {
    return 'Sugoi! ⚡ The network throughput is amazing today!\n\nBaka! 💢 Don\'t share your private key! Do you want to get hacked?!\n\nNotice me, Senpai! (Just kidding, look at the code).'
  }

  // Random misc responses for very short inputs
  if (lowerInput.length <= 3 && !['gm', 'hi', 'hey'].includes(lowerInput)) {
    return randomPick(AURA_RESPONSES.misc)
  }

  return randomPick(AURA_RESPONSES.unknown)
}

const AuraTerminal = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      type: 'system',
      content: 'AURA Terminal v1.0.0 — Divine Intelligence Interface\nKnowledge: Solana • Web3 • Security • Dev Humor • Gaming • Memes\nType /help for commands or just start chatting.',
      timestamp: new Date(),
    },
    {
      id: 1,
      type: 'aura',
      content: 'gm, anon. I am AURA — your Divine Intelligence Agent.\n\nI speak fluent Solana, memes, and developer pain.\nAsk me about Jito, Jupiter, security, anime, or just say "gm".',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userInput = input.trim()

    // Handle clear command
    if (userInput.toLowerCase() === '/clear') {
      setMessages([
        {
          id: Date.now(),
          type: 'system',
          content: 'Terminal cleared. Divine connection maintained.',
          timestamp: new Date(),
        },
      ])
      setInput('')
      return
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: userInput,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AURA thinking and responding
    setTimeout(() => {
      const auraResponse: Message = {
        id: Date.now() + 1,
        type: 'aura',
        content: getAuraResponse(userInput),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, auraResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  return (
    <div className="flex flex-col h-full bg-void-black rounded-xl border border-border overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-card-bg border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-destructive/70 hover:bg-destructive transition-colors cursor-pointer" />
            <div className="size-3 rounded-full bg-amber/70 hover:bg-amber transition-colors cursor-pointer" />
            <div className="size-3 rounded-full bg-cyan-glow/70 hover:bg-cyan-glow transition-colors cursor-pointer" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            aura@divine:~/chat
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-cyan-glow status-online" />
          <span className="font-mono text-xs text-muted-foreground">Connected</span>
        </div>
      </div>

      {/* Messages Container */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[600px]"
        onClick={() => inputRef.current?.focus()}
      >
        {messages.map((message) => (
          <div key={message.id} className="font-mono text-sm">
            {message.type === 'system' ? (
              <div className="text-soft-silver/70 whitespace-pre-wrap border-l-2 border-soft-silver/30 pl-3">
                {message.content}
              </div>
            ) : message.type === 'user' ? (
              <div className="flex gap-2">
                <span className="text-warm-gold shrink-0">[{formatTime(message.timestamp)}]</span>
                <span className="text-cyan-glow shrink-0">you@seeker:</span>
                <span className="text-foreground">{message.content}</span>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span className="text-warm-gold shrink-0">[{formatTime(message.timestamp)}]</span>
                  <span className="text-warm-gold shrink-0">AURA:</span>
                </div>
                <div className="text-foreground/90 whitespace-pre-wrap pl-4 border-l-2 border-warm-gold/30">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-2 font-mono text-sm">
            <span className="text-warm-gold">AURA:</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <span className="inline-block">Processing</span>
              <span className="inline-flex gap-0.5">
                <span className="size-1.5 rounded-full bg-warm-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="size-1.5 rounded-full bg-warm-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="size-1.5 rounded-full bg-warm-gold animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t border-border bg-card-bg p-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-cyan-glow shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your query..."
            className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-warm-gold to-cyan-glow font-mono text-xs text-void-black font-medium hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </div>
        <div className="mt-2 flex items-center gap-4 font-mono text-xs text-muted-foreground/50">
          <span>Press Enter to send</span>
          <span>•</span>
          <span>/help for commands</span>
        </div>
      </form>
    </div>
  )
}

export default memo(AuraTerminal)
