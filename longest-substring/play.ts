

const lengthOfLongestSubstring = function(s: string) {
    const map = new Map()
    let longestYet = 0;
    let pointerPosition = 0


    for(let i = 0; i < s.length; i++) {
        
        if (map.has(s[i]) && map.get(s[i]) >= pointerPosition) {
            pointerPosition = map.get(s[i]) + 1;
        }

        longestYet = (i - pointerPosition + 1) > longestYet ? (i - pointerPosition + 1) : longestYet
        map.set(s[i], i)

    }

    return longestYet
};

console.log(lengthOfLongestSubstring("abcabcbb"));



