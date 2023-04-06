def machine_fun():
    insult_list = [
        'hate', 'pig', 'stupid', 'pathetic',
        'shut', 'fool', 'foolish', 'poor',
    ]

    sexual_violence_list = [
        'sexy', 'fuck', 'fucker', 'rape', 'female',
        'kill', 'pretty',
    ]

    shame_list = [
        'ugly', 'fat', 'bald', 'flabby', 'chubby',
        'little', 'small', 'smelly', 
    ]

    troll_list = [
        'haha', 'hahaha', 'small', 'insignificant',
        'useless', 'hell', 'imbecile', 'funny',
        'nobody', 'no', 'one', 'didnt', 'lovely', 'stop',
        'liar', 'lying', 'false', 'hard', 'harder',
        'seeker', 'cheap', 'shot', 'propaganda',
        'waste', 'wasting',
    ]

    positive_list = [
        'Congratulations', 'good', 'winning', 'nice',
        'won',
    ]

    text = input("enter text here: ").strip().split()
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

if __name__=="__main__":
    print(machine_fun())