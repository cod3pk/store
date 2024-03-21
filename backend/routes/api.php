<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

/**
 * Product Routes
 */
Route::prefix( 'products' )->group( function () {
    Route::get( '/', [ ProductsController::class, 'index' ] );
    Route::post( '/', [ ProductsController::class, 'store' ] );
    Route::get( '/{id}', [ ProductsController::class, 'show' ] );
    Route::put( '/{id}', [ ProductsController::class, 'update' ] );
    Route::delete( '/{id}', [ ProductsController::class, 'destroy' ] );
} );
