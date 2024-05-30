import { produceSSE } from "$lib/sse";

export function POST() {
	return produceSSE(["event0", "event1"]);
}
