import { Pagination, SearchField } from "@heroui/react";

import { SurveyPreviewItem } from "../features/survey/components/SurveyPreviewItem";

export const Home = () => {
    return (
        <>
            <p className="text-xs text-muted font-bold mb-2">CURATED INSIGHTS</p>
            <h1 className="text-5xl font-bold mb-8">Discovery Feed</h1>
            <SearchField className="mb-4" name="primary-search" variant="primary">
                <SearchField.Group >
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search" />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <SurveyPreviewItem />
                <SurveyPreviewItem />
                <SurveyPreviewItem />
                <SurveyPreviewItem />
                <SurveyPreviewItem />
                <SurveyPreviewItem />
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