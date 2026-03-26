import { Avatar, Dropdown, Label } from "@heroui/react";
import { Files, LogOut } from "lucide-react";

export const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white shadow-xs px-5 py-6">
            <div className="text-xl font-extrabold">QUICK SURVEY</div>
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
                    <Dropdown.Popover offset={45}>
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
                                <Files />
                                <Label>My Surveys</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="logout" textValue="Logout">
                                <LogOut />
                                <Label>Logout</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </nav>
        </header>
    )
}