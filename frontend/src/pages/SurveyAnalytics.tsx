import { Button, Card, ColorSwatch, Pagination, Table } from "@heroui/react";
import { FileDown } from "lucide-react";

export const SurveyAnalytics = () => {
    return (
        <>
            <p className="text-xs text-muted font-bold mb-2">SURVEY ANALYTICS</p>
            <h1 className="text-5xl font-bold mb-8">Example Survey</h1>
            <div className="flex justify-end mb-8">
                <Button className="text-white" size="lg">
                    Export Data
                    <FileDown />
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                <Card className="p-10">
                    <Card.Header className="text-xs text-muted font-bold">METRIC 1</Card.Header>
                    <Card.Content className="text-2xl font-bold">12.123</Card.Content>
                </Card>
                <Card className="p-10">
                    <Card.Header className="text-xs text-muted font-bold">METRIC 1</Card.Header>
                    <Card.Content className="text-2xl font-bold">12.123</Card.Content>
                </Card>
                <Card className="p-10">
                    <Card.Header className="text-xs text-muted font-bold">METRIC 1</Card.Header>
                    <Card.Content className="text-2xl font-bold">12.123</Card.Content>
                </Card>
                <Card className="p-10">
                    <Card.Header className="text-xs text-muted font-bold">METRIC 1</Card.Header>
                    <Card.Content className="text-2xl font-bold">12.123</Card.Content>
                </Card>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Card className="col-span-2 p-10">
                    <Card.Header className="font-bold">RECENT ACTIVITY</Card.Header>
                    <Card.Content>
                        <Table variant="secondary">
                            <Table.ScrollContainer>
                                <Table.Content aria-label="Team members" className="min-w-[600px]">
                                    <Table.Header>
                                        <Table.Column isRowHeader>Name</Table.Column>
                                        <Table.Column>Role</Table.Column>
                                        <Table.Column>Status</Table.Column>
                                        <Table.Column>Email</Table.Column>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Kate Moore</Table.Cell>
                                            <Table.Cell>CEO</Table.Cell>
                                            <Table.Cell>Active</Table.Cell>
                                            <Table.Cell>kate@acme.com</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John Smith</Table.Cell>
                                            <Table.Cell>CTO</Table.Cell>
                                            <Table.Cell>Active</Table.Cell>
                                            <Table.Cell>john@acme.com</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Sara Johnson</Table.Cell>
                                            <Table.Cell>CMO</Table.Cell>
                                            <Table.Cell>On Leave</Table.Cell>
                                            <Table.Cell>sara@acme.com</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Michael Brown</Table.Cell>
                                            <Table.Cell>CFO</Table.Cell>
                                            <Table.Cell>Active</Table.Cell>
                                            <Table.Cell>michael@acme.com</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table.Content>
                            </Table.ScrollContainer>
                            <Table.Footer>
                                <Pagination size="sm">
                                    <Pagination.Summary>
                                        1 to 4 of 8 results
                                    </Pagination.Summary>
                                    <Pagination.Content>
                                        <Pagination.Item>
                                            <Pagination.Previous>
                                                <Pagination.PreviousIcon />
                                                <span>Prev</span>
                                            </Pagination.Previous>
                                        </Pagination.Item>
                                        <Pagination.Item >
                                            <Pagination.Link>1</Pagination.Link>
                                            <Pagination.Link>2</Pagination.Link>
                                            <Pagination.Link>3</Pagination.Link>
                                        </Pagination.Item>
                                        <Pagination.Item>
                                            <Pagination.Next >
                                                <span>Next</span>
                                                <Pagination.NextIcon />
                                            </Pagination.Next>
                                        </Pagination.Item>
                                    </Pagination.Content>
                                </Pagination>
                            </Table.Footer>
                        </Table>
                    </Card.Content>
                </Card>
                <Card className="col-span-1 p-10">
                    <Card.Header className="font-bold">SENTIMENT DISTRIBUTION</Card.Header>
                    <Card.Content className="gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <ColorSwatch color="#181818" shape="square" size="xs" />
                                <span>Positive</span>
                            </div>
                            <div className="text-end">
                                <span className="text-sm font-bold">33%</span>
                                <p className="text-xs text-muted">1.000 responses</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <ColorSwatch color="#424242" shape="square" size="xs" />
                                <span>Neutral</span>
                            </div>
                            <div className="text-end">
                                <span className="text-sm font-bold">33%</span>
                                <p className="text-xs text-muted">1.000 responses</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <ColorSwatch color="#727272" shape="square" size="xs" />
                                <span>Negative</span>
                            </div>
                            <div className="text-end">
                                <span className="text-sm font-bold">33%</span>
                                <p className="text-xs text-muted">1.000 responses</p>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </>
    );
};