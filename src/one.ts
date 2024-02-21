function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
    // Create a grid to store minimum energy required to reach each position
    const dp: number[] = new Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[start] = 0; // Starting position requires 0 energy

    // Sort shops and stations
    shops.sort((a, b) => a - b);
    stations.sort((a, b) => a - b);

    // Update energy required for shops
    for (const shop of shops) {
        for (let i = start; i <= shop; i++) {
            dp[shop] = Math.min(dp[shop], dp[i] + (shop - i));
        }
    }

    // Update energy required for stations
    for (const station of stations) {
        for (let i = start; i <= station; i++) {
            dp[station] = Math.min(dp[station], dp[i]);
        }
    }

    // Update energy required for the target
    for (let i = start; i <= target; i++) {
        dp[target] = Math.min(dp[target], dp[i] + (target - i));
    }

    return dp[target];
}

// Test the function
console.log(minEnergy(0, [4, 9], [3, 6, 8], 11)); // Output should be 8
