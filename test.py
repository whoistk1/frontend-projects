def isAnagram(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """

    ssorted = []
    tsorted = []

    for i in s:
        ssorted.append(i)
    for i in t:
        tsorted.append(i)
    ssorted.sort()
    tsorted.sort()
    
    print(ssorted)
    print(tsorted)


isAnagram("anagram", "nagaram")
