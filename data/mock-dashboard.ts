import {
  ActivityItem,
  Announcement,
  BrandSettings,
  Branch,
  Customer,
  MenuCategory,
  MenuItem,
  Offer,
  Order,
  Review,
  SalesPoint,
  StaffUser
} from "@/types/dashboard";

export const branches: Branch[] = [
  {
    id: "branch-dhanmondi",
    name: "Dhanmondi Flagship",
    slug: "dhanmondi-flagship",
    address: "House 18, Road 8A, Dhanmondi, Dhaka",
    phone: "+880 1711-101010",
    email: "dhanmondi@optizenqor.com",
    managerId: "staff-rahat",
    managerName: "Rahat Karim",
    status: "open",
    isFlagship: true,
    operatingHours: "10:00 AM - 11:30 PM",
    deliveryRadiusKm: 7,
    performanceScore: 96,
    rating: 4.8,
    revenueToday: 4380,
    ordersToday: 142
  },
  {
    id: "branch-gulshan",
    name: "Gulshan Central",
    slug: "gulshan-central",
    address: "Plot 11, Gulshan Avenue, Dhaka",
    phone: "+880 1711-202020",
    email: "gulshan@optizenqor.com",
    managerId: "staff-tania",
    managerName: "Tania Sultana",
    status: "busy",
    isFlagship: false,
    operatingHours: "11:00 AM - 12:00 AM",
    deliveryRadiusKm: 6,
    performanceScore: 91,
    rating: 4.6,
    revenueToday: 3620,
    ordersToday: 118
  },
  {
    id: "branch-mirpur",
    name: "Mirpur North",
    slug: "mirpur-north",
    address: "Section 10, Mirpur, Dhaka",
    phone: "+880 1711-303030",
    email: "mirpur@optizenqor.com",
    managerId: "staff-faisal",
    managerName: "Faisal Ahmed",
    status: "open",
    isFlagship: false,
    operatingHours: "10:30 AM - 11:00 PM",
    deliveryRadiusKm: 8,
    performanceScore: 87,
    rating: 4.4,
    revenueToday: 2490,
    ordersToday: 86
  }
];

export const menuCategories: MenuCategory[] = [
  {
    id: "cat-burgers",
    name: "Signature Burgers",
    description: "Core premium burger line",
    branchIds: branches.map((branch) => branch.id)
  },
  {
    id: "cat-bowls",
    name: "Rice Bowls",
    description: "Fast lunch and dinner bowls",
    branchIds: ["branch-dhanmondi", "branch-gulshan"]
  },
  {
    id: "cat-beverages",
    name: "Craft Beverages",
    description: "Refreshers and shakes",
    branchIds: branches.map((branch) => branch.id)
  }
];

export const menuItems: MenuItem[] = [
  {
    id: "item-smoked-brisket",
    name: "Smoked Brisket Burger",
    categoryId: "cat-burgers",
    branchIds: branches.map((branch) => branch.id),
    description: "Beef brisket, aged cheddar, onion jam, truffle aioli",
    price: 18,
    discountPrice: 16,
    prepTimeMins: 18,
    image: "/placeholder-food.svg",
    variants: ["Single", "Double"],
    addOns: ["Cheese slice", "Loaded fries"],
    available: true,
    featured: true,
    popular: true,
    ordersThisWeek: 244,
    rating: 4.9
  },
  {
    id: "item-firecracker-chicken",
    name: "Firecracker Chicken Bowl",
    categoryId: "cat-bowls",
    branchIds: ["branch-dhanmondi", "branch-gulshan"],
    description: "Spiced grilled chicken, rice, roasted corn, slaw",
    price: 14,
    prepTimeMins: 14,
    image: "/placeholder-food.svg",
    variants: ["Regular", "Protein Plus"],
    addOns: ["Soft egg", "Extra sauce"],
    available: true,
    featured: true,
    popular: true,
    ordersThisWeek: 198,
    rating: 4.7
  },
  {
    id: "item-citrus-fizz",
    name: "Citrus Mint Fizz",
    categoryId: "cat-beverages",
    branchIds: branches.map((branch) => branch.id),
    description: "Sparkling citrus cooler with fresh mint",
    price: 6,
    prepTimeMins: 5,
    image: "/placeholder-food.svg",
    variants: ["Regular", "Large"],
    addOns: ["Boba pearls"],
    available: true,
    featured: false,
    popular: false,
    ordersThisWeek: 154,
    rating: 4.5
  },
  {
    id: "item-midnight-burger",
    name: "Midnight Melt Burger",
    categoryId: "cat-burgers",
    branchIds: ["branch-gulshan", "branch-mirpur"],
    description: "Black pepper patty, mushroom melt, caramelized onion",
    price: 17,
    prepTimeMins: 17,
    image: "/placeholder-food.svg",
    variants: ["Single", "Double"],
    addOns: ["Jalapeno", "Potato wedges"],
    available: false,
    featured: false,
    popular: true,
    ordersThisWeek: 133,
    rating: 4.3
  }
];

