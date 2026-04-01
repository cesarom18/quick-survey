import { Button, Card, Chip } from "@heroui/react";
import { ArrowRight, Signal } from "lucide-react";

export const SurveyPreviewItem = () => {
    return (
        <Card className="gap-6 p-10">
            <div className="justify-between">
                <Signal />
                <Chip>
                    IT
                </Chip>
            </div>
            <Card.Header>
                <Card.Title className="text-lg font-bold mb-2">Welcome to Quick Survey</Card.Title>
            </Card.Header>
            <Card.Content className="text-muted text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sunt totam saepe aperiam quidem itaque asperiores, eos ullam similique magnam error nesciunt.
            </Card.Content>
            <Card.Footer className="justify-between items-center">
                <span className="text-muted text-xs">12 Answers</span>
                <Button className="text-white" size="lg">
                    Answer
                    <ArrowRight />
                </Button>
            </Card.Footer>
        </Card>
    );
};