/* Scam profiles 1-10. Each profile is unique content: definition, mechanism, methods, red flags, examples, recognition, prevention, response, recovery. */
window.SCAMS = window.SCAMS || [];
window.SCAMS.push(
{
  id: "phishing", name: "Phishing", icon: "mail", freq: "VERY COMMON",
  short: "Fake emails and sign-in pages are designed to capture passwords, card details, or personal information.",
  signs: ["Sender domain differs from the official domain", "Urgent request to verify or unlock an account"],
  def: "Phishing is fraud in which a message imitating a trusted organization tricks you into handing over passwords, card numbers, or personal data, usually through a fake link, an attachment, or a cloned login page.",
  how: [
    "The scammer picks a brand you probably use, such as a bank, a delivery company, a streaming service, or your employer's mail system.",
    "They send the same message to thousands of addresses, styled with copied logos and wording.",
    "The message gives a reason to act quickly: a locked account, an unpaid bill, a suspicious sign-in.",
    "The link opens a cloned page. Anything you type goes straight to the scammer.",
    "They use the stolen details at once, often logging in to your real account within minutes."
  ],
  methods: [
    "Look-alike domains with swapped letters, such as a lowercase L in place of a capital I, or extra words like \"-secure\" or \"-support\".",
    "Spear phishing: messages that use your name, job title, or a real colleague's name gathered from social media.",
    "Attachments disguised as invoices, voicemails, or shared documents that open a fake login form.",
    "Fake \"document shared with you\" notices that look like they come from cloud storage.",
    "Real-time relay pages that pass your one-time code to the real site while the scammer logs in."
  ],
  flags: [
    "The sender's full address does not match the organization's real domain",
    "Generic greeting such as \"Dear customer\" from a company that knows your name",
    "Threat that the account will be closed or suspended within hours",
    "Link text shows one address but the preview at the bottom of the screen shows another",
    "Unexpected attachment, especially an HTML, ZIP, or macro-enabled file",
    "A request to confirm your password, PIN, or full card number"
  ],
  examples: [
    { title: "The mailbox-full notice", text: "An office worker gets an email saying her mailbox is 98% full and will stop receiving messages today. The button leads to a page that looks like her company's webmail. She enters her password, and an hour later her contacts receive messages from her address asking them to open a shared file." },
    { title: "The unusual sign-in alert", text: "A message styled like a payment service warns of a login from another country and asks the reader to \"confirm identity\" through a link. The page asks for the email, password, and card number. The real company never asked for any of it by email." }
  ],
  recognize: [
    "Expand the sender details and read the full address, not just the display name.",
    "Hover over or press and hold a link to preview its real destination before opening it.",
    "Ask whether you expected this message and whether the company normally contacts you this way.",
    "Look for small errors in spelling, spacing, logos, or the way your name is used."
  ],
  prevent: [
    "Open the official app or type the website address yourself instead of using links in messages.",
    "Use a password manager. It will not autofill on a look-alike domain, which is a useful warning.",
    "Switch to passkeys or a security key where offered, because they cannot be typed into a fake page.",
    "Keep your browser and email filters up to date and turn on spam and phishing protection.",
    "Never open unexpected attachments, even from known senders, without confirming through another channel."
  ],
  encounter: [
    "Do not click, reply, or open attachments.",
    "Check the claim by opening the official app or typing the site address yourself.",
    "Use the report phishing option in your email app, or forward it to the organization's abuse address.",
    "Delete the message once reported."
  ],
  victim: [
    "Change the password for the affected account right away, using a device you trust, and change it anywhere the same password was used.",
    "Turn on multi-factor authentication and sign out all other sessions.",
    "If you entered card or bank details, call the number on your card to block it and dispute any charges.",
    "Check your email for new forwarding rules or recovery settings the scammer may have added.",
    "If you opened an attachment, run a security scan on the device.",
    "Report the incident to your national fraud or cybercrime agency and warn contacts if your account sent messages."
  ]
},
{
  id: "text-message", name: "Text Message Scams", icon: "smartphone", freq: "VERY COMMON",
  short: "Unexpected parcel, toll, bank, and account-alert texts pressure recipients to follow unsafe links or reply.",
  signs: ["Unexpected message from an unknown number", "Shortened or misspelled web address"],
  def: "A text message scam, often called smishing, uses SMS or messaging apps to deliver a false alert or request. The aim is to get you to tap a link, call a number, or reply with personal information.",
  how: [
    "Scammers buy or generate large lists of phone numbers and send the same text to all of them.",
    "The message claims a small, believable problem: a missed delivery, an unpaid toll, a bank alert, a wrong-number greeting.",
    "A link opens a page that copies a real service and asks for card details, a login, or a small \"fee\".",
    "Some texts ask you to reply or call, which confirms your number is active and starts a conversation with a scammer.",
    "Stolen card details are used quickly or sold, and the number is marked as a good target for more messages."
  ],
  methods: [
    "Delivery and toll notices asking for a tiny payment to release a parcel or settle a charge.",
    "Fake bank fraud alerts that ask you to call a number or reply YES or NO.",
    "\"Wrong number\" messages that slowly turn into friendship, romance, or investment talk.",
    "Spoofed sender names that appear inside a real conversation thread from your bank.",
    "Links hidden behind URL shorteners so the real destination is not visible."
  ],
  flags: [
    "A message from a number or email address you have never dealt with",
    "A link shortened with a service or a domain that only resembles a real brand",
    "A fee of a few dollars that requires card details",
    "Grammar or spacing that no real company would send",
    "A request to reply with a code, PIN, or a single letter",
    "Pressure to act before a deadline that appears within hours"
  ],
  examples: [
    { title: "The unpaid toll", text: "A text says an unpaid road toll of 4.80 will become a fine unless paid within 24 hours, with a link. The driver does not use toll roads. The page asks for full card details, and a charge many times larger appears the next day." },
    { title: "The wrong-number chat", text: "A stranger texts \"Are we still on for lunch Saturday?\" When the recipient replies politely, the sender apologizes, chats about hobbies for several days, and then shares a trading app that supposedly earned a lot of money." }
  ],
  recognize: [
    "Check whether you actually have a parcel, toll account, or bank relationship that matches the message.",
    "Compare the sender and link with the company's own site or app.",
    "Notice if the text uses your name. Mass texts almost never do.",
    "Treat any text that asks for a payment or a code as suspicious until proven otherwise."
  ],
  prevent: [
    "Do not tap links in texts you did not expect. Open the company's app or site yourself.",
    "Use your phone's option to filter unknown senders and report junk messages.",
    "Never share one-time codes with anyone, including people claiming to be your bank.",
    "Keep delivery tracking numbers and use the carrier's own tracking page.",
    "Set up alerts in your banking app so real notices come from a place you trust."
  ],
  encounter: [
    "Do not tap, reply, or call numbers listed in the text, not even to say STOP.",
    "Open the real app or website and check for an account notice.",
    "Report the message using your phone's report junk option or forward it to your carrier's spam reporting number.",
    "Block the sender and delete the thread."
  ],
  victim: [
    "If you entered card details, call your bank immediately to block the card and dispute charges.",
    "If you shared a login, change that password and any matching passwords, then enable multi-factor authentication.",
    "If you installed an app from the link, remove it and run a security scan.",
    "Tell your carrier, since some can block the sending number.",
    "Report to your national fraud agency and watch your statements for several months."
  ]
},
{
  id: "impersonation", name: "Impersonation Scams", icon: "phone", freq: "VERY COMMON",
  short: "A false identity and apparent authority are used to make urgent demands for payment, secrecy, or account access.",
  signs: ["Demand for secrecy or immediate action", "Threat of arrest, account closure, or financial loss"],
  def: "An impersonation scam occurs when a criminal pretends to be someone with authority or trust, such as a police officer, tax official, bank fraud agent, or utility worker, to pressure you into paying or giving access.",
  how: [
    "The caller or messenger claims to represent an organization you respect or fear.",
    "They quote real-sounding details such as badge numbers, case IDs, or a partial account number, often found from data leaks.",
    "They describe a crisis: a warrant, a frozen account, an identity theft case.",
    "They keep you on the line, tell you not to talk to anyone, and walk you through the payment or transfer.",
    "The money moves by methods that are hard to reverse, such as transfers, gift cards, or cash handed to a courier."
  ],
  methods: [
    "Caller ID spoofing, so the call appears to come from the real organization's number.",
    "\"Safe account\" instructions that tell victims to move their savings to protect it.",
    "Remote access requests presented as a way to check for fraud.",
    "A second person who joins the call as a senior officer to add pressure.",
    "Couriers who collect cash or cards from victims' homes."
  ],
  flags: [
    "Anyone telling you to keep the call secret from family or bank staff",
    "Demands for payment by gift card, cryptocurrency, wire, or cash",
    "A threat of arrest or deportation if you do not pay now",
    "Instructions to move your money to a \"safe\" account",
    "Refusal to let you hang up and call back on an official number",
    "A request to read out a code sent to your phone"
  ],
  examples: [
    { title: "The bank fraud agent", text: "A caller says he is from a bank's fraud team and has detected a suspicious transfer. He asks the customer to read out the verification code and then move her savings to a \"protected\" account while the case is investigated. The new account belongs to the scammer." },
    { title: "The tax debt call", text: "A recorded message says a tax case has been filed against the listener and an officer will visit unless a settlement is paid today. The follow-up caller requests payment in gift cards and tells him to stay on the phone while he buys them." }
  ],
  recognize: [
    "Real agencies do not demand immediate payment by gift cards, crypto, or transfers to personal accounts.",
    "Legitimate officials allow you to hang up and call back using a number you find yourself.",
    "Any instruction to keep a call secret is a scam signal, whatever the caller's title.",
    "Caller ID can be faked. A matching number is not proof."
  ],
  prevent: [
    "Hang up and call the organization back using the number on its official website or your card.",
    "Agree a family code word for emergencies so urgent calls can be checked.",
    "Never move money to a \"safe account\" at anyone's request.",
    "Decline remote access requests from callers you did not contact.",
    "Tell older relatives that real officials never demand payment by phone."
  ],
  encounter: [
    "Hang up without arguing or explaining.",
    "Contact the real organization through its published number.",
    "Tell a trusted person what happened, even if the caller said not to.",
    "Report the number to your national fraud or telecom authority."
  ],
  victim: [
    "Call your bank immediately and ask them to recall or freeze any transfer. Speed matters most.",
    "If you shared codes or logins, change passwords and revoke remote access.",
    "If you gave cash or cards to a courier, report it to the police with any details of the person and vehicle.",
    "Keep records such as phone numbers, account details, and screenshots.",
    "Report to your national fraud agency and talk to someone you trust about it. These scams are professionally run and are not your fault."
  ]
},
{
  id: "marketplace-shopping", name: "Marketplace & Shopping Scams", icon: "cart", freq: "VERY COMMON",
  short: "Fraudsters exploit online marketplaces with nonexistent products, fake payments, overpayments, and off-platform deals.",
  signs: ["Price far below market value", "Seller or buyer insists on paying or chatting off-platform"],
  def: "Marketplace and shopping scams use fake stores, fake listings, or fake payments to take money or goods from buyers and sellers on social media, classified ads, and online shops.",
  how: [
    "A scammer posts an attractive listing, often a sought-after item at a low price, or builds a convincing online store.",
    "They move the conversation to a private chat and propose a payment method with no protection.",
    "Buyers pay and never receive the item. Sellers receive a fake payment confirmation or an overpayment and are asked to refund the difference.",
    "The scammer disappears and the listing or store vanishes, often to reappear under a new name."
  ],
  methods: [
    "Fake online shops with stolen photos, copied reviews, and no real address.",
    "Sellers who ask for bank transfer, gift cards, or crypto \"to hold the item\".",
    "Fake payment screenshots or emails that claim the buyer has paid and a courier fee is owed.",
    "Overpayment: a buyer sends too much, then asks for the difference to be returned before the payment fails.",
    "Fake courier or escrow websites that confirm the scammer's story."
  ],
  flags: [
    "Price much lower than other listings for the same item",
    "Seller refuses to meet, call, or show the item live",
    "Request to pay outside the platform's protected checkout",
    "A buyer who offers more than the asking price",
    "Brand-new seller account with no history",
    "Pressure to pay quickly because \"someone else is interested\""
  ],
  examples: [
    { title: "The bargain console", text: "A game console is listed for half the usual price by a seller who says they are moving abroad. They ask for a bank transfer and promise to ship. After payment the account is deleted." },
    { title: "The overpaying buyer", text: "A seller lists a bicycle. A buyer sends a screenshot showing a payment of 600 instead of 400 and asks the seller to return the extra 200. The original payment was never made." }
  ],
  recognize: [
    "Search the seller's photos and description. Copied listings appear in several places.",
    "Look at the account age, reviews, and whether they match the story.",
    "Check that confirmation messages come from the payment service itself, not a screenshot sent by the buyer.",
    "Be wary of any deal that requires leaving the platform."
  ],
  prevent: [
    "Pay through the platform or by credit card, which offers stronger dispute rights.",
    "Meet in a public place for local deals and test the item before paying.",
    "Check your own payment account, not screenshots, before sending goods.",
    "Research unfamiliar shops: company details, contact information, and independent reviews.",
    "Avoid bank transfers, gift cards, or crypto with sellers you do not know."
  ],
  encounter: [
    "Stop communicating and do not send money or goods.",
    "Report the listing or account to the platform.",
    "Screenshot the listing and chat before it disappears.",
    "Warn others if the platform has a way to flag the post."
  ],
  victim: [
    "Contact your bank or card issuer immediately to dispute the payment, and ask if a chargeback is possible.",
    "Report the seller or buyer to the platform and attach screenshots and receipts.",
    "If you shipped goods, contact the courier to request an intercept.",
    "Change passwords if you shared any login details during the transaction.",
    "Report to your national fraud agency and local police if the amount is significant."
  ]
},
{
  id: "account-takeover", name: "Account Takeover", icon: "fingerprint", freq: "VERY COMMON",
  short: "Stolen passwords and verification codes let criminals lock out owners, steal data, and target their contacts.",
  signs: ["Unexpected login alerts or password reset emails", "Friends receive odd messages from your account"],
  def: "Account takeover happens when a criminal gains control of your email, social media, banking, or shopping account, then locks you out and uses it to steal money, data, or access to your contacts.",
  how: [
    "The attacker obtains a password from a phishing page, a data breach, or malware on your device.",
    "They test it on other services, because many people reuse passwords.",
    "If a code is required, they trick you into sharing it, or they take over your phone number.",
    "Once inside, they change the password and recovery details so you cannot get back in.",
    "They drain balances, make purchases, or message your contacts asking for money."
  ],
  methods: [
    "Credential stuffing: automated tools try leaked passwords on many sites.",
    "Tricking victims into reading out a verification code, often by posing as support.",
    "Infostealer malware that copies saved passwords and login cookies.",
    "Changing recovery email and phone details to lock the owner out.",
    "Using the hijacked account to send links or payment requests to friends."
  ],
  flags: [
    "A password reset or sign-in notice you did not request",
    "Messages in your sent folder that you did not write",
    "Being logged out suddenly or your password no longer works",
    "Changes to recovery email, phone number, or payment details",
    "Friends reporting strange messages from you",
    "Purchases or transfers you do not recognize"
  ],
  examples: [
    { title: "The hijacked social account", text: "A young woman's social profile starts posting about a crypto giveaway. Friends send messages asking about it. She cannot log in because the attacker changed her email. They had used a password she also used on a gaming site that was breached." },
    { title: "The code request", text: "A man receives a text with a six-digit code, then a call from \"the platform's support\" asking him to read it back to cancel a suspicious login. The code was actually the one that let the attacker reset his password." }
  ],
  recognize: [
    "Check the security page of important accounts for unfamiliar devices or locations.",
    "Treat any sign-in or reset alert you did not trigger as a warning.",
    "Remember that real support teams never ask you to read a code to them.",
    "Check whether your email appears in known breaches."
  ],
  prevent: [
    "Use a different long passphrase for every important account, kept in a password manager.",
    "Turn on multi-factor authentication, preferably with an authenticator app or security key.",
    "Never share verification codes with anyone.",
    "Set up login alerts and review connected devices and apps regularly.",
    "Keep devices updated and avoid installing software from unofficial sources."
  ],
  encounter: [
    "If you receive a reset or login alert you did not request, do not click its link. Open the official app and check.",
    "Change the password and sign out all devices.",
    "Add or strengthen multi-factor authentication.",
    "Review recovery email and phone details."
  ],
  victim: [
    "Use the service's official recovery process immediately and change the password of any account that shares it.",
    "Secure your email first, since it can reset almost everything else.",
    "Contact your bank if payment details were on the account and check statements.",
    "Warn friends and contacts that messages from you may be fraudulent.",
    "Scan your devices for malware and report the takeover to the platform and your national cybercrime agency."
  ]
},
{
  id: "tech-support", name: "Tech Support Scams", icon: "monitor", freq: "COMMON",
  short: "Fake support agents use alarming pop-ups, calls, or search advertisements to obtain remote access and payment.",
  signs: ["Pop-up warning with a phone number to call", "Request to install remote access software"],
  def: "A tech support scam convinces you that your computer or account has a serious problem, then charges you for fake repairs or uses remote access to steal data and money.",
  how: [
    "A full-screen pop-up, a call, or a paid search result claims your device is infected or your account is compromised.",
    "You are told to call a number or install a program so a \"technician\" can fix it.",
    "The agent connects remotely, shows harmless system messages as proof of infection, and asks for payment.",
    "While connected, they may open your banking site, install real malware, or add themselves as an administrator.",
    "Some return later with a \"refund\" trick that results in even more money taken."
  ],
  methods: [
    "Browser pop-ups that lock the page and play an alarm sound.",
    "Unsolicited calls claiming to be from a software company or internet provider.",
    "Fake support numbers in search ads.",
    "Remote access tools used to take over the screen.",
    "Refund scams in which a victim is shown a fake overpayment and told to send money back."
  ],
  flags: [
    "A warning that tells you to call a number immediately",
    "A call from a technician you did not contact",
    "A request to install remote access software",
    "Payment requested by gift card, crypto, or wire",
    "Claims that your computer has sent them an error report",
    "A refusal to let you end the call"
  ],
  examples: [
    { title: "The red-screen alarm", text: "A retiree's browser fills with a flashing red page saying her computer is infected and to call support right away. The \"technician\" asks her to install a remote tool and then shows her a normal list of system logs as evidence." },
    { title: "The refund twist", text: "After paying for a useless service, a man gets a call offering a refund. The agent accesses his bank page remotely and makes it appear that too much was refunded, then asks him to send the \"extra\" back in gift cards." }
  ],
  recognize: [
    "Real warnings from your system or browser never include a phone number to call.",
    "Companies like Microsoft or Apple do not cold-call about infections.",
    "You can close a pop-up by shutting down the browser; nothing is actually wrong.",
    "No legitimate service demands payment in gift cards."
  ],
  prevent: [
    "Never call numbers shown in pop-ups or ads. Contact support through the company's official site.",
    "Do not install remote access software at the request of someone who contacted you.",
    "Keep your system and browser updated and use a reputable security tool.",
    "Set up your family with a plan: close the browser and ask someone before acting.",
    "Be cautious with search ads when looking for support numbers."
  ],
  encounter: [
    "Close the browser or force quit it. Restart the computer if needed.",
    "Hang up on callers and do not give any details.",
    "Run a scan with trusted security software.",
    "Report the pop-up or call to the real company and your national fraud agency."
  ],
  victim: [
    "Disconnect from the internet and uninstall any remote access program.",
    "Run a full malware scan and change all passwords from a different, clean device.",
    "Contact your bank immediately if you paid or if they saw banking details, and dispute the charges.",
    "Check for new user accounts or software and consider a system restore or professional cleanup.",
    "Report the scam and watch for follow-up calls, since victims are often targeted again."
  ]
},
{
  id: "job-employment", name: "Job & Employment Scams", icon: "briefcase", freq: "COMMON",
  short: "Fake offers and recruiters request money, banking details, identity documents, or financial transactions.",
  signs: ["Offer arrives without a formal interview", "Personal email address instead of a company domain"],
  def: "Job scams advertise fake positions to collect personal documents, charge illegitimate fees, or use the \"employee\" to move stolen money or goods.",
  how: [
    "A fake job appears on a job board or arrives through a message, often with high pay for easy work.",
    "The recruiter interviews briefly by chat and offers the job immediately.",
    "The new \"employee\" is asked for identity documents, bank details, or fees for equipment, training, or background checks.",
    "Some are sent a check and told to buy supplies. The check later bounces, and the money is lost.",
    "Others are used as money mules, receiving and forwarding funds that come from other victims."
  ],
  methods: [
    "Copying real company names and job postings with new contact details.",
    "Interviews on messaging apps instead of video or phone.",
    "Fake onboarding forms that collect passport, tax, and banking details.",
    "Overpayment checks for equipment that the victim must partly return.",
    "\"Task\" jobs in which workers pay in crypto to unlock higher earnings."
  ],
  flags: [
    "A job offer without a formal interview or reference check",
    "Recruiter uses a personal email address or messaging app only",
    "Pay that seems very high for simple work",
    "Requests for fees, equipment purchases, or crypto deposits",
    "A request for identity documents before a contract is signed",
    "Instructions to receive and forward money or packages"
  ],
  examples: [
    { title: "The equipment check", text: "A graduate is offered a remote assistant role after a text interview. The employer sends a check for 2,400 to buy a laptop from a \"preferred vendor\". The check bounces a week later, and the vendor payment cannot be recovered." },
    { title: "The task-for-pay site", text: "A message offers extra income for rating products online. Earnings appear on a dashboard, but to withdraw them the user must keep depositing crypto to \"upgrade\" their account. The dashboard numbers are fake." }
  ],
  recognize: [
    "Check that the company really advertises the role on its official careers page.",
    "Verify the recruiter through the company's main phone number or website.",
    "Be cautious if the pay is unusually high compared with the work and experience required.",
    "A real employer never needs you to pay to get started or to transfer money for them."
  ],
  prevent: [
    "Apply through a company's official website and research recruiters before sharing documents.",
    "Do not send ID or bank details until you have a signed contract and verified the employer.",
    "Never pay for a job, equipment, or training.",
    "Do not cash checks and send money back to anyone.",
    "Decline any role that asks you to receive and forward funds."
  ],
  encounter: [
    "Stop communication and verify through official company channels.",
    "Do not share documents or send payments.",
    "Report the listing to the job board.",
    "Warn others if you see the same posting."
  ],
  victim: [
    "If you sent ID documents, place a fraud alert or credit freeze where available and monitor for misuse.",
    "Contact your bank immediately if you sent money or shared account details.",
    "If you forwarded funds, stop immediately and tell your bank and the police, because mules may face legal risk.",
    "Report the scam to the job board and your national fraud agency.",
    "Change passwords for accounts linked to the email you used."
  ]
},
{
  id: "investment-crypto", name: "Investment & Crypto Scams", icon: "trending", freq: "COMMON",
  short: "Fraudsters promise guaranteed returns from trading, property, or cryptocurrency.",
  signs: ["Guaranteed or unusually consistent returns", "Pressure to invest before an opportunity closes"],
  def: "Investment scams promise large, low-risk profits from trading, crypto, property, or other schemes, but the money goes to the scammer, and any gains shown are invented.",
  how: [
    "A scammer builds trust through an ad, a social media contact, or a chat group and presents an easy way to profit.",
    "The victim makes a small first deposit into a professional-looking platform that shows rising profits.",
    "A small withdrawal may be allowed to build confidence, which encourages larger deposits.",
    "When the victim tries to withdraw a larger amount, new fees or taxes are demanded.",
    "The platform then freezes the account or disappears, and the money is gone."
  ],
  methods: [
    "Fake trading apps and dashboards with made-up balances.",
    "Celebrity endorsements created with stolen images or deepfake video.",
    "Pig butchering: weeks of friendly chat before the investment pitch.",
    "Ponzi-style schemes that pay early investors with later deposits.",
    "Fake \"recovery\" or \"withdrawal fee\" demands after the account is frozen."
  ],
  flags: [
    "Promised returns that are guaranteed or unusually steady",
    "Pressure to deposit before an offer expires",
    "A platform you cannot verify with a financial regulator",
    "Withdrawal blocked until you pay a fee or tax",
    "A new online friend giving investment advice",
    "Instructions to pay in crypto or to personal accounts"
  ],
  examples: [
    { title: "The trading coach", text: "A woman is added to a chat group by a \"mentor\" who shares screenshots of profits. She deposits 500 on a trading site and sees it grow to 900. When she tries to withdraw 5,000, she is asked to pay a 20% release fee first." },
    { title: "The celebrity ad", text: "A video ad shows a famous businessperson endorsing a crypto platform that supposedly guarantees monthly returns. The video was fabricated, and the platform has no license." }
  ],
  recognize: [
    "Real investments carry risk. Anyone guaranteeing profit is lying.",
    "Check the company and the person in your regulator's public register.",
    "Search the platform name with words like \"scam\" or \"complaints\".",
    "Be wary when a stranger you met online starts discussing money."
  ],
  prevent: [
    "Use only licensed brokers and platforms that appear in your financial regulator's register.",
    "Never invest because of pressure, urgency, or a stranger's recommendation.",
    "Test withdrawals with a small amount before depositing more, and be wary if fees appear.",
    "Do not send crypto to addresses given by people you met online.",
    "Talk to a trusted person or licensed adviser before moving significant money."
  ],
  encounter: [
    "Stop contact and do not deposit more money.",
    "Check the firm with your financial regulator.",
    "Save chats, wallet addresses, and screenshots.",
    "Report the ad or profile to the platform where you saw it."
  ],
  victim: [
    "Stop paying. Any request for fees to release your funds is part of the scam.",
    "Contact your bank or exchange immediately and ask whether the payment can be recalled or flagged.",
    "Keep all evidence, including wallet addresses and transaction IDs, and report it to your financial regulator, the police, and your national fraud agency.",
    "Be careful of \"recovery\" services that contact you, since they are often a second scam.",
    "Seek support. Many victims feel shame, but these operations are highly organized."
  ]
},
{
  id: "romance", name: "Romance Scams", icon: "heart", freq: "COMMON",
  short: "Fraudsters build long emotional relationships online, sometimes for months before repeated emergencies or investment requests appear.",
  signs: ["Rapid declarations of love or commitment", "Repeated reasons to avoid live video or meeting"],
  def: "A romance scam happens when a criminal creates a fake identity on a dating site or social network and builds an emotional bond with someone in order to take money from them.",
  how: [
    "The scammer creates an attractive profile, often claiming to work abroad as a soldier, engineer, or doctor.",
    "They move quickly to private messaging and shower the victim with attention and affection.",
    "Over weeks or months, they build trust and share a story of a shared future.",
    "A crisis appears: a medical bill, a customs fee, a business problem, or a flight to visit.",
    "Requests continue and grow. Some move to an investment pitch. The scammer vanishes once the victim cannot or will not pay."
  ],
  methods: [
    "Stolen photos of real people used for fake profiles.",
    "Constant messaging to create dependence.",
    "Excuses for avoiding video calls, such as a poor connection or remote work.",
    "Requests for money by wire, crypto, or gift cards.",
    "Asking the victim to receive and forward packages or funds."
  ],
  flags: [
    "Declarations of love within days or weeks",
    "They are always overseas or unavailable for video calls",
    "A sudden emergency that requires money",
    "Requests for gift cards, crypto, or wire transfers",
    "Pressure to move off the dating site to private chat",
    "Stories that change or details that do not match"
  ],
  examples: [
    { title: "The engineer overseas", text: "A widower matches with a man who says he is an engineer on an offshore project. After three months of daily messages, the \"engineer\" says his equipment is held at customs and asks for 1,800 to release it. More fees follow." },
    { title: "The investment coach", text: "A woman chats for weeks with a friendly stranger who then mentions his trading success and helps her open an account on a platform he recommends. Her deposits are fake numbers on a screen." }
  ],
  recognize: [
    "Do a reverse image search on profile photos to see if they belong to someone else.",
    "Ask for a live video call. Repeated refusals are a major red flag.",
    "Notice when the story requires money and secrecy.",
    "Remember that a person you have never met in person should never be asking you for money."
  ],
  prevent: [
    "Keep conversations on the dating platform until you have met on video.",
    "Never send money, gift cards, or crypto to someone you have not met in person.",
    "Share your concerns with friends or family, who often spot warning signs sooner.",
    "Limit the personal details and photos you share early on.",
    "Treat any request involving money as a stop sign, no matter how emotional."
  ],
  encounter: [
    "Pause the conversation and talk to someone you trust.",
    "Do a reverse image search and check the details of their story.",
    "Do not send money or personal documents.",
    "Report and block the profile on the platform."
  ],
  victim: [
    "Stop all payments and contact your bank immediately to ask about recovery.",
    "Keep chats, profile links, and payment records and report to the platform, your national fraud agency, and the police.",
    "Change passwords if you shared any accounts and be alert for follow-up scams.",
    "Do not pay anyone who offers to recover your losses.",
    "Reach out to friends, family, or a counselor. This is a form of manipulation and the shame belongs to the scammer."
  ]
},
{
  id: "prize-lottery", name: "Prize & Lottery Scams", icon: "gift", freq: "COMMON",
  short: "An unexpected win is used to justify taxes, delivery charges, processing fees, or identity verification.",
  signs: ["You did not enter the competition", "Fee or tax required before receiving a prize"],
  def: "Prize and lottery scams tell you that you have won money or a gift in a contest you never entered, then demand a fee or personal information before you can \"claim\" it.",
  how: [
    "You receive an email, text, call, or social media message announcing a big win.",
    "The message says the prize is real and time-limited, and asks you to respond privately.",
    "To claim it, you must pay a tax, a delivery charge, or a processing fee, or provide ID and bank details.",
    "After you pay, new fees appear. The prize never arrives.",
    "Your ID or bank details may be used for further fraud."
  ],
  methods: [
    "Messages from fake lottery commissions or well-known brands.",
    "Social media giveaway pages with copied logos and fake winners.",
    "Requests for a small \"insurance\" or \"customs\" fee.",
    "Requests for passports and bank details to \"verify\" the winner.",
    "Overpayment checks sent before fees are demanded."
  ],
  flags: [
    "You won a contest you did not enter",
    "A fee or tax must be paid before receiving the prize",
    "Request to keep the win secret",
    "A deadline to claim the prize",
    "Contact from a personal email or social media account",
    "Requests for ID or bank details to confirm your identity"
  ],
  examples: [
    { title: "The brand giveaway", text: "A social media page using a well-known phone maker's logo announces that the user was randomly picked to win the latest model. To receive it, he must pay a 35 shipping fee through a link. The page is deleted the next day." },
    { title: "The international lottery", text: "An email says a woman has won 1.2 million in a foreign lottery she never played. A claims agent asks for a copy of her passport and a processing fee of 250, followed by an \"anti-money-laundering certificate\" fee." }
  ],
  recognize: [
    "You cannot win a lottery you did not enter.",
    "Real prizes do not require payment first, and official contests do not ask for bank details.",
    "Check the contest on the real company's website or verified social account.",
    "Any prize that demands secrecy is a scam."
  ],
  prevent: [
    "Ignore messages about prizes in contests you did not enter.",
    "Never pay fees to receive winnings.",
    "Follow only verified brand accounts for giveaways and check their official site.",
    "Do not share ID or bank details with unknown contacts.",
    "Report the page or message so others are not targeted."
  ],
  encounter: [
    "Do not reply or click any link.",
    "Check whether the company actually runs the promotion.",
    "Report the message or post to the platform.",
    "Block the sender and delete the message."
  ],
  victim: [
    "Stop any further payments and contact your bank or card provider if you paid.",
    "If you sent ID documents, monitor your accounts and consider a credit freeze or fraud alert.",
    "Change passwords for accounts linked to details you shared.",
    "Report to your national fraud agency and the platform.",
    "Be careful of follow-up contacts offering to help recover the money."
  ]
}
);
