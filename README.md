# The Mind Haven: TSA 2024

## Societal Need
**Presenter: Saketh Satti**

- According to the CDC, 4 in 10 students feel persistently sad and hopeless.
- Worse still, mental health issues hurt certain groups more than others. This includes LGBTQIA+, female, and racial minority students.
- Mental health issues plague students all around the world considering academic pressures, social dynamics, and personal growth.
- Journaling, meditation, etc. are good ways to deal with stress and anxiety.
- Therefore, we propose an app containing all these features with a user-friendly interface.
- List features: meditation timer, journaling, chatbot therapist, and mood surveys.


## Design Process
**Presenters: Rohan Arni and Aditya Choudhary**

### Brainstorming
- Group-led brainstorming sessions during the early phase of our project where ideas were proposed, discussed with the group, and then accepted or rejected
- Iterative-based design process after brainstorming, where initial ideas were continuously reviewed and reworked to make them as effective as possible for our application

- Examples:
- Mood Surveys
    - One of our group members suggested that we do mood surveys to help users keep track of how they are feeling.
    - As a group, we evaluated the idea based on feasibility, usefulness, and complexity
The idea was supported by our group members
- User Interface
    - We originally created the UI using a dark purple and orange hue and a flat navigation bar
    - We iterated through multiple designs, using user feedback from outside our group as well to come up with the final design that we have today: a lighter bluish color with a purple accent.


## Marketing Research
**Presenter: Rohan Arni**

- Our target audience is teenagers in the USA, due to the nature of our application. Students with the most need for mental health support are in their teens. Therefore, we segmented our audience to around 43,012,450 people. This is the number of people aged 10-19 in the US according to the US Census Bureau estimates.
- 87 percent of teens in the USA have an ‌iPhone‌, while 88 percent expect an iPhone‌ to be their next phone according to a survey from investment firm Piper Sandler.
- Therefore, we chose a tech stack to be better suited for iOS for our target audience. 
- Our app is original because our app is the first suited for students with a focus on mental health. - - Other apps don’t consolidate all of the features we offer, providing students with providing students with easy access to mental health.

## Tech Stack
**Presenter: Niyel Hassan**

- **React Native:** We used React Native to build the user interface. This allowed us to build our application in Javascript, a language our team was familiar and comfortable with, but also allowed us to get close to native performance (XCode and Swift). This also gave us the advantage of being cross-platform, so we can branch out into different market segments.

- **Firebase:** We used the google developer platform Firebase for the majority of our back-end operations. Firebase has great compatibility with React Native, making it an extremely smooth experience for the developers and the users alike. In order to create users, we used the Firebase authentication feature to allow us to create accounts and manage users. We used the Firestore database to store our user’s information. Firestore is a NoSQL document-based database, meaning that we can store information about users and features in collections of documents. 
```
Root
├── journals
│   └── [User ID]
│       └── journals
│           └── [Journal Entry ID]
│               ├── date: timestamp
│               ├── text: string
│               └── title: string
├── meditation_sessions
│   └── [User ID]
│       └── [Date]
│           └── [Session Entry ID]
│               ├── completedAt: timestamp
│               └── time: float
└── surveys
    └── [User ID]
        └── surveys
            └── [Survey Entry ID]
                ├── date: timestamp
                ├── stress: int
                ├── mood: int
                └── energy: int
```


## Coding Practices

- **Git:** We used Git for version control. This allowed us to revert changes and store completed versions of the application before moving on to test new features.
We stored the project on the GitHub repository.

- **Modular Design:** Because we used React Native, each page is represented as a component in a separate file. This allows us to treat our application as a modular system, where each component can be modified in an isolated environment with respect to the entire application.

- **Bug Testing:** In order to test for errors and bugs in our application, we ran edge cases on our program to see how each component would function. For example, we rigorously tested the meditation timer with fractional times and negative times to see if the timer would ever fail. Every time it failed, we went back and edited the component to make it more efficient.


## Features 	
### Authentication Flow - Rohan Arni
- Our application has a listener on the page stack. If the user is logged in, then the application is loaded. If the user isn’t logged in, then the authentication pages are loaded. 
- The user begins by being brought to a landing page and asked if they would like to sign in or log in. -The user can sign up by providing a username and email address. To sign in, the user can use the credentials they used to sign up.
- Once the authentication state changes, the listener changes the stack to the actual application pages.

### Dashboard - Raneesh Adulla
- The dashboard provides a summary of all the other pages. In order, the dashboard contains:
    - A bar graph showing meditation minutes over the last week.
    - Recent Journal entries
    - Recent mood surveys

### Meditation Timer - Saketh Satti and Niyel Hassan
- This page contains an easy-to-use meditation timer.
- At the top, there is a circular countdown timer, which serves as a visual representation of how much time is left.
- In the center of the countdown timer, there are several buttons (pause, play, reset) and an exact timer showing how much time is left in the current session.
- Before the timer starts, the user has to select the duration of the session. This can be done by tapping any of the buttons below the timer.
- These buttons contain specific times (e.g. 5 min, 10 min, and so on).
- Meditation data is sent to the database, which is displayed on the graph on the dashboard.

### AI Therapist Chatbot - Aditya Choudhary
- Symbolized by the chat icon, this page contains a simple user interface for a user to send a message.
Once the message is sent, our codebase sends a query via an Open AI API call. We then receive text generated by GPT3.5. Initially, the model is prompted to approximate a Therapist based on the following principles:
    - Target Users: Individuals seeking non-critical emotional support and guidance.
    - Empathetic Engagement: The chatbot should initiate conversations with a gentle, empathetic tone.
    - Active Listening Skills: The chatbot should reflect and paraphrase the user's statements, demonstrating active listening. 
    - Crisis Detection and Handling: The chatbot must recognize keywords or phrases indicating severe distress or a crisis situation.
    - Privacy Assurance: Remind users at the beginning of interactions that their privacy is respected but also clarify the limitations of privacy in digital communications, emphasizing that the chatbot is not a replacement for professional therapy.
    - Resource Provisioning: The chatbot should suggest additional resources, like articles, videos, and digital tools that could help the user understand and manage their mental health better.

### Journaling - Rohan Arni
- When the user first clicks on the journaling icon, they are led to a page that contains an option to create a new journal and a section with recent entries.
- Scrolling down, if the user has more entries than are currently shown, they can click on the “more” button. This expands the box and displays more entries.

### Mood Surveys - Raneesh Adulla
- The mood survey component of the app allows the user to express their emotional state.
- After creating a new survey, the user can use the slider to express their mood, energy, and stress levels. 

### Smaller features: Niyel Hassan
- Navigation bar
- Header
- User settings


