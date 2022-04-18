<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class WatchController extends Controller
{
    public function index(Request $request)
    {
        $response = Http::get('https://api.themoviedb.org/3/movie/' . $request->slug . '?api_key=' . env('THEMOVIEDB_API_KEY').'&language=vi-VN&append_to_response=videos');

        $movie = $response->json();
        $movie['backdrop_path'] = $movie['backdrop_path'] ? 'https://image.tmdb.org/t/p/w1280' . $movie['backdrop_path'] : null;
        $movie['poster_path'] = $movie['poster_path'] ? 'https://image.tmdb.org/t/p/w1280' . $movie['poster_path'] : null;

        return Inertia::render('Watch/Index', [
            'movie' => $movie,
        ]);
    }
}
