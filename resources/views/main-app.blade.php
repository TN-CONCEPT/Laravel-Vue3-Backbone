@extends('layout')
@section('vue-resources')
    @vite('resources/css/app.css')
@endsection

@section('vue-content')
    <router-view></router-view>
@endsection

@section('vue-js')
    @vite('resources/js/app.js')
@endsection
