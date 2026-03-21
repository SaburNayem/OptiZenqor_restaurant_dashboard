import {
  activities,
  announcements,
  branches,
  customers,
  hourlyOrders,
  menuCategories,
  menuItems,
  offers,
  orders,
  reviews,
  salesDaily,
  settings,
  staffUsers
} from "@/data/mock-dashboard";
import { Branch, Order, OrderStatus, UserRole } from "@/types/dashboard";

export const roleAssignments: Record<UserRole, string | undefined> = {
  super_admin: undefined,
  branch_manager: "branch-dhanmondi",
  kitchen_viewer: "branch-dhanmondi"
};

export function getScopedBranchId(role: UserRole, selectedBranchId: string) {
  const assignedBranchId = roleAssignments[role];
  if (role === "super_admin") return selectedBranchId;
  return assignedBranchId ?? selectedBranchId;
}

export function getVisibleBranches(role: UserRole) {
  const assignedBranchId = roleAssignments[role];
  if (role === "super_admin") return branches;
  return branches.filter((branch) => branch.id === assignedBranchId);
}

export function filterByBranch<T extends { branchId?: string; branchIds?: string[] }>(
  collection: T[],
  branchId: string
) {
  if (branchId === "all") return collection;
  return collection.filter((item) => item.branchId === branchId || item.branchIds?.includes(branchId));
}

export function getOverview(branchId: string) {
  const scopedOrders = filterByBranch(orders, branchId);
  const scopedBranches = branchId === "all" ? branches : branches.filter((branch) => branch.id === branchId);
  const scopedMenuItems = branchId === "all" ? menuItems : menuItems.filter((item) => item.branchIds.includes(branchId));

  return {
    totalOrdersToday: scopedBranches.reduce((sum, branch) => sum + branch.ordersToday, 0),
    totalRevenueToday: scopedBranches.reduce((sum, branch) => sum + branch.revenueToday, 0),
    activeBranches: scopedBranches.filter((branch) => branch.status !== "closed").length,
    activeMenuItems: scopedMenuItems.filter((item) => item.available).length,
    pendingOrders: countOrders(scopedOrders, ["pending", "confirmed", "preparing", "ready"]),
    completedOrders: countOrders(scopedOrders, ["delivered"]),
    canceledOrders: countOrders(scopedOrders, ["canceled"]),
    popularDishes: [...scopedMenuItems].sort((a, b) => b.ordersThisWeek - a.ordersThisWeek).slice(0, 3),
    branches: scopedBranches,
    activities: filterByBranch(activities, branchId),
    orders: scopedOrders
  };
}

export function getBranchById(branchId: string) {
  return branches.find((branch) => branch.id === branchId);
}

export function getMenuData(branchId: string) {
  return {
    categories: filterByBranch(menuCategories, branchId),
    items: branchId === "all" ? menuItems : menuItems.filter((item) => item.branchIds.includes(branchId))
  };
}

export function getMenuItemById(itemId: string) {
  return menuItems.find((item) => item.id === itemId);
}

export function getOrders(branchId: string) {
  return filterByBranch(orders, branchId);
}

export function getOrderById(orderId: string) {
  return orders.find((order) => order.id === orderId);
}

export function getKitchenQueue(branchId: string) {
  return getOrders(branchId).filter((order) =>
    ["pending", "confirmed", "preparing", "ready"].includes(order.status)
  );
}

export function getCustomers(branchId: string) {
  return filterByBranch(customers, branchId);
}

export function getCustomerById(customerId: string) {
  return customers.find((customer) => customer.id === customerId);
}

export function getOffers(branchId: string) {
  return filterByBranch(offers, branchId);
}

export function getReviews(branchId: string) {
  return filterByBranch(reviews, branchId);
}

export function getAnnouncements(branchId: string) {
  return filterByBranch(announcements, branchId);
}

export function getReports(branchId: string) {
  return {
    salesDaily,
    hourlyOrders,
    bestSellers: [...getMenuData(branchId).items].sort((a, b) => b.ordersThisWeek - a.ordersThisWeek).slice(0, 4),
    worstSellers: [...getMenuData(branchId).items].sort((a, b) => a.ordersThisWeek - b.ordersThisWeek).slice(0, 4),
    completionRate: 94.2,
    cancellationRate: 2.8,
    averageOrderValue: 24
  };
}

export function getStaff(role: UserRole, branchId: string) {
  if (role === "super_admin") return branchId === "all" ? staffUsers : staffUsers.filter((user) => user.branchId === branchId || !user.branchId);
  return staffUsers.filter((user) => user.branchId === roleAssignments[role] || !user.branchId);
}

export function getSettings() {
  return settings;
}

function countOrders(items: Order[], statuses: OrderStatus[]) {
  return items.filter((order) => statuses.includes(order.status)).length;
}

export { announcements, branches, customers, menuCategories, menuItems, offers, orders, reviews, salesDaily, staffUsers };
