<?php

use App\Models\Category;
use App\Models\Quiz;
use App\Models\User;

// ── store ──────────────────────────────────────────────────────────────────────

test('authenticated user can create a category', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('categories.store'), ['name' => 'Science'])
        ->assertRedirect();

    expect(Category::where('name', 'Science')->where('created_by', $user->id)->exists())->toBeTrue();
});

test('guest cannot create a category', function () {
    $this->post(route('categories.store'), ['name' => 'Science'])
        ->assertRedirect(route('login'));
});

test('category name is required on store', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('categories.store'), ['name' => ''])
        ->assertSessionHasErrors('name');
});

// ── update ─────────────────────────────────────────────────────────────────────

test('owner can rename a category', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'Old Name', 'created_by' => $user->id]);

    $this->actingAs($user)
        ->put(route('categories.update', $category), ['name' => 'New Name'])
        ->assertRedirect();

    expect($category->fresh()->name)->toBe('New Name');
});

test('non-owner cannot rename a category', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $category = Category::create(['name' => 'Mine', 'created_by' => $owner->id]);

    $this->actingAs($other)
        ->put(route('categories.update', $category), ['name' => 'Hijacked'])
        ->assertForbidden();
});

// ── destroy ────────────────────────────────────────────────────────────────────

test('owner can delete a category', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'Deletable', 'created_by' => $user->id]);

    $this->actingAs($user)
        ->delete(route('categories.destroy', $category))
        ->assertRedirect();

    expect(Category::find($category->id))->toBeNull();
});

test('non-owner cannot delete a category', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $category = Category::create(['name' => 'Protected', 'created_by' => $owner->id]);

    $this->actingAs($other)
        ->delete(route('categories.destroy', $category))
        ->assertForbidden();

    expect(Category::find($category->id))->not->toBeNull();
});

// ── reorder ────────────────────────────────────────────────────────────────────

test('owner can reorder quizzes within a category', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'Ordered', 'created_by' => $user->id]);

    $quizA = Quiz::factory()->for($user, 'creator')->create(['category_id' => $category->id]);
    $quizB = Quiz::factory()->for($user, 'creator')->create(['category_id' => $category->id]);

    $this->actingAs($user)
        ->post(route('categories.reorder', $category), ['quiz_ids' => [$quizB->id, $quizA->id]])
        ->assertRedirect();

    expect($quizB->fresh()->sort_order)->toBe(0);
    expect($quizA->fresh()->sort_order)->toBe(1);
});

test('non-owner cannot reorder quizzes', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $category = Category::create(['name' => 'Guarded', 'created_by' => $owner->id]);

    $this->actingAs($other)
        ->post(route('categories.reorder', $category), ['quiz_ids' => []])
        ->assertForbidden();
});

// ── assign-category ────────────────────────────────────────────────────────────

test('quiz owner can assign a category to a quiz', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'History', 'created_by' => $user->id]);
    $quiz = Quiz::factory()->for($user, 'creator')->create(['category_id' => null]);

    $this->actingAs($user)
        ->patch(route('quizzes.assign-category', $quiz), ['category_id' => $category->id])
        ->assertRedirect();

    expect($quiz->fresh()->category_id)->toBe($category->id);
});

test('quiz owner can remove a category from a quiz', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'History', 'created_by' => $user->id]);
    $quiz = Quiz::factory()->for($user, 'creator')->create(['category_id' => $category->id]);

    $this->actingAs($user)
        ->patch(route('quizzes.assign-category', $quiz), ['category_id' => null])
        ->assertRedirect();

    expect($quiz->fresh()->category_id)->toBeNull();
});

test('non-owner cannot assign a category to a quiz', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $category = Category::create(['name' => 'History', 'created_by' => $owner->id]);
    $quiz = Quiz::factory()->for($owner, 'creator')->create(['category_id' => null]);

    $this->actingAs($other)
        ->patch(route('quizzes.assign-category', $quiz), ['category_id' => $category->id])
        ->assertForbidden();
});
