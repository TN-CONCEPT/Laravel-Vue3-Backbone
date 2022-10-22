@php
    use Illuminate\Support\Facades\URL;
@endphp
        <!DOCTYPE html>
<html lang='en' class="smooth-scroll">
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <meta property="og:title" content="">
    <meta property="og:site_name" content="">
    <meta property="og:url" content="{{ URL::to('/') }}">
    <meta property="og:description" content="">
    <meta property="og:type" content="website">
    <meta property="og:image" content="{{ URL::to('storage/images/og-img.png') }}">

    @yield('vue-resources')
</head>
<body>
<div id='app'>
    @yield('vue-content')
</div>
@yield('vue-js')
</body>
</html>
