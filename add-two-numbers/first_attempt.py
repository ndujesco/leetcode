def length_of_longest_substring(s: str) -> int:
    seen = {}
    longest_yet = 0
    pointer_position = 0

    for i in range(len(s)):
        if s[i] in seen and seen[s[i]] >= pointer_position:
            pointer_position = seen[s[i]] + 1

        longest_yet = max(longest_yet, i - pointer_position + 1)
        seen[s[i]] = i

    return longest_yet
