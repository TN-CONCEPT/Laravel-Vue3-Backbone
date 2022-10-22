@extends('layout')
@section('vue-resources')
    @vite('resources/css/app.scss')
@endsection

@section('vue-content')
    <router-view></router-view>
@endsection

@section('vue-js')
    @vite('resources/js/app.ts')
@endsection
