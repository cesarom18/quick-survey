import { Card, Input, Label, RadioGroup, TextArea, TextField, Radio, Description, Button, Surface } from "@heroui/react";
import { Plus, Save } from "lucide-react";

export const SurveyEdit = () => {
    return (
        <>
            <p className="text-xs text-muted font-bold mb-2">EDIT SURVEY</p>
            <h1 className="text-5xl font-bold mb-8">Example Survey</h1>
            <div className="flex justify-end mb-8">
                <Button className="text-white">
                    Save Changes
                    <Save />
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-4">
                    <Card className="p-10">
                        <Card.Header>
                            <Card.Title className="text-muted font-bold">Basic Information</Card.Title>
                        </Card.Header>
                        <Card.Content className="gap-4">
                            <TextField type="title" name="title">
                                <Label>Title</Label>
                                <Input
                                    variant="secondary"
                                    placeholder="Example title" />
                            </TextField>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="textarea-rows-3">Short feedback</Label>
                                <TextArea
                                    aria-label="Survey description"
                                    placeholder="Example description"
                                    variant="secondary"
                                    rows={3} />
                            </div>
                        </Card.Content>
                    </Card>
                    <Card className="p-10">
                        <Card.Header>
                            <Card.Title className="text-muted font-bold">Questions</Card.Title>
                        </Card.Header>
                        <Card.Content className="gap-4">
                            <div className="flex justify-end">
                                <Button className="text-white" size="lg">
                                    Add Question <Plus />
                                </Button>
                            </div>
                            <Surface className="flex items-start rounded-xl cursor-pointer gap-4 p-6" variant="secondary">
                                <span className="text-muted font-bold">1</span>
                                <div className="flex flex-col flex-1 gap-2">
                                    <p>Lorem auuntur sunt, est culpa numquam quae! Culpa ducimus debitis ipsum at quis?</p>
                                    <span className="text-xs text-muted font-bold">Text - Required</span>
                                </div>
                            </Surface>
                            <Surface className="flex items-start rounded-xl cursor-pointer gap-4 p-6" variant="secondary">
                                <span className="text-muted font-bold">1</span>
                                <div className="flex flex-col flex-1 gap-2">
                                    <p>Lorem auuntur sunt, est culpa numquam quae! Culpa ducimus debitis ipsum at quis?</p>
                                    <span className="text-xs text-muted font-bold">Text - Required</span>
                                </div>
                            </Surface>
                            <Surface className="flex items-start rounded-xl cursor-pointer gap-4 p-6" variant="secondary">
                                <span className="text-muted font-bold">1</span>
                                <div className="flex flex-col flex-1 gap-2">
                                    <p>Lorem auuntur sunt, est culpa numquam quae! Culpa ducimus debitis ipsum at quis?</p>
                                    <span className="text-xs text-muted font-bold">Text - Required</span>
                                </div>
                            </Surface>
                        </Card.Content>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card className="p-10">
                        <Card.Header>
                            <Card.Title className="text-muted font-bold">Visibility</Card.Title>
                        </Card.Header>
                        <Card.Content >
                            <RadioGroup defaultValue="active" name="plan" variant="secondary">
                                <Radio value="active">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Active</Label>
                                        <Description>Public for all users</Description>
                                    </Radio.Content>
                                </Radio>
                                <Radio value="inactive">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Inactive</Label>
                                        <Description>Only public for you</Description>
                                    </Radio.Content>
                                </Radio>
                            </RadioGroup>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </>
    );
};