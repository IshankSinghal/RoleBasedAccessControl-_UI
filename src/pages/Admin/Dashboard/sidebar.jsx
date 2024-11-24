import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Fingerprint,
  BarChart3,
  Shield,
  Database,
  Network,
  Lock,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const mainMenuItems = [
  { name: "Dashboard", icon: BarChart3, link: "/dashboard" },
  { name: "Threat Monitoring", icon: Shield, link: "/threat-monitoring" },
  {
    name: "Security Incidents",
    icon: Fingerprint,
    link: "/security-incidents",
  },
  { name: "Asset Inventory", icon: Database, link: "/asset-inventory" },
  { name: "Network Security", icon: Network, link: "/network-security" },
  { name: "Open Management", icon: Lock, link: "/open-management" },
];

const otherMenuItems = [
  { name: "Settings", icon: Settings, link: "/settings" },
  { name: "Help Center", icon: HelpCircle, link: "/help" },
];

const sidebar = () => {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Fingerprint className="h-6 w-6" />
            <span className="">IndigoSafe</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 overflow-auto">
          <div className="flex flex-col gap-4 p-4 pt-0">
            <nav className="grid items-start gap-2">
              {mainMenuItems.map((item, index) => (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.link}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
            <nav className="grid items-start gap-2">
              {otherMenuItems.map((item, index) => (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.link}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default sidebar;
