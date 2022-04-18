<?php

namespace App\Http\Controllers;

use App\Models\Post;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')
            ->published()
            ->latest()
            ->paginate();

        return inertia('Blog/Index', compact('posts'));
    }

    public function show($slug)
    {
        $post = Post::with('category')
            ->where('slug', $slug)
            ->firstOrFail();

        return inertia('Blog/Show', compact('post'));
    }
}
