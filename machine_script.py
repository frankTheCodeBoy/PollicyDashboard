def machine_fun(text):
    text = set(text.strip().split())

    insult_list = [
        'hate', 'pig', 'stupid', 'pathetic', 'devil',
        'shut', 'fool', 'foolish', 'poor', 'sick',
        'crazy', 'retard', 'retarded', 'bloody', 'reckless',
        'uncouth', 'deluded', 'shitty', 'shit', 'shithead',
        'mannerless', 'ungrateful', 'beggar', 'silent', 'quiet',
        'petty', 'imbecile', 'idle', 'cabbage', 'head', 'bastard',
        'stubborn', 'bugger', 'idiot', 'idiots', 'dummy', 'dumb',
        'kwenda', 'mchafu', 'potea', 'shenzi', 'shetani', 'mjinga',
        'kumbafu', 'pepo', 'chafu', 'nyamaza', 'kelele', 'ngombe', 'mbwa',
        'takataka', 'jambazi', 'nyani', 'mshamba', 'devil-worshipper', 'attention-seeker',
    ]

    sexual_violence_list = [
        'sexy', 'fuck', 'fucker', 'rape', 'female',
        'kill', 'pretty', 'dick', 'maggot', 'feeble', 'bitch',
        'tits', 'boobs', 'fucked', 'ass', 'arsehole', 'mama',
        'kuma', 'malaya', 'shoga', 'tombwa', 'katombwe', 'homo',
        'homosexual', 'mkundu', 'pussy', 
    ]

    shame_list = [
        'ugly', 'fat', 'bald', 'flabby', 'chubby',
        'little', 'small', 'smelly', 'old', 'midget',
        'mfupi', 'hauna', 'fukara', 'bandia', 'senye',
        'matako', 'masikini', 'kadogo', 'mdogo',
    ]

    troll_list = [
        'haha', 'hahaha', 'hahahaha', 'small', 'insignificant',
        'useless', 'hell', 'imbecile', 'funny',
        'nobody', 'no', 'one', 'didnt', 'lovely', 'stop',
        'liar', 'lying', 'false', 'hard', 'harder', 'waster',
        'seeker', 'cheap', 'shot', 'propaganda', 'out',
        'waste', 'wasting', 'unfriendly', 'tryhard',
        'hopeless', 'braggart', 'wishful', 'ashamed', 'shame',
        'religious', 'ungodly', 'hiding', 'hide', 'doom', 'losing',
        'clout', 'chaser', 'hopeless', 'leave', 'hater', 'loser',
        'go', 'away', 'kick', 'kicked', 'hahahaha', 'hahaha',
        'stop', 'doll', 'toka', 'nenda', 'ondoka', 'wewe', 'ovyo',
        'slayqueen', 'slayer', 'slay', 'homosapien', 'homosapiens',
        'nyanza', 'jaluo', 'phobia', 'gold-digger', 'lost', 'loser',
        'losing', 'beaten', 'seeker',
    ]

    positive_list = [
        'Congratulations', 'good', 'winning', 'nice',
        'won', 'play', 'cool', 'wise',
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

