import { Button, Pagination, SearchField, Separator } from "@heroui/react";
import { Layers, Plus } from "lucide-react";

import { SurveyCard } from "../features/home/components/SurveyCard";

export const Home = () => {
    return (
        <div className="grid grid-cols-[300px_1fr] gap-8 px-8 pt-8">
            <aside>
                <div className="flex justify-start items-center gap-4">
                    <div className="bg-foreground rounded-2xl p-3">
                        <Layers className="text-white" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Quick Survey</p>
                        <p className="text-xs text-muted font-bold">THE ABSOLUTE CREATOR</p>
                    </div>
                </div>
                <Separator className="my-4" />
                <Button className="text-white rounded-xl" size="lg" fullWidth>
                    Create Survey
                    <Plus />
                </Button>
            </aside>
            <main>
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
                    <SurveyCard />
                    <SurveyCard />
                    <SurveyCard />
                    <SurveyCard />
                    <SurveyCard />
                    <SurveyCard />
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
            </main>
        </div >
    );
};