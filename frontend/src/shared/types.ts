export interface ActionResponse<T = undefined> {
	success: boolean;
	data?: T;
	zod_errors?: Record<string, string[] | undefined>;
	message: string;
}
