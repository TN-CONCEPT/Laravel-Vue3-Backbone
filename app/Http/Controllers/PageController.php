<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class PageController
{
    public function index(): View
    {
        return view('main-app');
    }
}