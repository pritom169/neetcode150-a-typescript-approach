function groupAnagrams(strs: string[]): string[][] {
    const wordMap = new Map<string, string[]>();

    for (const word of strs){
        const key = word.split("").sort().join("");
        const value = wordMap.get(key)

        if (value) {
            value.push(word)
        } else {
            wordMap.set(key, [word])
        }
    }

    return Array.from(wordMap.values())
};