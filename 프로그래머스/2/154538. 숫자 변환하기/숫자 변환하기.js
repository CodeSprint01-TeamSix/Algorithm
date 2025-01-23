function solution(x, y, n) {
    if (x === y) return 0;

    let queue = new Set([x]);
    let visited = new Set([x]);
    let cnt = 0;

    while (queue.size > 0) {
        const nextQueue = new Set();

        for (const current of queue) {
            const nextValues = [current + n, current * 2, current * 3];

            for (const next of nextValues) {
                if (next > y || visited.has(next)) continue;
                if (next === y) return cnt + 1;

                visited.add(next);
                nextQueue.add(next);
            }
        }

        queue = nextQueue;
        cnt++;
    }

    return -1;
}
