<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Laravel</title>
    <link rel="stylesheet" href="{{ asset('frontend/css/bootstrap-reboot.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/bootstrap-grid.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/slider-radio.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/toastr.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/css/main.css') }}">
    <link rel="stylesheet" href="{{ mix('frontend/css/app.css') }}">
    <script src="{{ asset('frontend/js/manifest.js') }}"></script>
    <script src="{{ asset('frontend/js/vendor.js') }}"></script>
    <script src="{{ mix('frontend/js/app.js') }}" defer></script>
    @inertiaHead
</head>
<body>
@inertia
<script src="{{ asset('frontend/js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('frontend/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('frontend/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('frontend/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('frontend/js/select2.min.js') }}"></script>
<script src="{{ asset('frontend/js/slider-radio.js') }}"></script>
<script src="{{ asset('frontend/js/toastr.min.js') }}"></script>
<script src="{{ asset('frontend/js/main.js') }}"></script>
</body>
</html>
