<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Quiz;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'icon' => ['nullable', 'string', 'max:20'],
            'description' => ['nullable', 'string', 'max:500'],
        ]);

        Category::create([
            'name' => trim($data['name']),
            'icon' => $data['icon'] ?? null,
            'description' => $data['description'] ?? null,
            'created_by' => $request->user()->id,
        ]);

        return back()->with('success', 'Category created.');
    }

    public function update(Request $request, Category $category): RedirectResponse
    {
        abort_unless($category->created_by === $request->user()->id, 403);

        $data = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'icon' => ['nullable', 'string', 'max:20'],
            'description' => ['nullable', 'string', 'max:500'],
        ]);

        $category->update([
            'name' => trim($data['name']),
            'icon' => $data['icon'] ?? null,
            'description' => $data['description'] ?? null,
        ]);

        return back()->with('success', 'Category updated.');
    }

    public function destroy(Request $request, Category $category): RedirectResponse
    {
        abort_unless($category->created_by === $request->user()->id, 403);

        $category->delete();

        return back()->with('success', 'Category deleted.');
    }

    public function reorder(Request $request, Category $category): RedirectResponse
    {
        abort_unless($category->created_by === $request->user()->id, 403);

        $data = $request->validate([
            'quiz_ids' => ['required', 'array'],
            'quiz_ids.*' => ['integer'],
        ]);

        DB::transaction(function () use ($data, $category) {
            foreach ($data['quiz_ids'] as $index => $quizId) {
                Quiz::where('id', $quizId)
                    ->where('category_id', $category->id)
                    ->update(['sort_order' => $index]);
            }
        });

        return back();
    }
}
