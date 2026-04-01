import { Card, Pagination, SearchField } from "@heroui/react";

import { SurveyManageItem } from "../features/survey/components/SurveyManageItem";

export const MySurveys = () => {
    return (
        <>
            <p className="text-xs text-muted font-bold mb-2">REPOSITORY</p>
            <h1 className="text-5xl font-bold mb-8">My Surveys</h1>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="gap-6 p-10" variant="secondary">
                    <Card.Header className="text-muted text-xs font-bold">TOTAL RESPONSES</Card.Header>
                    <Card.Content className="text-2xl font-bold">1.000</Card.Content>
                </Card>
                <Card className="bg-foreground text-white gap-6 p-10">
                    <Card.Header className="text-xs font-bold">ACTIVE CAMPAIGNS</Card.Header>
                    <Card.Content className="text-2xl font-bold">5</Card.Content>
                </Card>
            </div>
            <SearchField className="mb-4" name="primary-search" variant="primary">
                <SearchField.Group >
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search" />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            <div className="flex flex-col gap-4 mb-4">
                <SurveyManageItem />
                <SurveyManageItem />
                <SurveyManageItem />
                <SurveyManageItem />
                <SurveyManageItem />
            </div>
            <Pagination className="justify-center" size="lg">
                <Pagination.Content>
                    <Pagination.Item>
                        <Pagination.Previous>
                            <Pagination.PreviousIcon />
                            <span>Previous</span>
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
        </>
    );
};