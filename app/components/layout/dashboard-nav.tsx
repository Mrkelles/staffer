"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookCopy, User, PieChart, Wallet, ShoppingBag, BookMarked, BarChart3, Bot, Cog, Box, UserCog, Users, ListVideo, Banknote } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

// In a real app, you'd get this from a user session or context
type UserRole = "student" | "instructor" | "admin";
const currentUserRole: UserRole = "student"; // Change to "instructor" or "admin" to see different views

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  roles: UserRole[];
  type?: never;
};

type NavHeading = {
  type: 'heading';
  label: string;
  roles: UserRole[];
  href?: never;
  icon?: never;
};

const allNavItems: (NavItem | NavHeading)[] = [
  // Student
  { type: 'heading', label: 'Student', roles: ['student'] },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['student'] },
  { href: '/dashboard/jobs', label: 'Job Postings', icon: BookCopy, roles: ['student'] },
  { href: '/dashboard/candidates', label: 'Candidates', icon: User, roles: ['student'] },
  { href: '/dashboard/requests', label: 'Job Requests', icon: PieChart, roles: ['student'] },
  { href: '/dashboard/clients', label: 'Clients', icon: ShoppingBag, roles: ['student'] },
  


  // Admin
  //{ type: 'heading', label: 'Admin', roles: ['admin'] },
  //{ href: '/dashboard/admin', label: 'Admin View', icon: Cog, roles: ['admin'] },
  //{ href: '/dashboard/admin/courses', label: 'Manage Courses', icon: BookMarked, roles: ['admin'] },
  //{ href: '/dashboard/admin/instructors', label: 'Manage Instructors', icon: Users, roles: ['admin'] },
  //{ href: '/dashboard/admin/students', label: 'Manage Students', icon: Users, roles: ['admin'] },
  //{ href: '/dashboard/admin/withdrawals', label: 'Pending Withdrawals', icon: Banknote, roles: ['admin'] },
  //{ href: '/dashboard/admin/curriculum-generator', label: 'AI Generator', icon: Bot, roles: ['admin'] },
];

export function DashboardNav() {
  const pathname = usePathname();
  
  // This logic determines which role's section to show based on the current path
  const getActiveRole = (): UserRole => {
      if (pathname.startsWith('/dashboard/instructor')) return 'instructor';
      if (pathname.startsWith('/dashboard/admin')) return 'admin';
      return 'student';
  }
  const activeRole = getActiveRole();

  const navItems = allNavItems.filter(item => item.roles.includes(activeRole));


  return (
    <nav className="grid items-start gap-1">
      {navItems.map((item, index) =>
        item.type === 'heading' ? (
          <h4 key={index} className="font-semibold tracking-tight text-muted-foreground px-4 mt-4 text-xs uppercase">
            {/*New Dashboard Label if needed*/}
          </h4>
        ) : (
          <Link key={index} href={item.href!}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                (pathname === item.href || (item.href === '/dashboard/instructor' && pathname === '/dashboard/instructor/analytics')) ? "bg-accent text-accent-foreground" : "transparent"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
