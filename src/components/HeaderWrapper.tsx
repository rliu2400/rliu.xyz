"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
    const pathname = usePathname();
    const showHeader = pathname !== "/";

    return showHeader ? <Header /> : null;
}

