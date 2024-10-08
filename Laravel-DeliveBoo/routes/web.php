<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\PlateController;
use App\Http\Controllers\Admin\RestaurantController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth', 'verified')->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::get('/', [RestaurantController::class, 'index'])->name('index');
        Route::resource('restaurants', RestaurantController::class);
        Route::resource('plates', PlateController::class);
        Route::resource('orders', AdminOrderController::class);
    });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
