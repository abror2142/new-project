<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Changed NOW Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
