<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Laravel</title>
    <link rel="stylesheet" href="{{ mix('frontend/css/app.css') }}">
    @inertiaHead
</head>
<body>
@inertia
<script src="{{ mix('frontend/js/app.js') }}" defer></script>
<script src="{{ asset('frontend/js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('frontend/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('frontend/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('frontend/js/main.js') }}"></script>
</body>
</html>
