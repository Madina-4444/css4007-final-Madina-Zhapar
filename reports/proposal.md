# Project Proposal — Semester Week 10

## Project Title

AI Statistics Tutor

## Problem Description

Many students have difficulty understanding statistical concepts and preparing for statistics exams. They often spend significant time searching for explanations and creating practice quizzes. This project provides an AI-powered tutoring assistant that can explain statistical concepts and generate quizzes for self-study.

## Target Users

University students studying statistics, data analysis, and research methods.

## Selected Difficulty

C

## Expected Functionality

The application will:

- Explain statistical concepts.
- Search statistical learning materials.
- Generate quizzes about statistics topics.
- Answer general statistics questions.
- Validate user inputs.
- Handle tool failures and unavailable information.

## Proposed Functions

### search_statistics_topic(topic: string)

Purpose:
Searches statistical explanations from a local knowledge base.

Inputs:
- topic

Outputs:
- explanation text

Dependencies:
- statistics_notes.json(its example)

### generate_quiz(topic: string, question_count: integer)

Purpose:
Generates quiz questions for a selected topic.

Inputs:
- topic
- question_count

Outputs:
- multiple-choice questions

Dependencies:
- LLM API

### validate_input(user_input: string)

Purpose:
Checks whether user input is valid.

Inputs:
- user request

Outputs:
- validation result

Dependencies:
- none

## Proposed Agent Tools

### Tool 1: search_statistics_topic

Allows the LLM to retrieve explanations from the statistics knowledge base.

### Tool 2: generate_quiz

Allows the LLM to create practice quizzes based on user requests.

## Model Selection

OpenAI/OpenRouter deepseek(assumed)

## Architecture

User Request

↓

LLM

↓

Tool Selection

↓

Tool Execution

↓

Tool Result

↓

LLM

↓

Final Response

## Example Requests

1. Explain ANOVA in simple terms.

2. Generate a 5-question quiz about regression analysis.

3. What is a p-value?

## Evaluation Plan

The project will be evaluated using at least eight test cases:

1. Normal theory question.
2. Quiz generation.
3. Unknown topic.
4. Empty input.
5. Very long input.
6. Missing information.
7. Invalid arguments.
8. Tool failure.

## Weekly Milestones

### Week 10

Proposal and planning.

### Week 11

LLM integration and first successful API request.

### Week 12

Implementation of core functionality.

### Week 13

Tool registration and tool calling.

### Week 14

Agent workflow and logging.

### Week 15

Validation, reliability, and error handling.

### Week 16

Testing, evaluation, and improvements.

### Week 17

Final report and project defense.

For each function give its name, purpose, inputs, outputs, and dependencies. For C/A identify model-callable tools and their purpose; D may write “Not applicable — D level”. Give at least three example requests and milestones for Weeks 10–17.
