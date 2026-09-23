export const QUESTIONS = [
  {
    id: 1,
    question: "Your friends cancel plans at the last minute.",
    type: "multiple",
    choices: [
      { text: "Honestly? Netflix time 😭", score: { energy: 2, social: 1 } },
      { text: "Who else is free?", score: { energy: 4, social: 4 } },
      { text: "I'm going out anyway.", score: { energy: 4, social: 1 } },
      { text: "I'm pretending I'm not bothered.", score: { energy: 2, social: 2 } }
    ]
  },
  {
    id: 2,
    question: "You're at a party where you know literally nobody. What's the move?",
    type: "multiple",
    choices: [
      { text: "Befriend the dog/cat immediately.", score: { social: 2, curiosity: 3 } },
      { text: "Work the room, meet everyone.", score: { social: 5, energy: 5 } },
      { text: "Find one person and have a deep conversation.", score: { social: 3, curiosity: 4 } },
      { text: "Help the host with something.", score: { social: 2, independence: 3 } }
    ]
  },
  {
    id: 3,
    question: "When it comes to planning, you usually...",
    type: "multiple",
    choices: [
      { text: "Have a detailed plan weeks ahead.", score: { structure: 5, spontaneity: 1 } },
      { text: "Plan loosely, see what happens.", score: { structure: 2, spontaneity: 4 } },
      { text: "Plan only the essentials.", score: { structure: 3, spontaneity: 3 } },
      { text: "What's planning? YOLO.", score: { structure: 1, spontaneity: 5 } }
    ]
  },
  {
    id: 4,
    question: "Someone disagrees with you. You...",
    type: "multiple",
    choices: [
      { text: "Defend your position passionately.", score: { independence: 4, communication: 4 } },
      { text: "Listen and maybe change your mind.", score: { independence: 2, curiosity: 4 } },
      { text: "Agree to keep the peace.", score: { independence: 1, social: 4 } },
      { text: "Find data to settle it.", score: { curiosity: 4, independence: 3 } }
    ]
  },
  {
    id: 5,
    question: "Your ideal weekend is...",
    type: "multiple",
    choices: [
      { text: "Trying three new restaurants and visiting that new gallery.", score: { curiosity: 5, experience: 4 } },
      { text: "With close friends, low-key vibes.", score: { social: 4, energy: 2 } },
      { text: "Finishing projects I've been procrastinating on.", score: { structure: 3, risk: 1 } },
      { text: "Something spontaneous that just happens.", score: { spontaneity: 5 } }
    ]
  },
  {
    id: 6,
    question: "When stressed, you tend to...",
    type: "multiple",
    choices: [
      { text: "Workout or go for a run.", score: { energy: 4, independence: 3 } },
      { text: "Talk it out with friends.", score: { social: 5, emotional: 3 } },
      { text: "Make a spreadsheet to organize it.", score: { structure: 4, rationality: 4 } },
      { text: "Distract yourself with hobbies.", score: { creativity: 4, independence: 3 } }
    ]
  },
  {
    id: 7,
    question: "How would your friends describe you?",
    type: "multiple",
    choices: [
      { text: "The one who makes everyone laugh.", score: { social: 5, energy: 4 } },
      { text: "The one who actually listens.", score: { emotional: 4, curiosity: 3 } },
      { text: "The one who gets things done.", score: { structure: 4, independence: 4 } },
      { text: "The one with wild ideas.", score: { creativity: 5, spontaneity: 4 } }
    ]
  },
  {
    id: 8,
    question: "You've got a huge project due. Do you...",
    type: "multiple",
    choices: [
      { text: "Start immediately and work methodically.", score: { structure: 5, risk: 1 } },
      { text: "Wait until the deadline is close for that rush.", score: { spontaneity: 4, risk: 3 } },
      { text: "Start, get distracted, start again.", score: { spontaneity: 3, focus: 1 } },
      { text: "Collaborate with others.", score: { social: 4, creativity: 3 } }
    ]
  },
  {
    id: 9,
    question: "In conversations, you mostly...",
    type: "multiple",
    choices: [
      { text: "Do most of the talking.", score: { social: 5, communication: 5 } },
      { text: "Listen and ask questions.", score: { curiosity: 5, communication: 3 } },
      { text: "Say what you mean and nothing more.", score: { independence: 4, communication: 3 } },
      { text: "Share if you trust them.", score: { emotional: 3, social: 2 } }
    ]
  },
  {
    id: 10,
    question: "If you had a random free day, you'd...",
    type: "multiple",
    choices: [
      { text: "Have a dozen plans before noon.", score: { energy: 5, organization: 4 } },
      { text: "Sleep in and see what feels right.", score: { spontaneity: 5, energy: 2 } },
      { text: "Catch up on something important to you.", score: { independence: 4, focus: 4 } },
      { text: "Spend time with people you care about.", score: { social: 5, emotional: 4 } }
    ]
  },
  {
    id: 11,
    question: "When trying something new, you feel...",
    type: "multiple",
    choices: [
      { text: "Excited and ready to go.", score: { risk: 5, energy: 5 } },
      { text: "Nervous but curious.", score: { risk: 2, curiosity: 4 } },
      { text: "Like you need more information first.", score: { rationality: 4, risk: 1 } },
      { text: "Only if friends are doing it too.", score: { social: 4, risk: 2 } }
    ]
  },
  {
    id: 12,
    question: "Your biggest strength is probably your...",
    type: "multiple",
    choices: [
      { text: "Ability to make people feel comfortable.", score: { emotional: 5, social: 4 } },
      { text: "Problem-solving creativity.", score: { creativity: 5, curiosity: 4 } },
      { text: "Reliability and follow-through.", score: { structure: 5, independence: 4 } },
      { text: "Adaptability to anything.", score: { spontaneity: 4, emotional: 3 } }
    ]
  }
];
