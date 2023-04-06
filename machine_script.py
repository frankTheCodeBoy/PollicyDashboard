def machine_fun(text):
    text = set(text.strip().split())

    insult_list = [
        'hate', 'pig', 'stupid', 'pathetic',
        'shut', 'fool', 'foolish', 'poor', 'sick',
        'crazy', 'retard', 'retarded', 'bloody', 'reckless',
        'uncouth', 'deluded', 'shitty', 'shit', 'shithead',
        'mannerless', 'ungrateful', 'beggar', 'silent', 'quiet',
        'petty', 'imbecile', 'idle', 'cabbage', 'head',
        'stubborn', 'bugger',
    ]

    sexual_violence_list = [
        'sexy', 'fuck', 'fucker', 'rape', 'female',
        'kill', 'pretty', 'dick', 'maggot', 'feeble',
    ]

    shame_list = [
        'ugly', 'fat', 'bald', 'flabby', 'chubby',
        'little', 'small', 'smelly', 'old', 'midget',
    ]

    troll_list = [
        'haha', 'hahaha', 'small', 'insignificant',
        'useless', 'hell', 'imbecile', 'funny',
        'nobody', 'no', 'one', 'didnt', 'lovely', 'stop',
        'liar', 'lying', 'false', 'hard', 'harder',
        'seeker', 'cheap', 'shot', 'propaganda',
        'waste', 'wasting', 'unfriendly', 'tryhard',
        'hopeless', 'braggart', 'wishful', 'ashamed', 'shame',
        'religious', 'ungodly', 'hiding', 'hide', 'doom',
        'clout', 'chaser', 'hopeless', 'leave', 'hater',
        'go', 'away', 'kick', 'kicked', 'hahahaha', 'hahaha',
        'stop', 'doll', 
    ]

    positive_list = [
        'Congratulations', 'good', 'winning', 'nice',
        'won', 'play', 'cool',
    ]

    message = "Non-Violent Comment"

    for string in text:
        if string in insult_list:
            message = "Insult and Hate Speech"
        elif string in sexual_violence_list:
            message = "Sexual Violence and Harrassment"
        elif string in shame_list:
            message = "Body Shaming"
        elif string in troll_list:
            message = "Trolling Comment"
        elif string in positive_list:
            message = "Non-Violent Comment"
    
    return message

