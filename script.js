//answers

Set(4) { 1, 2, 3, 4 }

"ref"

[1, 2, 3]



Map(2) { [1, 2, 3] => false, [1, 2, 3] => false } }


function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length
}


hasDuplicate([1,3,2,1]) // true
hasDuplicate([1, 5, -1, 4]) // false


function vowelCount(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    const lowercasedStr = str.toLowerCase().split("")
    const vowelMap = new Map()
    lowercasedStr.forEach(char => {
        if (vowel.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1)
            } else {
                vowelMap.set(char, 1)
            }
        }
    });
    return vowelMap
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }