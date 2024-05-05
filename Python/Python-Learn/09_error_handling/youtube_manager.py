import json

# file = open('youtube.txt', 'w')

# try:
#     file.write('chai aur code')
# finally:
#     file.close()

# with open('youtube.txt', 'w') as file:
#     file.write('chai aur python')


def load_data():
    try:
        with open('youtube.txt', 'r') as file:
            test = json.load(file)
            # print(type(test))
            return test
    except FileNotFoundError:
        return []


def save_data_helper(videos):
    with open('youtube.txt', 'w') as file:
        json.dump(videos, file)


def list_all_videos(videos):
    print("\n")
    print("*" * 70)
    for index, video in enumerate(videos, start=1):
        print(f"{index}. {video['name']}, Duration: {video['time']} ")
    print("\n")
    print("*" * 70)


def add_video(videos):
    name = input("Enter video name:")
    time = input("Enter video time:")
    videos.append({'name': name, "time": time})
    save_data_helper(videos)
# [{name: "", time: ""}, {}]


def update_video(videos):
    list_all_videos(videos)
    index = int(input("Enter the video number to update "))
    if 1 <= index <= len(videos):
        name = input("Enter the new video name")
        time = input("Enter the new video time")
        videos[index-1] = {'name': name, 'time': time}
        save_data_helper(videos)
    else:
        print("Invaild index selected")


def delete_video(videos):
    list_all_videos(videos)
    index = int(input("Enter the video number to deleted "))

    if 1 <= index <= len(videos):
        del videos[index-1]
        save_data_helper(videos)
    else:
        print("Invaild video index selected")


def main():
    videos = load_data()

    while True:
        print("\n Youtube manager | choose an option ")
        print("1. list all youtube videos ")
        print("2. add a youtube videos ")
        print("3. update a youtube videos details ")
        print("4. delete a youtube app ")
        print('5. exit the app ')
        choice = input("Enter your choice ")
        # print(videos)

        match choice:
            case '1':
                list_all_videos(videos)
            case '2':
                add_video(videos)
            case '3':
                update_video(videos)
            case '4':
                delete_video(videos)
            case '5':
                break
            case _:
                print("invaild choice")


if __name__ == "__main__":
    main()