export const customers: Customer[] = [
  {
    id: "cust-nabila",
    name: "Nabila Rahman",
    phone: "+880 1700-121212",
    email: "nabila@example.com",
    branchId: "branch-dhanmondi",
    totalOrders: 32,
    totalSpending: 612,
    favoriteDishes: ["Smoked Brisket Burger", "Citrus Mint Fizz"],
    loyaltyStatus: "gold",
    flagged: false,
    recentActivity: "Placed a delivery order 22 minutes ago"
  },
  {
    id: "cust-farhan",
    name: "Farhan Chowdhury",
    phone: "+880 1700-343434",
    email: "farhan@example.com",
    branchId: "branch-gulshan",
    totalOrders: 14,
    totalSpending: 274,
    favoriteDishes: ["Firecracker Chicken Bowl"],
    loyaltyStatus: "silver",
    flagged: false,
    recentActivity: "Used combo deal on website checkout"
  },
  {
    id: "cust-sadia",
    name: "Sadia Islam",
    phone: "+880 1700-565656",
    email: "sadia@example.com",
    branchId: "branch-mirpur",
    totalOrders: 6,
    totalSpending: 94,
    favoriteDishes: ["Midnight Melt Burger"],
    loyaltyStatus: "bronze",
    flagged: true,
    recentActivity: "Support ticket opened about late delivery"
  }
];

export const orders: Order[] = [
  {
    id: "ORD-12054",
    branchId: "branch-dhanmondi",
    customerId: "cust-nabila",
    customerName: "Nabila Rahman",
    customerPhone: "+880 1700-121212",
    status: "preparing",
    paymentStatus: "paid",
    type: "delivery",
    source: "app",
    total: 34,
    placedAt: "2026-03-21T10:15:00+06:00",
    etaMinutes: 21,
    notes: "No onions on second burger",
    items: [
      { menuItemId: "item-smoked-brisket", name: "Smoked Brisket Burger", quantity: 2, itemStatus: "cooking" },
      { menuItemId: "item-citrus-fizz", name: "Citrus Mint Fizz", quantity: 1, itemStatus: "queued" }
    ]
  },
  {
    id: "ORD-12053",
    branchId: "branch-gulshan",
    customerId: "cust-farhan",
    customerName: "Farhan Chowdhury",
    customerPhone: "+880 1700-343434",
    status: "ready",
    paymentStatus: "paid",
    type: "pickup",
    source: "website",
    total: 29,
    placedAt: "2026-03-21T09:48:00+06:00",
    etaMinutes: 0,
    items: [
      { menuItemId: "item-firecracker-chicken", name: "Firecracker Chicken Bowl", quantity: 1, itemStatus: "ready" },
      { menuItemId: "item-citrus-fizz", name: "Citrus Mint Fizz", quantity: 2, itemStatus: "ready" }
    ]
  },
  {
    id: "ORD-12052",
    branchId: "branch-mirpur",
    customerId: "cust-sadia",
    customerName: "Sadia Islam",
    customerPhone: "+880 1700-565656",
    status: "pending",
    paymentStatus: "pending",
    type: "delivery",
    source: "phone",
    total: 17,
    placedAt: "2026-03-21T10:32:00+06:00",
    etaMinutes: 34,
    items: [{ menuItemId: "item-midnight-burger", name: "Midnight Melt Burger", quantity: 1, itemStatus: "queued" }]
  },
  {
    id: "ORD-12051",
    branchId: "branch-dhanmondi",
    customerId: "cust-nabila",
    customerName: "Nabila Rahman",
    customerPhone: "+880 1700-121212",
    status: "delivered",
    paymentStatus: "paid",
    type: "dine_in",
    source: "walk_in",
    total: 41,
    placedAt: "2026-03-21T08:22:00+06:00",
    etaMinutes: 0,
    items: [
      { menuItemId: "item-smoked-brisket", name: "Smoked Brisket Burger", quantity: 2, itemStatus: "ready" },
      { menuItemId: "item-citrus-fizz", name: "Citrus Mint Fizz", quantity: 1, itemStatus: "ready" }
    ]
  }
];

