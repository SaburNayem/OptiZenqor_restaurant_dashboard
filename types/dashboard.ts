export type UserRole = "super_admin" | "branch_manager" | "kitchen_viewer";

export type BranchStatus = "open" | "closed" | "busy";
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "delivered"
  | "canceled";

export type PaymentStatus = "paid" | "pending" | "failed" | "refunded";
export type OrderType = "delivery" | "pickup" | "dine_in";
export type OfferType = "coupon" | "campaign" | "combo";
export type NotificationType = "promo" | "order" | "branch" | "system";

export interface Branch {
  id: string;
  name: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  managerId: string;
  managerName: string;
  status: BranchStatus;
  isFlagship: boolean;
  operatingHours: string;
  deliveryRadiusKm: number;
  performanceScore: number;
  rating: number;
  revenueToday: number;
  ordersToday: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  branchIds: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  categoryId: string;
  branchIds: string[];
  description: string;
  price: number;
  discountPrice?: number;
  prepTimeMins: number;
  image: string;
  variants: string[];
  addOns: string[];
  available: boolean;
  featured: boolean;
  popular: boolean;
  ordersThisWeek: number;
  rating: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  branchId: string;
  totalOrders: number;
  totalSpending: number;
  favoriteDishes: string[];
  loyaltyStatus: "bronze" | "silver" | "gold";
  flagged: boolean;
  recentActivity: string;
}

export interface OrderItem {
  menuItemId: string;
  name: string;
  quantity: number;
  itemStatus: "queued" | "cooking" | "ready";
}

export interface Order {
  id: string;
  branchId: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  type: OrderType;
  source: "app" | "website" | "phone" | "walk_in";
  total: number;
  placedAt: string;
  etaMinutes: number;
  items: OrderItem[];
  notes?: string;
}

export interface Offer {
  id: string;
  title: string;
  type: OfferType;
  branchIds: string[];
  description: string;
  discountLabel: string;
  active: boolean;
  featured: boolean;
  startDate: string;
  endDate: string;
}

export interface Review {
  id: string;
  branchId: string;
  customerName: string;
  menuItemName: string;
  rating: number;
  comment: string;
  flagged: boolean;
  date: string;
}

export interface Announcement {
  id: string;
  title: string;
  type: NotificationType;
  branchIds: string[];
  audience: string;
  message: string;
  date: string;
  active: boolean;
}

export interface StaffUser {
  id: string;
  name: string;
  role: UserRole;
  branchId?: string;
  email: string;
  phone: string;
  status: "active" | "invited" | "suspended";
  lastActive: string;
}

export interface SalesPoint {
  label: string;
  value: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  branchId?: string;
}

export interface BrandSettings {
  brandName: string;
  supportEmail: string;
  supportPhone: string;
  currency: string;
  taxRate: number;
  deliveryFee: number;
  defaultPrepTimeMins: number;
}
