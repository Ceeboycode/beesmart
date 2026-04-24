# Question Count Feature Implementation

## Overview
Added functionality allowing users to specify how many questions they want to create for a quiz, with a maximum limit of 60 questions. When a user sets the question count, placeholder questions are automatically pre-created.

## Changes Made

### 1. Database Migration
- **File**: `database/migrations/2026_04_24_141000_add_question_count_to_quizzes_table.php`
- Adds `question_count` column to `quizzes` table
- Type: `unsignedSmallInteger`, nullable
- Max value enforced at application level: 60

### 2. Backend Models
- **File**: `app/Models/Quiz.php`
- Added `question_count` to `$fillable` array
- Added `question_count` to `$casts` as integer

### 3. Form Validation
- **Files**: `app/Http/Requests/StoreQuizRequest.php` and `UpdateQuizRequest.php`
- Added validation rule: `'question_count' => ['nullable', 'integer', 'min:1', 'max:60']`
- Ensures values are between 1-60 or null

### 4. Controller
- **File**: `app/Http/Controllers/QuizController.php`
- Updated `store()` method to accept and save `question_count`
- Updated `update()` method to accept and save `question_count`

### 5. Vue Frontend

#### Edit Page
- **File**: `resources/js/pages/Quiz/Edit.vue`
- Added `question_count: number | null` to quiz prop type definition

#### Builder Component
- **File**: `resources/js/pages/Quiz/Builder.vue`
- **Type Definitions**:
  - Added `question_count` to `QuizFormData` type
  - Added `question_count` to quiz prop type definition

- **Computed Properties**:
  - Added `questionsFilledIn` to display count of questions with text content

- **Methods**:
  - Added `handleQuestionCountChange()` function:
    - Pre-creates placeholder questions when increasing count
    - Removes questions when decreasing count
    - Maintains existing questions

- **UI**:
  - Added "Number of questions" section in quiz details card
  - Toggle button to enable/disable question count requirement
  - Slider input (1-60) and number input for setting count
  - Displays progress: "X/Y questions filled in"
  - Moved "Attempt limit" section after question count

- **Form Submission**:
  - Updated form transform to include `question_count` in submission

### 6. Tests
- **File**: `tests/Feature/QuizQuestionCountTest.php` (new)
- Tests for storing quiz with question_count
- Tests for updating question_count
- Validation tests for min/max values
- Test for null value (unlimited questions)

## Features

### User Experience
1. **Optional Feature**: Users can toggle question count requirement on/off
2. **Auto-Generate Placeholders**: Setting a question count creates empty slots
3. **Progress Tracking**: Shows "X/Y questions filled in"
4. **Range Selection**: Users can set 1-60 questions via slider or number input
5. **Flexibility**: Users can still add/remove questions as needed

### Behavior
- When a user sets question count to (e.g., 25):
  - If they have 10 questions, 15 empty questions are added
  - If they have 30 questions, the last 5 are removed
  - All existing question content is preserved

- When question count is disabled (null):
  - Users can add/remove questions freely
  - No validation on question count

## Validation
- Server-side validation ensures 1 <= question_count <= 60
- Null values allowed (means no specific count requirement)
- Frontend validation in sliders/inputs enforces same constraints

## Database Field
- Column: `question_count` on `quizzes` table
- Type: `unsignedSmallInteger` (0-65535)
- Nullable: Yes
- Comment: "Target number of questions for this quiz (max 60)"
