"use client"
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
    ShoppingCart,
    LayoutDashboard,
    UsersRound,
    Settings,
    ChevronRight
} from "lucide-react"
import { Button } from "./ui/button";
import {
    useWindowWidth,
} from '@react-hook/window-size'
import { on } from "events";
type Props = {}

export default function Sidebar({ }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768
    function toggleSidebar() {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className="relative border-r px-4 pb-10 pt-24">
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7 transition-all">
                    <Button variant="secondary" className="rounded-full p-2" onClick={toggleSidebar}>
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost",
                    }
                ]}
            />
        </div>
    )
}