export interface Product {
  id: number;
  name: string;
  category: string;
  power: string;
  price: string;
  image: string;
  description: string;
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "NETYS RT 1 kVA",
    category: "Single Phase",
    power: "1 kVA",
    price: "$1,099",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+RT+1kVA",
    description: "Compact rack/tower convertible UPS designed for IT equipment protection in small to medium environments.",
    features: [
      "Rack/Tower convertible design",
      "Pure sine wave output",
      "LCD display for monitoring",
      "Hot-swappable batteries",
      "Energy efficient operation"
    ],
    specifications: {
      "Output Power": "1 kVA / 900 W",
      "Input Voltage": "160-290 VAC",
      "Output Voltage": "230 VAC ±2%",
      "Topology": "Line Interactive",
      "Battery Type": "Sealed Lead Acid"
    }
  },
  {
    id: 2,
    name: "NETYS RT 2 kVA",
    category: "Single Phase",
    power: "2 kVA",
    price: "$1,499",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+RT+2kVA",
    description: "Reliable rack/tower UPS providing comprehensive power protection for servers and network equipment.",
    features: [
      "Rack/Tower convertible",
      "Advanced battery management",
      "USB and RS232 communication",
      "Automatic voltage regulation",
      "Surge protection"
    ],
    specifications: {
      "Output Power": "2 kVA / 1800 W",
      "Input Voltage": "160-290 VAC",
      "Output Voltage": "230 VAC ±2%",
      "Topology": "Line Interactive",
      "Backup Time": "5-15 minutes"
    }
  },
  {
    id: 3,
    name: "NETYS RT 3 kVA",
    category: "Single Phase",
    power: "3 kVA",
    price: "$1,899",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+RT+3kVA",
    description: "High-capacity single phase UPS for demanding IT applications requiring extended runtime.",
    features: [
      "High power density",
      "Extended battery runtime options",
      "Network management card compatible",
      "Generator compatible",
      "Cold start capability"
    ],
    specifications: {
      "Output Power": "3 kVA / 2700 W",
      "Input Voltage": "160-290 VAC",
      "Output Voltage": "230 VAC ±2%",
      "Efficiency": "Up to 95%",
      "Form Factor": "2U Rack/Tower"
    }
  },
  {
    id: 4,
    name: "NETYS PR 700 VA",
    category: "Single Phase",
    power: "700 VA",
    price: "$699",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+PR+700VA",
    description: "Compact line-interactive UPS ideal for workstations and small office equipment.",
    features: [
      "Compact design",
      "Pure sine wave output",
      "USB communication port",
      "Automatic voltage regulation",
      "Audible alarms"
    ],
    specifications: {
      "Output Power": "700 VA / 420 W",
      "Input Voltage": "162-290 VAC",
      "Output Voltage": "230 VAC",
      "Topology": "Line Interactive",
      "Weight": "5.5 kg"
    }
  },
  {
    id: 5,
    name: "NETYS PR 1500 VA",
    category: "Single Phase",
    power: "1500 VA",
    price: "$999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+PR+1500VA",
    description: "Mid-range line-interactive UPS providing reliable power protection for office and home use.",
    features: [
      "LCD display",
      "Automatic voltage regulation",
      "Surge and spike protection",
      "USB and serial ports",
      "Energy saving mode"
    ],
    specifications: {
      "Output Power": "1500 VA / 900 W",
      "Input Voltage": "162-290 VAC",
      "Backup Time": "10-20 minutes",
      "Recharge Time": "6-8 hours",
      "Noise Level": "<40 dB"
    }
  },
  {
    id: 6,
    name: "NETYS PR 3000 VA",
    category: "Single Phase",
    power: "3000 VA",
    price: "$1,399",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=NETYS+PR+3000VA",
    description: "High-capacity line-interactive UPS for demanding workstation and server applications.",
    features: [
      "High power capacity",
      "Pure sine wave output",
      "Advanced LCD display",
      "Multiple outlets",
      "Network management ready"
    ],
    specifications: {
      "Output Power": "3000 VA / 1800 W",
      "Input Voltage": "162-290 VAC",
      "Efficiency": "Up to 98%",
      "Transfer Time": "<4 ms",
      "Outlets": "6 IEC outlets"
    }
  },
  {
    id: 7,
    name: "Green Power 2.0 10 kVA",
    category: "Three Phase",
    power: "10 kVA",
    price: "$7,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Green+Power+10kVA",
    description: "High-efficiency three-phase UPS with double conversion technology for critical applications.",
    features: [
      "Double conversion technology",
      "High efficiency up to 96%",
      "Wide input voltage range",
      "Advanced battery management",
      "Remote monitoring capability"
    ],
    specifications: {
      "Output Power": "10 kVA / 10 kW",
      "Input Voltage": "3-phase 380/400/415 VAC",
      "Efficiency": "Up to 96%",
      "Topology": "Double Conversion",
      "Parallel Capability": "Up to 4 units"
    }
  },
  {
    id: 8,
    name: "Green Power 2.0 20 kVA",
    category: "Three Phase",
    power: "20 kVA",
    price: "$12,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Green+Power+20kVA",
    description: "Powerful three-phase UPS solution for medium-sized data centers and industrial facilities.",
    features: [
      "Scalable power protection",
      "Energy efficient design",
      "Hot-swappable batteries",
      "Intelligent battery testing",
      "SNMP network card compatible"
    ],
    specifications: {
      "Output Power": "20 kVA / 20 kW",
      "Input Voltage": "3-phase 380/400/415 VAC",
      "Efficiency": "Up to 96%",
      "Power Factor": "0.9 leading to 0.9 lagging",
      "Display": "7-inch color touchscreen"
    }
  },
  {
    id: 9,
    name: "Green Power 2.0 40 kVA",
    category: "Three Phase",
    power: "40 kVA",
    price: "$19,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Green+Power+40kVA",
    description: "Enterprise-grade three-phase UPS for large data centers and critical infrastructure.",
    features: [
      "High power density",
      "Modular battery design",
      "Advanced parallel operation",
      "Comprehensive monitoring",
      "Generator compatible"
    ],
    specifications: {
      "Output Power": "40 kVA / 40 kW",
      "Efficiency": "Up to 96% (ECO mode 99%)",
      "Input Frequency": "50/60 Hz auto-sensing",
      "Backup Time": "Configurable",
      "Operating Temperature": "0-40°C"
    }
  },
  {
    id: 10,
    name: "MASTERYS BC 10 kVA",
    category: "Three Phase",
    power: "10 kVA",
    price: "$14,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=MASTERYS+10kVA",
    description: "Premium three-phase UPS with advanced features for mission-critical applications.",
    features: [
      "True online double conversion",
      "Unity power factor",
      "Advanced DSP technology",
      "Flexible battery options",
      "Comprehensive protection"
    ],
    specifications: {
      "Output Power": "10 kVA / 10 kW",
      "Power Factor": "1.0",
      "Efficiency": "Up to 95%",
      "Input THDi": "<3%",
      "Certifications": "CE, ISO 9001"
    }
  },
  {
    id: 11,
    name: "MASTERYS BC 40 kVA",
    category: "Three Phase",
    power: "40 kVA",
    price: "$24,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=MASTERYS+40kVA",
    description: "High-performance UPS system designed for demanding enterprise environments.",
    features: [
      "High availability design",
      "Redundant parallel operation",
      "Advanced battery management",
      "Remote monitoring and control",
      "Maintenance bypass"
    ],
    specifications: {
      "Output Power": "40 kVA / 40 kW",
      "Power Factor": "1.0",
      "Efficiency": "Up to 95%",
      "Parallel Capability": "Up to 8 units",
      "MTBF": ">500,000 hours"
    }
  },
  {
    id: 12,
    name: "MASTERYS BC 120 kVA",
    category: "Three Phase",
    power: "120 kVA",
    price: "$49,999",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=MASTERYS+120kVA",
    description: "Ultra-high capacity UPS for large-scale data centers and critical infrastructure.",
    features: [
      "Maximum power protection",
      "Scalable architecture",
      "Advanced diagnostics",
      "Hot-swappable components",
      "24/7 monitoring support"
    ],
    specifications: {
      "Output Power": "120 kVA / 120 kW",
      "Power Factor": "1.0",
      "Efficiency": "Up to 96%",
      "Input Voltage Range": "±20%",
      "Dimensions": "800 x 1000 x 1800 mm"
    }
  }
];

export function getProductById(id: number): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return allProducts;
  return allProducts.filter(product => product.category === category);
}
