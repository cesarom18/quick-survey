import { Button, Card } from "@heroui/react";
import { ChartNoAxesColumn, Pen, ShieldCheck } from "lucide-react";

export const MyProfile = () => {
    return (
        <>
            <p className="text-xs text-muted font-bold mb-2">PERSONAL WORKSPACE</p>
            <h1 className="text-5xl font-bold mb-8">My Profile</h1>
            <div className="grid grid-cols-5 gap-4">
                <Card className="col-span-3 gap-6 p-10">
                    <Card.Header className="flex-row justify-between">
                        <div className="flex items-center gap-2">
                            <img
                                className="rounded-3xl max-w-[80px] max-h-[80px]"
                                alt="John Example"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg" />
                            <div>
                                <div className="text-xl font-bold">John Example</div>
                                <p className="text-muted text-sm">Senior Web Full-Stack Developer</p>
                            </div>
                        </div>
                        <Button variant="secondary" size="lg">
                            Edit Info
                            <Pen />
                        </Button>
                    </Card.Header>
                    <Card.Content className="grid grid-cols-2">
                        <div>
                            <span className="text-muted text-sm font-bold">Name</span>
                            <p>John Example</p>
                        </div>
                        <div>
                            <span className="text-muted text-sm font-bold">Email Address</span>
                            <p>john@example.com</p>
                        </div>
                        <div>
                            <span className="text-muted text-sm font-bold">Birth Date</span>
                            <p>10 June 2002</p>
                        </div>
                    </Card.Content>
                </Card>
                <Card className="col-span-2 gap-6 bg-foreground text-white p-10">
                    <Card.Header>
                        <ShieldCheck size={30} />
                    </Card.Header>
                    <Card.Content>
                        <div className="text-3xl font-bold">Account Status</div>
                        <p>Verified account with access to create, manage and response surveys in the platform.</p>
                    </Card.Content>
                    <Card.Footer className="justify-between">
                        <div>
                            <div className="text-xs">SURVEYS CREATED</div>
                            <span className="text-3xl font-bold">123</span>
                        </div>
                        <div className="bg-muted rounded-2xl p-3">
                            <ChartNoAxesColumn className="text-foreground" size={24} />
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </>
    );
};