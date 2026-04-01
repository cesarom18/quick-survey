import { Button, Card, Chip } from "@heroui/react";
import { Box, Pencil, Settings, Trash2, Users } from "lucide-react";

export const SurveyItem = () => {
    return (
        <Card className="p-10">
            <Card.Header className="flex-row justify-between items-center">
                <Chip className="font-bold" size="sm">ACTIVE</Chip>
                <Button className="text-danger" variant="ghost" size="sm">
                    <Trash2 />
                </Button>
            </Card.Header>
            <Card.Content className="gap-4">
                <h2 className="text-xl font-bold">Example Survey Title</h2>
                <p className="text-sm text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, cupiditate beatae neque a nulla illo blanditiis at enim, suscipit voluptatibus velit debitis. Amet ab quos quidem eos sequi, aut in. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam animi et deleniti at suscipit voluptatum voluptates reiciendis ipsa repudiandae similique, aliquid voluptatem ut fugit blanditiis odio tempore nam magni?
                </p>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center gap-2 text-xs text-muted font-bold">
                        <Users />
                        <span>100 Respondants</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-xs text-muted font-bold">
                        <Box />
                        <span>Category</span>
                    </div>
                </div>
            </Card.Content>
            <Card.Footer className="justify-end gap-2">
                <Button variant="secondary">Edit <Pencil /></Button>
                <Button className="text-white">Manage <Settings /></Button>
            </Card.Footer>
        </Card>
    );
};