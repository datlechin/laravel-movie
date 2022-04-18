<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        $movies = [];

        return inertia('Home', [
            'filters' => request()->only(['genres', 'countries', 'years']),
            'movies' => $movies,
        ]);
    }
}
