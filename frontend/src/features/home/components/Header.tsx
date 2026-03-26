import { Avatar, Dropdown, Label } from "@heroui/react";
import { Layers, LogOut } from "lucide-react";

export const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white px-7 py-8">
            <div className="text-primary text-xl font-extrabold">QUICK SURVEY</div>
            <nav className="flex justify-around">
                <Dropdown>
                    <Dropdown.Trigger className="rounded-full">
                        <Avatar>
                            <Avatar.Image
                                alt="Junior Garcia"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                            />
                            <Avatar.Fallback delayMs={600}>JH</Avatar.Fallback>
                        </Avatar>
                    </Dropdown.Trigger>
                    <Dropdown.Popover offset={50}>
                        <div className="px-3 pt-3 pb-1">
                            <div className="flex items-center gap-2">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt="Jane"
                                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                    />
                                    <Avatar.Fallback delayMs={600}>JH</Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col gap-0">
                                    <p className="text-sm leading-5 font-medium">John</p>
                                    <p className="text-xs leading-none text-muted">john@example.com</p>
                                </div>
                            </div>
                        </div>
                        <Dropdown.Menu>
                            <Dropdown.Item id="my-surveys" textValue="MySurveys">
                                <Layers className="text-primary" />
                                <Label>My Surveys</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="logout" textValue="Logout">
                                <LogOut className="text-primary" />
                                <Label>Logout</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </nav>
        </header>
    )
}