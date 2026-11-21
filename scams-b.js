/* Scam profiles 11-21. */
window.SCAMS.push(
{
  id: "advance-fee", name: "Advance-Fee Scams", icon: "coins", freq: "COMMON",
  short: "Loans, inheritances, refunds, grants, and money transfers are offered in exchange for escalating upfront charges.",
  signs: ["Payment required before funds are released", "Unexpected offer from an unknown organization"],
  def: "An advance-fee scam promises a large sum of money, a loan, or a benefit, but asks you to pay a series of upfront fees first. The promised payout never exists.",
  how: [
    "You receive an offer such as a loan with no credit check, an inheritance from a distant relative, a government grant, or a share of a frozen fortune.",
    "The offer seems official, with documents, titles, and formal language.",
    "A first fee is requested for legal paperwork, taxes, insurance, or a transfer charge.",
    "Each payment is followed by a new obstacle and another fee.",
    "The scammer stops responding once the victim runs out of money or patience."
  ],
  methods: [
    "Fake loan offers that require an \"insurance deposit\" before approval.",
    "Inheritance or \"unclaimed funds\" letters from supposed lawyers or bank officers.",
    "Fake grant or refund notices claiming to be from a government body.",
    "Forged certificates and stamped letters to make the offer look legal.",
    "Pressure to keep the arrangement confidential."
  ],
  flags: [
    "An offer you did not ask for from an organization you do not know",
    "A fee to be paid before you receive anything",
    "A promise of guaranteed approval for a loan with no checks",
    "Request to pay by transfer, gift card, or crypto",
    "Official-looking documents with a free email address",
    "Repeated new fees after each payment"
  ],
  examples: [
    { title: "The guaranteed loan", text: "A small business owner searching for credit finds a lender advertising approval for anyone. After sending ID, she is told she must pay a refundable 300 insurance fee. Once paid, a second fee for \"account activation\" is requested." },
    { title: "The unclaimed estate", text: "An email from a supposed attorney says a stranger who shares the recipient's surname died leaving 4.5 million. To release the funds, the recipient must pay for a court order and a tax clearance certificate." }
  ],
  recognize: [
    "Legitimate lenders deduct fees from the loan or bill you normally; they do not ask for unusual upfront payments.",
    "No government agency or lawyer contacts people randomly to hand out money.",
    "If something looks too good to be true, it probably is.",
    "Search the company name along with the word \"scam\"."
  ],
  prevent: [
    "Use lenders that are licensed with your financial regulator.",
    "Never pay a fee to receive a loan, grant, or inheritance.",
    "Do not share ID documents until you have verified the organization.",
    "Ignore unsolicited offers and delete them.",
    "Ask a trusted person or a legal professional before paying anyone."
  ],
  encounter: [
    "Do not pay and do not reply.",
    "Verify the organization through official registers.",
    "Report the offer to your national fraud agency.",
    "Block and delete the message."
  ],
  victim: [
    "Stop making payments. More fees will keep coming.",
    "Contact your bank to report the transfers and ask about recovery.",
    "If you shared ID, watch your accounts and consider a credit freeze or fraud alert.",
    "Report to your national fraud agency and the police.",
    "Do not pay anyone who offers to retrieve your money for a fee."
  ]
},
{
  id: "subscription-renewal", name: "Subscription & Renewal Scams", icon: "refresh", freq: "COMMON",
  short: "Unexpected antivirus, cloud-storage, media, or membership invoices provoke a call or payment.",
  signs: ["Invoice for a service you do not use", "Cancellation only available by calling an unfamiliar number"],
  def: "Subscription and renewal scams send fake invoices or receipts for services you never bought, hoping you will call a number to dispute the charge and give away money or access.",
  how: [
    "You receive an email, text, or pop-up thanking you for renewing an antivirus, cloud storage, or media subscription for a large amount.",
    "The message says to call a number if you did not authorize the charge.",
    "On the phone, an \"agent\" asks for card details to cancel, or for remote access to process a refund.",
    "They may then take payment, steal banking details, or run a refund trick.",
    "Some real subscriptions are also renewed deceptively through hidden terms; the scam version is entirely fake."
  ],
  methods: [
    "Fake receipts that appear to come from well-known software or streaming brands.",
    "A phone number in the invoice that connects to the scammer's call center.",
    "Remote access requests to \"process the refund\".",
    "Refund tricks that make it look as if too much was returned.",
    "Fake renewal pop-ups on websites."
  ],
  flags: [
    "An invoice for a product or service you do not remember buying",
    "A large amount charged with only a phone number to dispute it",
    "A sender address that does not match the brand",
    "A request to install software to receive a refund",
    "Payment requested through gift cards or transfers",
    "Pressure to act within a short window"
  ],
  examples: [
    { title: "The antivirus receipt", text: "An email shows a 399 renewal for antivirus software, with a phone number to cancel. When the recipient calls, the agent says the refund will be processed through his bank and asks him to log in while sharing his screen." },
    { title: "The streaming renewal", text: "A text says a premium media membership will renew for 149 today unless a link is used to cancel. The page asks for card details and a one-time code to \"confirm cancellation\"." }
  ],
  recognize: [
    "Check your own bank or card statement. If there is no charge, the invoice is fake.",
    "Open the real service's app or account page to see your actual subscriptions.",
    "Look for sender and phone numbers that do not match the company's website.",
    "Be wary of any invoice that asks you to call instead of using your account."
  ],
  prevent: [
    "Review your subscriptions in your account settings or app store rather than through links in messages.",
    "Save official customer support numbers from the company's website.",
    "Do not share your screen or install tools for people who contact you.",
    "Use virtual or limited-balance cards for trials.",
    "Check statements monthly for unfamiliar charges."
  ],
  encounter: [
    "Do not call the number or click links in the invoice.",
    "Check your bank statement and the real account page.",
    "Report the message as phishing.",
    "Delete it."
  ],
  victim: [
    "Call your bank immediately if you gave card details or allowed remote access, and dispute any charge.",
    "Uninstall any remote access software and change your banking password.",
    "Run a security scan on your device.",
    "Never send money back if told a refund was accidentally too large, and tell your bank right away.",
    "Report to your national fraud agency."
  ]
},
{
  id: "qr-code", name: "QR Code Scams", icon: "qr", freq: "COMMON",
  short: "Malicious QR codes on stickers, posters, parking meters, or emails send victims to fake payment and login pages.",
  signs: ["QR code sticker placed over the original", "Code leads to a page asking for login or payment"],
  def: "QR code scams, sometimes called quishing, hide a malicious web address behind a QR code. Scanning it takes you to a fake page or starts a download that steals data or money.",
  how: [
    "A scammer prints QR codes and sticks them over real ones on parking meters, restaurant tables, posters, or charging stations.",
    "Others send QR codes by email or post, claiming to be a delivery notice, a bank alert, or a security check.",
    "When scanned, the phone opens a page that imitates a real payment or login form.",
    "The victim enters card details or credentials, which are captured immediately.",
    "Some QR codes install an unwanted app or add a contact or Wi-Fi network."
  ],
  methods: [
    "Stickers placed on top of legitimate parking or menu codes.",
    "Emails that put the link inside an image so filters do not see it.",
    "Fake \"scan to verify your account\" letters.",
    "Codes that lead to fake payment pages for parking or tolls.",
    "Fake app download prompts after scanning."
  ],
  flags: [
    "A QR code that looks like a sticker placed on top of another",
    "A code in an unexpected email or letter",
    "A preview URL that does not match the business",
    "A page that asks for your password or full card details",
    "A prompt to install an app after scanning",
    "Pressure to scan quickly to avoid a penalty"
  ],
  examples: [
    { title: "The parking meter sticker", text: "A driver scans the QR code on a parking meter to pay. The page looks like the city parking service and asks for card details. The code was a sticker placed over the real one, and his card is used the same evening." },
    { title: "The security check email", text: "An employee receives an email with an image of a QR code and a message saying the company is updating its login security. The code leads to a clone of the company's sign-in page." }
  ],
  recognize: [
    "Check whether the QR code is a sticker or looks tampered with.",
    "Read the web address your phone shows before opening it.",
    "Be suspicious of QR codes in unexpected emails or letters.",
    "Ask why a QR code is needed when a normal link or app would do."
  ],
  prevent: [
    "Use the official app or type the address of the parking, bank, or service yourself when in doubt.",
    "Check the preview link before opening it and make sure it matches the organization.",
    "Avoid entering passwords or card details on pages reached by scanning an unexpected code.",
    "Do not install apps prompted by a QR code.",
    "Keep your phone's camera and browser updated."
  ],
  encounter: [
    "Do not scan codes that look tampered with.",
    "Report the sticker to the business or authority that manages the location.",
    "Delete unexpected emails with QR codes.",
    "Warn others nearby if you can."
  ],
  victim: [
    "If you entered card details, call your bank to block the card and dispute charges.",
    "If you entered a password, change it and enable multi-factor authentication.",
    "If an app was installed, remove it and run a security scan.",
    "Report the code to the organization it imitated and to your national fraud agency.",
    "Monitor your statements for several weeks."
  ]
},
{
  id: "fake-apps-malware", name: "Fake Apps & Malware", icon: "bug", freq: "COMMON",
  short: "Counterfeit apps, cracked software, and malicious downloads steal passwords, money, and personal data.",
  signs: ["App from outside the official store", "Requests for permissions that do not fit its purpose"],
  def: "Fake apps and malware are harmful programs disguised as useful software, games, or updates. Once installed, they can steal passwords, spy on your device, or lock your files for ransom.",
  how: [
    "A scammer publishes an app that imitates a bank, wallet, or popular tool, or hides malware in free or cracked software.",
    "Victims find it through ads, links, messages, or file-sharing sites.",
    "After installation, the app asks for broad permissions such as accessibility or screen control.",
    "The malware captures logins, reads messages and one-time codes, or shows fake screens over real apps.",
    "Stolen data is used to empty accounts, or files are encrypted and a ransom is demanded."
  ],
  methods: [
    "Fake wallet and banking apps found through ads or links.",
    "Cracked games and software bundled with infostealers.",
    "Fake browser or video player updates on shady sites.",
    "Apps that request accessibility permission to read the screen.",
    "Ransomware delivered through attachments and downloads."
  ],
  flags: [
    "An app that is not in your device's official app store",
    "Prompt to install a \"required update\" from a website",
    "Permissions that do not fit the app, such as a flashlight asking for messages",
    "Few reviews, many identical reviews, or a brand-new developer",
    "Free versions of paid software",
    "A prompt to disable security protection to install"
  ],
  examples: [
    { title: "The cracked editing tool", text: "A student downloads a free copy of an expensive video editor from a file-sharing site. The installer works, but it also installs malware that steals browser passwords. His accounts are accessed the next day." },
    { title: "The fake banking app", text: "An ad offers a new banking app with a bonus. The link installs an app that copies the real bank's design. It asks for accessibility permission and then reads the one-time codes sent by the bank." }
  ],
  recognize: [
    "Check the developer name, download count, and reviews in the official store.",
    "Be suspicious of any app that asks for permissions beyond its purpose.",
    "Notice if your phone slows down, shows unknown apps, or displays odd pop-ups.",
    "Remember that legitimate software updates arrive through system settings, not website pop-ups."
  ],
  prevent: [
    "Install apps only from your device's official store and check the developer.",
    "Avoid cracked software and unofficial download sites.",
    "Keep your system and apps updated automatically.",
    "Use reputable security software and do not disable protections.",
    "Back up important files regularly so ransomware loses its leverage."
  ],
  encounter: [
    "Do not install the file or app.",
    "Close the page and clear any prompt without clicking.",
    "Report the app to the store or the website host.",
    "Scan your device if you are unsure what you opened."
  ],
  victim: [
    "Disconnect from the internet and uninstall the app or program.",
    "Run a full scan, and consider a factory reset if the device still behaves strangely.",
    "From a clean device, change passwords, starting with email and banking, and enable multi-factor authentication.",
    "Call your bank if financial apps were involved and check statements.",
    "Report to the app store and your national cybercrime agency. Do not pay a ransom without advice."
  ]
},
{
  id: "rental-accommodation", name: "Rental & Accommodation Scams", icon: "home", freq: "LESS COMMON",
  short: "Copied listings and false urgency persuade renters or travelers to send deposits before verifying the property.",
  signs: ["Price is substantially below comparable properties", "Landlord cannot show the property"],
  def: "Rental and accommodation scams advertise a property that does not exist, is not available, or belongs to someone else, in order to collect deposits, rent, or booking fees.",
  how: [
    "A scammer copies photos and details of a real listing and posts it at an attractive price.",
    "The \"landlord\" says they are abroad and cannot show the property in person.",
    "They offer to send keys after you pay a deposit or first month's rent.",
    "They may send a fake contract and pressure you because of high demand.",
    "After payment the contact vanishes, and the real owner knows nothing about it."
  ],
  methods: [
    "Cloned listings with real photos and a lower price.",
    "Landlord stories that explain why they cannot meet.",
    "Fake booking pages or messages that mimic travel platforms.",
    "Requests to pay outside the booking platform.",
    "Fake contracts with forged signatures or logos."
  ],
  flags: [
    "Rent much lower than similar nearby properties",
    "Landlord is abroad and cannot show the property",
    "Request for deposit before a viewing",
    "Payment demanded by transfer, gift card, or crypto",
    "Pressure because \"many people are interested\"",
    "A host who asks you to leave the platform to pay"
  ],
  examples: [
    { title: "The landlord abroad", text: "A student finds a bright apartment priced 40% below similar ones. The owner says he is working overseas and will mail the keys once a deposit is wired. After payment, messages stop. The real apartment was never for rent." },
    { title: "The holiday villa", text: "A traveler books a seaside villa through a website that resembles a booking platform. A follow-up message asks her to pay the balance by bank transfer to secure the dates. On arrival, the address belongs to a private home." }
  ],
  recognize: [
    "Search the listing photos to see if they appear under other addresses.",
    "Check ownership records or confirm with the property manager or agency.",
    "Be suspicious of any deal that avoids a viewing or live video tour.",
    "Compare the price with similar properties in the same area."
  ],
  prevent: [
    "View the property in person or through a live video tour with someone who can show the address.",
    "Pay only through the booking platform's protected system.",
    "Never send deposits by transfer, gift card, or crypto to someone you have not met.",
    "Verify landlords and agents through official registers or the agency's office.",
    "Read contracts carefully and check that names match the owner."
  ],
  encounter: [
    "Do not pay anything before verification.",
    "Report the listing to the platform.",
    "Contact the real owner or agency if you can identify them.",
    "Save the listing and messages as evidence."
  ],
  victim: [
    "Contact your bank immediately to try to recall the payment and dispute card charges.",
    "Report to the platform and your national fraud agency, and to the police.",
    "Save contracts, receipts, and chat logs.",
    "If you shared ID documents, monitor your accounts for misuse.",
    "Warn the real owner or agency if their listing was copied."
  ]
},
{
  id: "charity-donation", name: "Charity & Donation Scams", icon: "lifebuoy", freq: "LESS COMMON",
  short: "Emotional stories and urgent appeals redirect generosity to fraudulent donation pages or personal accounts.",
  signs: ["Pressure to donate immediately", "Payment requested to a personal account or gift card"],
  def: "Charity scams exploit people's wish to help by posing as real charities or inventing causes, often after disasters or in emotional social media posts, so donations go to criminals.",
  how: [
    "A scammer chooses a cause that attracts sympathy, such as a natural disaster, a sick child, or a war.",
    "They set up a fake charity, a crowdfunding page, or a social post with copied photos.",
    "Messages and calls use emotional stories and urgent deadlines.",
    "Donors are asked to pay by gift card, transfer, crypto, or a personal account.",
    "The money is taken, and nothing reaches the cause."
  ],
  methods: [
    "Charity names that closely resemble well-known organizations.",
    "Fake crowdfunding campaigns using stolen photos.",
    "Cold calls and texts after major disasters.",
    "Fake donation links shared on social media.",
    "Requests for donations by gift cards or crypto."
  ],
  flags: [
    "Pressure to give right now",
    "A charity name similar to a famous one",
    "Payment requested to a personal account or by gift card",
    "No clear information about how funds will be used",
    "Appeal arrives out of the blue after a disaster",
    "Refusal to send written information"
  ],
  examples: [
    { title: "The flood appeal", text: "After a typhoon, a text from a charity with a name close to a real relief group asks for an immediate donation through a link. The page accepts card details but belongs to no registered charity." },
    { title: "The sick child post", text: "A widely shared post shows a photo of a child needing surgery and a personal bank account for donations. The photo was taken from an unrelated news story." }
  ],
  recognize: [
    "Check that the charity is registered with your country's charity regulator.",
    "Look for details about how donations are used and independent reviews.",
    "Notice if the appeal is vague, rushed, or asks for unusual payment methods.",
    "Search the name of the campaign or the image for earlier use."
  ],
  prevent: [
    "Donate through the charity's official website, which you type or find yourself.",
    "Check registration and ratings before giving.",
    "Avoid giving to callers or texters who pressure you.",
    "Use a credit card or a secure platform for donations, not gift cards or transfers.",
    "Keep records of your donations."
  ],
  encounter: [
    "Do not donate on the spot.",
    "Research the organization independently.",
    "Report suspicious appeals to the platform and charity regulator.",
    "Tell friends if the post is spreading."
  ],
  victim: [
    "Contact your bank or card issuer to dispute the payment.",
    "Report the scam to the charity regulator and your national fraud agency.",
    "Change passwords if you entered account details.",
    "Report fake pages and posts to the platform.",
    "Give again through verified channels if you still wish to help."
  ]
},
{
  id: "business-email-compromise", name: "Business Email Compromise", icon: "building", freq: "LESS COMMON",
  short: "Messages appearing to come from executives, suppliers, or colleagues request confidential information or changed payment details.",
  signs: ["Unexpected change to bank details", "Urgent payment outside normal approval"],
  def: "Business email compromise targets organizations by impersonating or hijacking the email of an executive, supplier, or colleague, in order to redirect payments or obtain sensitive data.",
  how: [
    "The scammer studies the company through its website, social media, and previous leaks.",
    "They either hack a real mailbox or create a near-identical email address.",
    "They send a believable request, such as an urgent wire transfer, a new supplier bank account, or a list of employee data.",
    "The message uses authority and time pressure to skip the usual checks.",
    "The payment is made, and the funds are moved quickly through other accounts."
  ],
  methods: [
    "CEO fraud: a fake executive asks an assistant or finance worker for an urgent transfer.",
    "Supplier invoice fraud: bank details on a real invoice are changed.",
    "Compromised mailboxes that send messages within real conversation threads.",
    "Payroll diversion: a fake employee request to change direct deposit details.",
    "Requests for gift cards or confidential data from staff."
  ],
  flags: [
    "A request to change bank details by email",
    "Urgent payment with a request to skip normal approval",
    "An executive requesting secrecy",
    "Email address that differs by one character from the real one",
    "A new payment method or account for a regular supplier",
    "Requests that arrive when the executive is traveling"
  ],
  examples: [
    { title: "The new supplier account", text: "A finance clerk receives an email in an existing thread from a regular supplier saying their bank account has changed. The next invoice, for 38,000, is paid to the new account. The supplier's mailbox had been compromised." },
    { title: "The executive's request", text: "An assistant receives a message from what looks like the CEO's address saying he is in a meeting and needs gift cards for clients purchased immediately. The address has one letter changed." }
  ],
  recognize: [
    "Check sender addresses carefully, including the domain.",
    "Be suspicious of payment changes, especially with urgency or secrecy.",
    "Verify requests through a known phone number, not the one in the email.",
    "Note when a request breaks normal process or timing."
  ],
  prevent: [
    "Confirm every change of bank details by phoning the supplier on a known number.",
    "Require two-person approval for payments and changes to payment details.",
    "Enable multi-factor authentication on all business email accounts.",
    "Train staff to recognize executive impersonation and to question urgent requests.",
    "Limit what staff and executives post publicly about travel and roles."
  ],
  encounter: [
    "Do not make the payment or share the data.",
    "Verify the request through a separate channel.",
    "Report it to your IT or security team.",
    "Keep the email for investigation."
  ],
  victim: [
    "Contact your bank immediately and ask for a recall of the transfer. The first hours matter most.",
    "Inform your IT team and secure compromised email accounts by changing passwords and reviewing forwarding rules.",
    "Report to the police and your national cybercrime agency.",
    "Notify affected suppliers or customers and keep records.",
    "Review payment processes to prevent a repeat."
  ]
},
{
  id: "ai-voice-deepfake", name: "AI Voice-Cloning & Deepfake Scams", icon: "waveform", freq: "LESS COMMON",
  short: "Synthetic voices, faces, and videos imitate relatives, colleagues, or public figures to request money or trust.",
  signs: ["Urgent call from a relative in trouble", "Video or audio that feels slightly off or refuses live checks"],
  def: "AI voice and deepfake scams use software that copies a real person's voice or face from a short recording or photo, then use the imitation to ask for money, access, or endorsements.",
  how: [
    "The scammer collects a few seconds of someone's voice or video from social media or a voicemail.",
    "Software generates a convincing copy that can speak new sentences.",
    "A call or video message is made to a family member, colleague, or follower, claiming an emergency or a business opportunity.",
    "The imitation asks for a quick payment, a code, or secrecy.",
    "The money is sent by methods that are hard to reverse, and the scammer vanishes."
  ],
  methods: [
    "Voice-cloned calls claiming a relative has been in an accident or arrested.",
    "Deepfake video calls that imitate a company executive.",
    "Fake celebrity videos promoting investments or giveaways.",
    "Voice messages that start a conversation and then switch to text.",
    "Altered images used to fake identity on dating profiles."
  ],
  flags: [
    "An emergency call from a relative with a request for money and secrecy",
    "Unusual speech patterns, odd pauses, or flat emotion",
    "Video with blurry edges, odd blinking, or lip movements out of sync",
    "A request to pay quickly by transfer or crypto",
    "An unknown number from someone claiming to be a family member",
    "An endorsement video that promises guaranteed returns"
  ],
  examples: [
    { title: "The call from a grandson", text: "A grandmother receives a call in what sounds exactly like her grandson's voice saying he has been in a crash and needs bail money sent immediately, and not to tell his parents. He is actually safe at school." },
    { title: "The executive on video", text: "A finance officer joins a video call with people who look and sound like her managers, who instruct her to approve an urgent confidential transfer. Every other participant on the call was generated." }
  ],
  recognize: [
    "Hang up and call the person back on the number you already have.",
    "Ask a question only the real person would know or use your family code word.",
    "Look for glitches in video, such as lighting, edges, and audio sync.",
    "Be wary of any emotional demand combined with secrecy and speed."
  ],
  prevent: [
    "Agree a private code word with close relatives for emergencies.",
    "Limit public posts of your voice and video where possible and review privacy settings.",
    "Require a second verification channel for payment requests inside organizations.",
    "Treat investment videos from famous people with caution and check official channels.",
    "Teach relatives that a familiar voice is no longer proof of identity."
  ],
  encounter: [
    "Hang up and call the person on a known number.",
    "Contact another family member to check the story.",
    "Do not send money or codes during the call.",
    "Report the call to your national fraud agency."
  ],
  victim: [
    "Contact your bank immediately to try to stop or recall the payment.",
    "Report to the police and your national fraud agency with call records and details.",
    "Warn family so they can set up verification steps.",
    "Change passwords if you shared any account information.",
    "Report fake videos to the platform where they were shared."
  ]
},
{
  id: "sextortion", name: "Sextortion & Blackmail", icon: "eyeoff", freq: "LESS COMMON",
  short: "Criminals threaten to share private images or messages unless payment is made, often after a fake intimate chat.",
  signs: ["Threat to expose images or messages unless you pay", "New online contact who quickly moves to private or intimate chat"],
  def: "Sextortion is a form of blackmail in which a criminal threatens to share intimate images, real or fabricated, unless the victim pays money or sends more content. Young people are frequent targets, but anyone can be.",
  how: [
    "A fake profile, often posing as an attractive peer, contacts a target on social media or a dating app.",
    "The conversation moves quickly to private chat and becomes intimate.",
    "The scammer persuades the victim to share a photo or video, or uses a fake or edited image.",
    "The scammer then threatens to send it to the victim's friends, family, or school unless payment is made.",
    "Payments do not end the threats. Demands continue until the victim stops responding or seeks help."
  ],
  methods: [
    "Fake profiles using stolen photos of attractive people.",
    "Pressure to switch to a private video app.",
    "Fabricated images created with editing or AI tools.",
    "Mass emails claiming to have hacked your webcam, using a leaked password as proof.",
    "Threats timed with countdowns and screenshots of the victim's contacts."
  ],
  flags: [
    "A new contact who quickly becomes flirty or intimate",
    "Request to move to a private chat or video app",
    "Pressure to send photos or perform on camera",
    "A threat to share content with your contacts unless you pay",
    "A demand for gift cards, crypto, or payment apps",
    "Countdowns or screenshots of your friends list"
  ],
  examples: [
    { title: "The new match", text: "A teenager is contacted by someone who appears to be a girl his age. After a few days of chatting, they exchange photos. The account then sends him a screenshot of his followers list and demands 200 or the images will be sent to them." },
    { title: "The hacked-webcam email", text: "A man receives an email that includes an old password of his and claims the sender recorded him through his webcam, demanding crypto payment. There is no recording; the password came from an old data breach." }
  ],
  recognize: [
    "Recognize the pattern: fast intimacy, private chat, then a threat.",
    "Know that paying does not stop the demands.",
    "Remember that the threat is the crime, and the victim has done nothing wrong.",
    "A password in an email proves an old breach, not hacking."
  ],
  prevent: [
    "Be cautious about accepting contact from strangers and moving to private chat.",
    "Never send intimate images to someone you only know online.",
    "Set social accounts to private and limit who can see your friends and followers.",
    "Use unique passwords and cover webcams if it helps you feel safer.",
    "Make sure young people know they can come to you without judgment if this happens."
  ],
  encounter: [
    "Stop responding and do not pay.",
    "Take screenshots of the messages, profile, and demands.",
    "Block and report the account to the platform.",
    "Tell a trusted person and consider contacting the police."
  ],
  victim: [
    "Do not pay. Payment usually leads to more demands.",
    "Keep evidence, then block the account and report it to the platform, asking for the content to be removed.",
    "Report to the police or a national child-protection or cybercrime reporting service, especially if the victim is under 18.",
    "Secure accounts by changing passwords and tightening privacy settings.",
    "Seek emotional support from a trusted person or counselor. You are the victim of a crime, and help is available."
  ]
},
{
  id: "sim-swap", name: "SIM Swap & Phone Number Hijacking", icon: "sim", freq: "LESS COMMON",
  short: "Criminals take control of your mobile number to intercept codes and reset your accounts.",
  signs: ["Phone suddenly loses signal with no explanation", "Texts about SIM or number changes you did not request"],
  def: "A SIM swap is when a criminal convinces your mobile carrier to move your phone number to a SIM card they control. They then receive your calls and texts, including one-time codes for banking and email.",
  how: [
    "The scammer gathers personal details about you from data leaks, phishing, or social media.",
    "They contact your carrier, or bribe an employee, and pretend to be you to request a new SIM or number transfer.",
    "Your phone loses service while their SIM becomes active.",
    "They request password resets on your email, bank, and social accounts and receive the codes by text.",
    "They empty accounts and lock you out before you realize what happened."
  ],
  methods: [
    "Impersonating customers in carrier stores, calls, or chat.",
    "Using stolen personal details to pass identity questions.",
    "Bribing or tricking carrier employees.",
    "Port-out fraud: moving your number to another provider.",
    "Phishing to collect the details needed for the swap."
  ],
  flags: [
    "Sudden loss of mobile signal or \"no service\" on your phone",
    "Messages from your carrier about a SIM change you did not request",
    "Unexpected password reset or login codes",
    "Being unable to make calls or receive texts",
    "Alerts from your bank about unfamiliar activity",
    "Being locked out of accounts that use your number"
  ],
  examples: [
    { title: "The sudden no-service", text: "A man notices his phone shows no signal in a busy city centre. Within an hour his email password has been reset and his exchange account emptied. His number had been moved to a new SIM." },
    { title: "The carrier call", text: "A woman gets a call from someone claiming to be from her carrier asking to confirm her details to prevent a \"SIM fault\". Days later her number is ported out to another provider without her consent." }
  ],
  recognize: [
    "Unexplained loss of service for more than a short period is a warning.",
    "Notice codes or alerts that you did not request.",
    "Check whether your accounts depend on text messages for recovery.",
    "Contact your carrier from another phone if you suspect a swap."
  ],
  prevent: [
    "Ask your carrier to add a PIN, passcode, or port-out lock to your account.",
    "Use an authenticator app or security key instead of text codes for important accounts.",
    "Limit the personal details you share publicly, such as your birth date.",
    "Be careful with calls or messages that ask for account details.",
    "Add a recovery method that is not tied to your phone number."
  ],
  encounter: [
    "If you lose signal unexpectedly, contact your carrier right away using another phone.",
    "Check your email and bank for unusual activity.",
    "Add a carrier PIN and move key accounts to an authenticator app.",
    "Do not share account details with unsolicited callers."
  ],
  victim: [
    "Contact your carrier immediately to regain your number and block further changes.",
    "Call your bank and any financial providers to freeze accounts and dispute transactions.",
    "Secure email first, then other accounts, with new passwords and non-SMS multi-factor authentication.",
    "Report to the police and your national fraud agency.",
    "Watch for identity theft and consider a credit freeze or fraud alert."
  ]
},
{
  id: "recovery-scam", name: "Recovery Scams", icon: "undo", freq: "LESS COMMON",
  short: "Fake recovery agents contact fraud victims and promise to retrieve lost money for an upfront fee.",
  signs: ["Contact from someone offering to recover your money", "Fee requested before any funds are returned"],
  def: "A recovery scam targets people who have already lost money to fraud. The criminal poses as a lawyer, investigator, or official and promises to get the money back, but only after a fee.",
  how: [
    "Scammers obtain lists of previous victims or monitor public complaints and forums.",
    "They contact the victim claiming to be a recovery firm, a law enforcement agent, or a crypto tracing expert.",
    "They say they have located the stolen funds and need a fee for legal costs, taxes, or release.",
    "Once paid, more fees follow, or the contact disappears.",
    "The victim loses more money and may share more personal information."
  ],
  methods: [
    "Cold calls, emails, and social messages offering to trace lost crypto.",
    "Fake websites of law firms or government recovery agencies.",
    "Claims of a court order or a frozen account requiring a fee.",
    "Forged documents and badges.",
    "Requests for remote access to a victim's accounts."
  ],
  flags: [
    "Someone contacts you offering to recover money you lost",
    "A fee is required upfront before any funds are returned",
    "A guarantee of recovery",
    "Contact through social media or a messaging app",
    "A request for remote access or login details",
    "Pressure to act before the funds \"expire\""
  ],
  examples: [
    { title: "The crypto tracer", text: "After losing savings to a fake trading platform, a man posts about it in an online forum. A \"blockchain investigator\" messages him, saying his funds can be traced and returned for a 1,500 processing fee, which grows with new \"legal\" charges." },
    { title: "The agency call", text: "A woman who lost money in a romance scam receives a call from someone claiming to be from a government fraud unit. They say her funds were found and ask for a tax payment before release." }
  ],
  recognize: [
    "Be cautious of anyone who contacts you offering to recover money.",
    "Real authorities do not charge fees to investigate or recover funds.",
    "No one can guarantee recovery of lost money.",
    "Verify any agency by calling its public number yourself."
  ],
  prevent: [
    "Report the original fraud only through official channels and your bank.",
    "Be careful about discussing losses publicly with personal details.",
    "Never pay upfront fees for recovery.",
    "Verify law firms and agencies through official registers.",
    "Tell trusted contacts so they can warn you if someone approaches you."
  ],
  encounter: [
    "Do not pay or share information.",
    "Verify the organization independently.",
    "Report the contact to your national fraud agency.",
    "Block the sender."
  ],
  victim: [
    "Stop paying and contact your bank about the additional payments.",
    "Report to the police and your national fraud agency with all the details.",
    "Change any passwords or access you shared, and remove remote access tools.",
    "Use only official channels, such as the police and your bank, for recovery.",
    "Seek support. Being targeted twice is common, and it reflects the criminals' tactics, not a failing on your part."
  ]
}
);
