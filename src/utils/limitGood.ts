
// ip毎のgoodをマッピング
export const GOOD_LIMIT = 10;
export const RESET_INTERVAL = 60 * 24 * 1000;
export const requestsPerMinute: Record<string, { count: number; lastReset: number }> = {};

export async function limitGood(clientIP: string) {
	if (!requestsPerMinute[clientIP]) {
		requestsPerMinute[clientIP] = { count: 0, lastReset: Date.now() };
	}
	if (Date.now() - requestsPerMinute[clientIP].lastReset > RESET_INTERVAL) {
		requestsPerMinute[clientIP] = { count: 0, lastReset: Date.now() };
	}
	requestsPerMinute[clientIP].count++;
}
