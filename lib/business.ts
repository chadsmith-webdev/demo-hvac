// Ozark Air & Heat — Single source of truth for all business data
// Update this file when demo info changes

export const BUSINESS = {
  name: "Ozark Air & Heat",
  tagline: "Before the season turns.",
  phone: "(479) 555-0187",
  phoneTel: "+14795550187",
  email: "service@ozarkairandheat.com",
  address: {
    street: "2847 N College Ave",
    city: "Fayetteville",
    state: "AR",
    zip: "72703",
    full: "2847 N College Ave, Fayetteville, AR 72703",
  },
  founded: 2009,
  license: "AR HVAC License #H-12847",
  rating: 4.9,
  reviewCount: 287,
  hours: {
    weekdays: "Mon – Fri  7 AM – 7 PM",
    saturday: "Saturday  8 AM – 5 PM",
    sunday: "Sunday  Closed (emergencies 24/7)",
    emergency: "24/7 Emergency Service Available",
  },
  serviceAreas: [
    "Fayetteville",
    "Springdale",
    "Rogers",
    "Bentonville",
    "Siloam Springs",
    "Elkins",
    "Prairie Grove",
  ],
  social: {
    facebook: "https://www.facebook.com/ozarkairandheat",
    google: "https://www.google.com/maps/place/ozark-air-heat",
    yelp: "https://www.yelp.com/biz/ozark-air-heat-fayetteville",
  },
} as const;

export const SERVICES = [
  {
    slug: "cooling-season",
    title: "Cooling Season",
    subtitle: "Spring AC Tune-Up",
    price: "$89",
    summary:
      "Before the first Arkansas 90° day hits, your AC is already stressed. We inspect, clean, and test every critical component so it runs at full capacity when you need it most.",
    items: [
      "Inspect refrigerant levels & check for leaks",
      "Clean evaporator and condenser coils",
      "Test capacitors, contactors & electrical connections",
      "Measure airflow and static pressure",
      "Lubricate all moving parts",
      "Calibrate thermostat accuracy",
      "Run full load efficiency test",
      "Written inspection report",
    ],
    urgency: "Spring slots fill fast — May is our busiest month.",
    icon: "thermometer-sun",
  },
  {
    slug: "heating-season",
    title: "Heating Season",
    subtitle: "Fall Heating Checkup",
    price: "$89",
    summary:
      "A cracked heat exchanger in October means a week without heat in Arkansas's coldest stretch. Our fall checkup catches the problems that become emergencies — before the temperature drops.",
    items: [
      "Inspect heat exchanger for cracks (CO risk)",
      "Test ignition system and flame sensors",
      "Clean burner assembly",
      "Inspect flue and venting for blockages",
      "Test and calibrate thermostat",
      "Check safety controls and limit switches",
      "Inspect blower motor and belts",
      "Carbon monoxide safety check",
    ],
    urgency: "Schedule before October — wait times double in November.",
    icon: "flame",
  },
  {
    slug: "annual-maintenance",
    title: "Annual Maintenance",
    subtitle: "Year-Round Coverage Plan",
    price: "$149/yr",
    summary:
      "Both seasonal tune-ups, priority scheduling, and a 15% discount on all repairs. For homeowners who don't want HVAC to ever be an emergency — this is how you do it.",
    items: [
      "Spring AC tune-up included",
      "Fall heating tune-up included",
      "Priority scheduling — skip the wait",
      "15% discount on all parts & labor",
      "Annual filter delivery (2 filters)",
      "Free diagnostic call anytime",
      "Transferable if you sell your home",
      "No contracts — cancel anytime",
    ],
    urgency: "Most members report zero emergency calls after year one.",
    icon: "shield-check",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Called Monday, fixed by Tuesday. My AC died in late June and I was dreading a week of misery. Ozark had a tech out in four hours and we were cold again that night. Best service call I've ever had.",
    author: "Sarah M.",
    location: "Fayetteville",
    rating: 5,
    context: "Emergency AC Repair",
  },
  {
    quote:
      "They found a cracked heat exchanger during our fall checkup. That's a carbon monoxide problem. We didn't end up fixing it — we replaced the whole unit — but knowing they caught it before it hurt my family is worth every penny of the maintenance plan.",
    author: "James T.",
    location: "Rogers",
    rating: 5,
    context: "Annual Maintenance Plan",
  },
  {
    quote:
      "Got three quotes for a new unit. Ozark explained exactly what SEER rating made sense for our house and didn't try to upsell me on equipment I didn't need. $4,800 all-in — zero surprises on the invoice. I sent two neighbors to them already.",
    author: "Amanda K.",
    location: "Springdale",
    rating: 5,
    context: "New System Installation",
  },
] as const;

