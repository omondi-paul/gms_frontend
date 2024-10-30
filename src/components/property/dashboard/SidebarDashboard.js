"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "MAIN",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Dashboard",
        },
        {
          href: "/dashboard-message",
          icon: "flaticon-chat-1",
          text: "Messages",
        },
      ],
    },
    {
      title: "MEMBERS",
      items: [
        {
          href: "/dashboard-membership",
          icon: "flaticon-new-tab",
          text: "Membership Overview",
        },
        {
          href: "/dashboard-member-progress",
          icon: "flaticon-like",
          text: "Progress Tracking",
        },
        {
          href: "/dashboard-member-bookings",
          icon: "flaticon-calendar",
          text: "Class Bookings",
        },
      ],
    },
    {
      title: "TRAINERS",
      items: [
        {
          href: "/dashboard-trainer-schedule",
          icon: "flaticon-calendar",
          text: "Trainer Schedule",
        },
        {
          href: "/dashboard-trainer-feedback",
          icon: "flaticon-review",
          text: "Trainer Feedback",
        },
        {
          href: "/dashboard-training-programs",
          icon: "flaticon-program",
          text: "Manage Training Programs",
        },
      ],
    },
    {
      title: "ADMIN",
      items: [
        {
          href: "/dashboard-class-management",
          icon: "flaticon-class",
          text: "Class Management",
        },
        {
          href: "/dashboard-revenue",
          icon: "flaticon-financial",
          text: "Revenue Overview",
        },
        {
          href: "/dashboard-user-management",
          icon: "flaticon-user",
          text: "User Management",
        },
        {
          href: "/dashboard-settings",
          icon: "flaticon-settings",
          text: "System Settings",
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "My Profile",
        },
        {
          href: "/dashboard-subscription",
          icon: "flaticon-package",
          text: "Subscription & Billing",
        },
        {
          href: "/logout",
          icon: "flaticon-logout",
          text: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  href={item.href}
                  className={`items-center ${
                    pathname == item.href ? "-is-active" : ""
                  }`}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