export const offers: Offer[] = [
  {
    id: "offer-weekend",
    title: "Weekend Burger Rush",
    type: "campaign",
    branchIds: ["branch-dhanmondi", "branch-gulshan"],
    description: "Drive weekend dinner traffic with premium burger bundles",
    discountLabel: "20% off signature burgers",
    active: true,
    featured: true,
    startDate: "2026-03-20",
    endDate: "2026-03-30"
  },
  {
    id: "offer-lunch",
    title: "Lunch Power Combo",
    type: "combo",
    branchIds: ["branch-mirpur"],
    description: "Bowl plus drink bundle for office lunch hours",
    discountLabel: "Combo at $15",
    active: true,
    featured: false,
    startDate: "2026-03-15",
    endDate: "2026-04-02"
  },
  {
    id: "offer-newuser",
    title: "WELCOME10",
    type: "coupon",
    branchIds: branches.map((branch) => branch.id),
    description: "First order incentive across all digital channels",
    discountLabel: "10% off first order",
    active: false,
    featured: false,
    startDate: "2026-02-01",
    endDate: "2026-03-01"
  }
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    branchId: "branch-dhanmondi",
    customerName: "Nabila Rahman",
    menuItemName: "Smoked Brisket Burger",
    rating: 5,
    comment: "Best premium burger in the area and still arrives hot.",
    flagged: false,
    date: "2026-03-20"
  },
  {
    id: "rev-2",
    branchId: "branch-gulshan",
    customerName: "Mahin Zaman",
    menuItemName: "Firecracker Chicken Bowl",
    rating: 4,
    comment: "Flavor was strong, but packaging could be improved.",
    flagged: false,
    date: "2026-03-19"
  },
  {
    id: "rev-3",
    branchId: "branch-mirpur",
    customerName: "Sadia Islam",
    menuItemName: "Midnight Melt Burger",
    rating: 2,
    comment: "Order was delayed and item arrived lukewarm.",
    flagged: true,
    date: "2026-03-18"
  }
];

export const announcements: Announcement[] = [
  {
    id: "note-1",
    title: "Ramadan Delivery Cutoff",
    type: "branch",
    branchIds: branches.map((branch) => branch.id),
    audience: "All branches",
    message: "Delivery orders will stop 30 minutes before branch closing during Ramadan.",
    date: "2026-03-21",
    active: true
  },
  {
    id: "note-2",
    title: "Push Promo For App Users",
    type: "promo",
    branchIds: ["branch-dhanmondi", "branch-gulshan"],
    audience: "App customers",
    message: "Send dinner discount campaign at 5:30 PM.",
    date: "2026-03-21",
    active: true
  }
];

export const staffUsers: StaffUser[] = [
  {
    id: "staff-sabur",
    name: "Sabur Nayem",
    role: "super_admin",
    email: "owner@optizenqor.com",
    phone: "+880 1711-000000",
    status: "active",
    lastActive: "2 minutes ago"
  },
  {
    id: "staff-rahat",
    name: "Rahat Karim",
    role: "branch_manager",
    branchId: "branch-dhanmondi",
    email: "rahat@optizenqor.com",
    phone: "+880 1711-101010",
    status: "active",
    lastActive: "8 minutes ago"
  },
  {
    id: "staff-tania",
    name: "Tania Sultana",
    role: "branch_manager",
    branchId: "branch-gulshan",
    email: "tania@optizenqor.com",
    phone: "+880 1711-202020",
    status: "active",
    lastActive: "5 minutes ago"
  },
  {
    id: "staff-kitchen",
    name: "Kitchen Screen",
    role: "kitchen_viewer",
    branchId: "branch-dhanmondi",
    email: "kitchen@optizenqor.com",
    phone: "+880 1711-404040",
    status: "invited",
    lastActive: "just now"
  }
];

export const salesDaily: SalesPoint[] = [
  { label: "Mon", value: 4200 },
  { label: "Tue", value: 4600 },
  { label: "Wed", value: 5100 },
  { label: "Thu", value: 4950 },
  { label: "Fri", value: 6200 },
  { label: "Sat", value: 7100 },
  { label: "Sun", value: 6680 }
];

export const hourlyOrders: SalesPoint[] = [
  { label: "11 AM", value: 22 },
  { label: "1 PM", value: 46 },
  { label: "3 PM", value: 28 },
  { label: "5 PM", value: 39 },
  { label: "7 PM", value: 58 },
  { label: "9 PM", value: 44 }
];

export const activities: ActivityItem[] = [
  {
    id: "act-1",
    title: "Branch reopened",
    description: "Mirpur North is back online after network downtime.",
    time: "12 minutes ago",
    branchId: "branch-mirpur"
  },
  {
    id: "act-2",
    title: "Offer scheduled",
    description: "Weekend Burger Rush campaign scheduled for 5:30 PM.",
    time: "28 minutes ago",
    branchId: "branch-gulshan"
  },
  {
    id: "act-3",
    title: "Customer flagged",
    description: "Support requested manual follow-up on Sadia Islam's delayed order.",
    time: "44 minutes ago",
    branchId: "branch-mirpur"
  }
];

export const settings: BrandSettings = {
  brandName: "OptiZenqor Restaurant",
  supportEmail: "support@optizenqor.com",
  supportPhone: "+880 9612-000000",
  currency: "USD",
  taxRate: 7.5,
  deliveryFee: 2,
  defaultPrepTimeMins: 18
};
