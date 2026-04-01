import { Outlet } from "react-router";
import { Layers, Plus } from "lucide-react";
import { Button, Separator } from "@heroui/react";

import { Header } from "./Header";

export const HomeLayout = () => {
    return (
        <div className="h-full">
            <Header />
            <div className="grid grid-cols-[300px_1fr] gap-8 px-8 pt-8">
                <aside>
                    <div className="flex justify-start items-center gap-4">
                        <div className="bg-foreground rounded-2xl p-3">
                            <Layers className="text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">Quick Survey</p>
                            <p className="text-xs text-muted font-bold">THE ABSOLUTE CREATOR</p>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <Button className="text-white rounded-xl" size="lg" fullWidth>
                        Create Survey
                        <Plus />
                    </Button>
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}