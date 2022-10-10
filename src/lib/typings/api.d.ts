export interface ServerResponseBase {
	request_id: string
}

export type ServerResponse<T extends Record<never, never>> =
	ServerResponseBase & T
