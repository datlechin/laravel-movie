<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Laravel</title>
    <link rel="shortcut icon" href="{{ asset('frontend/img/favicon.png') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ mix('frontend/css/app.css') }}">
    @inertiaHead
</head>
<body>
    @inertia
    
    <script src="{{ mix('frontend/js/app.js') }}"></script>
</body>
</html>
