<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function index()
    {
    $moviesReponse = Http::get('https://api.themoviedb.org/3/discover/movie?api_key='. env('THEMOVIEDB_API_KEY') .'&&sort_by=' . request('grade', 'popularity') . '.desc&with_genres=' . request('genre') . '&year=' . request('year') . '&language=vi' . '&page=' . request('page') . '&watch_region=' . request('with_original_language'));
    $genresResponse = Http::get('https://api.themoviedb.org/3/genre/movie/list?api_key='. env('THEMOVIEDB_API_KEY') .'&language=vi');

        $genres = collect($genresResponse['genres'])->mapWithKeys(function ($genre) {
            return [$genre['id'] => $genre['name']];
        });

        $movies = collect($moviesReponse['results'])->map(function ($movie) {
            return collect($movie)->merge([
                'poster_path' =>  $movie['poster_path']
                    ? 'https://image.tmdb.org/t/p/w500/' . $movie['poster_path']
                    : 'https://via.placeholder.com/500x750',
                'release_date' => Carbon::parse($movie['release_date'])->format('Y')
            ]);
        });

        return inertia('Home', [
            'filters' => request()->only(['genres', 'countries', 'years']),
            'genres' => $genres,
            'movies' => [
                'data' => $movies,
                'links' => [
                    'first' => $moviesReponse['page'] > 1 ? route('home', ['page' => 1]) : null,
                    'last' => $moviesReponse['page'] < $moviesReponse['total_pages'] ? route('home', ['page' => $moviesReponse['total_pages']]) : null,
                    'prev' => $moviesReponse['page'] - 1 ? route('home', ['page' => $moviesReponse['page'] - 1]) : null,
                    'next' => $moviesReponse['page'] < $moviesReponse['total_pages'] ? route('home', ['page' => $moviesReponse['page'] + 1]) : null,
                ],
            ],
        ]);
    }
}