export const FAQ_ITEMS = [
  {
    category: "Maintenance",
    q: "How often should I get my AC serviced?",
    a: "Once per year, in spring before cooling season begins. Most manufacturers require annual maintenance to keep the warranty valid. Skipping it for two or three seasons is typically when homeowners see premature compressor failure — a $1,200–$2,400 repair that's almost always preventable.",
  },
  {
    category: "Maintenance",
    q: "When is the best time to schedule a spring tune-up?",
    a: "March or early April in Northwest Arkansas. Once daytime temperatures push into the 80s, our schedule fills for 3–4 weeks. If you call in May, you're often waiting behind everyone who panicked — and paying emergency rates if the system fails first.",
  },
  {
    category: "Maintenance",
    q: "What's included in a seasonal tune-up?",
    a: "Our tune-up covers a full multi-point inspection: refrigerant levels, coil cleaning, electrical connections, capacitor and contactor testing, thermostat calibration, airflow measurement, and a written report. For heating tune-ups we additionally test for heat exchanger cracks and carbon monoxide — the safety items most companies skip.",
  },
  {
    category: "Costs",
    q: "How much does a new HVAC system cost in Arkansas?",
    a: "For a standard central air system in a typical NWA home (1,500–2,500 sq ft), expect $4,200–$7,500 installed. The range depends on equipment tier (SEER rating), ductwork condition, and whether you're replacing both the air handler and outdoor unit. We give itemized quotes — no bundled pricing that hides the markup.",
  },
  {
    category: "Costs",
    q: "Does Ozark Air & Heat offer financing?",
    a: "Yes. We offer financing through GreenSky with approved credit — 0% interest for 12 months on qualifying purchases over $1,500. For larger installs, 60-month terms are available. A $5,000 system becomes a $95/month conversation when you spread it out. Ask about financing options when we come for your estimate.",
  },
  {
    category: "Performance",
    q: "Why is my AC running but not cooling?",
    a: "The three most common causes: low refrigerant (usually means a leak), a dirty evaporator coil restricting airflow, or a failing capacitor that's preventing the compressor from starting properly. All three are diagnosable in under 30 minutes. Don't run a system in this state — it accelerates wear on the compressor.",
  },
  {
    category: "Performance",
    q: "What's the difference between a heat pump and a gas furnace?",
    a: "A heat pump handles both heating and cooling using electricity. A gas furnace only heats. In Fayetteville's climate, heat pumps are highly efficient down to about 30°F, then struggle — which is why many NWA homes use a dual-fuel system: a heat pump for moderate weather and a gas furnace for hard freezes. We'll recommend what makes sense for your house, not what has the largest margin.",
  },
  {
    category: "Performance",
    q: "What SEER rating should I look for in a new system?",
    a: "In Arkansas's climate, a 16–18 SEER system is the sweet spot. Going above 18 rarely pays back in energy savings within the equipment's lifespan in our region. The federal minimum is 14 SEER — anything sold below that is out-of-code. We don't install minimum-spec equipment.",
  },
  {
    category: "Service",
    q: "Do you service all HVAC brands?",
    a: "Yes. We service Trane, Carrier, Lennox, American Standard, Rheem, Goodman, York, Ruud, and all other major brands. For new installations, we primarily install Trane and Carrier equipment — both have strong warranty programs and parts availability in Northwest Arkansas.",
  },
  {
    category: "Service",
    q: "What areas do you serve?",
    a: "We serve the full Northwest Arkansas corridor: Fayetteville, Springdale, Rogers, Bentonville, Siloam Springs, Elkins, and Prairie Grove. Emergency calls are dispatched from our Fayetteville shop — most NWA addresses are within 30–45 minutes.",
  },
  {
    category: "Service",
    q: "Is 24/7 emergency service really available?",
    a: "Yes. When you call (479) 555-0187 after hours, you reach an Ozark technician — not a call center. Emergency diagnostic fees start at $129. We don't recommend repairs that can reasonably wait until morning, but we'll always tell you honestly whether the situation is urgent.",
  },
  {
    category: "Service",
    q: "How long does a new HVAC installation take?",
    a: "A standard replacement install — outdoor unit, air handler, and thermostat — takes 4–8 hours for a single system. If ductwork modifications are needed or it's a larger home with zoning, plan for a full day. We don't start a job we can't finish in the same day.",
  },
] as const;
