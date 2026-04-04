import { Button, Card, TextArea } from "@heroui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const SurveyAnswer = () => {
    return (
        <>
            <h1 className="text-5xl font-bold mb-2">Survey Example</h1>
            <p className="text-sm text-muted mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eum facere asperiores at iure, in maxime recusandae modi natus consequatur quam, non enim impedit reprehenderit atque id fuga aperiam incidunt. Aliquam exercitationem pariatur atque commodi saepe corrupti mollitia labore veritatis tenetur repudiandae explicabo quibusdam voluptates, iste quis, accusantium reiciendis? Nihil, nostrum doloremque?
            </p>
            <Card className="gap-6 mx-20 p-10">
                <Card.Header className="gap-2">
                    <div className="text-muted text-sm font-bold">QUESTION 1</div>
                    <p className="text-2xl font-bold">Example for question 1 in this survey?</p>
                </Card.Header>
                <Card.Content>
                    <TextArea
                        className="w-full h-32"
                        aria-label="Quick project update"
                        variant="secondary"
                        placeholder="Share a quick project update..." />
                </Card.Content>
                <Card.Footer className="justify-between">
                    <Button variant="ghost" >
                        <ArrowLeft />
                        PREVIOUS
                    </Button>
                    <Button className="text-white" >
                        NEXT
                        <ArrowRight />
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};