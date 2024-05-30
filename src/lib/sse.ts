import { produce, source } from "sveltekit-sse";

export function produceSSE(eventNames: string[]) {
    return produce(({ emit }) => {
        for (const eventName of eventNames) {
            const data = {"time": Date.now()};
            emit(eventName, JSON.stringify(data));
        }
    });
}

export function sourceSSE(route: string, eventNames: string[]) {
    for (const eventName of eventNames) {
        const sse = source(route).select(eventName).json();
        sse.subscribe(console.log);
    }
}
