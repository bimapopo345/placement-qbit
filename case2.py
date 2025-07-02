comments = [
    {
        "commentId": 1,
        "commentContent": "Hai",
        "replies": [
            {
                "commentId": 11,
                "commentContent": "Hai juga",
                "replies": [
                    {"commentId": 111, "commentContent": "Haai juga hai jugaa"},
                    {"commentId": 112, "commentContent": "Haai juga hai jugaa"}
                ]
            },
            {
                "commentId": 12,
                "commentContent": "Hai juga",
                "replies": [
                    {"commentId": 121, "commentContent": "Haai juga hai jugaa"}
                ]
            }
        ]
    },
    {
        "commentId": 2,
        "commentContent": "Halooo"
    }
]

def hitung_total_replies(comments):

    total = 0
    for comment in comments:
        total += 1
        if "replies" in comment:
            total += hitung_total_replies(comment["replies"])
    return total


print("Total Komentar : ", hitung_total_replies(comments))