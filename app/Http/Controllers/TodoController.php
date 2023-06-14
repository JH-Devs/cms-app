<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();
        return response()->json($todos, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $todo = new Todo;
        $todo->content = $request->input('content');
        $todo->description = $request->input('description');
        $todo->created = now()->toDateString();
        $todo->deadline = $request->input('deadline');
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('public/images');
            $todo->image = Storage::url($path);
        }
        
        $todo->save();

        return response()->json(['message' => 'Úkol přidán'], 201);
    }
}
